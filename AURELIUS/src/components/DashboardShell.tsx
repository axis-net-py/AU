"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AgriIAChat } from "@/components/dashboard/AgriIAChat";
import { cn } from "@/lib/utils";

interface DashboardShellProps {
  tenantId: string;
  children: React.ReactNode;
}

export function DashboardShell({ tenantId, children }: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  const toggleSidebar = () => {
    setMobileOpen((prev) => !prev);
    setDesktopCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Mobile Sidebar (Slide-over drawer) */}
      <div className="md:hidden">
        {mobileOpen && (
          <div 
            onClick={() => setMobileOpen(false)} 
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px] z-40 transition-opacity duration-300 cursor-pointer"
          />
        )}
        <div 
          className={cn(
            "fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out shadow-2xl h-full w-56",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar tenantId={tenantId} collapsed={false} />
        </div>
      </div>

      {/* Desktop Sidebar (Persistent) */}
      <div className="hidden md:block h-full shrink-0">
        <Sidebar tenantId={tenantId} collapsed={desktopCollapsed} />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden w-full h-full">
        {/* Header */}
        <Header tenantId={tenantId} onToggleSidebar={toggleSidebar} />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-950/20">
          {children}
        </main>
      </div>
      
      <AgriIAChat tenantId={tenantId} />
    </div>
  );
}

