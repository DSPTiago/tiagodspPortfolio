import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className={`text-2xl transition-colors ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}>
            TDSP
          </span>
        </div>

        {/* Contact Button */}
        <Button
          onClick={scrollToContact}
          variant={isScrolled ? 'default' : 'secondary'}
          className={`transition-all ${
            !isScrolled ? 'bg-white text-[#0D1F1A] hover:bg-white/90' : ''
          }`}
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}
