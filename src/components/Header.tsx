import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  companyName: string;
  tagline: string;
  logoSrc?: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ companyName, tagline, logoSrc, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-50 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={`${companyName} logo`}
                className="h-12 w-12 rounded-full bg-white object-contain shadow-sm ring-1 ring-blue-100"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {companyName.charAt(0)}
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">{companyName}</h1>
              <p className="hidden text-xs font-semibold uppercase tracking-[0.35em] text-blue-700 sm:block">
                {tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border border-blue-100 p-2 text-slate-600 shadow-sm transition-colors duration-200 hover:border-blue-300 hover:text-blue-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="rounded-lg border border-blue-50 bg-white px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;