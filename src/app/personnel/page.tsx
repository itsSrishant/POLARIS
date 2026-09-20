'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MOCK_PERSONNEL } from '@/data/mock';
import { cn } from '@/lib/utils';
export default function Personnel() {
  return (
    <DashboardLayout role="planning">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Personnel Clearances & Deputations</h1>
          <p className="text-mist">Track Form AL-1208 submissions, Medical Examinations, and Pre-Antarctic Training.</p>
        </div>
        <div className="bg-glacier-navy rounded-2xl border border-ice-border p-6">
          <div className="space-y-4">
            {MOCK_PERSONNEL.map(p => (
              <div key={p.id} className="flex items-center justify-between p-4 border border-ice-border/50 rounded-xl bg-polar-night">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-aurora-mint">{p.id}</span>
                    <h3 className="text-ice-white font-medium">{p.name}</h3>
                  </div>
                  <p className="text-mist text-sm">{p.role} • {p.location}</p>
                </div>
                <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", 
                  p.status === 'Stationed' ? 'bg-success/10 text-success border border-success/20' : 
                  p.status === 'Form AL-1208 Pending' ? 'bg-critical/10 text-critical border border-critical/20' : 
                  p.status === 'Snow Training Completed' ? 'bg-polar-cyan/10 text-polar-cyan border border-polar-cyan/20' : 
                  'bg-aurora-mint/10 text-aurora-mint border border-aurora-mint/20'
                )}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
