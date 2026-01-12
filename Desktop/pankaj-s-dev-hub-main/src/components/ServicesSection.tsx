import { 
  Palette, 
  Code2, 
  Layers, 
  Smartphone,
  Server,
  Database,
  Zap,
  GitBranch
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI UX Design',
    description: 'Creating intuitive, user-centered designs that enhance overall experience and engagement.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, pixel-perfect interfaces with React.js and modern CSS frameworks.',
    color: 'bg-orange-100 text-orange-600',
    featured: true,
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'End-to-end web applications using MongoDB, Express, React, and Node.js.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Server,
    title: 'Backend & API',
    description: 'Building robust REST APIs and server-side logic with Node.js and Express.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing and managing MongoDB and MySQL databases efficiently.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description: 'Performance tuning, debugging, and improving load times for better UX.',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background decorations */}
        <div className="absolute left-10 top-0 w-16 h-16 border-4 border-secondary/20 rounded-full" />
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full border-4 border-secondary/20 animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-10 w-8 h-8 bg-yellow rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-secondary rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute -right-40 top-1/3 w-56 h-56 bg-secondary/10 shape-blob animate-spin-slow" />
        <div className="absolute bottom-10 left-1/3 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="text-center mb-16 relative">
          <p className="section-label">SERVICES</p>
          <h2 className="section-title">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Comprehensive web development services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card rounded-2xl p-8 card-hover border border-border/50 group ${
                service.featured ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Credibility */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Backed by certifications from{' '}
            <span className="font-semibold text-foreground">AICTE</span>,{' '}
            <span className="font-semibold text-foreground">EY GDS</span>,{' '}
            <span className="font-semibold text-foreground">IBM SkillsBuild</span>,{' '}
            <span className="font-semibold text-foreground">Edunet Foundation</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;