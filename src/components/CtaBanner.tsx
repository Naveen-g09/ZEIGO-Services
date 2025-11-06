import React from 'react';
import { Mail, MapPin, Phone, ArrowRightCircle } from 'lucide-react';
import ImagePlaceholder, { GalleryAsset } from './ImagePlaceholder';

interface ContactInfo {
  address: string;
  mobiles: string[];
  email: string;
}

interface CtaBannerProps {
  title: string;
  description: string;
  contact: ContactInfo;
  imageAsset?: GalleryAsset;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ title, description, contact, imageAsset }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-600/40 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-300">Let's work together</p>
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="text-base leading-relaxed text-slate-200">{description}</p>

            <div className="grid gap-4 sm:grid-cols-3">
              {contact.mobiles.map((mobile) => (
                <div key={mobile} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                  <Phone className="h-4 w-4" />
                  {mobile}
                </div>
              ))}
            </div>

            <div className="grid gap-6 rounded-3xl bg-white/10 p-6 text-sm backdrop-blur">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-200" />
                <p className="leading-relaxed text-slate-100">{contact.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-200" />
                <a href={`mailto:${contact.email}`} className="text-sky-200 hover:underline">
                  {contact.email}
                </a>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg shadow-amber-500/30 transition-transform duration-200 hover:-translate-y-1 hover:bg-amber-300"
              >
                Book a consultation
                <ArrowRightCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-blue-500/20 blur-3xl" />
            <ImagePlaceholder asset={imageAsset} alt="Office exterior" className="min-h-[320px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
