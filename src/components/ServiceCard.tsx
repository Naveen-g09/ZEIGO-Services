import React from 'react';
import { Check } from 'lucide-react';

interface Service {
  slug: string;
  title: string;
  summary: string;
  features: string[];
  image: string;
  alt: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getServiceImage = (imageName: string) => {
    // Map service images to appropriate Pexels URLs
      const localImageMap: Record<string, string> = {
      'hospital-facility.png': '/assets/hospital-facility.png',
      'travel-fleet.png': '/assets/travel-fleet.png',
      'hr-payroll.png': '/assets/hr-payroll.png',
      'commercial-security.png': '/assets/commercial-security.png',
      'garden-maintenance.png': '/assets/garden-maintenance.png'
    };
    
    if (localImageMap[imageName]) {
      return localImageMap[imageName];
    }

    
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={getServiceImage(service.image)}
          alt={service.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur">
          ZEIGO
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-blue-700">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>

        <div className="mt-6 flex-1 rounded-2xl bg-slate-50 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Key features</h4>
          <ul className="mt-3 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-3 w-3" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;