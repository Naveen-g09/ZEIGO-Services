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
            Proud to partner with hospitals, manufacturing units, corporate campuses and residential communities who rely on
            ZEIGO Services for dependable manpower support.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-20 items-center justify-center rounded-2xl bg-white shadow-inner">
                {client.logo?.src ? (
                  <img
                    src={client.logo.src}
                    alt={`${client.name} logo`}
                    className="max-h-[60px] w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex w-full flex-col items-center justify-center text-center">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">Logo Placeholder</span>
                    <span className="mt-1 text-sm font-semibold text-slate-700">{client.name}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{client.name}</h3>
                {client.industry && <p className="mt-2 text-sm text-slate-600">{client.industry}</p>}
              </div>

              {client.logo?.storagePath && (
                <p className="mt-4 text-[11px] text-slate-500">
                  Upload logo:&nbsp;
                  <span className="font-mono text-slate-700">{client.logo.storagePath.replace('public/', '')}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
