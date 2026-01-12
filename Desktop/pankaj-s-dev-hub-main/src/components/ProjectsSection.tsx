import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'Frontend', 'Full Stack', 'Backend'];

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive portfolio showcasing skills and certifications with modern design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'Frontend',
    github: 'https://github.com/TechPankajsoni',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'E-Commerce Product Website',
    description: 'Dynamic product listing with backend routing and database integration.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    category: 'Full Stack',
    github: 'https://github.com/TechPankajsoni',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Notes Manager App',
    description: 'CRUD-based notes application with persistent database storage.',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/TechPankajsoni',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Spotify Clone',
    description: 'Music streaming UI with playlists, audio controls, and playback features.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    category: 'Full Stack',
    github: 'https://github.com/TechPankajsoni',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'Advanced Portfolio',
    description: 'Enhanced UI/UX with smooth animations and optimized performance.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'Frontend',
    github: 'https://github.com/TechPankajsoni',
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full border-4 border-secondary/20 animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-10 w-8 h-8 bg-yellow rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-secondary rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute -left-40 top-1/3 w-56 h-56 bg-secondary/10 shape-blob animate-spin-slow" />
        <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="text-center mb-12">
          <p className="section-label">PORTFOLIO</p>
          <h2 className="section-title">Digital Product Showcases</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project thumbnail placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-foreground/5" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;