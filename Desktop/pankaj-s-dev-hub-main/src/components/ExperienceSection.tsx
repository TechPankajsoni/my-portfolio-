import { Lightbulb, ClipboardList, BarChart3, ArrowRight } from 'lucide-react';

const process = [
  {
    icon: Lightbulb,
    title: 'Business Planning',
    description: 'Understanding requirements and creating a strategic roadmap.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: ClipboardList,
    title: 'Design Strategy',
    description: 'Creating wireframes and visual designs that align with goals.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Development & Growth',
    description: 'Building, testing, and iterating for optimal performance.',
    color: 'bg-green-100 text-green-600',
  },
];

const experiences = [
  {
    title: 'SDE Intern',
    company: 'Bluestock Fintech',
    period: 'Nov 2025 – Dec 2025',
    description: 'Worked on software development, debugging, and feature implementation in a fintech-based environment.',
  },
  {
    title: 'MERN Stack Development Intern',
    company: 'Edunet Foundation × EY GDS × AICTE',
    period: 'Feb 2025 – Mar 2025',
    description: 'Worked on full-stack MERN applications, API integration, and performance debugging.',
  },
  {
    title: 'Frontend Web Development Intern',
    company: 'Edunet Foundation × AICTE',
    period: 'Aug 2025 – Sep 2025',
    description: 'Built responsive websites, improved UI/UX, and ensured cross-browser compatibility.',
  },
];

const certifications = [
  {
    title: 'Information Technology Fundamentals',
    issuer: 'IBM SkillsBuild',
    year: '2024',
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'IBM SkillsBuild',
    year: '2024',
  },
  {
    title: 'ChatGPT: Beginners to Advanced',
    issuer: 'Great Learning Academy',
    year: '2024',
  },
  {
    title: 'Geo Data Sharing & Cyber Security',
    issuer: 'ISRO / IIRS',
    year: '2025',
  },
  {
    title: 'MERN Stack Development Internship',
    issuer: 'EY GDS × AICTE',
    year: '2025',
  },
  {
    title: 'Front-End Web Development Internship',
    issuer: 'AICTE × Edunet × IBM SkillsBuild',
    year: '2025',
  },
  {
    title: 'Software Development Engineer (SDE) Internship',
    issuer: 'Bluestock Fintech',
    year: '2025',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-10 top-20 text-pink-400 animate-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Working Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="section-label">PROCESS</p>
            <h2 className="section-title">My Working Process</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={step.title} className="flex items-center gap-4">
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                    <step.icon size={32} />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-[180px]">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block text-primary w-8 h-8 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="text-center mb-12">
            <p className="section-label">EXPERIENCE</p>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="bg-card rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="section-label">CERTIFICATIONS</p>
            <h2 className="section-title">Received Certificates</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-card rounded-2xl p-6 border border-border/50 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium w-fit">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;