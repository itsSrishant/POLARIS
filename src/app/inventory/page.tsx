'use client';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { cn } from '@/lib/utils';
import { Package, Battery, Snowflake, Droplet, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';

const MOCK_INVENTORY = [
  { id: 'INV-1', name: 'Aviation Turbine Fuel (ATF)', location: 'Bharati Station', quantity: '14,000 L', status: 'Optimal', icon: Droplet },
  { id: 'INV-2', name: 'Winter Over Rations', location: 'Maitri Station', quantity: '8 Months', status: 'Optimal', icon: Package },
  { id: 'INV-3', name: 'Generator Spares (Primary)', location: 'Maitri Station', quantity: '2 Sets', status: 'Low Stock', icon: Battery },
  { id: 'INV-4', name: 'Thermal Clothing Kits', location: 'Bharati Station', quantity: '47 Kits', status: 'Optimal', icon: Snowflake },
];

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState<string>('All');

  const filteredInventory = useMemo(() => {
    return MOCK_INVENTORY.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = locationFilter === 'All' || item.location === locationFilter;
      return matchesSearch && matchesLocation;
    });
  }, [searchQuery, locationFilter]);

  const uniqueLocations = ['All', ...Array.from(new Set(MOCK_INVENTORY.map(i => i.location)))];

  return (
    <DashboardLayout role="cargo">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-ice-white mb-2">Station Inventory</h1>
          <p className="text-mist">Monitor supplies and consumables across Maitri and Bharati stations.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mist" />
            <input 
              type="text" 
              placeholder="Search inventory items..." 
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
        
        {filteredInventory.length === 0 ? (
          <div className="py-12 text-center text-mist bg-glacier-navy rounded-2xl border border-ice-border">
            <Package className="w-8 h-8 mx-auto mb-3 opacity-20" />
            <p>No inventory items match your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredInventory.map(item => {
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
        )}
      </div>
    </DashboardLayout>
  );
}
