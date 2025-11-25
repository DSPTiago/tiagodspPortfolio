import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
const WaternetImage = '/assets/WaternetImage.png';
const SaxoBankImage = '/assets/SaxoBankImage.jpg';
const BritishMuseumImage = '/assets/britishmuseum2.webp';
const VfpfImage = '/assets/VfpfImage.png';


interface WorkLink {
  label: string;
  url: string;
}

interface Work {
  id: number;
  title: string;
  summary: string;
  image: string;
  links: WorkLink[];
}

// Add your own project images in the 'image' field below
const works: Work[] = [
  {
    id: 1,
    title: 'Digital Transformation for Public services',
    summary: 'Leading the modernization of Waternet’s digital ecosystem through a unified design system, accessible service flows, and improved information architecture.',
    image: WaternetImage, // Add your image URL here
    links: [
        { label: 'View AWD website', url: 'https://awd.waternet.nl' },
        { label: 'Read more about Waternet', url: 'https://www.waternet.nl' }
    ],
  },
  {
    id: 2,
    title: 'Redesigning Compliance Workflows',
    summary: 'Redesigning complex compliance and due-diligence tools to streamline multi-step workflows and reduce cognitive load. ',
    image: SaxoBankImage, // Add your image URL here
    links: [
        { label: 'Preview Saxo Investor App', url: 'https://www.home.saxo/platforms/saxoinvestor' }
    ],
  },
  {
    id: 3,
    title: 'Designing for Immersive Brand Experiences',
    summary: 'Creating engaging AR-driven and digital brand experiences for global clients. The work combined UX principles, narrative interaction, and rapid prototyping to deliver high-impact campaign microsites and interactive moments for audiences worldwide.',
    image: BritishMuseumImage, // Add your image URL here
    links: [
        { label: 'Explore at the British Museum', url: 'https://www.timeodyssey.org' },
        { label: 'Experience Echo Salford', url: 'https://echosalford.co.uk' }
        ],
  },
    {
    id: 4,
    title: 'Information Architecture for Clarity and Scalability',
    summary: 'Improving the usability of VfPf’s information portal by restructuring the information architecture, simplifying content-heavy pages, and introducing scalable design templates.',
    image: VfpfImage, // Add your image URL here
    links: [
        { label: 'Watch a sneak preview', url: 'https://www.youtube.com/watch?v=r8Z6Fcum_8w' },
        { label: 'Read more about VfPf', url: 'https://www.vfpf.nl' }
        ],
  },
];

export function WorksSection() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl mb-16 text-center">Selected Works</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <div key={work.id} className="group rounded-lg shadow-lg overflow-hidden bg-muted transition-shadow hover:shadow-xl">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">{work.title}</h3>
            <p className="text-[rgb(13,31,26)] mb-4 leading-relaxed">{work.summary}</p>
            
            <div className="flex flex-wrap gap-3">
              {work.links.map((link, index) => (
                <Button key={index} variant="default" asChild className="group/btn">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              ))}
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
