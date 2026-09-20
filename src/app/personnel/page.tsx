'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MOCK_PERSONNEL } from '@/data/mock';
import { cn } from '@/lib/utils';
export default function Personnel() {
  return (
    <DashboardLayout role="planning">
      <div className="flex flex-col gap-8">
        <div><h1 className="text-3xl font-bold text-ice-white">Personnel Movement</h1></div>
        <div className="bg-glacier-navy rounded-2xl border border-ice-border p-6">
          <div className="space-y-4">
            {MOCK_PERSONNEL.map(p => (
              <div key={p.id} className="flex items-center justify-between p-4 border border-ice-border/50 rounded-xl bg-polar-night">
                <div><h3 className="text-ice-white font-medium">{p.name}</h3><p className="text-mist text-sm">{p.role} • {p.location}</p></div>
                <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", p.status === 'Active' ? 'bg-success/10 text-success border border-success/20' : 'bg-aurora-mint/10 text-aurora-mint border border-aurora-mint/20')}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
