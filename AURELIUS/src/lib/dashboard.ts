'use server'

import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function getDashboardStats(dateRange?: { start?: Date; end?: Date }) {
  const session = await auth();
  if (!session?.user?.tenantId) throw new Error("Tenant nao encontrado");
  const tenantId = session.user.tenantId;

  const [fields, seasons, fleet, lowStock] = await Promise.all([
    // Total Cultivated Area (Sum of active Field area in hectares)
    prisma.field.aggregate({
      where: { tenantId, status: "active" },
      _sum: { areaHectares: true },
    }),
    // Active Seasons (Count of active crop seasons)
    prisma.cropSeason.count({
      where: { tenantId, status: "active" },
    }),
    // Fleet Size (Count of Machinery records)
    prisma.machinery.count({
      where: { tenantId },
    }),
    // Low Stock Inputs (Count of active products where currentStock <= minStock)
    prisma.$queryRaw<[{ count: bigint }]>`
      SELECT COUNT(*)::bigint as count FROM "Product"
      WHERE "tenantId" = ${tenantId} AND "isActive" = true AND "currentStock" <= "minStock"
    `.then((r) => Number(r[0]?.count ?? 0)),
  ]);

  return {
    totalArea: Number(fields._sum.areaHectares || 0),
    activeSeasons: seasons,
    fleetSize: fleet,
    lowStockAlerts: lowStock,
  };
}

export async function getTrendData(dateRange?: { start?: Date; end?: Date }) {
  const session = await auth();
  if (!session?.user?.tenantId) throw new Error("Tenant nao encontrado");
  const tenantId = session.user.tenantId;

  const startDate = dateRange?.start || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const endDate = dateRange?.end || new Date();

  const invoices = await prisma.commercialInvoice.findMany({
    where: { tenantId, status: "APPROVED", issuedAt: { gte: startDate, lte: endDate } },
    orderBy: { issuedAt: "asc" },
    select: { issuedAt: true, totalAmount: true },
  });

  const grouped: Record<string, number> = {};
  for (const inv of invoices) {
    const date = inv.issuedAt.toISOString().split("T")[0];
    grouped[date] = (grouped[date] || 0) + Number(inv.totalAmount);
  }

  return Object.entries(grouped).map(([date, total]) => ({ date, total }));
}

export async function getTopProducts(dateRange?: { start?: Date; end?: Date }, limit = 5) {
  const session = await auth();
  if (!session?.user?.tenantId) throw new Error("Tenant nao encontrado");
  const tenantId = session.user.tenantId;

  const startDate = dateRange?.start || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const endDate = dateRange?.end || new Date();

  const items = await prisma.invoiceItem.findMany({
    where: {
      commercialInvoice: { tenantId, status: "APPROVED", issuedAt: { gte: startDate, lte: endDate } },
    },
    include: { product: true },
  });

  const grouped: Record<string, { name: string; quantity: number; revenue: number }> = {};
  for (const item of items) {
    if (!item.product) continue;
    const existing = grouped[item.product.id] || { name: item.product.name, quantity: 0, revenue: 0 };
    existing.quantity += Number(item.quantity);
    existing.revenue += Number(item.totalPrice);
    grouped[item.product.id] = existing;
  }

  return Object.values(grouped)
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, limit);
}
