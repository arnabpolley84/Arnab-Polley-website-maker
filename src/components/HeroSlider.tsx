import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { HERO_SLIDES } from '../data/portfolioData';

interface HeroSliderProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onExploreWork, onContactClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = HERO_SLIDES.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      aria-label="Hero Showcase"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Lenus-Style Left-to-Right Dark-to-Transparent Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {HERO_SLIDES.map((item, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
                style={{
                  transform: isActive ? 'scale(1.02)' : 'scale(1.08)',
                }}
              />
              {/* LENUS INSPIRED GRADIENT:
                  Dark-to-transparent gradient from the left side toward the right.
                  LEFT: Slightly darker area behind text.
                  CENTER: Gradient gradually becomes transparent.
                  RIGHT: Image remains bright and clearly visible with no dark veil.
              */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 via-45% to-slate-950/15 sm:to-transparent" />
              
              {/* Subtle top & bottom edge softening to seamlessly blend into header and stats */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/90 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div
            key={`badge-${currentSlide}`}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-black/50 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{slide.badge}</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
            <span className="text-slate-400 font-normal capitalize">{slide.highlightTag}</span>
          </div>

          {/* Heading with smooth reveal animation */}
          <h1
            key={`title-${currentSlide}`}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {slide.title}
          </h1>

          {/* Supporting Copy */}
          <p
            key={`sub-${currentSlide}`}
            className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl text-balance drop-shadow animate-in fade-in slide-in-from-bottom-5 duration-500"
          >
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-xl shadow-cyan-950/50 hover:shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 border border-slate-700/80 hover:border-slate-500 backdrop-blur-md shadow-lg shadow-black/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{slide.secondaryCtaText}</span>
            </button>
          </div>

          {/* Key Value Micro-Proof */}
          <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Verified Client Outcomes
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Production-Grade Security & Performance
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Available for Global Consulting & Contracts
            </span>
          </div>
        </div>
      </div>

      {/* Manual Slideshow Controls (Inspired by City Smiles & Lenus) */}
      <div className="absolute bottom-6 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-3">
        {/* Slide Counter */}
        <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs font-mono font-medium text-slate-300">
          <span className="text-cyan-400 font-bold">0{currentSlide + 1}</span>
          <span className="text-slate-600 mx-1">/</span>
          <span>0{totalSlides}</span>
        </div>

        {/* Previous Button */}
        <button
          id="hero-prev-slide"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white backdrop-blur-md transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          id="hero-next-slide"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white backdrop-blur-md transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators / Progress Bar */}
      <div className="absolute bottom-6 left-4 sm:left-8 lg:left-12 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide
                ? 'w-8 sm:w-12 bg-cyan-400'
                : 'w-2 sm:w-3 bg-slate-700/80 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
