import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MissionVisionProps {
  mission: string;
  vision: string;
}

const MissionVision: React.FC<MissionVisionProps> = ({ mission, vision }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#9f1b2b] via-[#b72d3c] to-[#d33d4e] py-20 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-10%] top-[-10%] h-40 w-40 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-[-15%] right-[-15%] h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl bg-white/10 p-8 backdrop-blur-lg shadow-lg shadow-black/10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/80">
              <ArrowUpRight className="h-4 w-4" /> Our Mission
            </p>
            <h3 className="text-3xl font-bold">Tailored service plans crafted around you</h3>
            <p className="text-base leading-relaxed text-white/90">{mission}</p>
          </div>
          <div className="space-y-6 rounded-3xl bg-white/10 p-8 backdrop-blur-lg shadow-lg shadow-black/10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.45em] text-white/80">
              <ArrowUpRight className="h-4 w-4" /> Our Vision
            </p>
            <h3 className="text-3xl font-bold">Creating safe, welcoming environments</h3>
            <p className="text-base leading-relaxed text-white/90">{vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
