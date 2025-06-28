import React from 'react';
import { Target, Eye, Building } from 'lucide-react';

interface AboutProps {
  overview: string;
  vision: string;
  mission: string;
}

const About: React.FC<AboutProps> = ({ overview, vision, mission }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About ZEIGO Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {overview}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Overview */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-6">
              <Building className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Company</h3>
            <p className="text-gray-600 leading-relaxed">
              A professional business service firm with expertise spanning multiple industries, 
              delivering comprehensive solutions tailored to your needs.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-700 rounded-full mb-6">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              {vision}
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-700 rounded-full mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              {mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;