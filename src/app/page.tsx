'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { 
  ArrowRight, Compass, Map, Package, Box, Users, Truck, AlertTriangle, Ship 
} from 'lucide-react';

// Immersive Particle Component
const ImmersiveEffects = ({ theme }: { theme: string }) => {
  const [particles, setParticles] = useState<Array<{ id: number, style: any }>>([]);

  useEffect(() => {
    // Generate random particles for snow or dust
    const newParticles = Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * (theme === 'light' ? 4 : 3) + 1;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 10 + (theme === 'light' ? 5 : 10);
      const animationDelay = Math.random() * 10;
      
      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `-${animationDelay}s`,
          opacity: Math.random() * 0.5 + 0.3,
        }
      };
    });
    setParticles(newParticles);
  }, [theme]);

  if (theme === 'light') {
    return (
      <div className="snow-container">
        {particles.map(p => (
          <div key={p.id} className="snowflake" style={p.style}></div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="aurora-waves">
        <div className="aurora-wave-1"></div>
        <div className="aurora-wave-2"></div>
        <div className="aurora-wave-3"></div>
      </div>
      <div className="snow-container">
        {particles.map(p => (
          <div key={p.id} className="dust" style={{...p.style, top: `${Math.random() * 100}vh`}}></div>
        ))}
      </div>
    </>
  );
};

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && theme === 'light';

  return (
    <div className="min-h-screen bg-polar-night flex flex-col overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 mt-20">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Static Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={isLight ? "/snow-bg.png" : "/aurora-bg.png"} 
              alt="Polar Landscape" 
              fill 
              className="object-cover opacity-90 transition-opacity duration-1000"
              priority
            />
            {/* Immersive CSS Effects */}
            {mounted && <ImmersiveEffects theme={isLight ? 'light' : 'dark'} />}
            
            {/* Gradient Overlay for Readability */}
            <div className={`absolute inset-0 z-10 transition-colors duration-500 ${
              isLight 
                ? 'bg-gradient-to-b from-polar-night/70 via-polar-night/30 to-polar-night' 
                : 'bg-gradient-to-b from-polar-night/80 via-polar-night/60 to-polar-night'
            }`}></div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aurora-mint/30 bg-aurora-mint/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-aurora-mint animate-pulse"></span>
              <span className="text-xs font-medium text-aurora-mint uppercase tracking-wider">Expedition Operations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ice-white mb-6 leading-none max-w-5xl">
              Navigate the <br className="hidden md:block" />
              <span className="aurora-text">Polar Frontier.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-mist max-w-2xl mb-12 leading-relaxed backdrop-blur-sm bg-polar-night/30 p-4 rounded-xl border border-ice-border/30">
              Plan expeditions. Track cargo. Manage resources. Coordinate teams. Respond when every second matters.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/select-role" 
                className="px-8 py-4 rounded-full bg-aurora-mint text-white font-semibold hover:bg-aurora-mint/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_30px_rgba(77,226,193,0.3)]"
              >
                Explore POLARIS <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#overview" 
                className="px-8 py-4 rounded-full border border-ice-white/30 bg-polar-night/50 backdrop-blur-md text-ice-white hover:bg-deep-ice/80 transition-all"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-ice-white/60 z-20">
            <ArrowRight className="w-6 h-6 rotate-90" />
          </div>
        </section>

        {/* Signal Strip */}
        <section className="border-y border-ice-border bg-glacier-navy/50 backdrop-blur-sm relative z-20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-ice-border/50">
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <Map className="w-6 h-6 text-aurora-mint" />
                <span className="text-sm font-medium text-ice-white">Expedition Planning</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center pl-8">
                <Package className="w-6 h-6 text-polar-cyan" />
                <span className="text-sm font-medium text-ice-white">Cargo Intelligence</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center pl-8">
                <Truck className="w-6 h-6 text-aurora-violet" />
                <span className="text-sm font-medium text-ice-white">Asset Management</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center pl-8">
                <AlertTriangle className="w-6 h-6 text-critical" />
                <span className="text-sm font-medium text-ice-white">Emergency Response</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="overview" className="py-24 px-6 max-w-7xl mx-auto relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ice-white mb-6">Every polar expedition depends on what happens behind the scenes.</h2>
            <p className="text-mist text-lg max-w-3xl mx-auto">
              Operating in extreme and remote environments requires precise coordination of people, cargo, equipment, resources, and contingency plans.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-glacier-navy p-8 rounded-2xl border border-ice-border w-full flex-1 card-glow transition-all">
              <Compass className="w-10 h-10 text-mist mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-mist mb-4">EXPEDITION OPERATIONS</h3>
              <p className="text-sm text-mist/70">Multiple teams, assets, supplies and movements to coordinate.</p>
            </div>
            
            <div className="flex flex-col items-center text-critical shrink-0">
              <span className="text-4xl font-light">?</span>
              <span className="text-xs uppercase tracking-widest mt-2">Operational Gap</span>
            </div>
            
            <div className="bg-glacier-navy p-8 rounded-2xl border border-polar-cyan/20 w-full flex-1 card-glow transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-polar-cyan/5"></div>
              <Ship className="w-10 h-10 text-polar-cyan mx-auto mb-4 relative z-10 opacity-80" />
              <h3 className="text-xl font-semibold text-polar-cyan mb-4 relative z-10">POLAR ENVIRONMENT</h3>
              <p className="text-sm text-mist relative z-10">Limited connectivity, harsh conditions and rapidly changing situations.</p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="platform" className="py-24 bg-glacier-navy/30 relative border-t border-ice-border/50">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-ice-white mb-6 max-w-4xl mx-auto">One platform for the entire expedition lifecycle.</h2>
              <p className="text-mist text-lg max-w-3xl mx-auto">
                POLARIS brings planning, logistics, assets, personnel and emergency operations into one connected command layer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Expedition Planning', desc: 'Plan missions, schedules, routes, teams and operational requirements from a centralized workspace.', icon: Map, color: 'text-polar-cyan' },
                { title: 'Cargo Tracking', desc: 'Track essential cargo from preparation and dispatch through transportation and expedition deployment.', icon: Package, color: 'text-aurora-mint' },
                { title: 'Inventory Intelligence', desc: 'Monitor supplies, equipment and consumables with real-time inventory visibility.', icon: Box, color: 'text-aurora-violet' },
                { title: 'Personnel Movement', desc: 'Track team movements, assignments and operational status across expedition activities.', icon: Users, color: 'text-polar-cyan' },
                { title: 'Asset Management', desc: 'Maintain visibility of critical vehicles, equipment and other expedition assets throughout their lifecycle.', icon: Truck, color: 'text-aurora-mint' },
                { title: 'Emergency Response', desc: 'Coordinate alerts, incidents, personnel status and response actions when situations change.', icon: AlertTriangle, color: 'text-critical' },
              ].map((feature, i) => (
                <div key={i} className="bg-glacier-navy border border-ice-border rounded-2xl p-8 hover:border-polar-cyan/30 hover:-translate-y-1 transition-all duration-300 card-glow group relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-deep-ice flex items-center justify-center mb-6 group-hover:bg-deep-ice/80 transition-colors border border-ice-border">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-ice-white mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-sm text-mist leading-relaxed relative z-10">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section id="intelligence" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-ice-white mb-6">One operational picture. Every expedition decision.</h2>
            <p className="text-mist text-lg max-w-3xl mx-auto">
              POLARIS connects the people, resources and information required to operate safely and efficiently in polar environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-glacier-navy rounded-3xl p-10 border border-ice-border relative overflow-hidden group hover:border-aurora-mint/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-aurora-mint/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <Users className="w-10 h-10 text-aurora-mint mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-ice-white mb-2 relative z-10">EXPEDITION TEAMS</h3>
              <p className="text-mist mb-8 relative z-10 italic">"Plan and coordinate every mission from one operational workspace."</p>
              <ul className="space-y-3 relative z-10 text-sm text-mist">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-aurora-mint" /> Mission planning</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-aurora-mint" /> Team coordination</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-aurora-mint" /> Movement tracking</li>
              </ul>
            </div>
            
            <div className="bg-glacier-navy rounded-3xl p-10 border border-ice-border relative overflow-hidden group hover:border-polar-cyan/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-polar-cyan/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <Package className="w-10 h-10 text-polar-cyan mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-ice-white mb-2 relative z-10">LOGISTICS TEAMS</h3>
              <p className="text-mist mb-8 relative z-10 italic">"Know where every critical resource is and where it needs to go."</p>
              <ul className="space-y-3 relative z-10 text-sm text-mist">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-polar-cyan" /> Cargo tracking</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-polar-cyan" /> Inventory visibility</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-polar-cyan" /> Supply management</li>
              </ul>
            </div>

            <div className="bg-glacier-navy rounded-3xl p-10 border border-ice-border relative overflow-hidden group hover:border-aurora-violet/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-aurora-violet/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <Truck className="w-10 h-10 text-aurora-violet mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-ice-white mb-2 relative z-10">OPERATIONS MANAGERS</h3>
              <p className="text-mist mb-8 relative z-10 italic">"Maintain a clear view of people, assets and expedition readiness."</p>
              <ul className="space-y-3 relative z-10 text-sm text-mist">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-aurora-violet" /> Asset monitoring</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-aurora-violet" /> Personnel status</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-aurora-violet" /> Operational overview</li>
              </ul>
            </div>

            <div className="bg-glacier-navy rounded-3xl p-10 border border-ice-border relative overflow-hidden group hover:border-critical/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-critical/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <AlertTriangle className="w-10 h-10 text-critical mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-ice-white mb-2 relative z-10">COMMAND & RESPONSE</h3>
              <p className="text-mist mb-8 relative z-10 italic">"Respond quickly with the information needed when conditions change."</p>
              <ul className="space-y-3 relative z-10 text-sm text-mist">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-critical" /> Incident alerts</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-critical" /> Emergency coordination</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-critical" /> Response tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 overflow-hidden border-t border-ice-border">
          <div className="absolute inset-0 bg-glacier-navy"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-aurora-mint/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-ice-white mb-6">From planning to response, stay expedition-ready.</h2>
            <p className="text-xl text-mist mb-12 max-w-3xl mx-auto">
              POLARIS brings the complete polar logistics picture together so teams can plan with confidence, coordinate efficiently and respond when it matters.
            </p>
            <Link 
              href="/select-role" 
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-aurora-mint text-white font-bold text-lg hover:bg-aurora-mint/90 transition-all hover:scale-105 shadow-[0_0_40px_rgba(77,226,193,0.3)]"
            >
              Enter POLARIS <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
