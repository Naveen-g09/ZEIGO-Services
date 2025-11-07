import React from 'react';
import type { ClientProfile } from '../types/company';

interface ClientsProps {
  clients: ClientProfile[];
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-700">Our Esteemed Clients</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by leaders across industries</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600">
            Proud to partner with hospitals, manufacturing units, corporate campuses and residential communities who rely on ZEIGO
            Services for dependable manpower support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <figure
              key={client.name}
              className="flex flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-20 w-full items-center justify-center">
                {client.logo?.src ? (
                  <img
                    src={client.logo.src}
                    alt={`${client.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm font-semibold text-slate-700">{client.name}</span>
                )}
              </div>
              <figcaption className="mt-5 text-sm font-semibold text-slate-700">{client.name}</figcaption>
              {client.industry ? (
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{client.industry}</p>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
