"use client";


import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-dark-900/80 backdrop-blur-sm border-b-2 border-border/60">
      <div className="px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left side, always anchored to left edge */}
          {/* --- 2. This is the updated logo section --- */}
          <Link href="/" className="flex items-center flex-shrink-0 space-x-2">
            {/* SVG Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-layers w-12 h-12 text-blue-500"
            >
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
            </svg>

            {/* Company Name */}
            <div className="font-black text-xl text-white">
                Landis Automation
            </div>
            </Link>

          {/* Right side group: Navigation + CTA Button */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
            {/* Navigation Links */}
            <Link 
              href="/" 
              className={`text-white hover:text-primary-400 font-medium transition-colors duration-300 px-3 py-1 rounded-md ${pathname === '/' ? 'bg-primary-600/90 text-white shadow' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`text-white hover:text-primary-400 font-medium transition-colors duration-300 px-3 py-1 rounded-md ${pathname.startsWith('/services') ? 'bg-primary-600/90 text-white shadow' : ''}`}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className={`text-white hover:text-primary-400 font-medium transition-colors duration-300 px-3 py-1 rounded-md ${pathname.startsWith('/process') ? 'bg-primary-600/90 text-white shadow' : ''}`}
            >
              Our Process
            </Link>
            <Link 
              href="/about" 
              className={`text-white hover:text-primary-400 font-medium transition-colors duration-300 px-3 py-1 rounded-md ${pathname.startsWith('/about') ? 'bg-primary-600/90 text-white shadow' : ''}`}
            >
              About
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-primary-700 to-primary-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-light transition-colors duration-300 flex-shrink-0"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="py-4 space-y-4 border-t border-border/20">
            <Link 
              href="/" 
              className={`block text-white hover:text-primary-400 font-medium transition-colors duration-300 py-2 px-3 rounded-md ${pathname === '/' ? 'bg-primary-600/90 text-white shadow' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block text-white hover:text-primary-400 font-medium transition-colors duration-300 py-2 px-3 rounded-md ${pathname.startsWith('/services') ? 'bg-primary-600/90 text-white shadow' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className={`block text-white hover:text-primary-400 font-medium transition-colors duration-300 py-2 px-3 rounded-md ${pathname.startsWith('/process') ? 'bg-primary-600/90 text-white shadow' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link 
              href="/about" 
              className={`block text-white hover:text-primary-400 font-medium transition-colors duration-300 py-2 px-3 rounded-md ${pathname.startsWith('/about') ? 'bg-primary-600/90 text-white shadow' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="block w-full bg-gradient-to-r from-accent-700 to-accent-500 text-dark-600 font-bold px-6 py-3 rounded-full text-center shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}