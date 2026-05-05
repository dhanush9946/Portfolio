import { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = ({ onChatOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
            Portfolio<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onChatOpen}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00e5ff] hover:bg-[#00e5ff]/90 text-[#0a192f] text-sm font-black transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] animate-pulse-slow relative overflow-hidden"
            >
              <Bot size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Ask My AI</span>
              <span className="text-[10px] bg-black/10 px-1.5 py-0.5 rounded-md font-black tracking-tighter">BETA</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/5 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-4 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { onChatOpen(); setIsMenuOpen(false); }}
              className="w-full py-4 rounded-xl bg-[#00e5ff] text-[#0a192f] font-black flex items-center justify-center gap-2 mt-4 transition-all active:scale-95 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            >
              <Bot size={22} />
              Ask My AI
            </button>
            <div className="pt-6 flex space-x-6 justify-center">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
