import { GraduationCap, Briefcase, Wrench } from 'lucide-react';

export function AboutSection() {
  const education = [
     {
      degree: 'Traineeship Information Analyst',
      school: 'YoungCapital Professionals',
      year: '2020',
    },
    {
      degree: 'Bachelor of Interaction Design',
      school: 'Utrecht School of the Arts (HKU)',
      year: '2014 - 2018',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Amsterdam (UVA)',
      year: '2013 - 2014',
    },
  ];

  const experiences = [
    {
      role: 'Senior UX Designer & Information Analyst',
      company: 'Waternet',
      period: '2024 - Present',
    },
    {
      role: 'Senior UX Designer',
      company: '1Up Studios (Arcade XR)',
      period: '2023 - 2024',
    },
    {
      role: 'UX Designer',
      company: 'Saxo Bank',
      period: '2022 - 2023',
    },
    {
      role: 'UX Designer & Information Analyst',
      company: 'Netcompany',
      period: '2020 - 2022',
    },
  ];

  const skills = [
    'UX/UI Design',
    'Strategic Communication',
    'Product Design',
    'Creative vision',
    'Project management',
    'Design Systems',
    'Prototyping',
    'Accessibility',
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl mb-12 text-center">About Me</h2>
      
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <p className="text-lg text-[rgb(13,31,26)] leading-relaxed">
          Senior UX Designer with 7+ years of experience designing and optimising digital products for fintech, XR, and public sector clients. Proven ability to lead holistic user experiences strategies across B2B, Saas and CRM platforms with strong feature consistency. Skilled at shaping product strategy in complex, cross-functional environments and aligning design with business and leadership goals. Experienced in AR/AI-enhanced platforms and data-driven design. Passionate about inclusive and sustainable design that balances user needs with business goals.
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
