'use client';

import Link from 'next/link';
import { Compass, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-polar-night/80 backdrop-blur-md border-b border-ice-border/50 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-glacier-navy border border-ice-border group-hover:border-aurora-mint/50 transition-colors duration-1000">
            <Compass className="w-5 h-5 text-aurora-mint" />
          </div>
          <span className="font-semibold text-xl tracking-wide text-ice-white">POLARIS</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-mist">
          <Link href="#overview" className="hover:text-ice-white transition-colors duration-1000">Overview</Link>
          <Link href="#platform" className="hover:text-ice-white transition-colors duration-1000">Platform</Link>
          <Link href="#intelligence" className="hover:text-ice-white transition-colors duration-1000">Operations</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full border border-ice-border bg-glacier-navy text-mist hover:text-aurora-mint hover:border-aurora-mint/50 transition-colors duration-1000"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}

          <Link 
            href="/select-role" 
            className="px-5 py-2.5 rounded-full bg-aurora-mint text-polar-night font-medium hover:bg-aurora-mint/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(var(--color-aurora-mint),0.3)]"
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
