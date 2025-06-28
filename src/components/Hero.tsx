import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  companyName: string;
  tagline: string;
  headline: string;
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ companyName, tagline, headline, onNavigate }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7034666/pexels-photo-7034666.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-blue-200 text-lg font-medium mb-4">{tagline}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl">
            Professional business services with proven expertise across multiple industries. 
            From facility management to travel services, we deliver excellence you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;