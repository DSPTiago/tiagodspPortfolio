import { Button } from './ui/button';

export function Navigation() {

  const scrollToContact = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl text-foreground">
            TDSP
          </span>
        </div>

        {/* Contact Button */}
        <Button
          onClick={scrollToContact}
          variant="default"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}
