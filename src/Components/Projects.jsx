import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: "CRM: AI-Powered Multi-Tenant SaaS",
      description: "A scalable multi-tenant CRM SaaS platform using Clean Architecture, CQRS (MediatR), and hybrid microservices. Features TenantId-based isolation, JWT refresh tokens, and AI-driven lead scoring.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["ASP.NET Core", "React", "Redis", "Docker", "Azure"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "SPL: Football Management System",
      description: "Full-stack football tournament system supporting match scheduling, team statistics, and points table calculation. Implemented CQRS via MediatR and optimized data access with Dapper.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["ASP.NET Core", "React", "Dapper", "MediatR", "SQL Server"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "ZYRA: E-Commerce Web App",
      description: "Production-ready e-commerce platform with product management, shopping cart, and JWT-authenticated APIs with RBAC. Deployed on AWS EC2 with RDS connectivity and CI/CD pipelines.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["ASP.NET Core", "React", "EF Core", "AWS EC2", "GitHub Actions"],
      liveLink: "#",
      githubLink: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems.
          </p>
        </div>

        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition duration-500"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <div className="glass p-6 rounded-xl mb-6 shadow-xl relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <li 
                      key={tagIndex}
                      className="text-sm font-medium text-secondary bg-secondary/10 px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-primary transition min-w-[120px]"
                  >
                    <FaGithub size={20} />
                    <span className="font-semibold">Code</span>
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-secondary transition"
                  >
                    <ExternalLink size={20} />
                    <span className="font-semibold">Live Preview</span>
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

export default Projects;
