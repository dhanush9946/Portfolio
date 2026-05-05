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
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-24 md:mt-32 gap-8 md:gap-0">
          {/* Top Left: Details */}
          <div className="text-gray-400 text-xs md:text-base space-y-2 tracking-widest font-medium z-10 text-center md:text-left order-2 md:order-1">
            <p>NAME: DHANUSH V</p>
            <p>ROLE: SOFTWARE DEVELOPER</p>
            <p className="hidden md:block text-[10px] opacity-50 uppercase tracking-[0.3em] mt-4">Contact Gateway // Active</p>
            <p className="text-white break-all md:break-normal">dhanushpoothanganam5@gmail.com</p>
            <p className="text-white">9846388075</p>
            <p className="tracking-widest">.....</p>
          </div>
          
          {/* Top Right: Profile Image */}
          <div className="w-32 h-32 md:w-56 md:h-56 rounded-full border-2 border-primary overflow-hidden z-20 grayscale hover:grayscale-0 transition-all duration-500 block mt-0 md:mt-[-2rem] order-1 md:order-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
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
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 gap-4 md:gap-0">
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 z-10 text-center md:text-left">
            <a href="mailto:dhanushpoothanganam5@gmail.com" className="text-gray-300 text-xs md:text-sm hover:text-white transition-colors break-all md:break-normal">
              dhanushpoothanganam5@gmail.com
            </a>
            <span className="hidden md:block w-8 h-[1px] bg-gray-600"></span>
            <a href="tel:9846388075" className="text-gray-300 text-xs md:text-sm hover:text-white transition-colors">
              9846388075
            </a>
          </div>

          {/* Bottom Right: Clean */}
          <div className="text-right flex flex-col items-end gap-2 z-10 mb-4 hidden md:flex">
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;