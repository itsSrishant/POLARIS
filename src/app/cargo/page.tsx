'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MOCK_CARGO, CargoItem } from '@/data/mock';
import { Package, Search, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useMemo } from 'react';

export default function CargoTracking() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedCargo, setSelectedCargo] = useState<CargoItem | null>(null);

  const filteredCargo = useMemo(() => {
    return MOCK_CARGO.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const uniqueStatuses = ['All', ...Array.from(new Set(MOCK_CARGO.map(item => item.status)))];

  return (
    <DashboardLayout role="cargo">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Cargo Intelligence</h1>
          <p className="text-mist">Track AL-1403 cargo declarations and staging milestones.</p>
        </div>
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mist" />
            <input 
              type="text" 
              placeholder="Search by Manifest ID or Name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-glacier-navy border border-ice-border rounded-lg pl-10 pr-4 py-2 text-sm text-ice-white placeholder:text-mist focus:outline-none focus:border-aurora-mint/50"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-mist" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto bg-glacier-navy border border-ice-border rounded-lg px-3 py-2 text-sm text-ice-white focus:outline-none focus:border-aurora-mint/50 appearance-none cursor-pointer"
            >
              {uniqueStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="bg-glacier-navy border border-ice-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[800px]">
              <thead className="bg-polar-night/50 border-b border-ice-border text-mist">
                <tr>
                  <th className="px-6 py-4 font-medium">Manifest ID</th>
                  <th className="px-6 py-4 font-medium">Item Name</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Destination</th>
                  <th className="px-6 py-4 font-medium">Dispatch Priority</th>
                  <th className="px-6 py-4 font-medium">AL-1403 Clearance Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ice-border">
                {filteredCargo.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-mist">
                      <Package className="w-8 h-8 mx-auto mb-3 opacity-20" />
                      <p>No cargo manifests match your filters.</p>
                    </td>
                  </tr>
                ) : (
                  filteredCargo.map(item => (
                    <tr 
                      key={item.id} 
                      onClick={() => setSelectedCargo(item)}
                      className="hover:bg-polar-night/60 transition-colors cursor-pointer group"
                    >
                      <td className="px-6 py-4 font-mono text-xs text-polar-cyan group-hover:text-aurora-mint transition-colors">{item.id}</td>
                      <td className="px-6 py-4 text-ice-white font-medium">{item.name}</td>
                      <td className="px-6 py-4 text-mist">{item.category}</td>
                      <td className="px-6 py-4 text-mist">{item.destination}</td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", item.priority === 'Time-Critical (Early Summer)' ? 'bg-critical/10 text-critical border border-critical/20' : item.priority === 'High' ? 'bg-warning/10 text-warning border border-warning/20' : 'bg-ice-white/10 text-ice-white border border-ice-white/20')}>{item.priority}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2 py-1 rounded text-[10px] uppercase font-bold", item.status === 'Form AL-1403 Pending' ? 'bg-critical/10 text-critical border border-critical/20' : item.status === 'Delivered to Station' ? 'bg-success/10 text-success border border-success/20' : 'bg-aurora-mint/10 text-aurora-mint border border-aurora-mint/20')}>{item.status}</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Cargo Detail Modal */}
      {selectedCargo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-glacier-navy border border-ice-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-ice-border">
              <div>
                <div className="font-mono text-xs text-aurora-mint mb-1">{selectedCargo.id}</div>
                <h2 className="text-xl font-bold text-ice-white">{selectedCargo.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedCargo(null)}
                className="p-2 rounded-lg text-mist hover:text-ice-white hover:bg-polar-night transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-mist mb-1">Destination</div>
                  <div className="text-sm text-ice-white font-medium">{selectedCargo.destination}</div>
                </div>
                <div>
                  <div className="text-xs text-mist mb-1">Assigned Handler</div>
                  <div className="text-sm text-ice-white font-medium">{selectedCargo.handler || 'Unassigned'}</div>
                </div>
                <div>
                  <div className="text-xs text-mist mb-1">Category</div>
                  <div className="text-sm text-ice-white font-medium">{selectedCargo.category}</div>
                </div>
                <div>
                  <div className="text-xs text-mist mb-1">Gross Weight</div>
                  <div className="text-sm text-ice-white font-medium">{selectedCargo.weight || 'Pending scale'}</div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-polar-night border border-ice-border/50">
                <div className="text-xs text-mist mb-2">Current Clearance Status</div>
                <div className="flex items-center gap-3">
                  <span className={cn("px-3 py-1.5 rounded-full text-xs uppercase font-bold", selectedCargo.status === 'Form AL-1403 Pending' ? 'bg-critical/10 text-critical border border-critical/20' : selectedCargo.status === 'Delivered to Station' ? 'bg-success/10 text-success border border-success/20' : 'bg-aurora-mint/10 text-aurora-mint border border-aurora-mint/20')}>{selectedCargo.status}</span>
                </div>
                {selectedCargo.status === 'Form AL-1403 Pending' && (
                  <p className="text-xs text-mist mt-3">Action required: The AL-1403 declaration form must be submitted to NCPOR before this item can be staged for the Cape Town airlift.</p>
                )}
              </div>
            </div>
            
            <div className="p-4 border-t border-ice-border bg-polar-night/50 flex justify-end">
              <button 
                onClick={() => setSelectedCargo(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-ice-white bg-glacier-navy border border-ice-border hover:bg-deep-ice transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
