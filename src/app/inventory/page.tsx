'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { cn } from '@/lib/utils';
import { Package, Battery, Snowflake, Droplet } from 'lucide-react';

const MOCK_INVENTORY = [
  { id: 'INV-1', name: 'Aviation Turbine Fuel (ATF)', location: 'Bharati Station', quantity: '14,000 L', status: 'Optimal', icon: Droplet },
  { id: 'INV-2', name: 'Winter Over Rations', location: 'Maitri Station', quantity: '8 Months', status: 'Optimal', icon: Package },
  { id: 'INV-3', name: 'Generator Spares (Primary)', location: 'Maitri Station', quantity: '2 Sets', status: 'Low Stock', icon: Battery },
  { id: 'INV-4', name: 'Thermal Clothing Kits', location: 'Bharati Station', quantity: '47 Kits', status: 'Optimal', icon: Snowflake },
];

export default function Inventory() {
  return (
    <DashboardLayout role="cargo">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Station Inventory</h1>
          <p className="text-mist">Monitor supplies and consumables across Maitri and Bharati stations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_INVENTORY.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-glacier-navy border border-ice-border rounded-2xl p-6 hover:border-ice-border/80 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-polar-night rounded-xl border border-ice-border/50">
                    <Icon className="w-6 h-6 text-polar-cyan" />
                  </div>
                  <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", item.status === 'Optimal' ? 'bg-success/10 text-success border border-success/20' : 'bg-warning/10 text-warning border border-warning/20')}>{item.status}</span>
                </div>
                <h3 className="text-lg font-semibold text-ice-white mb-1">{item.name}</h3>
                <p className="text-sm text-mist mb-4">{item.location}</p>
                <div className="pt-4 border-t border-ice-border/50">
                  <p className="text-sm font-medium text-polar-cyan">Stock: {item.quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
