/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  ShieldCheck, 
  ChevronDown, 
  Lock, 
  HelpCircle, 
  ShoppingBag, 
  Sparkles, 
  Heart, 
  AlertTriangle, 
  Calendar, 
  Award, 
  ArrowRight,
  BookOpen,
  FolderHeart,
  Pencil,
  Megaphone,
  Type,
  Puzzle,
  PenTool,
  Hash,
  Palette,
  Gift,
  Infinity,
  RefreshCw
} from 'lucide-react';

import { 
  PAIN_ITEMS, 
  STATISTICS, 
  AUDIENCE_ITEMS, 
  CONTENT_ITEMS, 
  TESTIMONIALS, 
  BONUS_ITEMS, 
  FAQ_ITEMS 
} from './data';

import CheckoutModal from './components/CheckoutModal';
import UpgradeOfferModal from './components/UpgradeOfferModal';
import TestimonialCarousel from './components/TestimonialCarousel';
import WistiaPlayer from './components/WistiaPlayer';

const RECEIVE_ITEMS = [
  {
    id: 'rec-1',
    icon: FolderHeart,
    title: '+3.700 Atividades Prontas para Imprimir',
    description: 'Receba um enorme acervo de atividades organizadas para trabalhar leitura, escrita, interpretação e desenvolvimento infantil sem precisar criar materiais do zero.',
    iconBg: 'bg-blue-50 text-blue-500 border-blue-100',
    borderAccent: 'border-t-blue-400',
    image: 'https://i.ibb.co/B2Fhgzsj/Chat-GPT-Image-6-de-jun-de-2026-12-01-31.png',
  },
  {
    id: 'rec-2',
    icon: BookOpen,
    title: 'Método Completo das Sílabas',
    description: 'Atividades com sílabas simples e complexas (BRA, NHA, LHA, CHA, GUA e muito mais) para ajudar a criança a avançar na leitura de forma gradual e sem confusão.',
    iconBg: 'bg-emerald-50 text-emerald-500 border-emerald-100',
    borderAccent: 'border-t-emerald-400',
    image: 'https://i.ibb.co/XxpN3TPr/Chat-GPT-Image-6-de-jun-de-2026-12-14-05.png',
  },
  {
    id: 'rec-3',
    icon: Pencil,
    title: 'Coordenação Motora do Básico ao Avançado',
    description: 'Fortaleça o controle das mãos e desenvolva as habilidades essenciais para uma escrita mais firme, bonita e segura.',
    iconBg: 'bg-orange-50 text-orange-500 border-orange-100',
    borderAccent: 'border-t-orange-400',
    image: 'https://i.ibb.co/Nn6HCbH0/Chat-GPT-Image-6-de-jun-de-2026-12-13-56.png',
  },
  {
    id: 'rec-4',
    icon: Megaphone,
    title: 'Consciência Fonológica e Vogais',
    description: 'Estimule a percepção dos sons das palavras, facilitando o reconhecimento das letras e acelerando o processo de alfabetização.',
    iconBg: 'bg-[#FEFCE8] text-[#EAB308] border-[#FEF9C3]',
    borderAccent: 'border-t-amber-400',
    image: 'https://i.ibb.co/yFQt7k6W/Chat-GPT-Image-6-de-jun-de-2026-12-29-48.png',
  },
  {
    id: 'rec-5',
    icon: Type,
    title: 'Alfabeto Silábico Completo',
    description: 'Atividades organizadas de A a Z para reforçar o reconhecimento das letras, sílabas e primeiras leituras.',
    iconBg: 'bg-blue-50 text-blue-500 border-blue-100',
    borderAccent: 'border-t-blue-400',
    image: 'https://i.ibb.co/d0gVMZKq/Chat-GPT-Image-6-de-jun-de-2026-12-29-56.png',
  },
  {
    id: 'rec-6',
    icon: Puzzle,
    title: 'Formação de Palavras e Frases',
    description: 'A criança aprende a unir sílabas, formar palavras e construir frases de maneira prática, divertida e progressiva.',
    iconBg: 'bg-emerald-50 text-emerald-500 border-emerald-100',
    borderAccent: 'border-t-emerald-400',
    image: 'https://i.ibb.co/G3ChGp9k/Chat-GPT-Image-6-de-jun-de-2026-12-14-12.png',
  },
  {
    id: 'rec-7',
    icon: PenTool,
    title: 'Caligrafia Inicial e Cursiva',
    description: 'Treinos que ajudam a desenvolver uma letra mais bonita, legível e organizada desde os primeiros passos da escrita.',
    iconBg: 'bg-orange-50 text-orange-500 border-orange-100',
    borderAccent: 'border-t-orange-400',
    image: 'https://i.ibb.co/RGL7hzJ0/Chat-GPT-Image-6-de-jun-de-2026-12-14-19.png',
  },
  {
    id: 'rec-8',
    icon: Hash,
    title: 'Matemática Divertida',
    description: 'Atividades para trabalhar números, raciocínio lógico, operações básicas e conceitos matemáticos fundamentais.',
    iconBg: 'bg-[#FEFCE8] text-[#EAB308] border-[#FEF9C3]',
    borderAccent: 'border-t-amber-400',
    image: 'https://i.ibb.co/KxBh5YKC/Chat-GPT-Image-6-de-jun-de-2026-12-14-28.png',
  },
  {
    id: 'rec-9',
    icon: Palette,
    title: 'Artes e Ensino Religioso',
    description: 'Materiais complementares para estimular criatividade, valores, expression artística e desenvolvimento integral da criança.',
    iconBg: 'bg-blue-50 text-blue-500 border-blue-100',
    borderAccent: 'border-t-blue-400',
    image: 'https://i.ibb.co/h0TVszf/Chat-GPT-Image-6-de-jun-de-2026-12-32-40.png',
  }
];

const TRANSFORMATION_PAIRS = [
  {
    before: "Planejamento demorado e estressante",
    after: "Aulas prontas em minutos"
  },
  {
    before: "Crianças desinteressadas e desmotivadas",
    after: "Dinâmicas que engajam qualquer criança"
  },
  {
    before: "Materiais caros e desorganizados",
    after: "+3.700 atividades e materiais prontos para usar"
  },
  {
    before: "Domingos perdidos preparando materiais",
    after: "Sua paz de espírito e domingos livres de volta"
  }
];

const ALL_IN_ONE_BENEFITS = [
  {
    icon: BookOpen,
    title: "Vogais e Alfabeto",
    description: "Atividades para reconhecimento das letras e primeiros contatos com a leitura.",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    icon: Type,
    title: "Sílabas Simples",
    description: "Exercícios práticos para formação das primeiras palavras.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    icon: Pencil,
    title: "Escrita e Coordenação",
    description: "Atividades para desenvolver a escrita e coordenação motora.",
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    icon: Sparkles,
    title: "Formação de Palavras",
    description: "Exercícios para ampliar vocabulário e leitura.",
    color: "bg-amber-50 text-amber-600 border-amber-100"
  },
  {
    icon: Puzzle,
    title: "Leitura Interativa",
    description: "Atividades lúdicas que estimulam o interesse pela leitura.",
    color: "bg-[#FEFCE8] text-[#EAB308] border-[#FEF9C3]"
  },
  {
    icon: FolderHeart,
    title: "Interpretação de Texto",
    description: "Materiais para fortalecer compreensão e raciocínio.",
    color: "bg-purple-50 text-purple-600 border-purple-100"
  },
  {
    icon: Palette,
    title: "Atividades Lúdicas",
    description: "Jogos educativos e exercícios divertidos.",
    color: "bg-[#FDF2F8] text-[#DB2777] border-[#FCE7F3]"
  },
  {
    icon: Award,
    title: "Material Organizado",
    description: "Tudo separado por etapas para facilitar a aplicação.",
    color: "bg-teal-50 text-teal-600 border-teal-100"
  }
];

const CATEGORY_CARDS = [
  {
    id: "cat-1",
    type: "cadernos",
    title: "📚 Cadernos de Alfabetização",
    description: "Apostilas completas e estruturadas para todas as fases.",
    gradient: "from-orange-400 to-amber-400"
  },
  {
    id: "cat-2",
    type: "silabas",
    title: "🔤 Atividades de Sílabas",
    description: "Foco no aprendizado silábico simples e complexo.",
    gradient: "from-blue-400 to-indigo-400"
  },
  {
    id: "cat-3",
    type: "escrita",
    title: "✍️ Exercícios de Escrita",
    description: "Prática de caligrafia e letras bastão e cursiva.",
    gradient: "from-emerald-400 to-teal-400"
  },
  {
    id: "cat-4",
    type: "leitura",
    title: "📖 Leitura Fluente",
    description: "Textinhos e historinhas para treinar e incentivar a leitura.",
    gradient: "from-rose-400 to-pink-400"
  },
  {
    id: "cat-5",
    type: "bonus",
    title: "🎁 Bônus Exclusivos",
    description: "Materiais extras incríveis incluídos sem custo adicional hoje.",
    gradient: "from-amber-400 to-yellow-400"
  }
];

function OptimizedCardImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden border-b border-slate-100 bg-slate-50 flex items-center justify-center h-[210px] sm:h-[245px] w-full relative">
      {/* Premium Shimmer Skeleton Element */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-100/80 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200/40 to-slate-100 animate-pulse" />
          <svg className="w-10 h-10 text-slate-300 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover object-top transition-all duration-750 hover:scale-[1.04] ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[0.97] blur-sm'
        }`}
        loading="lazy"
      />
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative w-full max-w-[480px] h-[230px] min-[400px]:h-[270px] sm:h-[380px] lg:h-[480px] mx-auto flex items-center justify-center select-none mt-1 sm:mt-3 lg:mt-0">
      {/* Glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-amber-200/30 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Floating Sparkles & Elements */}
      <div className="absolute top-4 left-6 text-2xl animate-bounce" style={{ animationDuration: '3.5s' }}>⭐</div>
      <div className="absolute bottom-8 right-4 text-3xl animate-bounce" style={{ animationDuration: '4.5s' }}>🎈</div>
      <div className="absolute top-1/2 -right-4 text-2xl animate-pulse">✨</div>
      <div className="absolute bottom-12 -left-3 text-xl">✏️</div>

      {/* Stack of Worksheets */}
      {/* 1. Left tilted worksheet (Consciência Fonológica) */}
      <div className="absolute left-[8%] sm:left-[10%] w-[48%] aspect-[3/4] bg-white rounded-xl shadow-xl border border-slate-100/90 overflow-hidden transform -rotate-12 hover:-rotate-3 hover:translate-y-[-10px] transition-all duration-500 origin-bottom-left group">
        <img 
          src="https://i.ibb.co/yFQt7k6W/Chat-GPT-Image-6-de-jun-de-2026-12-29-48.png" 
          alt="Consciência Fonológica e Vogais" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* 2. Right tilted worksheet (Método Completo das Sílabas) */}
      <div className="absolute right-[8%] sm:right-[10%] w-[48%] aspect-[3/4] bg-white rounded-xl shadow-xl border border-slate-100/90 overflow-hidden transform rotate-12 hover:rotate-3 hover:translate-y-[-10px] transition-all duration-500 origin-bottom-right group">
        <img 
          src="https://i.ibb.co/XxpN3TPr/Chat-GPT-Image-6-de-jun-de-2026-12-14-05.png" 
          alt="Método Completo das Sílabas" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* 3. Center worksheet in front (3700 Atividades) */}
      <div className="absolute w-[53%] aspect-[3/4] bg-white rounded-2xl shadow-2xl border-2 border-amber-300 overflow-hidden transform hover:scale-105 transition-all duration-500 z-10 group">
        <img 
          src="https://i.ibb.co/B2Fhgzsj/Chat-GPT-Image-6-de-jun-de-2026-12-01-31.png" 
          alt="+3.700 Atividades Prontas" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Decorative Badge on Center Card */}
        <div className="absolute top-2.5 right-2.5 bg-[#F97316] text-white font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm select-none border border-amber-400">
          Mais Vendido ⭐
        </div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Floating Sticker Stamp */}
      <div className="absolute -bottom-2 right-[2%] sm:right-[8%] bg-amber-400 border-2 border-dashed border-amber-600 text-slate-950 font-black text-[10px] sm:text-xs leading-none uppercase px-3 py-2.5 rounded-full shadow-lg transform rotate-6 animate-pulse select-none z-20 flex flex-col items-center justify-center text-center">
        <span>💡 100%</span>
        <span>PRÁTICO</span>
      </div>
    </div>
  );
}

export default function App() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<'basico' | 'premium'>('premium');
  const [timeLeft, setTimeLeft] = useState<string>('14:59');
  const [currentMsgIndex, setCurrentMsgIndex] = useState<number>(0);

  const loopMessages = [
    "🔥 O valor pode aumentar sem aviso conforme novas atividades forem adicionadas."
  ];

  // Loop messages interval transition
  useEffect(() => {
    const msgInterval = setInterval(() => {
      setCurrentMsgIndex((prev) => (prev + 1) % loopMessages.length);
    }, 4000);
    return () => clearInterval(msgInterval);
  }, [loopMessages.length]);

  // Trigger animations on scroll using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Countdown timer for the urgency bar
  useEffect(() => {
    let totalSeconds = 15 * 60;
    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = 15 * 60; // loop
      } else {
        totalSeconds--;
      }
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const openCheckout = (pkg: 'basico' | 'premium' | any = 'premium') => {
    // If pkg is a React synthetic event or anything else besides 'basico' / 'premium', default to 'premium'
    const finalPkg = (pkg === 'basico' || pkg === 'premium') ? pkg : 'premium';
    setSelectedPackage(finalPkg);
    setIsCheckoutOpen(true);
  };

  const scrollToOffer = (e?: any) => {
    e?.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-white min-h-screen">
      
      {/* 0. BARRA DE URGÊNCIA TOPO (sticky) */}
      <div 
        id="urgency-bar"
        className="sticky top-0 z-[990] bg-red-600 text-white py-2.5 shadow-md select-none border-b border-red-750 overflow-hidden"
      >
        <div className="w-full overflow-hidden flex items-center h-5 relative whitespace-nowrap">
          <div className="inline-flex animate-marquee whitespace-nowrap text-[11px] sm:text-xs md:text-sm font-black tracking-wide uppercase font-display">
            <span className="inline-block pr-8">{loopMessages.join("   •   ")}   •   </span>
            <span className="inline-block pr-8">{loopMessages.join("   •   ")}   •   </span>
          </div>
        </div>
      </div>

      {/* 1. HERO / HEADLINE PRINCIPAL */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-22 bg-gradient-to-b from-blue-50/60 via-white to-white">
        
        {/* Decorative background ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column (Copy and Action) */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              
              {/* Kit badge */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-600 font-extrabold uppercase tracking-widest text-[9px] sm:text-[10px] px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm animate-pulse">
                  🔥 O Kit de Alfabetização Mais Completo do Brasil
                </span>
              </div>

              {/* Main Title H1 */}
              <h1 className="tracking-tight mb-5 font-kids">
                <span className="block text-[#F97316] text-[26px] sm:text-[44px] md:text-[52px] xl:text-[58px] font-black uppercase leading-tight mb-2">
                  SEU FILHO NÃO PRECISA DE MAIS ATIVIDADES
                </span>
                <span 
                  className="block text-[18px] sm:text-[34px] md:text-[40px] xl:text-[46px] font-black uppercase leading-none"
                  aria-label="PRECISA DAS ATIVIDADES CERTAS!"
                >
                  {(() => {
                    const playColors = [
                      'text-[#FF5757]', // playful soft red
                      'text-[#3B82F6]', // playful blue
                      'text-[#22C55E]', // playful green
                      'text-[#F59E0B]', // playful yellow/amber
                      'text-[#EC4899]', // playful pink
                      'text-[#8B5CF6]', // playful violet
                      'text-[#06B6D4]', // playful cyan
                    ];
                    return "PRECISA DAS ATIVIDADES CERTAS!".split("").map((char, index) => {
                      if (char === " ") return <span key={index}>&nbsp;</span>;
                      const color = playColors[index % playColors.length];
                      return (
                        <span key={index} className={`${color} inline-block transform hover:scale-110 hover:-rotate-3 transition-transform duration-150 cursor-default`}>
                          {char}
                        </span>
                      );
                    });
                  })()}
                </span>
              </h1>

              {/* Subheadline copy */}
              <div className="max-w-3xl leading-relaxed mb-6">
                <p className="text-slate-650 text-[14px] sm:text-sm md:text-base font-medium leading-relaxed">
                  Receba acesso imediato a mais de <span className="text-[#F97316] font-extrabold">3.700 atividades organizadas por etapas</span> que ajudam crianças a desenvolver leitura, escrita e compreensão de forma divertida e progressiva.
                </p>
              </div>

              {/* Mockup for Mobile/Tablet - positioned between subheadline and benefits */}
              <div className="block lg:hidden mt-1 mb-3">
                <HeroMockup />
              </div>

              {/* Bullet points of instant benefits */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-sm sm:max-w-md mx-auto lg:mx-0 text-slate-700 font-bold text-[13px] sm:text-xs md:text-sm mb-7 text-left bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500 font-black text-sm">✓</span>
                  <span>+3.700 Atividades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500 font-black text-sm">✓</span>
                  <span>Método Silábico Direto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500 font-black text-sm">✓</span>
                  <span>Coordenação Motora</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-500 font-black text-sm">✓</span>
                  <span>Pronto para Imprimir</span>
                </div>
              </div>

              {/* Dynamic Badges Block */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7">
                {/* Badge pill */}
                <div className="inline-flex items-center space-x-1.5 bg-amber-100 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-subtle transform hover:scale-102 transition-transform">
                  <span className="text-emerald-500 text-xs">✅</span>
                  <span className="text-slate-855 text-[12px] sm:text-xs font-black tracking-tight uppercase">
                    +8.000 Mães e Professoras já aprovaram
                  </span>
                </div>

                <div className="flex items-center space-x-1 font-bold text-slate-750">
                  <span className="text-amber-400 text-sm">⭐⭐⭐⭐⭐</span>
                  <span className="text-[11px] font-bold text-slate-400">(4.9/5 Nota)</span>
                </div>
              </div>

              {/* Action Button & Secure info */}
              <div className="flex flex-col items-center lg:items-start space-y-3.5">
                <button
                  id="cta-1"
                  onClick={scrollToOffer}
                  className="w-full max-w-md bg-[#22C55E] hover:bg-[#1fbd59] text-white font-extrabold text-[13.5px] sm:text-sm tracking-wide rounded-[40px] py-4 px-6 sm:px-8 shadow-lg hover:scale-102 hover:shadow-xl transition-all cursor-pointer select-none leading-none border-b-4 border-emerald-700 uppercase"
                >
                  ⚡ QUERO DEIXAR MEU FILHO FLUIDO NA LEITURA
                </button>
                <div className="flex items-center space-x-2.5 text-slate-400 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
                  <span className="flex items-center space-x-1">
                    <Lock className="w-3 h-3 text-emerald-500" />
                    <span>Pagamento 100% Seguro</span>
                  </span>
                  <span>•</span>
                  <span>📥 Download Imediato</span>
                </div>
                
                {/* Repositioned note text below CTA info */}
                <p className="text-[13px] sm:text-xs font-semibold text-slate-400 max-w-sm text-center lg:text-left pt-1">
                  Perfeito para mães e professoras que querem resultados reais sem precisar criar materiais do zero.
                </p>
              </div>

            </div>

            {/* Right Column (Visual Representation Mockup of Worksheet Stack) - Desktop Only */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
              <HeroMockup />
            </div>

          </div>
        </div>

        {/* Section divider wave */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-slate-50 fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <path d="M0,25 C150,40 350,10 720,25 C1070,40 1280,10 1440,25 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* SEÇÃO INTEGRAL DE ENTREGÁVEIS */}
      <section className="bg-slate-50 py-12 pb-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center mb-12 fade-in-section">
            <span className="text-3xl sm:text-4xl mb-2 inline-block">🎁</span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              Tudo o que você recebe ao entrar hoje
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium mt-3 max-w-2xl mx-auto leading-relaxed">
              Um acervo completo para transformar a alfabetização em uma experiência mais simples, divertida e eficiente.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {RECEIVE_ITEMS.map((item) => {
              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between fade-in-section"
                >
                  <div className="flex flex-col h-full">
                    {/* Card Cover Image */}
                    {item.image && (
                      <OptimizedCardImage 
                        src={item.image} 
                        alt={item.title} 
                      />
                    )}
                    
                    {/* Card Content (Title and Description) */}
                    <div className="p-5 flex flex-col gap-2">
                      <h3 className="text-[15px] sm:text-base font-extrabold text-slate-950 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-650 text-[13px] sm:text-xs md:text-sm font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* Section divider with background fill matching the next block bg-white */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-white fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,15 C200,30 550,5 950,20 C1200,30 1350,15 1440,10 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>



      {/* 7. DEPOIMENTOS */}
      <section className="bg-white py-10 relative">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center mb-10 fade-in-section">
            <span className="px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 uppercase tracking-widest mb-2.5 inline-block">
              QUEM COMPROU, APROVA
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
              O que as mães e professoras estão dizendo
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-normal mt-1.5">
              ★★★★★ 4.9/5 · +8.000 avaliações verificadas
            </p>
          </div>

          {/* Testimonials Frame Row Slider */}
          <div className="fade-in-section">
            <TestimonialCarousel />
          </div>

          {/* Testimonial Premium CTA Button */}
          <div className="mt-10 flex flex-col items-center justify-center space-y-3.5 fade-in-section">
            <button
              onClick={scrollToOffer}
              className="w-full max-w-md inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm sm:text-base tracking-wide rounded-[40px] py-4 px-6 sm:px-8 shadow-lg hover:scale-102 hover:shadow-xl transition-all cursor-pointer select-none leading-none border-b-4 border-amber-600 uppercase text-center"
            >
              🚀 Quero Acessar Agora
            </button>
            <div className="flex items-center space-x-2.5 text-slate-400 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
              <span className="flex items-center space-x-1">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                <span>Compra 100% Segura</span>
              </span>
              <span>•</span>
              <span>📥 Envio Imediato</span>
              <span>•</span>
              <span>🛡️ 7 Dias de Garantia</span>
            </div>
          </div>

        </div>

        {/* Section divider transitioning to bg-white (SEÇÃO 1 — SUA TRANSFORMAÇÃO) */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-white fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,15 C200,30 550,5 950,20 C1200,30 1350,15 1440,10 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* SEÇÃO 1 — SUA TRANSFORMAÇÃO */}
      <section className="bg-white py-16 relative">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center mb-10 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
              Sua <span className="text-blue-600">Transformação</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium mt-3">
              Reconhece alguma dessas situações?
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-normal mt-1">
              Veja como sua rotina vai mudar
            </p>
          </div>

          {/* Comparativo Visual (Fileiras Horizontais exatamente como o anexo) */}
          <div className="space-y-4 max-w-3xl mx-auto px-1">
            {TRANSFORMATION_PAIRS.map((pair, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-100/80 shadow-xs hover:shadow-md hover:border-blue-100 transition-all duration-300 p-3 sm:p-4.5 flex flex-row items-center justify-between gap-1.5 sm:gap-6 text-left"
              >
                {/* Lado Esquerdo (Situação Anterior) */}
                <div className="flex items-center space-x-2.5 sm:space-x-3 w-[45%] flex-shrink-0">
                  {/* Círculo Vermelho com X */}
                  <div className="w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full bg-red-50 border border-red-100 text-red-400 flex items-center justify-center font-bold text-[11px] sm:text-xs flex-shrink-0">
                    ✕
                  </div>
                  <span className="text-slate-400 text-[12px] sm:text-[13px] md:text-sm font-semibold line-through leading-snug tracking-tight">
                    {pair.before}
                  </span>
                </div>

                {/* Setinha Azul Central */}
                <div className="text-blue-500 text-sm sm:text-lg font-black flex-shrink-0 px-0.5">
                  →
                </div>

                {/* Lado Direito (Nova Rotina Elegante) */}
                <div className="flex items-center space-x-2.5 sm:space-x-3 w-[50%] flex-shrink-0">
                  {/* Círculo Verde com Check */}
                  <div className="w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center font-bold text-[11px] sm:text-xs flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-950 text-[12px] sm:text-[13px] md:text-sm font-extrabold leading-snug tracking-tight">
                    {pair.after}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Cards de Destaque no Rodapé da Seção */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 px-1">
            
            {/* Bloco 1: AULAS DINÂMICAS */}
            <div className="bg-[#F0F7FF] rounded-2xl p-5 border border-[#D9EBFF] text-center shadow-subtle hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col items-center justify-center min-h-[115px] sm:min-h-[135px] fade-in-section">
              <span className="text-3xl sm:text-4xl mb-2.5 select-none transform hover:rotate-6 transition-transform block">
                📚
              </span>
              <span className="text-[10.5px] sm:text-[11px] font-black tracking-wider text-slate-800 uppercase font-sans leading-none">
                AULAS DINÂMICAS
              </span>
            </div>

            {/* Bloco 2: ECONOMIA DE TEMPO */}
            <div className="bg-[#F0F7FF] rounded-2xl p-5 border border-[#D9EBFF] text-center shadow-subtle hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col items-center justify-center min-h-[115px] sm:min-h-[135px] fade-in-section">
              <span className="text-3xl sm:text-4xl mb-2.5 select-none transform hover:rotate-6 transition-transform block">
                ⏰
              </span>
              <span className="text-[10.5px] sm:text-[11px] font-black tracking-wider text-slate-800 uppercase font-sans leading-none">
                ECONOMIA DE TEMPO
              </span>
            </div>

            {/* Bloco 3: ALUNOS ENGAJADOS */}
            <div className="bg-[#F0F7FF] rounded-2xl p-5 border border-[#D9EBFF] text-center shadow-subtle hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col items-center justify-center min-h-[115px] sm:min-h-[135px] fade-in-section">
              <span className="text-3xl sm:text-4xl mb-2.5 select-none transform hover:rotate-6 transition-transform block">
                🎯
              </span>
              <span className="text-[10.5px] sm:text-[11px] font-black tracking-wider text-slate-800 uppercase font-sans leading-none">
                ALUNOS ENGAJADOS
              </span>
            </div>

            {/* Bloco 4: RESULTADOS VISÍVEIS */}
            <div className="bg-[#F0F7FF] rounded-2xl p-5 border border-[#D9EBFF] text-center shadow-subtle hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col items-center justify-center min-h-[115px] sm:min-h-[135px] fade-in-section">
              <span className="text-3xl sm:text-4xl mb-2.5 select-none transform hover:rotate-6 transition-transform block">
                ✨
              </span>
              <span className="text-[10.5px] sm:text-[11px] font-black tracking-wider text-slate-800 uppercase font-sans leading-none">
                RESULTADOS VISÍVEIS
              </span>
            </div>

          </div>

        </div>

        {/* Section divider wrapping into the next section (bg-[#FAF8F2]) */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#FAF8F2] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,15 C200,30 550,5 950,20 C1200,30 1350,15 1440,10 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 8. BÔNUS */}
      <section className="bg-[#FAF8F2] py-14 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none z-0" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-12 sm:mb-14 fade-in-section">
            <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-650 font-extrabold uppercase tracking-widest text-[10px] sm:text-[11px] px-3.5 py-1.5 rounded-full border border-rose-200 shadow-sm mb-4 leading-none select-none">
              🔥 SUPER OFERTA DE HOJE
            </span>
            <h2 className="text-xl sm:text-2.5xl md:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto">
              🎁 E HOJE VOCÊ AINDA RECEBE <span className="text-[#F97316]">5 BÔNUS EXCLUSIVOS GRÁTIS</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-3.5 max-w-2xl mx-auto leading-relaxed">
              Materiais complementares que aceleram o aprendizado da criança e ajudam pais e professores a economizar ainda mais tempo.
            </p>
          </div>

          {/* Bonus list in big professional cards */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 md:gap-8 mb-12 sm:mb-14">
            
            {/* BÔNUS #1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 shadow-md border border-amber-100 hover:shadow-xl hover:border-amber-250 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group fade-in-section">
              {/* Corner Value Badge */}
              <div className="absolute top-0 right-0 bg-red-500 text-white font-black text-[8px] sm:text-xs uppercase tracking-wider px-2 py-1 rounded-bl-lg sm:rounded-bl-xl shadow-sm z-10 leading-none">
                GRÁTIS
              </div>
              
              <div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 mb-2 sm:mb-4">
                  <span className="text-[9px] sm:text-xs font-black uppercase text-amber-600 tracking-widest bg-amber-50 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-100 font-display w-fit">
                    🎁 BÔNUS #1
                  </span>
                  <span className="text-slate-400 text-[10px] sm:text-sm font-bold line-through mr-0 xs:mr-8 sm:mr-16">
                    R$27
                  </span>
                </div>
                
                <h3 className="text-xs sm:text-lg md:text-xl font-extrabold text-slate-950 tracking-tight mt-1 sm:mt-2 font-display leading-tight">
                  Caderno Completo de Coordenação Motora
                </h3>
                
                <p className="text-slate-650 text-[11px] sm:text-[14.5px] font-normal leading-snug sm:leading-relaxed mt-2 sm:mt-3.5">
                  Ajude a criança a desenvolver firmeza nas mãos, coordenação e preparação para a escrita através de exercícios divertidos e progressivos.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex flex-col xs:flex-row items-center justify-between gap-1.5">
                <span className="text-[#22C55E] font-black text-[9px] sm:text-sm flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" /> Incluso
                </span>
                <span className="text-[#22C55E] font-sans font-black text-[9px] sm:text-sm uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded">
                  R$ 0,00
                </span>
              </div>
            </div>

            {/* BÔNUS #2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 shadow-md border border-amber-100 hover:shadow-xl hover:border-amber-250 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group fade-in-section">
              {/* Corner Value Badge */}
              <div className="absolute top-0 right-0 bg-red-500 text-white font-black text-[8px] sm:text-xs uppercase tracking-wider px-2 py-1 rounded-bl-lg sm:rounded-bl-xl shadow-sm z-10 leading-none">
                GRÁTIS
              </div>
              
              <div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 mb-2 sm:mb-4">
                  <span className="text-[9px] sm:text-xs font-black uppercase text-amber-600 tracking-widest bg-amber-50 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-100 font-display w-fit">
                    🎁 BÔNUS #2
                  </span>
                  <span className="text-slate-400 text-[10px] sm:text-sm font-bold line-through mr-0 xs:mr-8 sm:mr-16">
                    R$19
                  </span>
                </div>
                
                <h3 className="text-xs sm:text-lg md:text-xl font-extrabold text-slate-950 tracking-tight mt-1 sm:mt-2 font-display leading-tight">
                  100 Atividades de Recorte e Colagem
                </h3>
                
                <p className="text-slate-650 text-[11px] sm:text-[14.5px] font-normal leading-snug sm:leading-relaxed mt-2 sm:mt-3.5">
                  Atividades lúdicas para estimular atenção, coordenação motora fina e desenvolvimento cognitivo.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex flex-col xs:flex-row items-center justify-between gap-1.5">
                <span className="text-[#22C55E] font-black text-[9px] sm:text-sm flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" /> Incluso
                </span>
                <span className="text-[#22C55E] font-sans font-black text-[9px] sm:text-sm uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded">
                  R$ 0,00
                </span>
              </div>
            </div>

            {/* BÔNUS #3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 shadow-md border border-amber-100 hover:shadow-xl hover:border-amber-250 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group fade-in-section">
              {/* Corner Value Badge */}
              <div className="absolute top-0 right-0 bg-red-500 text-white font-black text-[8px] sm:text-xs uppercase tracking-wider px-2 py-1 rounded-bl-lg sm:rounded-bl-xl shadow-sm z-10 leading-none">
                GRÁTIS
              </div>
              
              <div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 mb-2 sm:mb-4">
                  <span className="text-[9px] sm:text-xs font-black uppercase text-amber-600 tracking-widest bg-amber-50 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-100 font-display w-fit">
                    🎁 BÔNUS #3
                  </span>
                  <span className="text-slate-400 text-[10px] sm:text-sm font-bold line-through mr-0 xs:mr-8 sm:mr-16">
                    R$17
                  </span>
                </div>
                
                <h3 className="text-xs sm:text-lg md:text-xl font-extrabold text-slate-950 tracking-tight mt-1 sm:mt-2 font-display leading-tight">
                  Caderno de Pintura Educativa
                </h3>
                
                <p className="text-slate-650 text-[11px] sm:text-[14.5px] font-normal leading-snug sm:leading-relaxed mt-2 sm:mt-3.5">
                  Desenhos e atividades que reforçam o aprendizado enquanto a criança se diverte.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex flex-col xs:flex-row items-center justify-between gap-1.5">
                <span className="text-[#22C55E] font-black text-[9px] sm:text-sm flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" /> Incluso
                </span>
                <span className="text-[#22C55E] font-sans font-black text-[9px] sm:text-sm uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded">
                  R$ 0,00
                </span>
              </div>
            </div>

            {/* BÔNUS #4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 shadow-md border border-amber-100 hover:shadow-xl hover:border-amber-250 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group fade-in-section">
              {/* Corner Value Badge */}
              <div className="absolute top-0 right-0 bg-red-500 text-white font-black text-[8px] sm:text-xs uppercase tracking-wider px-2 py-1 rounded-bl-lg sm:rounded-bl-xl shadow-sm z-10 leading-none">
                GRÁTIS
              </div>
              
              <div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 mb-2 sm:mb-4">
                  <span className="text-[9px] sm:text-xs font-black uppercase text-amber-600 tracking-widest bg-amber-50 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-100 font-display w-fit">
                    🎁 BÔNUS #4
                  </span>
                  <span className="text-slate-400 text-[10px] sm:text-sm font-bold line-through mr-0 xs:mr-8 sm:mr-16">
                    R$47
                  </span>
                </div>
                
                <h3 className="text-xs sm:text-lg md:text-xl font-extrabold text-slate-950 tracking-tight mt-1 sm:mt-2 font-display leading-tight">
                  Acesso Vitalício e Atualizações Futuras
                </h3>
                
                <p className="text-slate-650 text-[11px] sm:text-[14.5px] font-normal leading-snug sm:leading-relaxed mt-2 sm:mt-3.5">
                  Receba novas atividades adicionadas ao acervo sem pagar novamente.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex flex-col xs:flex-row items-center justify-between gap-1.5">
                <span className="text-[#22C55E] font-black text-[9px] sm:text-sm flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" /> Incluso
                </span>
                <span className="text-[#22C55E] font-sans font-black text-[9px] sm:text-sm uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded">
                  R$ 0,00
                </span>
              </div>
            </div>

            {/* BÔNUS #5 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 shadow-md border border-amber-100 hover:shadow-xl hover:border-amber-250 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group col-span-2 md:col-span-1 md:max-w-none fade-in-section">
              {/* Corner Value Badge */}
              <div className="absolute top-0 right-0 bg-red-500 text-white font-black text-[8px] sm:text-xs uppercase tracking-wider px-2 py-1 rounded-bl-lg sm:rounded-bl-xl shadow-sm z-10 leading-none">
                GRÁTIS
              </div>
              
              <div>
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 mb-2 sm:mb-4">
                  <span className="text-[9px] sm:text-xs font-black uppercase text-amber-600 tracking-widest bg-amber-50 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-100 font-display w-fit">
                    🎁 BÔNUS #5
                  </span>
                  <span className="text-slate-400 text-[10px] sm:text-sm font-bold line-through mr-0 xs:mr-8 sm:mr-16">
                    R$29
                  </span>
                </div>
                
                <h3 className="text-xs sm:text-lg md:text-xl font-extrabold text-slate-950 tracking-tight mt-1 sm:mt-2 font-display leading-tight">
                  Guia de Organização para Pais e Professoras
                </h3>
                
                <p className="text-slate-650 text-[11px] sm:text-[14.5px] font-normal leading-snug sm:leading-relaxed mt-2 sm:mt-3.5">
                  Aprenda como utilizar o material da forma mais eficiente para acelerar os resultados da alfabetização.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex flex-col xs:flex-row items-center justify-between gap-1.5">
                <span className="text-[#22C55E] font-black text-[9px] sm:text-sm flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" /> Incluso
                </span>
                <span className="text-[#22C55E] font-sans font-black text-[9px] sm:text-sm uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded">
                  R$ 0,00
                </span>
              </div>
            </div>

          </div>

          {/* Destaque box block: RESUMO DO QUE VOCÊ RECEBE */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-md max-w-3xl mx-auto overflow-hidden relative fade-in-section">
            <div className="absolute top-0 left-0 right-0 h-2 bg-amber-400" />
            
            <div className="flex items-center justify-center space-x-2.5 mb-5 sm:mb-6">
              <span className="text-2xl">📦</span>
              <h3 className="text-lg sm:text-xl font-black text-slate-950 uppercase tracking-tight font-display text-center">
                Resumo do que você recebe
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-y-3.5 gap-x-8 sm:gap-x-12 max-w-2xl mx-auto pl-2">
              <div className="flex items-start text-[14px] sm:text-base font-bold text-slate-800">
                <span className="text-emerald-500 mr-2.5 select-none font-sans">✅</span>
                <span>Mais de 3.700 atividades de alfabetização</span>
              </div>
              <div className="flex items-start text-[14px] sm:text-base font-bold text-slate-800">
                <span className="text-emerald-500 mr-2.5 select-none font-sans">✅</span>
                <span>Material alinhado à BNCC</span>
              </div>
              <div className="flex items-start text-[14px] sm:text-base font-bold text-slate-800">
                <span className="text-emerald-500 mr-2.5 select-none font-sans">✅</span>
                <span>PDFs prontos para imprimir</span>
              </div>
              <div className="flex items-start text-[14px] sm:text-base font-bold text-slate-800">
                <span className="text-emerald-500 mr-2.5 select-none font-sans">✅</span>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-start text-[14px] sm:text-base font-bold text-slate-800">
                <span className="text-emerald-500 mr-2.5 select-none font-sans">✅</span>
                <span>Atualizações futuras</span>
              </div>
              <div className="flex items-start text-[14px] sm:text-base font-bold text-slate-800">
                <span className="text-emerald-500 mr-2.5 select-none font-sans">✅</span>
                <span>5 bônus exclusivos</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#FAFAFA] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,20 C150,40 450,10 900,30 C1200,40 1350,20 1440,15 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 9. OFERTA / PREÇO */}
      <section id="oferta" className="bg-[#FAFAFA] py-14 relative">
        <div className="max-w-5xl mx-auto px-4 animate-fade-in">
          
          <div className="text-center mb-10 fade-in-section">
            <span className="px-3 py-1 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 uppercase tracking-widest mb-2.5 inline-block">
              ⏱️ OFERTA POR TEMPO LIMITADO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Escolha o melhor plano para sua criança
            </h2>
            <p className="text-[#4b5563] text-[13.5px] sm:text-sm mt-2.5 font-medium leading-relaxed">
              Acesso digital imediato em PDF enviado diretamente no seu e-mail ou Whatsapp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            
            {/* PACOTE BÁSICO CARD */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-sm relative fade-in-section">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-700 uppercase tracking-tight font-sans">
                  Pacote Básico
                </h3>
                <p className="text-slate-500 text-[13px] mt-1 mb-4">
                  O material essencial para começar
                </p>

                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 flex flex-col justify-center items-center">
                  <span className="text-[11px] font-bold text-slate-400 line-through">
                    De R$ 37,00
                  </span>
                  <span className="text-2xl font-black font-sans text-slate-600 mt-0.5">
                    R$ 9,90
                  </span>
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider mt-2.5 bg-white px-2 py-0.5 rounded-full border border-slate-100">
                    Arquivo Digital em PDF
                  </span>
                </div>

                {/* What is included checklist */}
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start text-[13.5px] sm:text-sm font-semibold text-slate-600">
                    <span className="text-[#22C55E] mr-2 font-black text-sm">✓</span>
                    <span className="font-semibold text-slate-800">2.500 Atividades Prontas</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  id="cta-basico"
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold text-[13px] sm:text-sm tracking-wide rounded-[40px] py-3 px-4 shadow-sm hover:scale-101 transition-all select-none cursor-pointer border-b-4 border-slate-900 uppercase"
                >
                  Adquirir Básico por R$ 9,90
                </button>

                {/* ATENÇÃO BANNER COAXING PREMIUM SELECT */}
                <div className="mt-4 p-3.5 bg-amber-50 rounded-xl border-2 border-amber-200 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-amber-100/20 animate-pulse pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <p className="text-amber-900 text-[13px] font-black flex items-center justify-center gap-1.5 leading-snug">
                      <span>⚠️ ATENÇÃO!</span>
                      <span className="underline decoration-amber-300 decoration-2">Temos uma oferta ainda melhor para você</span>
                    </p>
                    <p className="text-amber-800 text-[12px] sm:text-[13px] font-extrabold mt-2 flex items-center justify-center gap-1.5">
                      <span>Escolha o Pacote Premium ao lado</span>
                      <span className="hidden md:inline text-base animate-pulse">➡️</span>
                      <span className="inline md:hidden text-lg animate-bounce">👇</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PACOTE PREMIUM CARD */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-emerald-500 relative flex flex-col justify-between transform hover:scale-[1.01] transition-transform duration-300 fade-in-section">
              
              {/* Top Green badge */}
              <div className="bg-[#22C55E] text-white text-center py-2 text-[13px] sm:text-sm font-black uppercase tracking-widest select-none flex items-center justify-center space-x-1 shadow">
                <span>⭐</span>
                <span>MAIS ESCOLHIDO — RECOMENDADO</span>
                <span>⭐</span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                <div>
                  <div className="bg-emerald-50 text-emerald-800 font-extrabold px-2.5 py-1 rounded inline-block text-[11px] tracking-widest uppercase mb-2">
                    🎁 VOCÊ LEVA TUDO ISSO:
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 uppercase tracking-tight font-sans">
                    Pacote Premium Completo
                  </h3>
                  <p className="text-slate-600 text-[13.5px] sm:text-sm font-bold mt-1 mb-4">
                    Para mães e professoras que querem resultado real
                  </p>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-xl p-4.5 mb-6 border border-emerald-100 flex flex-col justify-center items-center">
                    <span className="text-[11px] font-bold text-slate-400 line-through">
                      De R$ 97,00
                    </span>
                    <span className="text-3xl sm:text-4xl font-black font-sans text-[#22C55E] mt-0.5 animate-pulse" style={{ animationDuration: '3s' }}>
                      R$ 27,00
                    </span>
                    <span className="text-[11.5px] sm:text-xs font-black text-emerald-700 uppercase tracking-wider mt-2.5 bg-emerald-100/60 px-3 py-1 rounded-full text-center">
                      Acesso Vitalício + Todas as Atualizações
                    </span>
                  </div>

                  {/* What is included premium checklist */}
                  <ul className="text-left space-y-2.5 mb-6">
                    <li className="flex items-start text-[13.5px] sm:text-sm font-semibold text-slate-900">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>+3.700 Atividades Prontas para Imprimir</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Sílabas Simples + Complexas (BRA, NHA, LHA...)</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Coordenação Motora Completa</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Vogais e Consciência Fonológica</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Alfabeto Silábico de A a Z</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Formando Palavras e Frases</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Caligrafia Inicial e Cursiva</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Matemática</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Ensino Religioso e Artes</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-semibold text-orange-600">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">🎁</span>
                      <span>5 Bônus Exclusivos (R$275+)</span>
                    </li>
                    <li className="flex items-start text-[13.5px] sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Acesso vitalício + todas as atualizações</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    id="cta-premium"
                    href="https://pay.wiapy.com/fCZTb1cH9V"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#1fbd59] text-white font-bold text-[13.5px] sm:text-sm tracking-wide rounded-[40px] py-3.5 px-4 shadow-md hover:scale-102 transition-all select-none cursor-pointer border-b-4 border-emerald-700 uppercase leading-none text-center"
                  >
                    🎉 GARANTIR PREMIUM — R$ 27,00
                  </a>

                  {/* Reinforced checkout elements for premium */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-[10px] sm:text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mt-[18px]">
                    <span className="flex items-center space-x-1">
                      <Lock className="w-2.5 h-2.5 text-emerald-500" />
                      <span>🔒 Compra segura</span>
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>📥 Acesso imediato</span>
                    <span className="hidden sm:inline">•</span>
                    <span>🛡️ Garantia 7 dias</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#F0FDF4] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,15 C200,30 450,5 900,20 C1200,30 1350,15 1440,10 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 10. GARANTIA */}
      <section className="bg-[#F0FDF4] py-14 relative">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-500/10 flex flex-col md:flex-row items-center md:space-x-10 text-center md:text-left relative overflow-hidden fade-in-section">
            
            {/* Ambient decorative background blobs for premium feel */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: Premium Guarantee Seal Image */}
            <div className="flex-shrink-0 mb-6 md:mb-0 relative z-10 flex items-center justify-center">
              <div className="relative group">
                <img 
                  src="https://i.ibb.co/S706BCtM/Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-1.png" 
                  alt="Selo de Garantia de 7 Dias" 
                  referrerPolicy="no-referrer"
                  className="w-40 sm:w-48 md:w-56 h-auto drop-shadow-2xl transform hover:rotate-3 hover:scale-105 transition-all duration-300 select-none"
                />
              </div>
            </div>

            {/* Right Column: Premium Text & Value Proposition */}
            <div className="flex-1 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                🛡️ Compromisso e Segurança
              </span>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-9 tracking-tight text-slate-900 leading-tight">
                Satisfação Garantida ou <span className="text-[#22C55E]">Seu Dinheiro de Volta</span>
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed mt-4">
                Queremos que você tome essa decisão com total segurança e tranquilidade. Se em até <span className="text-emerald-600 font-extrabold bg-emerald-50 px-1 py-0.5 rounded border border-emerald-100">7 dias</span> você não amar o material, por qualquer motivo ou sem precisar dar nenhuma explicação, basta nos enviar um único e-mail e nós <span className="text-emerald-700 font-extrabold underline decoration-emerald-400 decoration-2">devolvemos 100% do seu dinheiro</span>.
              </p>
              
              <div className="mt-5 pt-5 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-center md:justify-start text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500 text-base">✓</span> Reembolso Integral e Rápido
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500 text-base">✓</span> Processo 100% Seguro
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-500 text-base">✓</span> Risco Zero Garantido
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-white fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,25 C150,40 350,10 720,25 C1070,40 1280,10 1440,25 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-white py-10 relative">
        <div className="max-w-2xl mx-auto px-4">
          
          <div className="text-center mb-10 fade-in-section">
            <span className="text-2xl">❓</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-2">
              Dúvidas Frequentes
            </h2>
          </div>

          {/* Accordion Questions */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="bg-[#FAFAFA] rounded-xl p-4 border border-slate-100 text-left transition-all hover:bg-slate-50 hover:shadow-subtle cursor-pointer select-none group fade-in-section"
                onClick={() => toggleFaq(item.id)}
              >
                {/* Expand header */}
                <div className="flex justify-between items-center w-full">
                  <h4 className="font-medium text-[#111827] text-xs sm:text-sm tracking-tight pr-3 font-sans">
                    ❓ {item.question}
                  </h4>
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      openFaqId === item.id ? 'transform rotate-180 text-amber-500' : ''
                    }`} 
                  />
                </div>

                {/* Collapsible Answer */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqId === item.id ? 'max-h-[300px] opacity-100 mt-4.5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 text-[11px] sm:text-xs font-normal pl-4 border-l-2 border-[#FBBF24] leading-relaxed">
                    ➔ {item.answer}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Section divider wrapping into footer (bg-[#1F2937]) */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#1F2937] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,25 C150,40 350,10 720,25 C1070,40 1280,10 1440,25 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#1F2937] py-8 text-slate-400 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-3">
          
          <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider">
            📚 Kit Alfabetização Infantil
          </h4>

          <p className="text-[11px] max-w-2xl mx-auto">
            © 2026 Kit Alfabetização. Todos os direitos reservados.
          </p>

          <p className="text-[10px]/relaxed max-w-lg mx-auto italic text-slate-500 font-medium">
            Este produto é 100% digital em PDF. Resultados podem variar de criança para criança.
          </p>

          {/* Dummy visual footer links */}
          <div className="flex justify-center items-center gap-3 text-[10px] font-bold pt-2.5">
            <button onClick={() => openCheckout('premium')} className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</button>
            <span>·</span>
            <button onClick={() => openCheckout('premium')} className="hover:text-white transition-colors cursor-pointer">Termos de Uso</button>
            <span>·</span>
            <button onClick={() => openCheckout('premium')} className="hover:text-white transition-colors cursor-pointer">Contato</button>
          </div>

        </div>
      </footer>

      {/* Embedded Checkout / PIX Simulator Modal Component */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        selectedPackage={selectedPackage}
      />

      {/* Irresistible Basic-to-Premium Upgrade Offer Modal Popup */}
      <UpgradeOfferModal 
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />

    </div>
  );
}
