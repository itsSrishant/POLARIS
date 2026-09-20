import Link from 'next/link';
import { Compass } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-polar-night border-t border-ice-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-2 group mb-4">
            <Compass className="w-6 h-6 text-aurora-mint" />
            <span className="font-semibold text-xl tracking-wide text-ice-white">POLARIS</span>
          </Link>
          <p className="text-mist text-sm mb-6 leading-relaxed">
            Polar Expedition & Logistics Command Platform
          </p>
          <div className="text-xs text-mist/60 space-y-1">
            <p>SIH 2026</p>
            <p>Problem Statement 62</p>
            <p>TEAM S6</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-3">
            <h4 className="text-ice-white font-medium mb-2">Platform</h4>
            <Link href="/select-role" className="text-sm text-mist hover:text-aurora-mint transition-colors">Select Role</Link>
            <Link href="/planning" className="text-sm text-mist hover:text-aurora-mint transition-colors">Expedition Teams</Link>
            <Link href="/cargo" className="text-sm text-mist hover:text-aurora-mint transition-colors">Logistics</Link>
            <Link href="/assets" className="text-sm text-mist hover:text-aurora-mint transition-colors">Operations</Link>
            <Link href="/emergency" className="text-sm text-mist hover:text-aurora-mint transition-colors">Command Center</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-ice-white font-medium mb-2">Operations</h4>
            <Link href="/planning" className="text-sm text-mist hover:text-aurora-mint transition-colors">Mission Planning</Link>
            <Link href="/cargo" className="text-sm text-mist hover:text-aurora-mint transition-colors">Cargo Tracking</Link>
            <Link href="/inventory" className="text-sm text-mist hover:text-aurora-mint transition-colors">Inventory</Link>
            <Link href="/emergency" className="text-sm text-mist hover:text-aurora-mint transition-colors">Emergency Response</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
