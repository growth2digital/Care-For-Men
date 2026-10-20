'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FounderSection } from '@/components/founder-section';
import { 
  Menu, X, Check, ShieldCheck, Clock, User, Calendar, 
  ChevronLeft, ChevronRight, CalendarCheck, Scissors, 
  Sparkles, Star, MapPin, Phone, Instagram 
} from 'lucide-react';

const results = [
  { before: '/protese-capilar/resultado-antes.png',  after: '/protese-capilar/resultado-depois.png',  label: 'Marcos A., 42 anos' },
  { before: '/protese-capilar/resultado-antes-2.png', after: '/protese-capilar/resultado-depois-2.png', label: 'Thiago R., 36 anos' },
  { before: '/protese-capilar/resultado-antes-3.png', after: '/protese-capilar/resultado-depois-3.png', label: 'Eduardo M., 52 anos' },
];

const testimonials = [
  {
    avatar: '/avatars/rogerio-tartaglione.png',
    name: 'Rogério Tartaglione',
    text: 'Atendimento excelente e de ótima qualidade. Local agradável e totalmente discreto — já favoritei porque vou sempre. O André é um belo anfitrião e profissional. Top!!!',
  },
  {
    avatar: '/avatars/fabricio-souza.png',
    name: 'Fabrício Souza',
    text: 'O melhor barbeiro e depilador da região. Super discreto, muito profissional e cuidadoso com o cliente. Vou sempre indicar, por que tive uma ótima experiência, pode confiar no serviço oferecido.',
  },
  {
    avatar: '/avatars/carlos-alcantara.png',
    name: 'Carlos Alcantara',
    text: 'Satisfação garantida, ótimo profissional!',
  },
  {
    avatar: '/avatars/bruno-dantas.png',
    name: 'Bruno Dantas',
    text: 'Foi top o atendimento, deixa a gente muito à vontade, respeitoso, educado e gente boa. Recomendo de olhos fechados.',
  },
  {
    avatar: '/avatars/saulo-araujo.png',
    name: 'Saulo Araujo',
    text: 'Trabalho maravilhoso, competente e íntegro.',
  },
];

export default function ProteseCapilarLP() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resultIdx, setResultIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const prevResult     = () => setResultIdx((i) => (i === 0 ? results.length - 1 : i - 1));
  const nextResult     = () => setResultIdx((i) => (i === results.length - 1 ? 0 : i + 1));
  const prevTestimonial = () => setTestimonialIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const nextTestimonial = () => setTestimonialIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const openWhatsApp = (message = '') => {
    const phoneNumber = '5511949912798';
    const text = message || 'Olá! Gostaria de agendar uma avaliação.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const navLinks = [
    { label: 'Resultados', href: '#resultados' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Por Que Fazer', href: '#por-que-fazer' },
    { label: 'Contato', href: '#contato' }
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
            <p className="text-[9px] text-gray-400 uppercase tracking-widest">Cuidados Masculinos Premium</p>
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
          <h2 className="text-5xl md:text-7xl font-bold font-serif leading-none mb-2">
            <span className="block text-white">PRÓTESE</span>
            <span className="block text-[#D4AF37]">CAPILAR</span>
          </h2>
          <h3 className="text-xl md:text-2xl mt-6 mb-6 text-gray-200">
            NATURALIDADE QUE<br />DEVOLVE SUA CONFIANÇA.
          </h3>
          <p className="text-gray-400 mb-10 max-w-md">
            Tecnologia avançada, atendimento personalizado e resultado imperceptível. Você de volta à sua melhor versão.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-t border-b border-gray-800 py-8">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="text-[#D4AF37] mb-3" size={28} strokeWidth={1.5} />
              <span className="text-sm font-semibold uppercase mb-1">Natural</span>
              <span className="text-xs text-gray-400">Aparência 100%<br/>natural e imperceptível</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-[#D4AF37] mb-3" size={28} strokeWidth={1.5} />
              <span className="text-sm font-semibold uppercase mb-1">Resultado</span>
              <span className="text-xs text-gray-400">Imediato e<br/>sem cirurgia</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <User className="text-[#D4AF37] mb-3" size={28} strokeWidth={1.5} />
              <span className="text-sm font-semibold uppercase mb-1">Personalizado</span>
              <span className="text-xs text-gray-400">Prótese feita sob<br/>medida para você</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="text-[#D4AF37] mb-3" size={28} strokeWidth={1.5} />
              <span className="text-sm font-semibold uppercase mb-1">Manutenção</span>
              <span className="text-xs text-gray-400">Rápida, prática<br/>e discreta</span>
            </div>
          </div>

          <button onClick={() => openWhatsApp('Olá! Gostaria de agendar uma avaliação de prótese capilar.')} className="contato-whatsapp w-full md:w-auto bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-md flex flex-col items-center justify-center py-4 px-8 transition-all">
            <span className="font-bold text-lg uppercase flex items-center gap-2">
              <Image src="/whatsapp_float.png" alt="" width={20} height={20} className="size-5 object-contain" />
              Fale com nossos especialistas
            </span>
            <span className="text-sm">Tire suas dúvidas e agende sua avaliação</span>
          </button>
        </div>

        {/* Hero Image Area */}
        <div className="md:w-1/2 relative h-[500px] w-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-transparent z-10 md:block hidden" />
          <Image
            src="/protese-capilar/hero-homem.png"
            alt="Homem com prótese capilar natural da Care For Men"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* RESULTADOS SECTION */}
      <section id="resultados" className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-12">
            Resultados que falam por si
          </h3>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Before/After Carousel */}
            <div className="md:w-3/5 w-full flex flex-col gap-4">
              <div className="relative h-[400px] bg-black rounded-lg overflow-hidden border border-gray-800 flex">
                <div className="w-1/2 h-full border-r border-gray-700 relative overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 bg-black/80 px-3 py-1 text-xs uppercase rounded tracking-wider">Antes</span>
                  <Image src={results[resultIdx].before} alt="Antes da prótese capilar" fill className="object-cover object-top" sizes="30vw" />
                </div>
                <div className="w-1/2 h-full relative overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 bg-black/80 px-3 py-1 text-xs uppercase rounded tracking-wider">Depois</span>
                  <Image src={results[resultIdx].after} alt="Depois da prótese capilar" fill className="object-cover object-top" sizes="30vw" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] pointer-events-none">
                  <ChevronRight size={20} />
                </div>
                {/* Nav arrows */}
                <button onClick={prevResult} aria-label="Resultado anterior" className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/70 border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-[#D4AF37] transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={nextResult} aria-label="Próximo resultado" className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/70 border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-[#D4AF37] transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
              {/* Label + dots */}
              <div className="flex items-center justify-between px-1">
                <span className="text-sm text-gray-400">{results[resultIdx].label}</span>
                <div className="flex gap-2">
                  {results.map((_, i) => (
                    <button key={i} onClick={() => setResultIdx(i)} aria-label={`Resultado ${i + 1}`} className={`w-2 h-2 rounded-full transition-colors ${i === resultIdx ? 'bg-[#D4AF37]' : 'bg-gray-600'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="md:w-2/5 flex flex-col gap-6">
              {[
                "Volume instantâneo e imperceptível",
                "Acabamento 100% natural",
                "Liberdade para praticar esportes e nadar",
                "Autoestima e confiança renovadas",
                "Sem cirurgia, sem dor, sem espera"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <Check className="text-[#D4AF37] shrink-0" size={22} />
                  <span className="text-base text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA SECTION */}
      <section id="como-funciona" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-center text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-16">
          Como funciona
        </h3>
        
        <div className="flex flex-col md:flex-row justify-between items-start relative gap-8 md:gap-0">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] border-t border-dashed border-gray-700 z-0" />
          
          {[
            { icon: CalendarCheck, num: "1", title: "Avaliação", desc: "Analisamos seu caso e entendemos sua necessidade." },
            { icon: Scissors, num: "2", title: "Personalização", desc: "Prótese feita sob medida, de acordo com seu perfil." },
            { icon: Sparkles, num: "3", title: "Aplicação", desc: "Fixação segura, confortável e imperceptível." },
            { icon: Clock, num: "4", title: "Manutenção", desc: "Retornos periódicos para ajustes e higienização." }
          ].map((step, idx) => (
             <div key={idx} className="flex flex-col items-center text-center z-10 w-full md:w-1/4 px-4">
                <div className="w-16 h-16 rounded-full border border-gray-600 bg-[#0B0B0B] flex items-center justify-center text-white mb-4 relative">
                  <step.icon size={28} strokeWidth={1.5} />
                  <div className="absolute -bottom-3 bg-[#D4AF37] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
                    {step.num}
                  </div>
                </div>
                <h4 className="uppercase text-[#D4AF37] font-semibold mt-4 mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* POR QUE FAZER SECTION */}
      <section id="por-que-fazer" className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h3 className="text-[#D4AF37] text-2xl md:text-3xl font-serif mb-10 leading-tight">
              POR QUE FAZER SUA<br />
              PRÓTESE CAPILAR<br />
              NA CARE FOR MEN?
            </h3>
            <div className="flex flex-col gap-4">
              {[
                "Ambiente discreto e exclusivo",
                "Profissionais especializados",
                "Materiais de alta qualidade",
                "Tecnologia de ponta",
                "Atendimento humanizado"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="text-white" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full h-[400px] rounded-lg overflow-hidden relative">
            <Image src="/barbearia-real/sala-atendimento.jpg" alt="Barbearia premium Care For Men" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-center text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-12">
          Depoimentos
        </h3>
        
        <div className="relative">
          <div className="bg-[#111] border border-gray-800 p-8 md:p-12 rounded-xl flex items-center gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full shrink-0 overflow-hidden relative border border-gray-700">
              <Image src={testimonials[testimonialIdx].avatar} alt={testimonials[testimonialIdx].name} fill className="object-cover" sizes="96px" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex text-[#D4AF37] mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
              </div>
              <p className="text-base md:text-lg text-gray-300 italic mb-4 leading-relaxed">
                &ldquo;{testimonials[testimonialIdx].text}&rdquo;
              </p>
              <span className="text-gray-500 text-sm">— {testimonials[testimonialIdx].name}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-5 px-1">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} aria-label={`Depoimento ${i + 1}`} className={`w-2 h-2 rounded-full transition-colors ${i === testimonialIdx ? 'bg-[#D4AF37]' : 'bg-gray-600'}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prevTestimonial} aria-label="Depoimento anterior" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextTestimonial} aria-label="Próximo depoimento" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <FounderSection />

      <footer id="contato" className="border-t border-gray-900 pt-16 pb-8 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">RECUPERE SEU CABELO.</h3>
              <h3 className="text-2xl md:text-3xl font-serif text-[#D4AF37] mb-4">RECUPERE SUA CONFIANÇA.</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                Agende sua avaliação e dê o primeiro passo para a sua melhor versão.
              </p>
            </div>
            <button onClick={() => openWhatsApp('Olá! Gostaria de agendar uma avaliação de prótese capilar.')} className="contato-whatsapp w-full md:w-auto bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-md flex gap-4 items-center justify-center py-4 px-8 transition-all">
              <Image src="/whatsapp_float.png" alt="" width={28} height={28} className="size-7 object-contain" />
              <div className="flex flex-col items-start text-left">
                 <span className="font-bold text-lg leading-tight">AGENDAR AVALIAÇÃO</span>
                 <span className="text-xs">Atendimento via WhatsApp</span>
              </div>
            </button>
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
        className="contato-whatsapp fixed bottom-4 right-4 z-50 rounded-full p-1 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] sm:bottom-6 sm:right-6"
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
