import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { WorksSection } from './components/WorksSection';
import { BrandsSection } from './components/BrandsSection';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Add your own hero background image URL below */}
      <HeroSection backgroundImage="/src/assets/hero_banner.jpeg" />
      <WorksSection />
      <BrandsSection />
      <AboutSection />
      <ContactFooter />
    </div>
  );
}
