'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Add scroll effect to shrink header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Theme toggle button
  const themeToggleButton = (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle Theme">
      {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  );

  return (
    <header
      className={`sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-opacity-90 shadow-md py-3' : 'bg-opacity-80 py-4'
      } bg-background backdrop-blur-lg`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Title */}
        <Link href="/" className="text-xl font-extrabold">
          <span className="text-2xl text-primary tracking-wide">
            MULUNGUZI SECONDARY SCHOOL LANGUAGE DEPARTMENT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg font-medium">
            {['Subjects', 'News', 'Events', 'Resources', 'Staff'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative group transition-all duration-300"
                >
                  <span className="group-hover:text-primary">{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          {themeToggleButton}
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-4">
          {themeToggleButton}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-20"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            className="bg-white rounded-xl shadow-lg py-6 px-8 space-y-6 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col space-y-4 text-lg font-medium">
              {['Subjects', 'News', 'Events', 'Resources', 'Staff'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 px-4 hover:text-primary hover:bg-gray-100 rounded transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
