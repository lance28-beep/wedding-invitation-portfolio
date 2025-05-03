"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
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
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-pink-600">Wedding</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => handleNavClick('#features')} className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Features</button>
            <button onClick={() => handleNavClick('#portfolio')} className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Portfolio</button>
            <button onClick={() => handleNavClick('#pricing')} className="text-gray-600 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</button>
            <Link href="/contact" className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 