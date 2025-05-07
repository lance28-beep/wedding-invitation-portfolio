"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with the section
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-black/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="flex flex-col leading-tight">
                <span className={`text-xl md:text-2xl lg:text-3xl -mb-1 transition-all duration-300 ${scrolled ? 'text-pink-600' : 'text-white'} group-hover:text-pink-400`} style={{lineHeight: '1', fontFamily: 'var(--font-playfair)'}}>
                  Wedding Invitation Naga
                  <span className="inline-block align-middle ml-1 text-pink-200 group-hover:scale-110 transition-transform duration-300" style={{fontSize: '0.4em'}}>
                    {/* Heart accent */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                      <path d="M12 21s-6.5-5.2-9-8.2C-1.5 8.5 2.5 3 7.5 5.5c2.1 1 3.5 3.1 4.5 5.1 1-2 2.4-4.1 4.5-5.1C21.5 3 25.5 8.5 21 12.8c-2.5 3-9 8.2-9 8.2z" fill="#f9c2d1" stroke="#b76e79" strokeWidth="1"/>
                    </svg>
                  </span>
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('#about')} 
              className={`relative px-4 py-2 transition-all duration-300 ${scrolled ? 'text-gray-700 hover:text-pink-700' : 'text-white hover:text-pink-200'}`}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
            <Link 
              href="/portfolio" 
              className={`relative px-4 py-2 transition-all duration-300 ${scrolled ? 'text-gray-700 hover:text-pink-700' : 'text-white hover:text-pink-200'}`}
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link 
              href="/contact" 
              className={`relative px-4 py-2 transition-all duration-300 ${scrolled ? 'text-gray-700 hover:text-pink-700' : 'text-white hover:text-pink-200'}`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-pink-700' : 'text-white hover:text-pink-200'}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-black/80'}`}>
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={() => handleNavClick('#about')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${scrolled ? 'text-gray-700 hover:bg-pink-50 hover:text-pink-700' : 'text-white hover:bg-white/10 hover:text-pink-200'}`}
            >
              About Us
            </button>
            <Link
              href="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${scrolled ? 'text-gray-700 hover:bg-pink-50 hover:text-pink-700' : 'text-white hover:bg-white/10 hover:text-pink-200'}`}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${scrolled ? 'text-gray-700 hover:bg-pink-50 hover:text-pink-700' : 'text-white hover:bg-white/10 hover:text-pink-200'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 