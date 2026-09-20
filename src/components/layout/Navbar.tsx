import Link from 'next/link';
import { Compass, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-polar-night/80 backdrop-blur-md border-b border-ice-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-glacier-navy border border-ice-border group-hover:border-aurora-mint/50 transition-colors">
            <Compass className="w-5 h-5 text-aurora-mint" />
          </div>
          <span className="font-semibold text-xl tracking-wide text-ice-white">POLARIS</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-mist">
          <Link href="#overview" className="hover:text-ice-white transition-colors">Overview</Link>
          <Link href="#platform" className="hover:text-ice-white transition-colors">Platform</Link>
          <Link href="#intelligence" className="hover:text-ice-white transition-colors">Operations</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/select-role" 
            className="px-5 py-2.5 rounded-full bg-aurora-mint text-polar-night font-medium hover:bg-aurora-mint/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(77,226,193,0.3)]"
          >
            Explore Platform
          </Link>
        </div>

        <button className="md:hidden p-2 text-mist hover:text-ice-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
