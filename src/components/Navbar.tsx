"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
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
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/', type: 'link' },
    { label: 'Portfolio', href: '/portfolio', type: 'link' },
    { label: 'Contact', href: '/contact', type: 'link' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-black/40'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="flex flex-col leading-tight">
                <span className={`wedding-script text-xl md:text-2xl lg:text-3xl -mb-1 transition-colors duration-300 ${scrolled ? 'text-pink-600' : 'text-white'}`} style={{lineHeight: '1'}}>
                  Wedding Templates
                  <span className="inline-block align-middle ml-1 text-pink-200" style={{fontSize: '0.4em'}}>
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-pink-700' : 'text-white hover:text-pink-200'
                } ${pathname === item.href ? (scrolled ? 'text-pink-700 font-medium' : 'text-pink-200 font-medium') : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-pink-700' : 'text-white hover:text-pink-200'}`}
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
        <div className={`md:hidden border-t border-gray-200 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-black/80'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-pink-700' : 'text-white hover:text-pink-200'
                } ${pathname === item.href ? (scrolled ? 'text-pink-700 font-medium' : 'text-pink-200 font-medium') : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 