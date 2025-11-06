import React, { useMemo } from 'react';

interface DistributionSlice {
  label: string;
  value: number;
  color: string;
}

interface MarketInsights {
  summary: string;
  distribution: DistributionSlice[];
}

interface MarketIntelligenceProps {
  insights: MarketInsights;
}

const MarketIntelligence: React.FC<MarketIntelligenceProps> = ({ insights }) => {
  const gradient = useMemo(() => {
    let start = 0;
    const segments = insights.distribution
      .map((slice) => {
        const end = start + slice.value;
        const segment = `${slice.color} ${start}% ${end}%`;
        start = end;
        return segment;
      })
      .join(', ');

    return `conic-gradient(${segments})`;
  }, [insights.distribution]);

  const topCategory = useMemo(() => {
    return insights.distribution.reduce<DistributionSlice | null>((highest, slice) => {
      if (!highest || slice.value > highest.value) {
        return slice;
      }
      return highest;
    }, null);
  }, [insights.distribution]);

  return (
    <section className="bg-slate-100 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700">Market Intelligence</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Data-led manpower planning</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{insights.summary}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Service distribution</p>
            <div className="mt-4 space-y-3">
              {insights.distribution.map((slice) => (
                <div key={slice.label} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: slice.color }} />
                    <span className="text-sm font-semibold text-slate-700">{slice.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-500">{slice.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-80 w-80 max-w-full">
              <div className="h-full w-full rounded-full shadow-2xl shadow-slate-300" style={{ backgroundImage: gradient }} />
              <div className="absolute inset-12 rounded-full bg-white shadow-inner" />
              {topCategory && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Key Focus</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">{topCategory.label}</p>
                    <p className="text-sm text-slate-500">{topCategory.value}% allocation</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketIntelligence;
