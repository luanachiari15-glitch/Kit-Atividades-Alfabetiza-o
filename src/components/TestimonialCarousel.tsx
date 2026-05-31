/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIAL_IMAGES = [
  { id: 't-1', url: 'https://i.ibb.co/QvxcDDyv/Whats-App-Image-2026-05-31-at-18-14-15.jpg', alt: 'Depoimento de Mãe - Alfabetização Kit' },
  { id: 't-new', url: 'https://i.ibb.co/7xkgdqRF/Whats-App-Image-2026-05-31-at-19-36-25.jpg', alt: 'Depoimento WhatsApp Novidade' },
  { id: 't-2', url: 'https://i.ibb.co/QFTMwv6t/Whats-App-Image-2026-05-31-at-18-22-56.jpg', alt: 'Feedback Whastapp Positivo 2a feira' },
  { id: 't-3', url: 'https://i.ibb.co/QvF3Cn4Y/Whats-App-Image-2026-05-31-at-18-46-54.jpg', alt: 'Experiência de Sucesso com o material' },
  { id: 't-4', url: 'https://i.ibb.co/RThzg8v9/Whats-App-Image-2026-05-31-at-18-53-22.jpg', alt: 'Depoimento Prático' },
  { id: 't-5', url: 'https://i.ibb.co/XkFXtzdW/Whats-App-Image-2026-05-31-at-19-41-36.jpg', alt: 'Novo Depoimento WhatsApp' }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIAL_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIAL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 relative group select-none">
      
      {/* Testimonial slider frame */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] w-full max-w-md mx-auto bg-transparent rounded-3xl overflow-hidden shadow-sm transition-all duration-300 transform md:hover:scale-[1.01]">
        
        {/* Images */}
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
          {TESTIMONIAL_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              className={`absolute inset-0 transition-all duration-500 ease-out flex items-center justify-center bg-transparent ${
                idx === currentIndex 
                  ? 'opacity-100 translate-x-0 scale-100 z-10' 
                  : idx < currentIndex 
                    ? 'opacity-0 -translate-x-full scale-95 z-0' 
                    : 'opacity-0 translate-x-full scale-95 z-0'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Floating Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/30 hover:bg-slate-900/60 text-white backdrop-blur-xs transition-all cursor-pointer z-20 border border-white/10 active:scale-95"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/30 hover:bg-slate-900/60 text-white backdrop-blur-xs transition-all cursor-pointer z-20 border border-white/10 active:scale-95"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>

      {/* Underneath Dot indicators and helpers */}
      <div className="flex flex-col items-center mt-5 space-y-2">
        <div className="flex items-center space-x-2">
          {TESTIMONIAL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-6 bg-emerald-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Ver depoimento ${idx + 1}`}
            />
          ))}
        </div>
        <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest pt-1.5 flex items-center space-x-1">
          <span>👈 deslize ou use as setas para ler todos 👉</span>
        </span>
      </div>

    </div>
  );
}
