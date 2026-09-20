import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Users, Package, Truck, AlertTriangle, ArrowRight } from 'lucide-react';

export default function SelectRole() {
  const roles = [
    {
      id: 'expedition',
      title: 'Expedition Teams',
      description: 'Plan and coordinate every mission from one operational workspace.',
      icon: Users,
      href: '/planning',
      color: 'text-aurora-mint',
      bgHover: 'hover:border-aurora-mint/50 hover:bg-aurora-mint/5',
      glow: 'bg-aurora-mint/20'
    },
    {
      id: 'logistics',
      title: 'Logistics Teams',
      description: 'Know where every critical resource is and where it needs to go.',
      icon: Package,
      href: '/cargo',
      color: 'text-polar-cyan',
      bgHover: 'hover:border-polar-cyan/50 hover:bg-polar-cyan/5',
      glow: 'bg-polar-cyan/20'
    },
    {
      id: 'operations',
      title: 'Operations Managers',
      description: 'Maintain a clear view of people, assets and expedition readiness.',
      icon: Truck,
      href: '/assets',
      color: 'text-aurora-violet',
      bgHover: 'hover:border-aurora-violet/50 hover:bg-aurora-violet/5',
      glow: 'bg-aurora-violet/20'
    },
    {
      id: 'command',
      title: 'Command & Response',
      description: 'Respond quickly with the information needed when conditions change.',
      icon: AlertTriangle,
      href: '/emergency',
      color: 'text-critical',
      bgHover: 'hover:border-critical/50 hover:bg-critical/5',
      glow: 'bg-critical/20'
    }
  ];

  return (
    <div className="min-h-screen bg-polar-night flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-6 mt-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-polar-cyan/10 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-ice-white mb-4">Choose your perspective.</h1>
            <p className="text-lg text-mist max-w-2xl mx-auto">
              Select a role to explore how POLARIS provides actionable intelligence for your specific expedition needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <Link key={role.id} href={role.href} className="block group">
                <div className={`bg-glacier-navy rounded-2xl p-8 border border-ice-border transition-all duration-300 relative overflow-hidden ${role.bgHover}`}>
                  <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 transition-opacity opacity-0 group-hover:opacity-100 ${role.glow}`}></div>
                  
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex flex-col">
                      <role.icon className={`w-10 h-10 mb-6 ${role.color}`} />
                      <h2 className="text-2xl font-bold text-ice-white mb-2">{role.title}</h2>
                      <p className="text-mist">{role.description}</p>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-deep-ice flex items-center justify-center border border-ice-border group-hover:bg-polar-night transition-colors">
                      <ArrowRight className="w-5 h-5 text-ice-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
