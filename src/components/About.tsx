import React from 'react';
import { Target, Eye, Building, Quote } from 'lucide-react';
import ImagePlaceholder, { GalleryAsset } from './ImagePlaceholder';

interface LeadershipInfo {
  name: string;
  title: string;
  message: string;
}

interface AboutProps {
  overview: string;
  vision: string;
  mission: string;
  leadership: LeadershipInfo;
  imageAsset?: GalleryAsset;
}

const About: React.FC<AboutProps> = ({ overview, vision, mission, leadership, imageAsset }) => {
  return (
    <section id="about" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-700">About Zeigo Services</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Professional partners for spotless, safe spaces</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">{overview}</p>
            </div>

            <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-lg shadow-blue-100/40 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Partnership roots</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Founded in 2017, ZEIGO Services combines seasoned manpower expertise with a highly responsive support model for
                  corporates, healthcare facilities and residential communities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Quote className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">From our director</h3>
                <p className="text-sm leading-relaxed text-slate-600">{leadership.message}</p>
                <div className="pt-2">
                  <p className="text-base font-semibold text-slate-900">{leadership.name}</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-600">{leadership.title}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-blue-100 bg-white/70 p-6 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{vision}</p>
              </div>
              <div className="rounded-3xl border border-amber-100 bg-white/70 p-6 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{mission}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-sky-500/20 blur-3xl" />
            <ImagePlaceholder asset={imageAsset} alt="Housekeeping team" className="h-full min-h-[360px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;