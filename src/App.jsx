import { useState } from 'react';
import { Bot } from 'lucide-react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ChatBot from './Components/ChatBot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background radial gradient for depth */}
      <div className="fixed inset-0 min-h-screen w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface via-background to-background pointer-events-none -z-10"></div>
      
      <Navbar onChatOpen={() => setIsChatOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Chat Button (Mobile Only) */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#00e5ff] text-[#0a192f] rounded-full shadow-[0_0_25px_rgba(0,229,255,0.5)] flex items-center justify-center animate-bounce active:scale-90 transition-all border-2 border-white/20"
          aria-label="Open Chat"
        >
          <Bot size={28} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </button>
      )}

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;