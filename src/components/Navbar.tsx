import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'what-i-build',
        'featured',
        'work',
        'healthcare',
        'ecommerce',
        'industries',
        'experience',
        'skills',
        'certifications',
        'education',
        'contact',
      ];

      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-900/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors shadow-inner">
              <span className="font-extrabold text-base tracking-wider font-mono">AP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                ARNAB POLLEY
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide whitespace-nowrap">
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation - STRICTLY SINGLE LINE */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center space-x-1 2xl:space-x-2 shrink-0"
          >
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.id ||
                (link.id === 'work' &&
                  ['work', 'featured', 'what-i-build', 'healthcare', 'ecommerce'].includes(
                    activeSection
                  ));

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs 2xl:text-sm font-medium rounded-md whitespace-nowrap transition-colors relative ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="header-cta-button"
              onClick={onContactClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-200 transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Let’s Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4 border-b border-slate-900 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-900/50'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Project</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
