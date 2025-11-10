import React from 'react';
import type { ClientProfile } from '../types/company';

interface ClientMarqueeProps {
  clients: ClientProfile[];
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ clients }) => {
  if (!clients || clients.length === 0) {
    return null;
  }

  const marqueeClients = [...clients, ...clients];

  return (
    <section aria-label="Client logo marquee" className="bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">Trusted Collaborations</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Partners who rely on ZEIGO Services
              </h2>
            </div>
            <p className="max-w-sm text-sm text-slate-300">
              Hospitals, manufacturers, housing societies and corporates who depend on our teams every single day.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 sm:p-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent" />

            <div className="flex w-max animate-marquee gap-4 sm:gap-6" aria-hidden="true">
              {marqueeClients.map((client, index) => {
                const title = client.logo?.description ?? client.name;

                return (
                  <figure
                    key={`${client.name}-${index}`}
                    className="flex h-20 min-w-[150px] items-center justify-center rounded-2xl bg-white/10 px-4 py-3 shadow-lg shadow-slate-900/40 backdrop-blur sm:h-24 sm:min-w-[180px] sm:px-6 sm:py-4"
                    title={title}
                  >
                    {client.logo?.src ? (
                      <img
                        src={client.logo.src}
                        alt={`${client.name} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-center text-sm font-semibold text-white">{client.name}</span>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
