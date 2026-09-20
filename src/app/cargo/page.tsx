'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MOCK_CARGO } from '@/data/mock';
import { Package } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CargoTracking() {
  return (
    <DashboardLayout role="cargo">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Cargo Intelligence</h1>
          <p className="text-mist">Real-time tracking of essential supplies and equipment.</p>
        </div>
        
        <div className="bg-glacier-navy border border-ice-border rounded-2xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-polar-night/50 border-b border-ice-border text-mist">
              <tr>
                <th className="px-6 py-4 font-medium">Cargo ID</th>
                <th className="px-6 py-4 font-medium">Item Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Destination</th>
                <th className="px-6 py-4 font-medium">Priority</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ice-border">
              {MOCK_CARGO.map(item => (
                <tr key={item.id} className="hover:bg-polar-night/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-polar-cyan">{item.id}</td>
                  <td className="px-6 py-4 text-ice-white font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-mist">{item.category}</td>
                  <td className="px-6 py-4 text-mist">{item.destination}</td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", item.priority === 'Critical' ? 'bg-critical/10 text-critical border border-critical/20' : item.priority === 'High' ? 'bg-warning/10 text-warning border border-warning/20' : 'bg-ice-white/10 text-ice-white border border-ice-white/20')}>{item.priority}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", item.status === 'Delayed' ? 'bg-critical/10 text-critical border border-critical/20' : item.status === 'Deployed' ? 'bg-success/10 text-success border border-success/20' : 'bg-aurora-mint/10 text-aurora-mint border border-aurora-mint/20')}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
