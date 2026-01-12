import { Play, Github, Linkedin, Star, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full border-4 border-secondary/20 animate-bounce-slow" />
      <div className="absolute top-1/3 right-1/4 text-primary animate-float">
        <Star className="w-6 h-6 fill-primary" />
      </div>
      <div className="absolute bottom-1/4 left-10 w-4 h-4 bg-yellow rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Large background blob */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 shape-blob" />

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hello, I'm<br />
              <span className="text-foreground">Pankaj Soni</span>, an<br />
              <span className="gradient-text">Entry-Level Full-Stack Web Developer</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Passionate BCA student specializing in MERN stack development. 
              Building responsive, user-friendly web applications with clean code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                Get Started
              </a>
              <a
                href="/PANKAJ_CV.pdf"
                download="PANKAJ_CV.pdf"
                className="btn-secondary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#about"
                className="flex items-center justify-center gap-3 text-foreground font-medium group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Play className="w-4 h-4 text-secondary fill-secondary" />
                </div>
                Watch Intro
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold">5+</div>
                </div>
                <span className="text-sm text-muted-foreground">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Background shape */}
            <div className="absolute inset-0 bg-secondary/20 rounded-full scale-110 shape-wave animate-spin-slow" style={{ animationDuration: '20s' }} />
            
            {/* Main image container */}
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Pankaj Soni"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-background shadow-2xl"
              />
              
              {/* Experience Badge */}
              <div className="absolute -right-4 top-1/4 bg-background rounded-2xl shadow-xl p-4 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-secondary">Hands-on</span>
                  <div className="text-xs text-muted-foreground leading-tight">
                    Experience through<br />Internships & Projects
                  </div>
                </div>
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-primary/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;