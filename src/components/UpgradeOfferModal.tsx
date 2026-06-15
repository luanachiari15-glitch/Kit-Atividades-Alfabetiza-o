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
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-start sm:items-center justify-center p-2 sm:p-4 z-[9999] overflow-y-auto animate-fade-in py-6 sm:py-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border-2 sm:border-4 border-amber-400 relative my-2 sm:my-8 transform transition-all animate-scale-up">
        
        {/* Close button with low footprint */}
        <button 
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-600 bg-slate-100/90 hover:bg-slate-200 rounded-full p-2.5 sm:p-2 transition-all cursor-pointer z-25"
          title="Fechar"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Urgency Badge Header */}
        <div className="bg-gradient-to-r from-red-600 via-amber-505 to-orange-500 text-white p-4 sm:p-5 text-center relative select-none">
          <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-300"></div>
          <span className="inline-flex items-center space-x-1 bg-white/20 text-yellow-100 text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 sm:py-1 rounded-full mb-2 border border-white/20 animate-pulse">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-300" />
            <span>OFERTA EXCLUSIVA — UMA ÚNICA CHANCE</span>
          </span>
          <h3 className="text-lg sm:text-2xl font-black tracking-tight font-sans text-balance leading-tight">
            🚨 ESPERE! NÃO DECIDA AINDA!
          </h3>
          <p className="text-red-105 text-[11px] sm:text-sm font-semibold mt-1">
            Que tal garantir o material completo economizando muito?
          </p>
        </div>

        {/* Modal Content Box */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[75vh] sm:max-h-none">
          
          <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed mb-4 text-center">
            Você selecionou o <span className="text-slate-400 font-extrabold line-through">Pacote Básico por R$ 9,90</span>, mas nesta tela você tem direito a levar o <span className="text-[#22C55E] font-black">PACOTE PREMIUM COMPLETO</span> por apenas <span className="text-emerald-600 font-extrabold text-base sm:text-lg">R$ 17,00</span>!
          </p>

          <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-center mb-4">
            <p className="text-amber-900 text-[11px] sm:text-xs font-black flex items-center justify-center gap-1">
              <span>✍️ COMPRA 100% IDÊNTICA:</span>
              <span className="font-bold">Mesmo conteúdo do plano de R$ 27,00</span>
            </p>
            <p className="text-amber-800 text-[10px] sm:text-[11px] mt-1 font-medium leading-normal">
              Você receberá <span className="font-extrabold">exatamente o mesmo material e todos os bônus</span> entregues no pacote completo, economizando mais de R$ 10,00 adicionais!
            </p>
          </div>

          {/* Premium Upgrade Features comparison list */}
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3 sm:p-5 mb-4 space-y-3">
            <h4 className="text-[10px] sm:text-xs font-black text-emerald-800 uppercase tracking-widest flex items-center space-x-1 border-b border-emerald-100/80 pb-1.5">
              <span>💎</span>
              <span>PRODUTOS E BÔNUS INCLUSOS NA SUA COMPRA:</span>
            </h4>
            
            <ul className="text-left space-y-1.5 sm:space-y-2 text-slate-800 font-medium text-xs sm:text-sm">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-emerald-900 font-extrabold">+3.700 Atividades Prontas</strong> para imprimir</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-emerald-900 font-extrabold">Sílabas Simples + Sílabas Complexas</strong> (Sem trava em BRA, NHA, LHA...)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-bold">Coordenação Motora Completa</strong> e traços iniciais</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-bold">Vogais e Consciência Fonológica</strong></span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-bold">Alfabeto Silábico Completo</strong> de A a Z</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-bold">Formação de Palavras e Frases</strong> progressivas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-bold">Caligrafia Inicial + Cursiva Integral</strong></span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-bold">Matemática Descomplicada</strong> lúdica</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-bold">Ensino Religioso e Artes</strong></span>
              </li>
              <li className="flex items-start text-orange-600 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span>🎁 <strong className="font-extrabold uppercase text-orange-700">TODOS OS 6 BÔNUS INCLUSOS:</strong></span>
              </li>
              <li className="pl-6 text-[11px] sm:text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-1">⏱️ <strong>Bônus 1:</strong> Apostila de Reforço (80 páginas)</div>
                <div className="flex items-center gap-1">📜 <strong>Bônus 2:</strong> Frases e Textos Progressivos</div>
                <div className="flex items-center gap-1">🎲 <strong>Bônus 3:</strong> Jogos Didáticos (Memória, Bingo, Dominó...)</div>
                <div className="flex items-center gap-1">👥 <strong>Bônus 4:</strong> Grupo Exclusivo de Mães/Professoras</div>
                <div className="flex items-center gap-1">📅 <strong>Bônus 5:</strong> Cronograma estruturado (15 min ao dia)</div>
                <div className="flex items-center gap-1 text-emerald-650 font-bold">⚽ <strong>Bônus 6:</strong> Atividades da Copa do Mundo (Exclusivo)</div>
              </li>
              <li className="flex items-start text-[11px] sm:text-xs text-slate-500 font-medium pt-1 border-t border-emerald-100/60">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mr-1.5 flex-shrink-0 mt-0.5" />
                <span>Acesso vitalício ao material + atualizações futuras 100% grátis</span>
              </li>
            </ul>
          </div>

          {/* Super high transition green call to action */}
          <div className="space-y-3 text-center">
            
            <a 
              href="https://pay.wiapy.com/QWlXhnf9SU"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#22C55E] hover:bg-[#1fbd59] text-white font-extrabold text-xs sm:text-base tracking-wide rounded-[40px] py-3 px-4 shadow-lg hover:scale-101 active:scale-99 transition-all select-none cursor-pointer border-b-4 border-emerald-700 uppercase space-x-1 sm:space-x-2 text-balance leading-tight"
            >
              <span>🎉 SIM! QUERO O PREMIUM COM DESCONTO (POR APENAS R$ 17)</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </a>

            {/* Sub text guarantee and safety */}
            <div className="flex items-center justify-center space-x-1 text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span>Compra 100% Protegida · Garantia de 7 Dias · Download Imediato</span>
            </div>

            {/* Tiny, extra thin, non attractive fallback button */}
            <div className="pt-3 border-t border-slate-100 mt-3 sm:mt-4.5">
              <a 
                href="https://pay.wiapy.com/zhV6E7KAyD"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-slate-400 hover:text-slate-500 text-[10px] sm:text-xs font-semibold underline tracking-tight leading-snug transition-colors duration-200 hover:no-underline block"
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
