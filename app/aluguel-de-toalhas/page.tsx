'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FounderSection } from '@/components/founder-section';
import { 
  Menu, X, Check, ShieldCheck, Sparkles, RefreshCw, PackageX, 
  Scissors, Heart, Smile, CalendarDays, Truck, RotateCw, Layers, 
  MapPin, Phone, Instagram, CheckCircle2
} from 'lucide-react';

export default function AluguelToalhasLP() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openWhatsApp = (message = '') => {
    const phoneNumber = '5511949912798'; // Substitua pelo número correto da Care For Men
    const text = message || 'Olá! Gostaria de solicitar um orçamento para o aluguel de toalhas.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const navLinks = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#orcamento' }
  ];

  // Dados dos Planos extraídos das imagens
  const planos = [
    {
      nome: "Micro",
      subtitulo: "A solução ideal para profissionais e barbearias que estão começando.",
      toalhas: "25",
      coletas: "1X",
      preco: "349,00",
      obs: "*Até 10% acima do plano sem cobrança. Acima disso, cobrança por toalha excedente.",
      isEnterprise: false
    },
    {
      nome: "Start",
      subtitulo: "A solução ideal para pequenas barbearias.",
      toalhas: "50",
      coletas: "1X",
      preco: "599,00",
      obs: "*Até 10% acima do plano sem cobrança. Acima disso, cobrança por toalha excedente.",
      isEnterprise: false
    },
    {
      nome: "Essencial",
      subtitulo: "A solução perfeita para barbearias em crescimento.",
      toalhas: "100",
      coletas: "1X",
      preco: "999,00",
      obs: "*Até 10% acima do plano sem cobrança. Acima disso, cobrança por toalha excedente.",
      isEnterprise: false
    },
    {
      nome: "Profissional",
      subtitulo: "Para barbearias que buscam excelência em cada detalhe.",
      toalhas: "180",
      coletas: "1X",
      preco: "1.690,00",
      obs: "*Até 10% acima do plano sem cobrança. Acima disso, cobrança por toalha excedente.",
      isEnterprise: false
    },
    {
      nome: "Premium",
      subtitulo: "Para barbearias de alto fluxo que não abrem mão de excelência.",
      toalhas: "300",
      coletas: "2X",
      preco: "2.790,00",
      obs: "*Até 10% acima do plano sem cobrança. Acima disso, cobrança por toalha excedente.",
      isEnterprise: false
    },
    {
      nome: "Enterprise",
      subtitulo: "Solução personalizada para redes e grandes operações.",
      toalhas: "Personalizado",
      coletas: "Flexível",
      preco: "SOB CONSULTA",
      obs: "Condições especiais de acordo com o porte da sua operação.",
      isEnterprise: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-gray-900/50 w-full">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo-round.png"
            alt="Care For Men"
            width={52}
            height={52}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="font-serif text-lg tracking-widest uppercase text-[#D4AF37]">Care For Men</h1>
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">Linen Service</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#D4AF37] hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden sticky top-[76px] z-40 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-gray-900/50 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif leading-none mb-1 text-white uppercase">
            Aluguel de
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold font-serif leading-none mb-6 text-[#D4AF37] uppercase">
            Toalhas
          </h2>
          
          <div className="text-lg md:text-xl font-semibold mb-6 text-gray-200 uppercase tracking-wide leading-relaxed">
            Mais Praticidade.<br />
            Mais Qualidade.<br />
            <span className="text-[#D4AF37]">Mais foco no que importa:<br />seus clientes.</span>
          </div>

          <p className="text-gray-400 mb-8 max-w-md text-sm md:text-base">
            Solução completa em enxoval com toalhas de alta qualidade, sempre limpas, higienizadas e prontas para uso.
          </p>

          <div className="flex flex-col items-start gap-2">
            <button onClick={() => openWhatsApp()} className="contato-whatsapp w-full md:w-auto bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-md flex items-center justify-center py-4 px-8 transition-all gap-3">
              <Image src="/whatsapp_float.png" alt="" width={24} height={24} className="size-6 object-contain" />
              <span className="font-bold text-lg uppercase">Solicitar Orçamento</span>
            </button>
            <span className="text-xs text-gray-400 ml-2">Atendimento rápido via WhatsApp</span>
          </div>
        </div>

        {/* Hero Image Area */}
        <div className="md:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent z-10 md:block hidden" />
          <Image 
            src="/toalhas-hero.jpg" 
            alt="Toalhas empilhadas Care For Men" 
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* 4 FEATURES BAR */}
      <section className="px-6 py-8 md:py-12 max-w-7xl mx-auto -mt-6 relative z-20">
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="flex flex-col items-center text-center px-4">
            <ShieldCheck className="text-[#D4AF37] mb-4" size={36} strokeWidth={1.5} />
            <h4 className="text-sm font-bold uppercase text-white mb-2 tracking-wide">Qualidade<br/>Premium</h4>
            <p className="text-xs text-gray-400">Toalhas de alta gramatura e acabamento superior</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 md:border-l md:border-gray-800">
            <Sparkles className="text-[#D4AF37] mb-4" size={36} strokeWidth={1.5} />
            <h4 className="text-sm font-bold uppercase text-white mb-2 tracking-wide">Sempre Limpa</h4>
            <p className="text-xs text-gray-400">Higienizadas com padrão profissional em cada ciclo</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 md:border-l md:border-gray-800">
            <RefreshCw className="text-[#D4AF37] mb-4" size={36} strokeWidth={1.5} />
            <h4 className="text-sm font-bold uppercase text-white mb-2 tracking-wide">Troca<br/>Garantida</h4>
            <p className="text-xs text-gray-400">Substituição de toalhas desgastadas sem custo adicional</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 md:border-l md:border-gray-800">
            <PackageX className="text-[#D4AF37] mb-4" size={36} strokeWidth={1.5} />
            <h4 className="text-sm font-bold uppercase text-white mb-2 tracking-wide">Sem Estoque</h4>
            <p className="text-xs text-gray-400">Sem preocupação com lavagem, reposição e armazenamento</p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS (WHITE SECTION) */}
      <section id="beneficios" className="bg-[#F5F5F5] py-20 px-6 text-black mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-serif font-bold uppercase leading-tight mb-8">
              Benefícios
            </h3>
            
            <div className="flex flex-col gap-6">
              {[
                "Redução de custos com lavanderia (água, energia e produtos)",
                "Toalhas sempre padronizadas e de alta qualidade",
                "Sem necessidade de investimento em máquinas e mão de obra",
                "Coleta e entrega programada",
                "Mais tempo para focar no atendimento"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} strokeWidth={3} />
                  <span className="text-lg font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                 src="/toalhas-beneficios.jpg" 
                 alt="Rolinhos de toalha" 
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS SECTION */}
      <section id="planos" className="py-20 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[#D4AF37] uppercase tracking-widest text-lg font-bold mb-4">
              Nossos Planos
            </h3>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase">
              Escolha o plano ideal
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Temos a solução perfeita em enxoval para o tamanho exato da sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planos.map((plano, idx) => (
              <div key={idx} className="bg-[#0B0B0B] border border-gray-800 hover:border-[#D4AF37] transition-colors rounded-2xl p-8 flex flex-col relative group overflow-hidden">
                {/* Linha dourada de destaque */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37]/50 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="mb-6">
                  <span className="bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4 inline-block">
                    Plano
                  </span>
                  <h3 className="text-4xl font-serif font-bold text-white uppercase mb-2">
                    {plano.nome}
                  </h3>
                  <p className="text-[#D4AF37] text-sm font-semibold uppercase h-10 line-clamp-2">
                    {plano.subtitulo}
                  </p>
                </div>

                <div className="border-t border-b border-gray-800 py-6 mb-6 flex justify-between gap-4">
                  <div className="text-center w-1/2 border-r border-gray-800 pr-4">
                    <span className="block text-3xl font-bold text-white mb-1">{plano.toalhas}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                      {plano.isEnterprise ? 'Toalhas Limpas/Semana' : 'Toalhas Limpas / Por Semana'}
                    </span>
                  </div>
                  <div className="text-center w-1/2 pl-4">
                    <span className="block text-3xl font-bold text-white mb-1">{plano.coletas}</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                      {plano.isEnterprise ? 'Entregas Personalizadas' : 'Coleta e Entrega / Por Semana'}
                    </span>
                  </div>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Locação das toalhas
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Lavagem profissional
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" /> Reposição por desgaste
                    </li>
                    {plano.isEnterprise && (
                      <li className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-[#D4AF37]" /> Gestão e relatórios
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="mb-6">
                    <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">
                      {plano.isEnterprise ? 'Investimento' : 'Investimento Mensal'}
                    </span>
                    <div className="flex items-end gap-2 text-[#D4AF37]">
                      {!plano.isEnterprise && <span className="text-xl font-bold mb-1">R$</span>}
                      <span className="text-4xl font-bold">{plano.preco}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => openWhatsApp(`Olá! Gostaria de saber mais sobre o Plano ${plano.nome} de aluguel de toalhas.`)}
                    className="contato-whatsapp w-full bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold uppercase tracking-wider py-4 rounded transition-colors flex items-center justify-center gap-2 mb-4"
                  >
                    Quero este plano
                  </button>
                  <p className="text-[10px] text-gray-500 leading-tight text-center">
                    {plano.obs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-16 px-6 bg-[#0B0B0B] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-white uppercase tracking-widest text-xl font-bold mb-20">
            Como Funciona
          </h3>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative gap-12 md:gap-0">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] border-t border-gray-700 z-0" />
            
            {[
              { icon: CalendarDays, num: "1", title: "Plano Ideal", desc: "Escolha o plano ideal para o seu volume de utilização." },
              { icon: Truck, num: "2", title: "Entrega", desc: "Recebemos e entregamos suas toalhas limpas e prontas para uso." },
              { icon: RotateCw, num: "3", title: "Coleta", desc: "Coletamos as toalhas utilizadas de acordo com o cronograma." },
              { icon: Layers, num: "4", title: "Lavagem", desc: "Lavamos com produtos profissionais e alto padrão de higienização." }
            ].map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center z-10 w-full md:w-1/4 px-4 relative">
                  <div className="absolute -top-6 bg-[#D4AF37] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs z-20">
                    {step.num}
                  </div>
                  <div className="w-20 h-20 rounded-full border-2 border-gray-700 bg-[#0B0B0B] flex items-center justify-center text-[#D4AF37] mb-6">
                    <step.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="uppercase text-white font-bold tracking-widest text-sm mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm max-w-[200px] mx-auto">{step.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOALHAS PARA TODOS OS SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-center text-[#D4AF37] uppercase tracking-widest text-lg font-bold mb-16">
          Toalhas para todos os serviços
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-16 flex items-end justify-center">
               <Scissors className="text-[#D4AF37]" size={48} strokeWidth={1} />
            </div>
            <h4 className="text-sm font-bold uppercase mb-2 tracking-widest">Barbearia</h4>
            <p className="text-sm text-gray-400">Toalhas de rosto,<br/>pescoço e mãos</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-16 flex items-end justify-center">
               <Heart className="text-[#D4AF37]" size={48} strokeWidth={1} />
            </div>
            <h4 className="text-sm font-bold uppercase mb-2 tracking-widest">Massagens</h4>
            <p className="text-sm text-gray-400">Toalhas de banho<br/>e de rosto</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-16 flex items-end justify-center">
               <Sparkles className="text-[#D4AF37]" size={48} strokeWidth={1} />
            </div>
            <h4 className="text-sm font-bold uppercase mb-2 tracking-widest">Depilação</h4>
            <p className="text-sm text-gray-400">Toalhas de corpo<br/>e íntimas</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-16 flex items-end justify-center">
               <Smile className="text-[#D4AF37]" size={48} strokeWidth={1} />
            </div>
            <h4 className="text-sm font-bold uppercase mb-2 tracking-widest">Estética</h4>
            <p className="text-sm text-gray-400">Toalhas para limpeza<br/>de pele e tratamentos</p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <FounderSection />

      <footer id="orcamento" className="pt-20 pb-8 px-6 bg-[#050505] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-white mb-2 tracking-wide leading-tight">
                Praticidade, Economia<br/>e padrão premium.
              </h3>
              <h3 className="text-xl md:text-2xl font-bold uppercase text-[#D4AF37] tracking-wide">
                Tudo para elevar a experiência<br/>dos seus clientes.
              </h3>
            </div>
            
            <div className="md:w-1/2 flex justify-end w-full">
              <div className="border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col items-start bg-[#0A0A0A] w-full max-w-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                <button onClick={() => openWhatsApp()} className="contato-whatsapp text-[#D4AF37] hover:text-[#b8952b] flex items-center gap-3 transition-colors mb-3 group">
                  <Image src="/whatsapp_float.png" alt="" width={28} height={28} className="size-7 object-contain group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-lg md:text-xl uppercase tracking-wider">Solicitar Orçamento</span>
                </button>
                <p className="text-gray-400 text-sm ml-10">
                  Fale com um especialista<br/>e receba uma proposta personalizada.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gray-600" />
              <span>Rua Pamplona, 985<br/>Jardins - São Paulo/SP</span>
            </div>
            <a href="https://wa.me/5511949912798" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Phone size={18} className="text-gray-600" />
              <span>(11) 94991-2798</span>
            </a>
            <a href="https://instagram.com/careformen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Instagram size={18} className="text-gray-600" />
              <span>@careformen</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        type="button"
        onClick={() => openWhatsApp()}
        className="contato-whatsapp whatsapp-pulse fixed bottom-4 right-4 z-50 rounded-full p-1 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] sm:bottom-6 sm:right-6"
        aria-label="Falar com a Care For Men pelo WhatsApp"
      >
        <Image
          src="/whatsapp_float.png"
          alt=""
          width={64}
          height={64}
          className="size-14 object-contain drop-shadow-lg sm:size-16"
        />
      </button>
    </div>
  );
}
