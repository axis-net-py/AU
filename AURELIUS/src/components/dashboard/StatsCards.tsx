'use client';

import { Geist_Mono } from 'next/font/google';
import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '@/lib/dashboard';
import { formatCurrency } from '@/lib/format';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const geistMono = Geist_Mono({ subsets: ['latin'] });

interface StatsCardsProps {
  dateRange: { from: Date; to: Date };
  currency: 'PYG' | 'USD' | 'BRL';
}

export function StatsCards({ dateRange, currency }: StatsCardsProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardStats', dateRange, currency],
    queryFn: () => getDashboardStats({ start: dateRange.from, end: dateRange.to }),
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-destructive text-sm">Erro ao carregar estatisticas</div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Total Area Card */}
      <Card className="border-l-4 border-l-[hsl(var(--primary))] shadow-sm bg-card">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Área Cultivada
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="flex flex-col gap-0.5">
            <h3 className={`${geistMono.className} text-base font-bold text-foreground truncate`}>
              {data.totalArea.toFixed(1)} ha
            </h3>
            <span className="text-[9px] text-primary dark:text-emerald-400 font-semibold">Total de talhões ativos</span>
          </div>
        </CardContent>
      </Card>

      {/* Active Seasons Card */}
      <Card className="border-l-4 border-l-[hsl(var(--primary))] shadow-sm bg-card">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Safras Ativas
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="flex flex-col gap-0.5">
            <h3 className={`${geistMono.className} text-base font-bold text-foreground truncate`}>
              {data.activeSeasons}
            </h3>
            <span className="text-[9px] text-muted-foreground font-semibold">Ciclos em andamento</span>
          </div>
        </CardContent>
      </Card>

      {/* Fleet Size Card */}
      <Card className="border-l-4 border-l-[hsl(var(--primary))] shadow-sm bg-card">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Frota de Máquinas
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="flex flex-col gap-0.5">
            <h3 className={`${geistMono.className} text-base font-bold text-foreground truncate`}>
              {data.fleetSize}
            </h3>
            <span className="text-[9px] text-muted-foreground font-semibold">Veículos cadastrados</span>
          </div>
        </CardContent>
      </Card>

      {/* Low Stock Inputs Card */}
      <Card className="border-l-4 border-l-[hsl(var(--accent))] shadow-sm bg-card">
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Alerta de Estoque
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="flex items-baseline gap-1.5">
            <h3 className={`${geistMono.className} text-base font-bold text-foreground`}>
              {data.lowStockAlerts}
            </h3>
            <span className="text-[9px] text-amber-600 font-semibold">itens baixos</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function StatCardSkeleton() {
  return <Skeleton className="h-32 w-full" />;
}
