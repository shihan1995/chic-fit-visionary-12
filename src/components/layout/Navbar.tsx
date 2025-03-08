
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-fashion-neutral-900 font-display font-semibold text-xl tracking-tight transition-opacity hover:opacity-80"
          >
            stylish
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/style-profile" className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors text-sm">
              Style Profile
            </Link>
            <Link to="/size-guide" className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors text-sm">
              Size Guide
            </Link>
            <Link to="/color-analysis" className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors text-sm">
              Color Analysis
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors">
              <UserCircle size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link 
              to="/style-profile" 
              className="block py-3 text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Style Profile
            </Link>
            <Link 
              to="/size-guide" 
              className="block py-3 text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Size Guide
            </Link>
            <Link 
              to="/color-analysis" 
              className="block py-3 text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Color Analysis
            </Link>
            <div className="flex space-x-6 pt-2">
              <button className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors">
                <ShoppingBag size={20} />
              </button>
              <button className="text-fashion-neutral-800 hover:text-fashion-neutral-600 transition-colors">
                <UserCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
