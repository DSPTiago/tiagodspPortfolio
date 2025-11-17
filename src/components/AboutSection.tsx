import { GraduationCap, Briefcase, Wrench } from 'lucide-react';

export function AboutSection() {
  const education = [
    {
      degree: 'Bachelor of Fine Arts in Graphic Design',
      school: 'Design University',
      year: '2018 - 2022',
    },
    {
      degree: 'UX/UI Design Certification',
      school: 'Digital Design Institute',
      year: '2023',
    },
  ];

  const experiences = [
    {
      role: 'Senior Product Designer',
      company: 'Creative Studio Inc.',
      period: '2023 - Present',
    },
    {
      role: 'UI/UX Designer',
      company: 'Digital Agency Co.',
      period: '2022 - 2023',
    },
    {
      role: 'Junior Designer',
      company: 'Startup Labs',
      period: '2021 - 2022',
    },
  ];

  const skills = [
    'Figma',
    'Adobe Creative Suite',
    'Sketch',
    'Prototyping',
    'UI/UX Design',
    'Brand Identity',
    'Typography',
    'Design Systems',
    'Webflow',
    'Framer',
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl mb-12 text-center">About Me</h2>
      
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <p className="text-lg text-[rgb(13,31,26)] leading-relaxed">
          I'm a passionate creative designer with over 5 years of experience in crafting beautiful, 
          user-centered digital experiences. My work focuses on creating meaningful connections between 
          brands and their audiences through thoughtful design solutions that blend aesthetics with functionality.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6" />
            <h3 className="text-2xl">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h4 className="mb-1">{edu.degree}</h4>
                <p className="text-[rgb(13,31,26)]">{edu.school}</p>
                <p className="text-sm text-[rgb(13,31,26)]">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-6 w-6" />
            <h3 className="text-2xl">Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index}>
                <h4 className="mb-1">{exp.role}</h4>
                <p className="text-[rgb(13,31,26)]">{exp.company}</p>
                <p className="text-sm text-[rgb(13,31,26)]">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="h-6 w-6" />
            <h3 className="text-2xl">Skills & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
