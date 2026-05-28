import { Suspense } from 'react';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { Skeleton } from '@/components/ui/skeleton';
import { AgroWeatherTelemetry } from '@/components/dashboard/AgroWeatherTelemetry';

// Default date range - last 30 days
const defaultDateRange = {
  from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  to: new Date(),
};

// Default currency - should come from tenant settings
const defaultCurrency = 'PYG' as const;

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-2 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-xl font-bold uppercase tracking-widest text-foreground font-heading">
          Aurelius Dashboard
        </h1>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
          Painel de Controle
        </span>
      </div>

      {/* Agro Weather GPS */}
      <AgroWeatherTelemetry />

      {/* Stats Cards */}
      <Suspense
        fallback={
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        }
      >
        <StatsCards dateRange={defaultDateRange} currency={defaultCurrency} />
      </Suspense>
    </div>
  );
}
