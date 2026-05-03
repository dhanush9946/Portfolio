import React from 'react';
import { ArrowRight } from 'lucide-react';
import ShinyText from './ShinyText';
import ScrambledText from './ScrambledText';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-background overflow-hidden flex items-center justify-center font-sans">
      
      {/* Huge Outline Text Background with Shiny Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden pt-32 px-8">
        <h1 className="text-[13vw] font-bold whitespace-nowrap opacity-40 select-none tracking-tighter" style={{ transform: 'translate(5%, 15%)' }}>
          <ShinyText 
            text="DHANUSH" 
            speed={3} 
            color="rgba(255, 255, 255, 0.1)" 
            shineColor="#FFFFFF" 
            className="text-outline-thick"
          />
        </h1>
      </div>

      {/* Central Striped Ellipse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-striped rounded-[50%] opacity-40 z-0"></div>

      {/* Main Content Overlay */}
      <div className="relative w-full h-full max-w-7xl mx-auto p-8 md:p-12 z-10 flex flex-col justify-between">
        
        {/* Top Section */}
        <div className="flex justify-between items-start mt-24 md:mt-32">
          {/* Top Left */}
          <div className="text-gray-400 text-sm md:text-base space-y-2 tracking-widest font-medium z-10">
            <p>NAME: DHANUSH V</p>
            <p>ROLE: SOFTWARE DEVELOPER</p>
            <p>EMAIL: <span className="text-white">dhanushpoothanganam5@gmail.com</span></p>
            <p>PHONE: <span className="text-white">9846388075</span></p>
            <p className="tracking-widest">.....</p>
          </div>
          
          {/* Top Right: Profile Image */}
          <div className="w-32 h-32 md:w-56 md:h-56 rounded-full border-2 border-primary overflow-hidden z-20 grayscale hover:grayscale-0 transition-all duration-500 hidden md:block mt-[-2rem]">
            <img src="/profilePhoto.jpeg" alt="Profile" className="w-full h-full object-cover scale-125 origin-center" />
          </div>
        </div>

        {/* Middle Section: S O F T W A R E  D E V E L O P E R */}
        <div className="flex items-center justify-center relative w-full my-auto">
          <div className="flex items-center gap-4 text-white font-bold tracking-[0.5em] md:tracking-[1em] text-sm md:text-xl relative z-10">
            <ScrambledText 
              radius={80} 
              duration={1} 
              speed={0.5} 
              scrambleChars=".:-_"
              className="inline-block"
            >
              SOFTWARE
            </ScrambledText>
            
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-16 md:w-32 h-[2px] bg-primary"></div>
            </div>

            <ScrambledText 
              radius={80} 
              duration={1} 
              speed={0.5} 
              scrambleChars=".:-_"
              className="text-primary inline-block"
            >
              DEVELOPER
            </ScrambledText>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end mb-8 md:mb-0">
          
          {/* Bottom Left: Contact */}
          <div className="flex items-center gap-6 z-10">
            <div className="text-gray-500 text-xs tracking-widest space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-12 text-right">EMAIL</span>
                <span className="w-8 h-[1px] bg-gray-600"></span>
              </div>
              <a href="mailto:dhanushpoothanganam5@gmail.com" className="text-gray-300 ml-16 hover:text-white transition-colors">
                dhanushpoothanganam5@gmail.com
              </a>
            </div>

            <a 
              href="tel:9846388075" 
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-black transition-colors cursor-pointer group"
              title="Call Me"
            >
              <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="text-gray-500 text-xs tracking-widest space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-600"></span>
                <span>TEL</span>
              </div>
              <a href="tel:9846388075" className="text-gray-300 hover:text-white transition-colors">
                9846388075
              </a>
            </div>
          </div>

          {/* Bottom Right: Clean */}
          <div className="text-right flex flex-col items-end gap-2 z-10 mb-4">
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;