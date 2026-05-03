import { Code2, Server, Database, Smartphone, PenTool, Layout } from 'lucide-react';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-primary" />,
      skills: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML5 & CSS3"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-primary" />,
      skills: ["ASP.NET Core", "C#", "MediatR (CQRS)", "Clean Architecture", "REST API Design", "Microservices"]
    },
    {
      title: "Database & Data",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: ["SQL Server", "Dapper", "EF Core", "Redis", "Amazon RDS", "Multi-Tenant SaaS"]
    },
    {
      title: "Tools & Cloud",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      skills: ["AWS & Azure", "Docker", "Git & GitHub", "GitHub Actions", "Vercel & Render", "Jira & ClickUp"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here is a summary of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-8 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-3 mt-auto">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
