/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { X, ShieldCheck, CreditCard, QrCode, Mail, User, Phone, CheckCircle, Download, FileText } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: 'basico' | 'premium';
  overridePrice?: string;
  overrideTitle?: string;
  onSuccess?: () => void;
}

export default function CheckoutModal({ isOpen, onClose, selectedPackage, overridePrice, overrideTitle, onSuccess }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [step, setStep] = useState<'details' | 'payment-pending' | 'success'>('details');
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Por favor, preencha todos os campos para enviar o material.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Insira um e-mail válido para receber o PDF.');
      return;
    }
    setStep('payment-pending');
  };

  const handleMockPay = () => {
    setStep('success');
    if (onSuccess) {
      onSuccess();
    }
  };

  const isPremium = selectedPackage === 'premium';
  const priceLabel = overridePrice || (isPremium ? 'R$ 27,00' : 'R$ 9,90');
  const originalPriceLabel = isPremium ? 'R$ 97,00' : 'R$ 37,00';
  const titleLabel = overrideTitle || (isPremium ? 'Pacote Premium Completo' : 'Pacote Básico de Alfabetização');
  const descLabel = isPremium 
    ? '+3.700 Atividades, Sílabas Simples + Complexas, 5 Bônus, Acesso Vitalício'
    : 'Pacote com 2.500 Atividades Prontas em PDF';

  // Extract clean number representation for mock PIX key
  const numericValue = priceLabel.replace('R$', '').replace(',', '.').trim();
  const mockPixKey = `00020101021126580014br.gov.bcb.pix0136d47bcd90-0814-453f-808b-7d20004e8bad5204000053039865405${numericValue}5802BR5925INFOPRODUTO ALFABETIZACAO6009SAO PAULO62070503***63047EA2`;

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 z-[9999] overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-amber-300 relative my-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1.5 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 relative">
          <div className="bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-full text-xs absolute top-4 left-6 uppercase tracking-wider">
            {isPremium ? '💎 RECOMENDADO — 73% OFF' : '⚡ BÁSICO PROMOCIONAL'}
          </div>
          <div className="mt-4">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight font-sans">
              {titleLabel}
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm font-semibold mt-1">
              {descLabel}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 'details' && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl border border-emerald-100 text-xs flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span><strong>Acesso vitalício imediato!</strong> Insira seus dados corretos para receber as chaves de acesso e links nos e-mails seguintes.</span>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-lg text-xs font-bold text-center">
                  ⚠️ {errorMsg}
                </div>
              )}

              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-700 uppercase tracking-widest leading-none">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Ana Maria Silva"
                    className="pl-10 pr-4 py-3 w-full border-2 border-slate-200 rounded-xl text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-700 uppercase tracking-widest leading-none">
                  Seu Melhor E-mail (Onde receberá o PDF)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex: seu-email@gmail.com"
                    className="pl-10 pr-4 py-3 w-full border-2 border-slate-200 rounded-xl text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-700 uppercase tracking-widest leading-none">
                  WhatsApp com DDD
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ex: (11) 99999-9999"
                    className="pl-10 pr-4 py-3 w-full border-2 border-slate-200 rounded-xl text-sm focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Price comparison inside details */}
              <div className="bg-slate-50 p-4 rounded-xl flex justify-between items-center border border-slate-100">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 line-through">
                    De {originalPriceLabel}
                  </p>
                  <p className="text-xl font-black text-slate-950 font-sans">
                    {priceLabel}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">
                    PAGAMENTO ÚNICO
                  </p>
                  <p className="text-[9px] text-slate-400 font-bold mt-1">
                    Acesso Vitalício • Sem Mensalidade
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-black py-4 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-98 transition-all hover:scale-101 border-b-4 border-emerald-700 leading-none text-center cursor-pointer"
              >
                PROSSEGUIR PARA PAGAMENTO ➔
              </button>
            </form>
          )}

          {step === 'payment-pending' && (
            <div className="space-y-4 text-center">
              <h4 className="text-md font-bold text-slate-800">Escolha o Método de Pagamento</h4>
              
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-3 rounded-xl font-black text-xs flex items-center justify-center space-x-2 border-2 transition-all cursor-pointer ${
                    paymentMethod === 'pix' 
                      ? 'border-teal-500 bg-teal-50 text-teal-800' 
                      : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-teal-600" />
                  <span>CÓDIGO PIX (Imediato)</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`py-3 rounded-xl font-black text-xs flex items-center justify-center space-x-2 border-2 transition-all cursor-pointer ${
                    paymentMethod === 'card' 
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-800' 
                      : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-indigo-600" />
                  <span>CARTÃO (Até 5 min)</span>
                </button>
              </div>

              {/* PIX Option */}
              {paymentMethod === 'pix' && (
                <div className="space-y-4 p-4 border border-teal-100 rounded-xl bg-teal-50/20 text-center flex flex-col items-center">
                  <div className="bg-white p-3 rounded-lg border-2 border-teal-500/30 max-w-[150px] w-full aspect-square flex items-center justify-center">
                    {/* Generates placeholder visual QR code */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-950">
                      <rect width="100" height="100" fill="white" />
                      <path d="M 0 0 h 30 v 30 h -30 Z M 70 0 h 30 v 30 h -30 Z M 0 70 h 30 v 30 h -30 Z" fill="currentColor" />
                      <path d="M 10 10 h 10 v 10 h -10 Z M 80 10 h 10 v 10 h -10 Z M 10 80 h 10 v 10 h -10 Z" fill="white" />
                      <path d="M 40 40 h 20 v 20 h -20 Z M 20 40 h 10 v 10 h -10 Z M 70 40 h 10 v 10 h -10 Z M 40 10 h 10 v 10 h -10 Z M 40 80 h 10 v 10 h -10 Z" fill="currentColor" opacity="0.8" />
                      <rect x="42" y="42" width="16" height="16" fill="emerald" />
                      <circle cx="50" cy="50" r="4" fill="#22C55E" />
                    </svg>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Clique abaixo para copiar a chave PIX Copia e Cola. Depois abra o app do seu banco e pague na seção de Pix Copia e Cola.
                  </p>
                  
                  <div className="w-full max-w-sm flex items-center space-x-2 bg-white border-2 border-slate-200 rounded-lg p-2">
                    <input
                      type="text"
                      readOnly
                      value={mockPixKey}
                      className="text-xs font-mono select-all overflow-ellipsis whitespace-nowrap overflow-hidden bg-transparent grow outline-none px-2 text-slate-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(mockPixKey);
                        alert('Chave PIX Copia e Cola copiada com sucesso!');
                      }}
                      className="bg-slate-900 text-white font-extrabold text-[10px] px-3 py-1.5 rounded uppercase hover:bg-slate-800 transition-colors"
                    >
                      COPIAR
                    </button>
                  </div>

                  <div className="w-full bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-black">
                    ⏱️ Aguardando confirmação do pagamento...
                  </div>
                </div>
              )}

              {/* Card Option */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 text-left p-4 border border-indigo-100 rounded-xl bg-indigo-50/20">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-wider">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="4512 •••• •••• 1289"
                      className="p-2.5 border-2 border-slate-200 rounded-lg w-full text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-600 uppercase tracking-wider">Validade</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="p-2.5 border-2 border-slate-200 rounded-lg w-full text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-600 uppercase tracking-wider">CVV (Código)</label>
                      <input
                        type="password"
                        placeholder="•••"
                        className="p-2.5 border-2 border-slate-200 rounded-lg w-full text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-600 uppercase tracking-wider">Parcelas</label>
                    <select className="p-2.5 border-2 border-slate-200 rounded-lg w-full text-sm bg-white font-semibold">
                      <option>1x de {priceLabel} (Sem Juros)</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="w-1/3 bg-slate-100 font-bold py-3 px-2 rounded-xl text-xs text-slate-600 border hover:bg-slate-200 active:scale-95 transition-all text-center cursor-pointer"
                >
                  ◀ VOLTAR
                </button>
                <button
                  type="button"
                  onClick={handleMockPay}
                  className="w-2/3 bg-emerald-500 text-white font-black py-4.5 rounded-xl shadow-lg active:scale-95 text-xs sm:text-sm tracking-wide transform hover:scale-101 hover:bg-emerald-400 border-b-4 border-emerald-700 transition-all text-center cursor-pointer uppercase flex items-center justify-center space-x-1"
                >
                  <span>🎉 CONFIRMAR PAGAMENTO SIMULADO</span>
                </button>
              </div>

              <div className="text-[10px] text-slate-400 font-bold flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Simulação segura de checkout · Ambiente de Teste AI Studio</span>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center space-y-4 py-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 border-4 border-emerald-200 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900 tracking-tight font-sans">
                📥 COMPRA INTEGRADA COM SUCESSO!
              </h4>
              <p className="text-sm font-semibold text-slate-600 max-w-md mx-auto">
                Parabéns, <strong>{formData.name || 'Compromissado(a)'}</strong>! Enviamos a confirmação de compra e o material digital completo para o e-mail:
              </p>
              <div className="py-2.5 px-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center inline-block font-mono text-sm font-extrabold shadow-sm">
                {formData.email || 'seu-email@gmail.com'}
              </div>

              {/* Free Gift Card */}
              <div className="p-4 border-2 border-dashed border-amber-400 bg-amber-50 rounded-xl text-left space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h5 className="text-xs font-black text-amber-900 leading-none uppercase tracking-wide">AMOSTRA DE BÔNUS INSTANTÂNEA</h5>
                    <p className="text-[10px] font-bold text-amber-700">Baixe um exemplo ilustrado gratuito agora!</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Como você está avaliando nossa página no AI Studio, liberamos imediatamente uma amostra do <strong>Kit Silabário de Alfabetização</strong> com páginas para imprimir.
                </p>
                <a
                  href="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=1000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2.5 rounded-lg text-xs tracking-wider uppercase text-center block shadow transition-colors border-2 border-slate-950/20"
                >
                  <span className="flex items-center justify-center space-x-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span>BAIXAR AMOSTRA EM PDF</span>
                  </span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    setStep('details');
                    setFormData({ name: '', email: '', phone: '' });
                  }}
                  className="bg-slate-900 text-white font-black text-xs py-2 px-6 rounded-lg tracking-wider uppercase hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
