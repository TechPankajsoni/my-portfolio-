import { Code2, Database, Layout, Server, GitBranch, Brain, Cpu } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Basic C', 'Basic C++', 'Basic Java', 'Python', 'JavaScript'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Layout,
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'React.js', 'Bootstrap', 'Tailwind'],
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MERN Stack'],
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['Basic MongoDB', 'Basic MySQL', 'Basic SQL'],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: GitBranch,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Brain,
    title: 'Concepts',
    skills: ['DSA', 'Basic OOP', 'Basic Debugging', 'Problem Solving'],
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Cpu,
    title: 'AI-Assisted Coding',
    skills: ['GitHub Copilot', 'ChatGPT', 'Claude', 'Cursor', 'Codeium', 'Sourcey', 'Snyk AI/DeepCode', '....'],
    color: 'bg-indigo-100 text-indigo-600',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label">SKILLS</p>
          <h2 className="section-title">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;