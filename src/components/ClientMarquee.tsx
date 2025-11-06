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
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">Trusted Collaborations</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Partners who rely on ZEIGO Services
              </h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm text-slate-300 lg:block">
              Upload each client logo to the paths listed in the data file to replace these placeholders and keep the carousel on brand.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent" />

            <div className="flex w-max animate-marquee gap-6" aria-hidden="true">
              {marqueeClients.map((client, index) => {
                const title = client.logo
                  ? `Replace with logo stored at ${client.logo.storagePath}${client.logo.description ? ` – ${client.logo.description}` : ''}`
                  : undefined;

                return (
                  <figure
                    key={`${client.name}-${index}`}
                    className="flex h-24 min-w-[180px] items-center justify-center rounded-2xl bg-white/10 px-6 py-4 shadow-lg shadow-slate-900/40 backdrop-blur"
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
                      <div className="flex h-full w-full flex-col items-center justify-center text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                          Client Logo
                        </span>
                        <span className="mt-2 text-sm font-semibold text-white">{client.name}</span>
                        {client.logo?.storagePath && (
                          <span className="mt-2 text-[10px] text-slate-200/70">
                            {client.logo.storagePath.replace('public/', '')}
                          </span>
                        )}
                      </div>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-slate-300 lg:hidden">
            Upload each logo file to the matching path (for example <code className="rounded bg-white/10 px-1">public/assets/clients/bmx-cinemas.png</code>) and update the data file when assets are ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
