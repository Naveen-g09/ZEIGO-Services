import React from 'react';
import { Sparkles, BarChart3, ShieldCheck, Repeat2 } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

const iconSequence = [Sparkles, BarChart3, ShieldCheck, Repeat2];

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <section className="bg-slate-900 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Benefits of working with us</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Empower your teams with ZEIGO manpower management</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-200">
            In today's tough business world it's important to get the most out of your employees. Our manpower management system streamlines
            processes, increases productivity and keeps teams motivated across every facility we manage.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = iconSequence[index % iconSequence.length];
            return (
              <div key={benefit.title} className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-1 hover:border-sky-300/60">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm text-slate-200/80">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
