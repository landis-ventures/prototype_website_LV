"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-dark-900 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left side, always anchored to left edge */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LV</span>
            </div>
            <div className="font-bold text-xl text-white">
              Landis Ventures
            </div>
          </Link>

          {/* Right side group: Navigation + CTA Button */}
          <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
            {/* Navigation Links */}
            <Link 
              href="/services" 
              className="text-white hover:text-primary-400 font-medium transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className="text-white hover:text-primary-400 font-medium transition-colors duration-300"
            >
              Our Process
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-primary-400 font-medium transition-colors duration-300"
            >
              About
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-300"
            >
              Get a Quote
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
              href="/services" 
              className="block text-white hover:text-primary-400 font-medium transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className="block text-white hover:text-primary-400 font-medium transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link 
              href="/about" 
              className="block text-white hover:text-primary-400 font-medium transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="block w-full bg-primary-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}