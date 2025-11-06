import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import companyData from './data/company.json';

function App() {
  const { company, services, assets } = companyData;

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        companyName={company.name}
        logoSrc={assets?.logo} 
        onNavigate={handleNavigate}
      />
      
      <main>
        <section id="home">
          <Hero
            companyName={company.name}
            tagline={company.tagline}
            headline={company.headline}
            onNavigate={handleNavigate}
          />
        </section>
        
        <About
          overview={company.overview}
          vision={company.vision}
          mission={company.mission}
        />
        
        <Services services={services} />
        
        <Contact contact={company.contact} />
      </main>
      
      <Footer
        companyName={company.name}
        tagline={company.tagline}
        contact={company.contact}
      />
    </div>
  );
}

export default App;