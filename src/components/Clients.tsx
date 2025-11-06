import React from 'react';

interface ClientsProps {
  clients: string[];
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
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
            <div
              key={client}
              className="flex min-h-[110px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-4 text-center text-sm font-semibold text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
