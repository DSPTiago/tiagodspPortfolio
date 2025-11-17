
export function BrandsSection() {
  const brands = [
    { name: 'Waternet', logo: '/assets/WaternetLogo.png', url: 'https://www.waternet.nl' },
    { name: '1Up Studios', logo: '/assets/1upstudios_logo.jpeg', url: 'https://www.1upstudios.tech' },
    { name: 'Saxo Bank', logo: '/assets/SaxoLogo.webp', url: 'https://www.home.saxo' },
    { name: 'Netcompany', logo: '/assets/NetcompanyLogo.png', url: 'https://netcompany.com' },
    { name: 'Lipton', logo: '/assets/LiptonLogo.png', url: 'https://www.liptonicetea.nl/home.html' },
    { name: 'VFPF', logo: '/assets/VfPfLogo.jpg', url: 'https://www.vfpf.nl' },
    { name: 'Rituals', logo: '/assets/RitualsLogo.png', url: 'https://www.rituals.com/en-us/home' },
    { name: 'British Museum', logo: '/assets/britishmuseumLogo.webp', url: 'https://www.britishmuseum.org' },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl mb-16 text-center">Trusted By</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-8 bg-background rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

