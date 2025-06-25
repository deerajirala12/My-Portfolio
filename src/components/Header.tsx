import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'dark-nav-scrolled' : 'dark-nav'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            Deeraj Irala
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </button>
            <a
              href="#" // You can update this URL to your resume link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-300 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-300 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <a
                href="#" // You can update this URL to your resume link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 w-fit"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left btn-primary px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 w-fit"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;