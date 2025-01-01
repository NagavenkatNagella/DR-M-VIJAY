import React from 'react';
import { Menu, X, Linkedin, Youtube, BookOpen, GraduationCap, Award } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Dr. VIJAY M</div>
          
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#publications" className="hover:text-blue-400 transition-colors">Publications</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#patents" className="hover:text-blue-400 transition-colors">Patents</a>
          </div>

          {/* Social links */}
          <div className="hidden md:flex space-x-4">
            <a href="https://linkedin.com/in/dr-vijay-m-a894311b9" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.youtube.com/@dr.vijaycse" target="_blank" rel="noopener noreferrer">
              <Youtube className="hover:text-red-500 transition-colors" />
            </a>
            <a href="https://scholar.google.com/citations?user=nhYF56UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <BookOpen className="hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="block hover:text-blue-400 transition-colors">Experience</a>
            <a href="#publications" className="block hover:text-blue-400 transition-colors">Publications</a>
            <a href="#projects" className="block hover:text-blue-400 transition-colors">Projects</a>
            <a href="#patents" className="block hover:text-blue-400 transition-colors">Patents</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;