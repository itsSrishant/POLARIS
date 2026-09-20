'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { cn } from '@/lib/utils';
import { Truck, Activity, Wrench, ShieldCheck, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';

const MOCK_ASSETS = [
  { id: 'AST-01', name: 'PistenBully 300 Polar', type: 'Heavy Vehicle', location: 'Maitri Station', status: 'Operational', lastMaintenance: '12 Oct 2024', icon: Truck },
  { id: 'AST-02', name: 'Kamov Ka-32 Helicopter', type: 'Aviation', location: 'Ice Class Vessel', status: 'Maintenance Required', lastMaintenance: '05 Sep 2024', icon: Wrench },
  { id: 'AST-03', name: 'Mobile Laboratory Module', type: 'Infrastructure', location: 'Larsemann Hills', status: 'Operational', lastMaintenance: '20 Sep 2024', icon: ShieldCheck },
  { id: 'AST-04', name: 'Snowmobile Fleet (Alpha)', type: 'Light Vehicle', location: 'Bharati Station', status: 'Decommissioned', lastMaintenance: 'N/A', icon: Activity },
];

export default function Assets() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredAssets = useMemo(() => {
    return MOCK_ASSETS.filter(a => {
      const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            a.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || a.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const uniqueStatuses = ['All', ...Array.from(new Set(MOCK_ASSETS.map(a => a.status)))];

  return (
    <DashboardLayout role="assets">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Fleet & Asset Management</h1>
          <p className="text-mist">Track operational status of heavy vehicles, aviation units, and station infrastructure.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mist" />
            <input 
              type="text" 
              placeholder="Search by ID or Name..." 
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
        
        {filteredAssets.length === 0 ? (
          <div className="py-12 text-center text-mist bg-glacier-navy rounded-2xl border border-ice-border">
            <Truck className="w-8 h-8 mx-auto mb-3 opacity-20" />
            <p>No assets match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAssets.map(asset => {
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
        )}
      </div>
    </DashboardLayout>
  );
}
