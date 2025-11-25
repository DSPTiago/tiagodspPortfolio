interface HeroSectionProps {
  backgroundImage: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with fade effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: scrollOpacity,
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"/>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl mb-4">Tiago DSP</h1>
        <p className="text-2xl md:text-3xl mb-3">Creative Designer</p>
        <p className="text-lg md:text-xl">Transforming problems into possibilities through design</p>
      </div>
    </div>
  );
}
