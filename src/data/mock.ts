// --- CARGO DATA (AL-1403) ---
export interface CargoItem {
  id: string;
  name: string;
  category: 'Scientific Equipment' | 'Medical' | 'Rations' | 'Mechanical' | 'Communications' | 'Infrastructure';
  status: 'Form AL-1403 Pending' | 'Received at NCPOR' | 'Airlifted to Cape Town' | 'Loaded on Vessel' | 'Delivered to Station';
  destination: 'Maitri Station' | 'Bharati Station' | 'Southern Ocean Voyage';
  priority: 'Routine' | 'High' | 'Time-Critical (Early Summer)';
}

export const MOCK_CARGO: CargoItem[] = [
  { id: 'AL1403-1042', name: 'Ice Core Drill Accessories', category: 'Scientific Equipment', status: 'Received at NCPOR', destination: 'Bharati Station', priority: 'Time-Critical (Early Summer)' },
  { id: 'AL1403-1043', name: 'VSAT Communication Spares', category: 'Communications', status: 'Airlifted to Cape Town', destination: 'Maitri Station', priority: 'High' },
  { id: 'AL1403-1044', name: 'Winter Over Medical Kits', category: 'Medical', status: 'Delivered to Station', destination: 'Bharati Station', priority: 'High' },
  { id: 'AL1403-1045', name: 'Standard Institutional Rations', category: 'Rations', status: 'Received at NCPOR', destination: 'Maitri Station', priority: 'Routine' },
  { id: 'AL1403-1046', name: 'PistenBully Engine Filters', category: 'Mechanical', status: 'Form AL-1403 Pending', destination: 'Maitri Station', priority: 'High' },
];

// --- PERSONNEL DATA (AL-1208) ---
export interface Personnel {
  id: string;
  name: string;
  role: string;
  location: 'NCPOR (Goa)' | 'AIIMS (Delhi)' | 'ITBP (Auli)' | 'Cape Town' | 'Maitri Station' | 'Bharati Station' | 'Voyage';
  status: 'Form AL-1208 Pending' | 'Medical Cleared' | 'Snow Training Completed' | 'Deputed' | 'Stationed';
}

export const MOCK_PERSONNEL: Personnel[] = [
  { id: 'AL1208-P01', name: 'Dr. Sarah Jenkins', role: 'Lead Scientist (Glaciology)', location: 'Bharati Station', status: 'Stationed' },
  { id: 'AL1208-P02', name: 'Cmdr. James Vance', role: 'Expedition Leader (44th ISEA)', location: 'Cape Town', status: 'Deputed' },
  { id: 'AL1208-P03', name: 'Tech. Maria Garcia', role: 'Communications Engineer', location: 'ITBP (Auli)', status: 'Snow Training Completed' },
  { id: 'AL1208-P04', name: 'Eng. Robert Chen', role: 'Mechanical Engineer', location: 'AIIMS (Delhi)', status: 'Medical Cleared' },
];

// --- DASHBOARD EXPEDITION STATS ---
export const EXPEDITION_STATS = {
  activePersonnel: 47, // Max capacity of Bharati is 47 main building
  cargoInTransit: 14,
  criticalAlerts: 1,
  weatherStatus: 'Blizzard Warning (Maitri)',
  nextSupplyDrop: '24 Oct (Cape Town Flight)'
};

