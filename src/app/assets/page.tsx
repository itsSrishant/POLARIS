'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { cn } from '@/lib/utils';
import { Truck, Activity, Wrench, ShieldCheck } from 'lucide-react';

const MOCK_ASSETS = [
  { id: 'AST-01', name: 'PistenBully 300 Polar', type: 'Heavy Vehicle', location: 'Maitri Station', status: 'Operational', lastMaintenance: '12 Oct 2024', icon: Truck },
  { id: 'AST-02', name: 'Kamov Ka-32 Helicopter', type: 'Aviation', location: 'Ice Class Vessel', status: 'Maintenance Required', lastMaintenance: '05 Sep 2024', icon: Wrench },
  { id: 'AST-03', name: 'Mobile Laboratory Module', type: 'Infrastructure', location: 'Larsemann Hills', status: 'Operational', lastMaintenance: '20 Sep 2024', icon: ShieldCheck },
  { id: 'AST-04', name: 'Snowmobile Fleet (Alpha)', type: 'Light Vehicle', location: 'Bharati Station', status: 'Decommissioned', lastMaintenance: 'N/A', icon: Activity },
];

export default function Assets() {
  return (
    <DashboardLayout role="assets">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Fleet & Asset Management</h1>
          <p className="text-mist">Track operational status of heavy vehicles, aviation units, and station infrastructure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_ASSETS.map(asset => {
            const Icon = asset.icon;
            return (
              <div key={asset.id} className="bg-glacier-navy border border-ice-border rounded-2xl p-6 hover:border-ice-border/80 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-polar-night rounded-xl border border-ice-border/50">
                    <Icon className="w-6 h-6 text-aurora-violet" />
                  </div>
                  <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", 
                    asset.status === 'Operational' ? 'bg-success/10 text-success border border-success/20' : 
                    asset.status === 'Maintenance Required' ? 'bg-warning/10 text-warning border border-warning/20' : 
                    'bg-critical/10 text-critical border border-critical/20'
                  )}>{asset.status}</span>
                </div>
                <h3 className="text-lg font-semibold text-ice-white mb-1">{asset.name}</h3>
                <p className="text-sm text-polar-cyan mb-1">{asset.type}</p>
                <p className="text-xs text-mist mb-4">Loc: {asset.location}</p>
                <div className="pt-4 border-t border-ice-border/50">
                  <p className="text-xs font-medium text-mist">Last Service: {asset.lastMaintenance}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
