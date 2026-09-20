'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Compass, Map, Package, Box, Users, Truck, AlertTriangle, 
  Settings, Menu, X, Bell, Search, Wifi, WifiOff
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'planning' | 'cargo' | 'assets' | 'emergency';
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const pathname = usePathname();

  const getRoleConfig = () => {
    switch (role) {
      case 'planning': return { name: 'Expedition Teams', color: 'text-aurora-mint' };
      case 'cargo': return { name: 'Logistics', color: 'text-polar-cyan' };
      case 'assets': return { name: 'Operations', color: 'text-aurora-violet' };
      case 'emergency': return { name: 'Command & Response', color: 'text-critical' };
      default: return { name: 'Personnel', color: 'text-ice-white' };
    }
  };

  const config = getRoleConfig();

  const navigation = [
    { name: 'Expedition Planning', href: '/planning', icon: Map },
    { name: 'Cargo Tracking', href: '/cargo', icon: Package },
    { name: 'Inventory Intelligence', href: '/inventory', icon: Box },
    { name: 'Personnel Movement', href: '/personnel', icon: Users },
    { name: 'Asset Management', href: '/assets', icon: Truck },
    { name: 'Emergency Response', href: '/emergency', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-polar-night flex">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-glacier-navy border-r border-ice-border flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-ice-border">
          <Link href="/" className="flex items-center gap-2 group">
            <Compass className="w-6 h-6 text-aurora-mint" />
            <span className="font-semibold text-xl tracking-wide text-ice-white">POLARIS</span>
          </Link>
          <button className="lg:hidden text-mist hover:text-ice-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-4 border-b border-ice-border/50">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full bg-current ${config.color}`} />
            <span className="text-sm font-medium text-mist">{config.name}</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-deep-ice text-ice-white border border-ice-border/50" 
                    : "text-mist hover:text-ice-white hover:bg-deep-ice/50"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? config.color : "text-mist")} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-ice-border">
          <Link href="/select-role" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-mist hover:text-ice-white hover:bg-deep-ice/50 transition-colors">
            <div className="w-5 h-5 rounded-full border border-mist flex items-center justify-center">
              <span className="text-[10px]">R</span>
            </div>
            Switch Role
          </Link>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-sm font-medium text-mist hover:text-ice-white hover:bg-deep-ice/50 transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 bg-polar-night/80 backdrop-blur-md border-b border-ice-border flex items-center justify-between px-4 lg:px-8 z-30 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-mist hover:text-ice-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="hidden md:flex items-center gap-2 bg-glacier-navy border border-ice-border rounded-full px-4 py-2 w-64 lg:w-96 focus-within:border-aurora-mint/50 transition-colors">
              <Search className="w-4 h-4 text-mist" />
              <input 
                type="text" 
                placeholder="Search assets, cargo, personnel..." 
                className="bg-transparent border-none outline-none text-sm text-ice-white placeholder:text-mist w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full border border-aurora-mint/30 bg-aurora-mint/10 text-aurora-mint text-[10px] font-bold uppercase tracking-wider">
              Demo Mode: Simulated ISEA Data
            </div>

            <button 
              onClick={() => setIsOffline(!isOffline)}
              className={cn(
                "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors",
                isOffline 
                  ? "bg-critical/10 border-critical/30 text-critical" 
                  : "bg-success/10 border-success/30 text-success"
              )}
            >
              {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
              {isOffline ? 'OFFLINE MODE' : 'ONLINE'}
            </button>
            
            <button className="relative p-2 text-mist hover:text-ice-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-aurora-mint border border-polar-night"></span>
            </button>
            
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-aurora-mint to-polar-cyan p-[1px]">
              <div className="w-full h-full rounded-full bg-polar-night flex items-center justify-center">
                <span className="text-xs font-bold text-ice-white">CMD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Offline Banner */}
        {isOffline && (
          <div className="bg-critical/10 border-b border-critical/20 px-4 py-2 text-center text-sm text-critical">
            Currently in Offline Mode. Displaying locally available expedition data. Satellite sync paused.
          </div>
        )}

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
