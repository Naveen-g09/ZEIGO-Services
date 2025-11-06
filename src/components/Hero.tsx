import React from 'react';
import { ArrowRight } from 'lucide-react';
import ImagePlaceholder, { GalleryAsset } from './ImagePlaceholder';

interface Highlight {
  value: string;
  label: string;
}

interface HeroProps {
  companyName: string;
  tagline: string;
  headline: string;
  highlights: Highlight[];
  imageAsset?: GalleryAsset;
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ companyName, tagline, headline, highlights, imageAsset, onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-sky-900 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-blue-500/40 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-sky-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-sky-300">{tagline}</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="max-w-xl text-lg text-sky-100">
              ZEIGO Services partners with corporates, hospitals and residential communities to deliver reliable manpower,
              housekeeping, patient care and security services. Our agile teams keep your spaces safe, efficient and always ready.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg shadow-amber-500/30 transition-transform duration-200 hover:-translate-y-1 hover:bg-amber-300"
              >
                Explore Our Services
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition duration-200 hover:bg-white hover:text-blue-900"
              >
                Get in Touch
              </button>
            </div>

            {highlights.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((highlight) => (
                  <div key={highlight.label} className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                    <p className="text-2xl font-bold text-white sm:text-3xl">{highlight.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
                      {highlight.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-500/30 to-sky-500/10 blur-3xl" />
            <ImagePlaceholder
              asset={imageAsset}
              alt={`${companyName} operations`}
              className="h-full min-h-[320px]"
              rounded="rounded-[2.5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;