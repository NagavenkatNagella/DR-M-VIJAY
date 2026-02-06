import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Youtube, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils'; // Assuming we'll add a utility or just use template literals

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Patents', href: '#patents' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/dr-vijay-m-a894311b9", hoverColor: "hover:text-blue-400" },
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/@dr.vijaycse", hoverColor: "hover:text-red-500" },
    { icon: <BookOpen size={20} />, href: "https://scholar.google.com/citations?user=nhYF56UAAAAJ&hl=en", hoverColor: "hover:text-green-400" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'
        }`}
    >
      <nav className="container mx-auto px-4">
        <div className={`glass h-16 px-6 rounded-2xl flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/40 border-white/20' : 'bg-transparent border-transparent'
          }`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            Dr. <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4">VIJAY</span> M
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 border-l border-white/10 pl-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className={`text-white/40 ${link.hoverColor} transition-colors`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden glass p-2 rounded-lg text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden mt-4 glass p-6 rounded-2xl space-y-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-white/80 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-white/10">
                {socialLinks.map((link, idx) => (
                  <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/40">
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;