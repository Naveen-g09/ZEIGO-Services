import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactDetails {
  address: string;
  email: string;
  mobiles: string[];
}

interface FooterProps {
  companyName: string;
  tagline: string;
  contact: ContactDetails;
  logoSrc?: string;
}

const Footer: React.FC<FooterProps> = ({ companyName, tagline, contact, logoSrc }) => {
  return (
    <footer className="relative mt-24 bg-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-emerald-500" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={`${companyName} logo`}
                  className="h-14 w-14 rounded-full bg-white object-contain shadow-lg ring-2 ring-blue-500/30"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {companyName.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.45em] text-sky-400">{tagline}</p>
                <h3 className="mt-2 text-2xl font-bold">{companyName}</h3>
              </div>
            </div>
            <p className="max-w-xl text-base text-slate-300">
              Professional manpower, housekeeping, patient care, travel and security services crafted for corporate campuses,
              hospitals and residential communities across Maharashtra.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {contact.mobiles.map((mobile) => (
                <div key={mobile} className="rounded-2xl bg-blue-900/30 px-4 py-3 text-sm font-semibold text-slate-200 ring-1 ring-blue-500/20">
                  {mobile}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-[0.25em] text-sky-300">Quick Links</h4>
            <nav className="grid gap-3 text-sm text-slate-300">
              <a className="transition-colors duration-200 hover:text-white" href="#home">
                Home
              </a>
              <a className="transition-colors duration-200 hover:text-white" href="#about">
                About
              </a>
              <a className="transition-colors duration-200 hover:text-white" href="#services">
                Services
              </a>
              <a className="transition-colors duration-200 hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold uppercase tracking-[0.25em] text-sky-300">Reach Us</h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="font-semibold text-white">Direct Lines</p>
                  {contact.mobiles.map((mobile) => (
                    <p key={mobile}>{mobile}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>{contact.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="leading-relaxed">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="font-semibold text-white">Office Hours</p>
                  <p>Monday – Sunday: 9:00 AM – 6:00 PM</p>
                  <p>Open daily with no holidays to support your operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="transition-colors duration-200 hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="transition-colors duration-200 hover:text-white" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;