import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Services from './components/Services';
import Benefits from './components/Benefits';
import MarketIntelligence from './components/MarketIntelligence';
import Clients from './components/Clients';
import Contact from './components/Contact';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import companyData from './data/company.json';

function App() {
  const { company, services, assets } = companyData;
  const gallery = assets?.gallery;

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
        tagline={company.tagline}
        logoSrc={assets?.logo}
        onNavigate={handleNavigate}
      />

      <main>
        <section id="home">
          <Hero
            companyName={company.name}
            tagline={company.tagline}
            headline={company.headline}
            highlights={company.highlights ?? []}
            imageAsset={gallery?.hero}
            onNavigate={handleNavigate}
          />
        </section>

        <ClientMarquee clients={company.clients ?? []} />

        <About
          overview={company.overview}
          vision={company.vision}
          mission={company.mission}
          leadership={company.leadership}
          imageAsset={gallery?.team}
        />

        <MissionVision mission={company.mission} vision={company.vision} />

        <Services services={services ?? []} diagramAsset={gallery?.services} />

        <Benefits benefits={company.benefits ?? []} />

        <MarketIntelligence insights={company.marketInsights} />

        <Clients clients={company.clients ?? []} />

        <Contact contact={company.contact} />

        <CtaBanner
          title="Let's work together"
          description="Visit our CBD Belapur office or book a consultation to discover how ZEIGO Services can tailor manpower, housekeeping and security support for your operations."
          contact={company.contact}
          imageAsset={gallery?.cta}
        />
      </main>

      <Footer
        companyName={company.name}
        tagline={company.tagline}
        contact={company.contact}
        logoSrc={assets?.logo}
      />
    </div>
  );
}

export default App;
