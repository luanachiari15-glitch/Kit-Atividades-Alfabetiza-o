/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Sparkles, AlertTriangle, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface UpgradeOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpgradeOfferModal({ isOpen, onClose }: UpgradeOfferModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-[9999] overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border-4 border-amber-400 relative my-8 transform transition-all animate-scale-up">
        
        {/* Close button with low footprint */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100/80 rounded-full p-2 transition-all cursor-pointer z-25"
          title="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Urgency Badge Header */}
        <div className="bg-gradient-to-r from-red-600 via-amber-500 to-orange-500 text-white p-5 text-center relative select-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-300"></div>
          <span className="inline-flex items-center space-x-1.5 bg-white/20 text-yellow-100 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 border border-white/20 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>OFERTA EXCLUSIVA — UMA ÚNICA CHANCE</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight font-sans text-balance leading-tight">
            🚨 ESPERE! NÃO DECIDA AINDA!
          </h3>
          <p className="text-red-100 text-xs sm:text-sm font-medium mt-1">
            Que tal garantir o material completo economizando muito?
          </p>
        </div>

        {/* Modal Content Box */}
        <div className="p-6 sm:p-8">
          
          <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed mb-6 text-center">
            Você selecionou o <span className="text-slate-500 font-extrabold line-through">Pacote Básico por R$ 9,90</span>, mas apenas hoje, nesta tela, você pode levar o <span className="text-[#22C55E] font-black">PACOTE PREMIUM COMPLETO</span> por apenas <span className="text-emerald-600 font-extrabold text-lg sm:text-xl">R$ 17,00</span>!
          </p>

          {/* Premium Upgrade Features comparison list */}
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 sm:p-5.5 mb-7 space-y-4">
            <h4 className="text-xs sm:text-sm font-black text-emerald-800 uppercase tracking-wider flex items-center space-x-1.5 border-b border-emerald-100/80 pb-2">
              <span>💎</span>
              <span>O QUE ESTÁ INCLUSO NO PACOTE PREMIUM (R$ 17):</span>
            </h4>
            
            <ul className="text-left space-y-2.5">
              <li className="flex items-start text-xs sm:text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span>+3.700 Atividades Prontas <span className="text-slate-400 font-normal">(1.200 a mais que o básico)</span></span>
              </li>
              <li className="flex items-start text-xs sm:text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-700 font-black">Sílabas Simples + Sílabas Complexas (BRA, NHA, LHA...)</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm font-[#555] text-slate-800">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span>Coordenação Motora Completa, Vogais & Consciência Fonológica</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm font-[#555] text-slate-800">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span>Alfabeto Silábico Completo + Formando Palavras e Frases</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm font-[#555] text-slate-800">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span>Caligrafia Inicial e Cursiva + Ensino Religioso e Artes</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm font-bold text-orange-600">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span>🎁 5 Bônus Exclusivos Completos (R$275 de valor real)</span>
              </li>
              <li className="flex items-start text-xs sm:text-sm font-[#555] text-slate-800">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#22C55E] mr-2 flex-shrink-0 mt-0.5" />
                <span>Acesso vitalício completo + atualizações futuras 100% grátis</span>
              </li>
            </ul>
          </div>

          {/* Super high transition green call to action */}
          <div className="space-y-4.5 text-center">
            
            <a 
              href="https://pay.wiapy.com/XdvXjHI56"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#1fbd59] text-white font-extrabold text-sm sm:text-base tracking-wide rounded-[40px] py-4 px-6 shadow-lg hover:scale-101 transition-all select-none cursor-pointer border-b-4 border-emerald-700 uppercase space-x-2"
            >
              <span>🎉 SIM! QUERO O PREMIUM COM DESCONTO (POR APENAS R$ 17)</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>

            {/* Sub text guarantee and safety */}
            <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span>Compra 100% Protegida · Garantia de 7 Dias · Download Imediato</span>
            </div>

            {/* Tiny, extra thin, non attractive fallback button */}
            <div className="pt-4 border-t border-slate-100 mt-4.5">
              <a 
                href="https://pay.wiapy.com/zhV6E7KAyD"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-slate-400 hover:text-slate-500 text-[10.5px] sm:text-xs font-semibold underline tracking-tight transition-colors duration-200 hover:no-underline"
              >
                Não quero aproveitar essa oportunidade única. Desejo comprar apenas o Pacote Básico por R$ 9,90 mesmo.
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
