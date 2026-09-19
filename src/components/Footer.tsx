import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Identity & Subtitle */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-400 font-mono font-extrabold text-sm">
                AP
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block">
                  ARNAB POLLEY
                </span>
                <span className="text-xs text-cyan-400 font-medium tracking-wide">
                  Senior Software Engineer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm pt-2 italic">
              “Building digital experiences for real businesses.”
            </p>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              10+ years delivering production e-commerce, custom web apps, healthcare websites, and high-performance system integrations.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Contact Information
            </span>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="mailto:polleyarnab1@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  polleyarnab1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="tel:+919051024827"
                  className="hover:text-cyan-400 transition-colors font-mono"
                >
                  +91 9051024827
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Kolkata, W.B., India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Arnab Polley. All rights reserved. Portfolio showcase for prospective clients and partners.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
