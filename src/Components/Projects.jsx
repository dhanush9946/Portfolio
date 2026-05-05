import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import CardSwap, { Card } from './CardSwap';

const Projects = () => {
  const optimizeCloudinary = (url) => {
    if (url.includes('cloudinary.com')) {
      return url.replace('/upload/', '/upload/f_auto,q_auto/');
    }
    return url;
  };


  const projectsData = [
    {
      title: "CRM: AI-Powered Multi-Tenant SaaS",
      description: "A scalable multi-tenant CRM SaaS platform using Clean Architecture, CQRS (MediatR), and hybrid microservices. Features TenantId-based isolation, JWT refresh tokens, and AI-driven lead scoring.",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1551288049-bb6c9b438a5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      tags: ["ASP.NET Core", "React", "Redis", "Docker", "Azure"],
      githubLink: "https://github.com/dhanush9946/crm-saas-system",
    },
    {
      title: "SPL: Football Management System",
      description: "A comprehensive SaaS-based football tournament platform featuring player auctions, match scheduling, and real-time predictions. Leverages CQRS with MediatR and Dapper for high-performance data operations.",
      images: [
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777995588/prediction_rjg3by.jpg",
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777995587/pointtable_xflcor.png",
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777995587/fixture_q3bpjh.jpg",
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777995587/match_deuwoy.jpg"
      ],
      tags: ["ASP.NET Core", "React", "Dapper", "MediatR", "SQL Server"],
      githubLink: "https://github.com/dhanush9946/SPL-Server",
    },
    {
      title: "ZYRA: E-Commerce Web App",
      description: "Production-ready e-commerce platform with product management, shopping cart, and JWT-authenticated APIs with RBAC. Deployed on AWS EC2 with RDS connectivity and CI/CD pipelines.",
      images: [
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777996439/Screenshot_2026-03-02_163131_lcvjtl.png",
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777996436/Screenshot_2026-02-02_191217_dslvmh.png",
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777996436/Screenshot_2026-03-02_163035_gdbr50.png",
        "https://res.cloudinary.com/dq65yuqob/image/upload/v1777996436/Screenshot_2026-02-02_191138_sh1q9g.png"
      ],
      tags: ["ASP.NET Core", "React", "EF Core", "AWS EC2", "GitHub Actions"],
      githubLink: "https://github.com/dhanush9946/ECommerce-Backend",
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems.
          </p>
        </div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Project Images with CardSwap */}
              <div className="w-full md:w-1/2 flex justify-center items-center py-10">
                <div className="relative w-[300px] h-[200px] md:w-[480px] md:h-[300px]">
                  <CardSwap
                    width="100%"
                    height="100%"
                    cardDistance={15}
                    verticalDistance={15}
                    delay={4500}
                    pauseOnHover={true}
                  >
                    {project.images.map((img, imgIdx) => (
                      <Card key={imgIdx} customClass="overflow-hidden shadow-2xl border-white/10">
                        <img 
                          src={optimizeCloudinary(img)} 
                          alt={`${project.title} screenshot ${imgIdx + 1}`} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop";
                          }}
                        />
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">{project.title}</h3>
                <div className="glass p-6 rounded-xl mb-6 shadow-xl relative z-10 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <li 
                      key={tagIndex}
                      className="text-sm font-medium text-secondary bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20"
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
                    className="flex items-center space-x-2 text-white hover:text-primary transition min-w-[120px] bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-primary/50"
                  >
                    <FaGithub size={20} />
                    <span className="font-semibold">Code</span>
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-secondary transition bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-secondary/50"
                    >
                      <ExternalLink size={20} />
                      <span className="font-semibold">Live Preview</span>
                    </a>
                  )}
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
