/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface WorksheetPage {
  title: string;
  category: string;
  themeColor: string;
  badge: string;
  emoji: string;
  svgContent: () => any;
  phrases: string[];
}

export default function InteractiveVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const pages: WorksheetPage[] = [
    {
      title: 'Silabário Simples',
      category: 'Caderno 1',
      themeColor: 'from-amber-400 to-orange-500',
      badge: 'Fácil • 3-5 anos',
      emoji: '📘',
      phrases: ['B + A = BA (Bala 🍬)', 'B + E = BE (Beijo 💋)', 'B + I = BI (Bico 👶)', 'B + O = BO (Bolo 🎂)'],
      svgContent: () => (
        <svg viewBox="0 0 400 240" className="w-full h-full text-indigo-900" fill="none">
          <rect width="400" height="240" rx="12" fill="#FFFBEB" stroke="#FBBF24" strokeWidth="4" />
          <line x1="200" y1="10" x2="200" y2="230" stroke="#FBBF24" strokeDasharray="6 6" />
          <text x="30" y="45" fontFamily="Nunito" fontWeight="900" fontSize="22" fill="#D97706">B + A = BA</text>
          <text x="30" y="90" fontFamily="Nunito" fontWeight="700" fontSize="16" fill="#1F2937">Ba-le-ia 🐋</text>
          <path d="M 50 145 C 50 120, 150 120, 150 145 C 130 170, 70 170, 50 145 Z" fill="#3B82F6" opacity="0.3" stroke="#3B82F6" strokeWidth="2" />
          <text x="80" y="150" fontSize="24">🐋</text>
          <text x="230" y="45" fontFamily="Nunito" fontWeight="900" fontSize="22" fill="#D97706">B + O = BO</text>
          <text x="230" y="90" fontFamily="Nunito" fontWeight="700" fontSize="16" fill="#1F2937">Bo-lo 🎂</text>
          <circle cx="310" cy="150" r="35" fill="#EF4444" opacity="0.2" />
          <text x="295" y="160" fontSize="36">🎂</text>
          <rect x="25" y="200" width="350" height="25" rx="6" fill="#FEF3C7" />
          <text x="40" y="217" fontFamily="Nunito" fontWeight="600" fontSize="12" fill="#78350F">💡 Atividade Prática: Fale em voz alta e cubra os tracejados.</text>
        </svg>
      )
    },
    {
      title: 'Sílabas Complexas',
      category: 'Caderno 2',
      themeColor: 'from-emerald-400 to-teal-500',
      badge: 'Intermediário • 5-7 anos',
      emoji: '📗',
      phrases: ['BR + A = BRA (Brasil 🇧🇷)', 'CR + I = CRI (Criança 👶)', 'FR + U = FRU (Fruta 🍎)', 'PL + A = PLA (Placa 🛑)'],
      svgContent: () => (
        <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-800" fill="none">
          <rect width="400" height="240" rx="12" fill="#F0FDF4" stroke="#22C55E" strokeWidth="4" />
          <rect x="20" y="25" width="360" height="50" rx="8" fill="#DCFCE7" />
          <text x="40" y="55" fontFamily="Nunito" fontWeight="900" fontSize="18" fill="#166534">Desafio do "BR" 🚀</text>
          <text x="40" y="115" fontFamily="Nunito" fontWeight="800" fontSize="20" fill="#1F2937">BR + A = BRA  ➔  Bra-sil 🇧🇷</text>
          <text x="40" y="150" fontFamily="Nunito" fontWeight="800" fontSize="20" fill="#1F2937">BR + I = BRI  ➔  Brin-que-do 🧸</text>
          <text x="280" y="125" fontSize="40">🇧🇷</text>
          <text x="280" y="175" fontSize="40">🧸</text>
          <rect x="20" y="195" width="360" height="30" rx="8" fill="#DCFCE7" />
          <text x="40" y="215" fontFamily="Nunito" fontWeight="600" fontSize="12" fill="#166534">✓ Método Progressivo: Elimine travas na leitura de forma divertida!</text>
        </svg>
      )
    },
    {
      title: 'Matemática Descomplicada',
      category: 'Caderno 4',
      themeColor: 'from-rose-400 to-red-500',
      badge: 'Lúdico • Raciocínio',
      emoji: '📕',
      phrases: ['1 + 1 = 2 (Maçãs 🍎)', '3 + 2 = 5 (Estrelas ⭐)', 'Contar e Pintar', 'Compreensão de Números'],
      svgContent: () => (
        <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-800" fill="none">
          <rect width="400" height="240" rx="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="4" />
          <text x="30" y="45" fontFamily="Nunito" fontWeight="900" fontSize="20" fill="#991B1B">Somando com Frutas 🍎</text>
          <g transform="translate(40, 80)">
            <text x="0" y="20" fontSize="30">🍎</text>
            <text x="45" y="18" fontFamily="Nunito" fontWeight="900" fontSize="24" fill="#1F2937">+</text>
            <text x="75" y="20" fontSize="30">🍎</text>
            <text x="120" y="18" fontFamily="Nunito" fontWeight="900" fontSize="24" fill="#1F2937">=</text>
            <rect x="155" y="-15" width="45" height="45" rx="8" fill="#FFFFFF" stroke="#EF4444" strokeWidth="3" />
            <text x="168" y="18" fontFamily="Nunito" fontWeight="900" fontSize="26" fill="#EF4444">2</text>
          </g>
          <text x="30" y="170" fontFamily="Nunito" fontWeight="700" fontSize="15" fill="#374151">"Quantas maçãs temos no total? Escreva na caixa."</text>
          <text x="30" y="210" fontFamily="Nunito" fontWeight="500" fontSize="12" fill="#991B1B">★ Desenvolve a coordenação e o pensamento lógico sem bloqueios.</text>
        </svg>
      )
    },
    {
      title: 'Coordenação Motora',
      category: 'Caderno 5',
      themeColor: 'from-indigo-400 to-blue-500',
      badge: 'Preparatório • Segurar Lápis',
      emoji: '📓',
      phrases: ['Traçado Reto', 'Passinho em Ondas', 'Ajude a Abelhinha 🐝', 'Pontilhado Contínuo'],
      svgContent: () => (
        <svg viewBox="0 0 400 240" className="w-full h-full text-zinc-800" fill="none">
          <rect width="400" height="240" rx="12" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="4" />
          <text x="30" y="45" fontFamily="Nunito" fontWeight="900" fontSize="20" fill="#3730A3">Caminho da Abelhinha 🐝</text>
          <text x="40" y="90" fontSize="24">🐝</text>
          <path d="M 80 80 Q 140 30, 200 80 T 320 80" stroke="#4F46E5" strokeWidth="4" strokeDasharray="8 8" fill="none" />
          <text x="325" y="90" fontSize="24">🌺</text>
          <text x="40" y="160" fontSize="24">🐌</text>
          <path d="M 80 150 Q 160 190, 240 150 T 320 150" stroke="#4F46E5" strokeWidth="4" strokeDasharray="4 4" fill="none" />
          <text x="325" y="160" fontSize="24">🥬</text>
          <rect x="25" y="200" width="350" height="25" rx="6" fill="#E0E7FF" />
          <text x="40" y="217" fontFamily="Nunito" fontWeight="600" fontSize="11" fill="#3730A3">🎯 Objetivo: Cobrir as linhas pontilhadas sem tirar o lápis do papel.</text>
        </svg>
      )
    }
  ];

  // Auto playback of presentation
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActivePageIndex((prevIndex) => (prevIndex + 1) % pages.length);
            return 0;
          }
          return prev + 2; // Increments smoothly
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, pages.length]);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePageSelect = (index: number) => {
    setActivePageIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setActivePageIndex((prevIndex) => (prevIndex === 0 ? pages.length - 1 : prevIndex - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setActivePageIndex((prevIndex) => (prevIndex + 1) % pages.length);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-slate-950 border-4 border-amber-300 relative group/player">
      
      {/* Absolute Header Overlay */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10 flex items-center justify-between pointer-events-none transition-opacity duration-300">
        <div className="flex items-center space-x-2">
          <span className="flex h-3 w-3 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isPlaying ? 'bg-red-500' : 'bg-amber-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-red-600' : 'bg-amber-500'}`}></span>
          </span>
          <p className="text-white font-bold text-xs tracking-wide uppercase drop-shadow-md">
            {isPlaying ? 'DEMONSTRAÇÃO EM PLAYBACK' : 'PAUSADO • CLIQUE PARA ASSISTIR'}
          </p>
        </div>
        <div className="bg-black/60 backdrop-blur-subtle text-[10px] text-amber-300 font-extrabold px-3 py-1 rounded-full border border-amber-300/30">
          PDF 100% DIGITAL PARA IMPRIMIR
        </div>
      </div>

      {/* Main Screen Space */}
      <div className="aspect-[16/9] w-full bg-slate-900 relative flex items-center justify-center p-4 sm:p-8 md:p-12 select-none overflow-hidden">
        
        {/* Play Overlay */}
        {!isPlaying && progress === 0 && (
          <div 
            onClick={handlePlayToggle}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-subtle flex flex-col items-center justify-center cursor-pointer z-20 group transition-all duration-300"
          >
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-110 border-4 border-white animate-pulse-ring">
              <Play className="w-10 h-10 fill-current ml-1" />
            </div>
            <p className="text-white text-lg sm:text-xl font-black mt-6 text-center px-4 tracking-tight">
              ▶ Clique para ver por dentro — cada caderno, cada atividade
            </p>
            <p className="text-slate-300 text-xs sm:text-sm font-semibold mt-2 text-center max-w-md px-6">
              Assista à simulação interativa das fichas didáticas que você irá receber no seu e-mail imediatamente.
            </p>
            <div className="flex items-center space-x-2 mt-6">
              {pages.map((p, i) => (
                <div key={p.title} className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded text-[11px] text-white">
                  <span>{p.emoji}</span>
                  <span className="font-bold hidden sm:inline">{p.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Worksheet Render Area */}
        <div className="w-full max-w-xl h-full flex flex-col justify-center items-center transform transition-all duration-500">
          <div className="relative w-full aspect-[4/3.1] rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-2 sm:p-4">
            {/* Sheet header banner inside paper */}
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-gray-100">
              <div className="flex items-center space-x-1">
                <span className="text-xl sm:text-2xl">{pages[activePageIndex].emoji}</span>
                <div>
                  <h4 className="text-xs font-black text-slate-800 tracking-tight leading-none">
                    {pages[activePageIndex].title}
                  </h4>
                  <p className="text-[9px] font-bold text-slate-400 capitalize">
                    {pages[activePageIndex].category}
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-blue-100 text-blue-800 uppercase tracking-widest">
                {pages[activePageIndex].badge}
              </span>
            </div>

            {/* Vector Render of the Worksheet */}
            <div className="w-full h-[calc(100%-40px)] flex items-center justify-center bg-white rounded-lg">
              {pages[activePageIndex].svgContent()}
            </div>
          </div>
        </div>

        {/* Audio Simulation Indicator */}
        {isPlaying && (
          <div className="absolute bottom-16 right-4 sm:right-6 bg-slate-900/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-white/10 flex items-center space-x-2 shadow-lg animate-bounce duration-1000 z-10">
            <span className="flex space-x-1 h-3 items-end">
              <span className="w-1 bg-emerald-400 rounded animate-[pulse_0.8s_infinite] h-3"></span>
              <span className="w-1 bg-emerald-400 rounded animate-[pulse_0.5s_infinite] h-2"></span>
              <span className="w-1 bg-emerald-400 rounded animate-[pulse_1s_infinite] h-4"></span>
            </span>
            <span className="text-[10px] uppercase font-black text-amber-300">
              {isMuted ? 'ÁUDIO MUTADO' : '"Mãe, eu consegui ler!" 👧🌸'}
            </span>
          </div>
        )}

        {/* Side Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 opacity-70 hover:opacity-100 transition-all z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 opacity-70 hover:opacity-100 transition-all z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Control Bar */}
      <div className="bg-slate-900 border-t border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Play/Pause/Mute Controls */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={handlePlayToggle}
            className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-all flex items-center justify-center text-white shadow-md active:scale-95 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>
          
          <button
            onClick={() => { setProgress(0); setIsPlaying(false); setActivePageIndex(0); }}
            className="p-2 text-slate-400 hover:text-white transition-all rounded hover:bg-slate-800"
            title="Recomeçar"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 text-slate-400 hover:text-white transition-all rounded hover:bg-slate-800"
            title={isMuted ? "Ativar Áudio" : "Mudar Áudio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Time simulation text */}
          <span className="text-[11px] font-mono font-semibold text-slate-400">
            {`0:${activePageIndex.toString().padStart(2, '0')} / 0:04`}
          </span>
        </div>

        {/* Slide Bullets with Labels */}
        <div className="flex items-center space-x-1 bg-slate-950/40 p-1 rounded-lg border border-slate-800/80 overflow-x-auto max-w-full">
          {pages.map((page, index) => (
            <button
              key={page.title}
              onClick={() => handlePageSelect(index)}
              className={`px-2.5 py-1.5 rounded-md text-[10px] sm:text-[11px] font-bold transition-all whitespace-nowrap flex items-center space-x-1 ${
                activePageIndex === index 
                  ? 'bg-amber-400 text-slate-950 font-black shadow-lg scale-102' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{page.emoji}</span>
              <span className="hidden sm:inline">{page.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full h-1.5 bg-slate-950/80 overflow-hidden relative">
        <div 
          className="h-full bg-emerald-500 rounded-r transition-all duration-100 ease-linear shadow-glow-emerald"
          style={{ width: `${isPlaying ? progress : (activePageIndex / (pages.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
