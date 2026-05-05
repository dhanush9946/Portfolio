import { Bot } from 'lucide-react';
import Orb from './Orb';

const FloatingBot = ({ onClick }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[90] flex items-center gap-4">
      {/* Tooltip */}
      <div className="hidden md:block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-white text-sm font-medium shadow-2xl animate-fade-in">
        Have a question? <span className="text-primary">Let's Talk!</span>
      </div>

      <button 
        onClick={onClick}
        className="group relative w-16 h-16 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20"
      >
        <div className="absolute inset-0 bg-black">
          <Orb 
            hue={220} 
            hoverIntensity={0.8} 
            rotateOnHover={true} 
            forceHoverState={true}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 pointer-events-none group-hover:scale-110 transition-transform">
          <Bot size={28} />
        </div>
      </button>
    </div>
  );
};

export default FloatingBot;
