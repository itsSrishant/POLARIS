'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MOCK_PERSONNEL, Personnel as PersonnelType } from '@/data/mock';
import { cn } from '@/lib/utils';
import { Search, Filter, X, Users, CheckCircle2, Circle } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function Personnel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState<string>('All');
  const [selectedPerson, setSelectedPerson] = useState<PersonnelType | null>(null);

  const filteredPersonnel = useMemo(() => {
    return MOCK_PERSONNEL.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = locationFilter === 'All' || p.location === locationFilter;
      return matchesSearch && matchesLocation;
    });
  }, [searchQuery, locationFilter]);

  const uniqueLocations = ['All', ...Array.from(new Set(MOCK_PERSONNEL.map(p => p.location)))];

  return (
    <DashboardLayout role="planning">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Personnel Clearances & Deputations</h1>
          <p className="text-mist">Track Form AL-1208 submissions, Medical Examinations, and Pre-Antarctic Training.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mist" />
            <input 
              type="text" 
              placeholder="Search by ID, Name, or Role..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-glacier-navy border border-ice-border rounded-lg pl-10 pr-4 py-2 text-sm text-ice-white placeholder:text-mist focus:outline-none focus:border-aurora-mint/50"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-mist" />
            <select 
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full sm:w-auto bg-glacier-navy border border-ice-border rounded-lg px-3 py-2 text-sm text-ice-white focus:outline-none focus:border-aurora-mint/50 appearance-none cursor-pointer"
            >
              {uniqueLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-glacier-navy rounded-2xl border border-ice-border p-6">
          <div className="space-y-4">
            {filteredPersonnel.length === 0 ? (
              <div className="py-12 text-center text-mist">
                <Users className="w-8 h-8 mx-auto mb-3 opacity-20" />
                <p>No personnel match your filters.</p>
              </div>
            ) : (
              filteredPersonnel.map(p => (
                <div 
                  key={p.id} 
                  onClick={() => setSelectedPerson(p)}
                  className="flex items-center justify-between p-4 border border-ice-border/50 rounded-xl bg-polar-night hover:bg-polar-night/60 transition-colors cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-aurora-mint group-hover:text-polar-cyan transition-colors">{p.id}</span>
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
              ))
            )}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPerson && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-glacier-navy border border-ice-border rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-ice-border">
              <div>
                <div className="font-mono text-xs text-aurora-mint mb-1">{selectedPerson.id}</div>
                <h2 className="text-xl font-bold text-ice-white">{selectedPerson.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedPerson(null)}
                className="p-2 rounded-lg text-mist hover:text-ice-white hover:bg-polar-night transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <div className="text-xs text-mist mb-1">Assigned Role</div>
                <div className="text-sm text-ice-white font-medium">{selectedPerson.role}</div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-mist font-bold">AL-1208 Readiness Checklist</h3>
                
                <div className="flex items-center gap-3">
                  {selectedPerson.medicalStatus?.includes('Cleared') || selectedPerson.medicalStatus?.includes('Passed') ? (
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  ) : (
                    <Circle className="w-5 h-5 text-mist" />
                  )}
                  <div>
                    <p className="text-sm text-ice-white">Medical Examination (AIIMS)</p>
                    <p className="text-xs text-mist">{selectedPerson.medicalStatus || 'Pending Schedule'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {selectedPerson.trainingStatus?.includes('Completed') ? (
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  ) : (
                    <Circle className="w-5 h-5 text-mist" />
                  )}
                  <div>
                    <p className="text-sm text-ice-white">Snow Acclimatization Training (ITBP Auli)</p>
                    <p className="text-xs text-mist">{selectedPerson.trainingStatus || 'Pending Schedule'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedPerson.status === 'Deputed' || selectedPerson.status === 'Stationed' ? (
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  ) : (
                    <Circle className="w-5 h-5 text-mist" />
                  )}
                  <div>
                    <p className="text-sm text-ice-white">Final Logistics Clearance</p>
                    <p className="text-xs text-mist">
                      {selectedPerson.status === 'Deputed' || selectedPerson.status === 'Stationed' ? 'Approved for deployment' : 'Awaiting completion of prerequisites'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-ice-border bg-polar-night/50 flex justify-end">
              <button 
                onClick={() => setSelectedPerson(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-ice-white bg-glacier-navy border border-ice-border hover:bg-deep-ice transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
