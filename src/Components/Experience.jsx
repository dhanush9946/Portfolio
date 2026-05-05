import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import ScrambledText from './ScrambledText';

const Experience = () => {
  const experiences = [
    {
      id: "01",
      role: "Software Developer",
      company: "Kodlar Innovations",
      period: "2026 – Present",
      location: "Kozhikode, Kerala",
      description: [
        "Contributing to the live SPL football management system, building RESTful APIs using ASP.NET Core with Clean Architecture and CQRS.",
        "Implemented CQRS via MediatR for clean separation of commands and queries across API handlers.",
        "Used Dapper for read-optimized queries and Entity Framework Core for transactional writes.",
        "Collaborated in an Agile team with Git branching, pull requests, and code reviews."
      ]
    },
    {
      id: "02",
      role: "Software Development Intern",
      company: "Bridgeon Solutions",
      period: "June 2025",
      location: "Kozhikode, Kerala",
      description: [
        "Developed full-stack web applications using ASP.NET Core Web API and React.js with clean architecture practices.",
        "Optimized database queries using Dapper for read-heavy endpoints, reducing latency and improving throughput.",
        "Deployed and configured applications on AWS and Azure cloud platforms.",
        "Worked in an Agile environment with Git workflows, sprint cycles, and structured code reviews."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Journey</div>
            <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-tight md:leading-none">
              <ScrambledText radius={40} duration={1}>EXPERIENCE</ScrambledText>
            </h2>
          </div>
          <div className="text-gray-500 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
            Building scalable systems and high-performance applications since 2022.
          </div>
        </div>

        {/* Experience Grid */}
        <div className="space-y-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative bg-background hover:bg-white/[0.02] transition-colors duration-500 p-8 md:p-16"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                
                {/* Number & Date */}
                <div className="flex items-start gap-8 lg:w-1/4">
                  <span className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                    {exp.id}
                  </span>
                  <div className="pt-2">
                    <div className="text-white font-bold text-lg mb-1">{exp.period}</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Role & Company */}
                <div className="lg:w-3/4 w-full">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl md:text-5xl font-black text-white mb-2 tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-primary text-xl font-bold tracking-tight">
                        @ {exp.company}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {exp.description.map((item, idx) => (
                      <p key={idx} className="text-gray-400 text-base leading-relaxed border-l border-white/10 pl-6 py-1">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-1000">
                <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Experience;


