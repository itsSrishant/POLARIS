'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { EXPEDITION_STATS } from '@/data/mock';
import { Map, AlertTriangle, Truck, Users } from 'lucide-react';

export default function ExpeditionPlanning() {
  return (
    <DashboardLayout role="planning">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Expedition Planning</h1>
          <p className="text-mist">Command center for ongoing operations and upcoming missions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-glacier-navy border border-ice-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4"><Users className="w-5 h-5 text-aurora-mint" /><span className="text-sm font-medium text-mist">Active Personnel</span></div>
            <div className="text-3xl font-bold text-ice-white mb-1">{EXPEDITION_STATS.activePersonnel}</div>
            <div className="text-xs text-mist">Across 3 outposts</div>
          </div>
          <div className="bg-glacier-navy border border-ice-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4"><Truck className="w-5 h-5 text-polar-cyan" /><span className="text-sm font-medium text-mist">Cargo In Transit</span></div>
            <div className="text-3xl font-bold text-ice-white mb-1">{EXPEDITION_STATS.cargoInTransit}</div>
            <div className="text-xs text-mist">Next drop: {EXPEDITION_STATS.nextSupplyDrop}</div>
          </div>
          <div className="bg-glacier-navy border border-ice-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4"><Map className="w-5 h-5 text-aurora-violet" /><span className="text-sm font-medium text-mist">Weather Status</span></div>
            <div className="text-2xl font-bold text-warning mb-1">{EXPEDITION_STATS.weatherStatus}</div>
            <div className="text-xs text-mist">Approaching storm system</div>
          </div>
          <div className="bg-glacier-navy border border-ice-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4"><AlertTriangle className="w-5 h-5 text-critical" /><span className="text-sm font-medium text-mist">Active Alerts</span></div>
            <div className="text-3xl font-bold text-critical mb-1">{EXPEDITION_STATS.criticalAlerts}</div>
            <div className="text-xs text-mist">Generator failure at Base Beta</div>
          </div>
        </div>
        
        <div className="bg-glacier-navy border border-ice-border rounded-2xl p-6 min-h-[400px] flex items-center justify-center text-mist flex-col gap-4">
          <Map className="w-12 h-12 opacity-50" />
          <p>Interactive Topographical Map goes here</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
