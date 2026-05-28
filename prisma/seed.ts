import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create production tenant
  const tenant = await prisma.tenant.upsert({
    where: { id: "axis" },
    update: {},
    create: {
      id: "axis",
      name: "AXIS",
      businessName: "AXIS Comércio Geral S.A.",
      ruc: "80012345-1",
      tradeName: "AXIS",
      establishment: "001",
      emissionPoint: "001",
      address: "Asunción, Paraguay",
      economicActivity: "Comercio General",
    },
  });

  // Create SOVEREIGN user
  const hashedPassword = await hash("admin123", 12);
  const user = await prisma.user.upsert({
    where: { email: "admin@axis.erp" },
    update: {},
    create: {
      email: "admin@axis.erp",
      name: "Admin",
      password: hashedPassword,
      role: "SOVEREIGN",
      tenantId: tenant.id,
    },
  });

  // Create OPERATOR user
  await prisma.user.upsert({
    where: { email: "operator@axis.erp" },
    update: {},
    create: {
      email: "operator@axis.erp",
      name: "Operador",
      password: await hash("operator123", 12),
      role: "OPERATOR",
      tenantId: tenant.id,
    },
  });

  // Create chart of accounts
  const accounts = [
    { code: "1.1.01", namePt: "Caixa", nameEs: "Caja", type: "ASSET" as const },
    { code: "1.1.02", namePt: "Bancos", nameEs: "Bancos", type: "ASSET" as const },
    { code: "1.2.01", namePt: "Clientes", nameEs: "Clientes", type: "ASSET" as const },
    { code: "1.2.02", namePt: "Estoque", nameEs: "Inventario", type: "ASSET" as const },
    { code: "2.1.01", namePt: "Fornecedores", nameEs: "Proveedores", type: "LIABILITY" as const },
    { code: "2.2.01", namePt: "IVA Crédito", nameEs: "IVA Crédito", type: "LIABILITY" as const },
    { code: "2.2.02", namePt: "IVA Débito", nameEs: "IVA Débito", type: "LIABILITY" as const },
    { code: "3.1.01", namePt: "Capital Social", nameEs: "Capital Social", type: "EQUITY" as const },
    { code: "4.1.01", namePt: "Receita de Vendas", nameEs: "Ingresos por Ventas", type: "REVENUE" as const },
    { code: "5.1.01", namePt: "Custo das Mercadorias", nameEs: "Costo de Mercancías", type: "EXPENSE" as const },
    { code: "5.2.01", namePt: "Despesas Operacionais", nameEs: "Gastos Operativos", type: "EXPENSE" as const },
  ];

  for (const account of accounts) {
    await prisma.account.upsert({
      where: { tenantId_code: { tenantId: tenant.id, code: account.code } },
      update: {},
      create: {
        ...account,
        tenantId: tenant.id,
      },
    });
  }

  // Create default permissions for SOVEREIGN (all enabled)
  const permissionActions = [
    "dashboard:read", "customers:read", "customers:write", "customers:delete",
    "suppliers:read", "suppliers:write", "suppliers:delete",
    "products:read", "products:write", "products:delete",
    "invoices:read", "invoices:write", "invoices:delete",
    "inventory:read", "inventory:write",
    "accounting:read", "accounting:write",
    "reports:read",
    "settings:read", "settings:write",
    "users:manage",
  ];

  for (const action of permissionActions) {
    await prisma.permission.upsert({
      where: {
        action_role_tenantId: {
          action,
          role: "SOVEREIGN",
          tenantId: tenant.id,
        },
      },
      update: {},
      create: {
        action,
        role: "SOVEREIGN",
        tenantId: tenant.id,
      },
    });
    // Also grant most permissions to ADMIN
    if (!action.includes("delete") && action !== "users:manage") {
      await prisma.permission.upsert({
        where: {
          action_role_tenantId: {
            action,
            role: "ADMIN",
            tenantId: tenant.id,
          },
        },
        update: {},
        create: {
          action,
          role: "ADMIN",
          tenantId: tenant.id,
        },
      });
    }
  }

  // Create sample exchange rate
  await prisma.exchangeRate.create({
    data: {
      tenantId: tenant.id,
      ratePYGtoUSD: 7800,
      ratePYGtoBRL: 1350,
      source: "BCP_API",
      isManual: false,
    },
  });

  console.log("Seed completed successfully!");
  console.log(`  Tenant: ${tenant.name} (${tenant.id})`);
  console.log(`  Admin: admin@axis.erp / admin123`);
  console.log(`  Operator: operator@axis.erp / operator123`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
