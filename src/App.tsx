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
  BookOpen
} from 'lucide-react';

import { 
  PAIN_ITEMS, 
  STATISTICS, 
  AUDIENCE_ITEMS, 
  CONTENT_ITEMS, 
  TIMELINE_ITEMS, 
  TESTIMONIALS, 
  BONUS_ITEMS, 
  FAQ_ITEMS 
} from './data';

import CheckoutModal from './components/CheckoutModal';
import UpgradeOfferModal from './components/UpgradeOfferModal';
import TestimonialCarousel from './components/TestimonialCarousel';

export default function App() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<'basico' | 'premium'>('premium');
  const [timeLeft, setTimeLeft] = useState<string>('14:59');
  const [currentMsgIndex, setCurrentMsgIndex] = useState<number>(0);

  const loopMessages = [
    "🔥 OFERTA RELÂMPAGO — VAGAS LIMITADAS HOJE",
    "✅ +12.473 mães e professoras já compraram",
    "🎁 5 BÔNUS EXCLUSIVOS GRÁTIS",
    "⚡ ACESSO IMEDIATO — PDF NO SEU E-MAIL",
    "🛡️ GARANTIA TOTAL 7 DIAS SEM PERGUNTAS",
    "💳 15% EXTRA NO PIX",
    "👩🏫 USADO POR MÃE EM CASA E PROFESSORA EM SALA"
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

  const openCheckout = (pkg: 'basico' | 'premium' = 'premium') => {
    setSelectedPackage(pkg);
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
      <section className="relative overflow-hidden pt-8 pb-12 bg-gradient-to-b from-blue-50/50 via-white to-white">

        <div className="max-w-4xl mx-auto px-4 text-center">
          
          {/* Main Title H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight font-sans text-balance mb-6">
            <span className="block text-[#F97316] mb-1.5">
              Alfabetização do <br /> Zero à Leitura Fluente
            </span>
            <span className="block text-slate-950">
              Sem Choro, Sem Tédio, Sem Improviso!
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            O kit completo com{' '}
            <span className="text-[#3B82F6] font-black bg-blue-50/80 px-1.5 py-0.5 rounded border border-blue-100 text-[13px] sm:text-[15px]">
              +3.700 dinâmicas e atividades prontas para imprimir
            </span>{' '}
            que ensinam sua criança a ler em até 40 dias <span className="block sm:inline text-slate-500 font-bold mt-2 sm:mt-0 text-[12px] sm:text-sm">(mesmo que você não seja professora)</span>
          </p>

          {/* Fast social proof bar (icons) & badge */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 mb-8">
            {/* Badge pill */}
            <div className="inline-flex items-center space-x-1.5 bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-full shadow-subtle transform hover:scale-102 transition-transform">
              <span className="text-emerald-500 text-xs">✅</span>
              <span className="text-slate-800 text-xs sm:text-sm font-black tracking-tight">
                +8.000 mães e professoras já aprovaram
              </span>
            </div>

            {/* Fast social proof bar */}
            <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-2 md:gap-4 max-w-xl mx-auto w-full">
              <div className="bg-white/80 border border-slate-100 rounded-lg px-3 py-2 flex items-center justify-center space-x-1 shadow-sm text-xs sm:text-sm font-bold text-slate-800">
                <span className="text-amber-400 text-xs">⭐</span>
                <span>4.9/5 Nota média</span>
              </div>
              <div className="bg-white/80 border border-slate-100 rounded-lg px-3 py-2 flex items-center justify-center space-x-1 shadow-sm text-xs sm:text-sm font-bold text-slate-800">
                <span className="text-[#3B82F6] text-xs">👩👧</span>
                <span>+8.000 famílias</span>
              </div>
              <div className="bg-white/80 border border-slate-100 rounded-lg px-3 py-2 flex items-center justify-center space-x-1 shadow-sm text-xs sm:text-sm font-bold text-slate-800">
                <span className="text-emerald-500 text-xs">🛡️</span>
                <span>Garantia 7 dias</span>
              </div>
              <div className="bg-white/80 border border-slate-100 rounded-lg px-3 py-2 flex items-center justify-center space-x-1 shadow-sm text-xs sm:text-sm font-bold text-slate-800">
                <span className="text-orange-500 text-xs">⚡</span>
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col items-center justify-center space-y-3.5">
            <button
              id="cta-1"
              onClick={scrollToOffer}
              className="w-full max-w-lg bg-[#22C55E] hover:bg-[#1fbd59] text-white font-semibold text-sm sm:text-base tracking-wide rounded-[40px] py-3.5 px-6 sm:px-10 shadow-md hover:scale-102 transition-all hover:shadow-lg cursor-pointer select-none leading-none border-b-4 border-emerald-700 uppercase"
            >
              ⚡ SIM! QUERO COMEÇAR AGORA — COM DESCONTO
            </button>
            <div className="flex items-center space-x-3 text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-wider mt-1.5">
              <span className="flex items-center space-x-1">
                <Lock className="w-3 h-3 text-emerald-500" />
                <span>Pagamento seguro</span>
              </span>
              <span>•</span>
              <span>📥 Acesso imediato</span>
              <span>•</span>
              <span>🛡️ Garantia de 7 dias</span>
            </div>
          </div>

        </div>

        {/* Section divider wave */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#F0FDF4] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <path d="M0,25 C150,40 350,10 720,25 C1070,40 1280,10 1440,25 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 3. PROVA SOCIAL — NÚMEROS */}
      <section className="bg-[#F0FDF4] py-10 relative">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center mb-10 fade-in-section">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 uppercase tracking-widest banner mb-2.5 inline-block">
              RESULTADOS REAIS
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-1.5 align-middle">
              O que acontece quando você usa o método certo
            </h2>
          </div>

          {/* Grid of 6 statistic cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 justify-center">
            {STATISTICS.map((stat, idx) => (
              <div 
                key={stat.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100 text-center transform hover:scale-102 transition-all duration-300 flex flex-col justify-between items-center min-h-[130px] fade-in-section"
              >
                <div className="flex-1 flex items-center justify-center">
                  <span className={`text-xl sm:text-2xl font-black font-sans tracking-tight ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-white fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,25 C200,5 600,35 1000,10 C1250,5 1370,25 1440,20 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 4. PARA QUEM É */}
      <section className="bg-white py-10 relative">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center mb-10 fade-in-section">
            <span className="text-2xl">🎯</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-3">
              Este kit foi feito EXATAMENTE para você se...
            </h2>
          </div>

          {/* Check grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-10">
            {AUDIENCE_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="flex items-start bg-[#EFF6FF] border border-blue-100 p-3.5 rounded-lg shadow-subtle hover:shadow-md transition-shadow duration-200 fade-in-section"
              >
                <div className="bg-[#3B82F6] text-white rounded-full p-1 mr-2.5 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-800 text-sm sm:text-base font-medium leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Attention Card */}
          <div className="bg-[#FFFBEB] border-l-4 border-l-[#FBBF24] rounded-r-lg p-5 shadow-sm max-w-lg mx-auto mt-6 fade-in-section">
            <div className="flex items-start space-x-2.5">
              <span className="text-xl select-none flex-shrink-0">⚠️</span>
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  <strong className="text-slate-950">Não é para você se:</strong> só quer "dar uma olhada" sem aplicar. Este kit é para quem está pronta para ver a criança lendo em até 30 dias.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#EFF6FF] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,20 C150,40 450,10 900,30 C1200,40 1350,20 1440,15 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 6. CRONOGRAMA DE TRANSFORMAÇÃO */}
      <section className="bg-[#EFF6FF] py-10 relative">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center mb-14 fade-in-section">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-blue-100 text-blue-800 uppercase tracking-widest mb-2.5 inline-block">
              CRONOGRAMA PROGRESSIVO
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
              Da letra solta à leitura fluente — semana a semana
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l-4 border-blue-200 ml-3 sm:ml-6 pl-4 sm:pl-8 space-y-10">
            
            {TIMELINE_ITEMS.map((item, idx) => (
              <div key={item.id} className="relative fade-in-section">
                
                {/* Number bullet */}
                <div className="absolute -left-[35px] sm:-left-[47px] top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-[#EFF6FF] bg-blue-600 shadow-sm flex items-center justify-center text-white text-sm font-black select-none">
                  {item.icon}
                </div>

                <div className="bg-white rounded-xl p-4.5 shadow-sm border border-blue-50/50 hover:shadow-md transition-shadow relative">
                  {/* Decorative tag for time frame */}
                  <span className="absolute -top-3 left-4 bg-amber-400 text-slate-950 font-black text-[8px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm leading-none border border-amber-500">
                    {item.period}
                  </span>
                  
                  <div className="mt-2.5">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs/relaxed sm:text-sm/relaxed font-medium mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-white fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,25 C150,40 350,10 720,25 C1070,40 1280,10 1440,25 L1440,40 L0,40 Z"></path>
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
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
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

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#FFFBEB] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,15 C200,30 550,5 950,20 C1200,30 1350,15 1440,10 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 8. BÔNUS */}
      <section className="bg-[#FFFBEB] py-10 relative">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="text-center mb-11 fade-in-section">
            <span className="text-2xl">🎁</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-2">
              Comprando hoje, você leva esses bônus GRÁTIS
            </h2>
          </div>

          {/* Bonus list in cards */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-11">
            {BONUS_ITEMS.map((item, idx) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl p-4.5 shadow-sm border border-amber-200/50 hover:shadow-md transition-all relative overflow-hidden flex items-start space-x-3 fade-in-section"
              >
                {/* Giant Red "GRÁTIS" Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white font-black text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded-full leading-none">
                  GRÁTIS
                </div>

                <div className="bg-amber-100 text-amber-700 rounded-xl p-2.5 text-2xl flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mt-2 max-w-sm">
                    {item.subtitle}
                  </p>
                  
                  {/* Badge pricing detail */}
                  <span className="inline-block mt-3.5 bg-red-100 text-red-700 text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-red-200 leading-none">
                    {item.badgeValue}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Total values block */}
          <div className="bg-amber-400 text-slate-950 p-4 rounded-xl text-center shadow-md max-w-xl mx-auto transform hover:scale-101 transition-transform fade-in-section">
            <h3 className="text-sm sm:text-base font-black font-sans leading-none uppercase">
              Você leva R$ 275+ em bônus gratuitamente
            </h3>
          </div>

        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-white fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,20 C150,40 450,10 900,30 C1200,40 1350,20 1440,15 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 9. OFERTA / PREÇO */}
      <section id="oferta" className="bg-[#FAFAFA] py-14 relative">
        <div className="max-w-5xl mx-auto px-4 animate-fade-in">
          
          <div className="text-center mb-10 fade-in-section">
            <span className="px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 uppercase tracking-widest mb-2.5 inline-block">
              ⏱️ OFERTA POR TEMPO LIMITADO
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Escolha o melhor plano para sua criança
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
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
                <p className="text-slate-500 text-xs mt-1 mb-4">
                  O material essencial para começar
                </p>

                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 flex flex-col justify-center items-center">
                  <span className="text-xs font-bold text-slate-400 line-through">
                    De R$ 37,00
                  </span>
                  <span className="text-2xl font-black font-sans text-slate-600 mt-0.5">
                    R$ 9,90
                  </span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-2.5 bg-white px-2 py-0.5 rounded-full border border-slate-100">
                    Arquivo Digital em PDF
                  </span>
                </div>

                {/* What is included checklist */}
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start text-xs sm:text-sm font-medium text-slate-600">
                    <span className="text-[#22C55E] mr-2 font-black text-xs">✓</span>
                    <span className="font-semibold text-slate-800">2.500 Atividades Prontas</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  id="cta-basico"
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-wide rounded-[40px] py-3 px-4 shadow-sm hover:scale-101 transition-all select-none cursor-pointer border-b-4 border-slate-900 uppercase"
                >
                  Adquirir Básico por R$ 9,90
                </button>

                {/* ATENÇÃO BANNER COAXING PREMIUM SELECT */}
                <div className="mt-4 p-3.5 bg-amber-50 rounded-xl border-2 border-amber-200 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-amber-100/20 animate-pulse pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <p className="text-amber-900 text-xs font-black flex items-center justify-center gap-1.5 leading-snug">
                      <span>⚠️ ATENÇÃO!</span>
                      <span className="underline decoration-amber-300 decoration-2">Temos uma oferta ainda melhor para você</span>
                    </p>
                    <p className="text-amber-800 text-[11px] font-extrabold mt-2 flex items-center justify-center gap-1.5">
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
              <div className="bg-[#22C55E] text-white text-center py-2 text-xs sm:text-sm font-black uppercase tracking-widest select-none flex items-center justify-center space-x-1 shadow">
                <span>⭐</span>
                <span>MAIS ESCOLHIDO — RECOMENDADO</span>
                <span>⭐</span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                <div>
                  <div className="bg-emerald-50 text-emerald-800 font-extrabold px-2.5 py-1 rounded inline-block text-[10px] tracking-widest uppercase mb-2">
                    🎁 VOCÊ LEVA TUDO ISSO:
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 uppercase tracking-tight font-sans">
                    Pacote Premium Completo
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-bold mt-1 mb-4">
                    Para mães e professoras que querem resultado real
                  </p>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-xl p-4.5 mb-6 border border-emerald-100 flex flex-col justify-center items-center">
                    <span className="text-xs font-bold text-slate-400 line-through">
                      De R$ 97,00
                    </span>
                    <span className="text-3xl sm:text-4xl font-black font-sans text-[#22C55E] mt-0.5 animate-pulse" style={{ animationDuration: '3s' }}>
                      R$ 27,00
                    </span>
                    <span className="text-[10px] sm:text-xs font-black text-emerald-700 uppercase tracking-wider mt-2.5 bg-emerald-100/60 px-3 py-1 rounded-full text-center">
                      Acesso Vitalício + Todas as Atualizações
                    </span>
                  </div>

                  {/* What is included premium checklist */}
                  <ul className="text-left space-y-2.5 mb-6">
                    <li className="flex items-start text-xs sm:text-sm font-semibold text-slate-900">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>+3.700 Atividades Prontas para Imprimir</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Sílabas Simples + Complexas (BRA, NHA, LHA...)</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Coordenação Motora Completa</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Vogais e Consciência Fonológica</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Alfabeto Silábico de A a Z</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Formando Palavras e Frases</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Caligrafia Inicial e Cursiva</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Matemática</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">✅</span>
                      <span>Ensino Religioso e Artes</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-semibold text-orange-600">
                      <span className="text-[#22C55E] mr-2 font-sans text-xs">🎁</span>
                      <span>5 Bônus Exclusivos (R$275+)</span>
                    </li>
                    <li className="flex items-start text-xs sm:text-sm font-medium text-slate-800">
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
                    className="w-full inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#1fbd59] text-white font-bold text-xs sm:text-sm tracking-wide rounded-[40px] py-3.5 px-4 shadow-md hover:scale-102 transition-all select-none cursor-pointer border-b-4 border-emerald-700 uppercase leading-none text-center"
                  >
                    🎉 GARANTIR PREMIUM — R$ 27,00
                  </a>

                  {/* Reinforced checkout elements for premium */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-[18px]">
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
      <section className="bg-[#F0FDF4] py-10 relative">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="bg-white rounded-2xl p-6 sm:p-9.5 shadow-md border-2 border-emerald-500/20 flex flex-col md:flex-row items-center md:items-start md:space-x-8 text-center md:text-left fade-in-section">
            
            {/* Left large icon column */}
            <div className="bg-emerald-500 rounded-full p-5 mb-4 md:mb-0 flex-shrink-0 border-4 border-emerald-100 shadow-lg flex items-center justify-center transform hover:scale-105 transition-all duration-300">
              <ShieldCheck className="w-16 h-16 text-white" />
            </div>

            {/* Right text box */}
            <div className="flex-1">
              <h3 className="text-base sm:text-xl font-black text-emerald-900 tracking-tight flex items-center justify-center md:justify-start gap-1.5 uppercase">
                <span>🛡️</span>
                <span>Garantia INCONDICIONAL de 7 dias</span>
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mt-4">
                Se em <span className="text-emerald-600 font-extrabold">7 dias</span> você não amar o material, por qualquer motivo e sem precisar dar nenhuma explicação, basta nos enviar um e-mail e nós <span className="text-emerald-700 font-extrabold underline decoration-emerald-300 decoration-2">devolvemos 100% do seu dinheiro</span>. <span className="font-bold text-slate-800">Sem perguntas, sem burocracia.</span> O <span className="text-emerald-600 font-extrabold">risco é completamente nosso</span>, você não tem <span className="text-emerald-700 font-black">absolutamente nada a perder</span>!
              </p>
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

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none text-[#22C55E] fill-current">
          <svg viewBox="0 0 1440 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,25 C150,40 350,10 720,25 C1070,40 1280,10 1440,25 L1440,40 L0,40 Z"></path>
          </svg>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="bg-[#22C55E] py-10 relative text-white overflow-hidden">
        
        {/* Playful elements inside green CTA background */}
        <div className="absolute top-10 left-[10%] text-white/5 text-4xl pointer-events-none select-none">✏️</div>
        <div className="absolute bottom-10 right-[10%] text-white/5 text-4xl pointer-events-none select-none">🎈</div>

        <div className="max-w-2xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          
          <div className="bg-white/10 border border-white/20 p-3 rounded-full text-2xl mb-5 flex-shrink-0 animate-bounce" style={{ animationDuration: '4s' }}>
            📚
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight leading-[1.1] font-sans mb-4.5">
            Não deixe a criança ficar para trás.
          </h2>

          <p className="text-emerald-100 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed mb-8">
            Cada semana sem o método certo é mais uma semana de atraso. Comece hoje. Em 30 dias, você não vai reconhecer a evolução dela.
          </p>

          <button
            id="cta-4"
            onClick={scrollToOffer}
            className="w-full max-w-md bg-white text-[#22C55E] hover:bg-slate-50 font-semibold text-xs sm:text-sm tracking-wide rounded-[40px] py-3.5 px-6 sm:px-8 shadow-lg hover:scale-102 active:scale-98 leading-none transition-all cursor-pointer uppercase border-b-4 border-slate-300"
          >
            ✨ SIM! QUERO O KIT AGORA COM DESCONTO
          </button>

          <div className="flex items-center space-x-3 text-emerald-100 font-bold text-[9px] uppercase tracking-wider mt-6">
            <span>🔒 Pagamento seguro</span>
            <span>•</span>
            <span>⚡ Acesso imediato</span>
            <span>•</span>
            <span>🛡️ Garantia de 7 dias</span>
          </div>

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
            <button onClick={openCheckout} className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</button>
            <span>·</span>
            <button onClick={openCheckout} className="hover:text-white transition-colors cursor-pointer">Termos de Uso</button>
            <span>·</span>
            <button onClick={openCheckout} className="hover:text-white transition-colors cursor-pointer">Contato</button>
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
