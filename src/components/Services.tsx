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
  interface IndividualService {
    name: string;
    description: string;
    asset: GalleryAsset;
  }

  const individualServices: IndividualService[] = [
    {
      name: 'Qualified Drivers',
      description: 'Verified drivers available for corporate and personal travel needs.',
      asset: {
        src: '/assets/gallery/specialist-drivers.jpeg',
        storagePath: 'public/assets/gallery/specialist-drivers.jpeg',
        description: "Upload a photo representing on-demand drivers or travel support."
      }
    },
    {
      name: 'Carpenters',
      description: 'Skilled carpenters for repairs, fittings and minor renovations.',
      asset: {
        src: '/assets/gallery/specialist-carpenters.jpg',
        storagePath: 'public/assets/gallery/specialist-carpenters.jpg',
        description: 'Add an image showcasing carpentry work or tools.'
      }
    },
    {
      name: 'Plumbers',
      description: 'On-call plumbers for leak fixes, maintenance and installations.',
      asset: {
        src: '/assets/gallery/specialist-plumbers.jpg',
        storagePath: 'public/assets/gallery/specialist-plumbers.jpg',
        description: 'Use a plumbing-related image for this card.'
      }
    },
    {
      name: 'Electricians',
      description: 'Certified electricians for safe troubleshooting and upgrades.',
      asset: {
        src: '/assets/gallery/specialist-electricians.jpg',
        storagePath: 'public/assets/gallery/specialist-electricians.jpg',
        description: 'Upload an electrical maintenance or safety themed image.'
      }
    },
    {
      name: 'Painters',
      description: 'Experienced painters for touch-ups and planned repainting.',
      asset: {
        src: '/assets/gallery/specialist-painters.jpeg',
        storagePath: 'public/assets/gallery/specialist-painters.jpeg',
        description: 'Add a painting/renovation themed image for this service.'
      }
    }
  ];

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

        {individualServices.length > 0 && (
          <div className="mt-20 rounded-[2.5rem] border border-slate-200 bg-slate-50 p-10 shadow-inner">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-700">Specialist Support</p>
                <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">On-demand experts for every facility need</h3>
                <p className="text-base leading-relaxed text-slate-600">
                  Extend your manpower program with certified drivers, carpenters, plumbers, electricians and painters. These
                  dedicated specialists integrate with your existing ZEIGO team to solve urgent requests and planned upgrades
                  without compromising safety or compliance.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {individualServices.map((service) => (
                  <div key={service.name} className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md">
                    <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-sky-800 p-5 text-white shadow-inner">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">Image Placeholder</p>
                      <p className="mt-3 text-sm text-white/80">{service.asset.description}</p>
                      <p className="mt-4 text-[11px] text-white/80">
                        Upload at
                        <span className="mt-1 block font-mono text-xs text-white">{service.asset.storagePath.replace('public/', '')}</span>
                      </p>
                    </div>
                    <h4 className="mt-6 text-lg font-semibold text-slate-900">{service.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
