import React from 'react';
import ServiceCard from './ServiceCard';
import ImagePlaceholder, { GalleryAsset } from './ImagePlaceholder';

interface Service {
  slug: string;
  title: string;
  summary: string;
  features: string[];
  image: string;
  alt: string;
}

interface ServicesProps {
  services: Service[];
  diagramAsset?: GalleryAsset;
}

const Services: React.FC<ServicesProps> = ({ services, diagramAsset }) => {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-700">Our Services</p>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Comprehensive manpower solutions under one roof</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                From facility management to specialised patient care, our teams combine discipline, empathy and operational rigor.
                Explore the core services we deliver for hospitals, corporate offices, residential communities and travel desks.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-[2.5rem] border border-blue-100 bg-slate-50 p-6 shadow-inner">
                <h3 className="text-lg font-semibold text-slate-900">Service coverage map</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Visualise how ZEIGO Services connects housekeeping, security, travel, pantry staff and patient care into a single,
                  reliable support system. Replace this placeholder with your brochure graphic to maintain brand consistency.
                </p>
              </div>
              <ImagePlaceholder asset={diagramAsset} alt="ZEIGO service ecosystem" className="min-h-[360px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;