
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/90 backdrop-blur-lg shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white tracking-tight">
            ONE<span className="text-primary">BUILD</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#app" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            The App
          </a>
          <a href="#benefits" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Benefits
          </a>
          <div className="flex items-center space-x-3">
            <a 
              href="https://b.otbapps.com/signIn" 
              className="text-sm font-medium px-4 py-2 rounded-full bg-transparent hover:bg-white/5 text-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
            <Link 
              to="/register" 
              className="text-sm font-medium px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-all"
            >
              Create Account
            </Link>
          </div>
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-white/10 animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#app" 
              className="text-sm font-medium text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              The App
            </a>
            <a 
              href="#benefits" 
              className="text-sm font-medium text-white/80 hover:text-white py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="https://b.otbapps.com/signIn"
                className="text-sm font-medium px-4 py-3 rounded-full border border-white/20 text-center hover:bg-white/5 text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign In
              </a>
              <Link 
                to="/register" 
                className="text-sm font-medium px-4 py-3 rounded-full bg-primary hover:bg-primary/90 text-center text-white transition-all"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
