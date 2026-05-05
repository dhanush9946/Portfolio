import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface/50 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          {/* Brand */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Portfolio<span className="text-primary">.</span></h3>
            <p className="text-gray-400 max-w-xs">
              Building beautiful, interactive user interfaces and modern web applications.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Socials</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
                    <FaGithub size={16} /> <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors flex items-center space-x-2">
                    <FaLinkedin size={16} /> <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-[#1DA1F2] transition-colors flex items-center space-x-2">
                    <FaTwitter size={16} /> <span>Twitter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Dhanush V. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
