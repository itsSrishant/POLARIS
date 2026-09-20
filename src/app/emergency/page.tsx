'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { cn } from '@/lib/utils';
import { AlertOctagon, Wind, Radio, Activity } from 'lucide-react';

const MOCK_INCIDENTS = [
  { id: 'INC-2401', type: 'Weather Alert', description: 'Category 3 Blizzard approaching Schirmacher Oasis. All outdoor activities suspended.', status: 'Active', time: '10:00 AM', location: 'Maitri Region', icon: Wind },
  { id: 'INC-2402', type: 'Comms Outage', description: 'VSAT satellite link unstable due to solar flares. Fallback to HF radio.', status: 'Monitoring', time: '08:30 AM', location: 'Bharati Station', icon: Radio },
  { id: 'INC-2403', type: 'Medical Standby', description: 'Routine medical clearance (AL-1208) flagged for further review.', status: 'Resolved', time: 'Yesterday', location: 'Cape Town', icon: Activity },
];

export default function Emergency() {
  return (
    <DashboardLayout role="emergency">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Emergency Coordination</h1>
          <p className="text-mist">Simulated incident log for weather advisories, medical standbys, and technical outages.</p>
        </div>
        
        <div className="bg-glacier-navy border border-ice-border rounded-2xl p-6">
          <div className="space-y-4">
            {MOCK_INCIDENTS.map(incident => {
              const Icon = incident.icon;
              return (
                <div key={incident.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-ice-border/50 rounded-xl bg-polar-night gap-4">
                  <div className="flex items-start gap-4">
                    <div className={cn("p-3 rounded-xl border", 
                      incident.status === 'Active' ? 'bg-critical/10 border-critical/30 text-critical' : 
                      incident.status === 'Monitoring' ? 'bg-warning/10 border-warning/30 text-warning' : 
                      'bg-ice-white/10 border-ice-border text-mist'
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-polar-cyan">{incident.id}</span>
                        <h3 className="text-ice-white font-medium">{incident.type}</h3>
                      </div>
                      <p className="text-mist text-sm max-w-2xl">{incident.description}</p>
                      <p className="text-xs text-ice-white/50 mt-2">{incident.time} • {incident.location}</p>
                    </div>
                  </div>
                  <div className="shrink-0 md:self-start">
                    <span className={cn("px-3 py-1.5 rounded-full text-[10px] uppercase font-bold", 
                      incident.status === 'Active' ? 'bg-critical text-polar-night' : 
                      incident.status === 'Monitoring' ? 'bg-warning/20 text-warning border border-warning/30' : 
                      'bg-success/10 text-success border border-success/20'
                    )}>{incident.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
