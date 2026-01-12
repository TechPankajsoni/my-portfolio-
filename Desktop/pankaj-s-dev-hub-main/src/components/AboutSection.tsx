import { CheckCircle2, Download, Award, Briefcase } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const highlights = [
  {
    icon: Award,
    title: '5+ Complete Projects',
    description: 'Delivered quality web applications with modern technologies.',
  },
  {
    icon: Award,
    title: 'hands-on Internships & Projects',
    description: 'Gained practical experience through real-world applications.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full border-4 border-secondary/20 animate-bounce-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-yellow rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-secondary rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -left-32 bottom-1/4 w-48 h-48 bg-secondary/10 shape-blob animate-spin-slow" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              {/* Main image with decorative border */}
              <div className="relative z-10">
                <img
                  src={profilePhoto}
                  alt="Pankaj Soni"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                {/* Decorative corner accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary rounded-3xl -z-10" />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -left-4 bottom-8 bg-secondary text-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold"></div>
                  <div className="text-sm leading-tight opacity-90">
                    Internships<br />Completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="section-label">ABOUT ME</p>
            <h2 className="section-title mb-6">
              Designing Solutions, Not Just Visuals
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm <span className="text-foreground font-semibold">Pankaj Soni</span>, a BCA Computer Science student 
              with a deep passion for web development. Currently pursuing my degree from 
              Mata Raj Kaur Institute of Engineering and Technology, Rewari (2023–2026).
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I specialize in the MERN stack and modern frontend technologies, building responsive 
              and user-friendly applications that make a real difference.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;