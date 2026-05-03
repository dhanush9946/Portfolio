const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* About Image */}
          <div className="w-full md:w-5/12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Working on laptop placeholder" 
                className="relative rounded-2xl w-full object-cover aspect-[4/5] shadow-2xl"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="w-full md:w-7/12">
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
              A passionate <span className="text-secondary">Software Developer</span> based in India
            </h3>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
              <p>
                I am a Full Stack .NET Developer focused on building scalable and maintainable web applications using ASP.NET Core, React.js, and SQL Server. I follow Clean Architecture and CQRS to design well-structured backend systems with clear separation of concerns.
              </p>
              <p>
                I have experience developing secure and performance-oriented applications, implementing RESTful APIs, JWT-based authentication, role-based access control, and efficient data access strategies using Entity Framework Core and Dapper.
              </p>
              <p>
                I also have exposure to designing systems with a modular approach that can evolve into microservices architecture, along with using Redis for caching and improving application performance.
              </p>
              <p>
                I am familiar with deploying applications using Docker and cloud platforms like AWS and Azure, focusing on building reliable and production-ready systems.
              </p>
              <p>
                I enjoy solving real-world problems through clean code, strong system design, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <h4 className="text-white font-medium mb-1">Name</h4>
                <p className="text-gray-400">Dhanush V</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p className="text-gray-400">dhanushpoothanganam5@gmail.com</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-gray-400">Kerala, India</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Availability</h4>
                <p className="text-primary font-medium">Open to Work</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
