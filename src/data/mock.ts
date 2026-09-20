export interface CargoItem {
  id: string;
  name: string;
  category: string;
  status: 'In Transit' | 'Staged' | 'Deployed' | 'Delayed';
  destination: string;
  priority: 'Critical' | 'High' | 'Normal';
}

export const MOCK_CARGO: CargoItem[] = [
  { id: 'C-1042', name: 'Winterization Kit A', category: 'Equipment', status: 'In Transit', destination: 'Base Camp Alpha', priority: 'Critical' },
  { id: 'C-1043', name: 'Satellite Uplink Module', category: 'Communications', status: 'Staged', destination: 'Forward Ops', priority: 'High' },
  { id: 'C-1044', name: 'Medical Supply Crate', category: 'Medical', status: 'Deployed', destination: 'Research Outpost', priority: 'Critical' },
  { id: 'C-1045', name: 'Rations - 30 Day', category: 'Supplies', status: 'In Transit', destination: 'Base Camp Alpha', priority: 'Normal' },
  { id: 'C-1046', name: 'Generator Parts', category: 'Mechanical', status: 'Delayed', destination: 'Base Camp Beta', priority: 'High' },
];

export interface Personnel {
  id: string;
  name: string;
  role: string;
  location: string;
  status: 'Active' | 'Rest' | 'In Transit' | 'Medical';
}

export const MOCK_PERSONNEL: Personnel[] = [
  { id: 'P-01', name: 'Dr. Sarah Jenkins', role: 'Lead Scientist', location: 'Research Outpost', status: 'Active' },
  { id: 'P-02', name: 'Cmdr. James Vance', role: 'Expedition Lead', location: 'Base Camp Alpha', status: 'Active' },
  { id: 'P-03', name: 'Tech. Maria Garcia', role: 'Communications Specialist', location: 'Forward Ops', status: 'In Transit' },
  { id: 'P-04', name: 'Eng. Robert Chen', role: 'Mechanical Engineer', location: 'Base Camp Beta', status: 'Rest' },
];

export const EXPEDITION_STATS = {
  activePersonnel: 42,
  cargoInTransit: 14,
  criticalAlerts: 1,
  weatherStatus: 'Deteriorating',
  nextSupplyDrop: '48h 12m'
};
