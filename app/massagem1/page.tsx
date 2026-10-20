"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FounderSection } from "@/components/founder-section"
import {
  MapPin,
  Clock,
  Star,
  ChevronDown,
  Menu,
  X,
  Train,
  Shield,
  Lock,
  Sparkles,
  Sofa,
  Droplets,
  Package,
  Wind,
  Coffee,
  CheckCircle,
  Phone,
} from "lucide-react"

export default function Massagem1Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentTestPage, setCurrentTestPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener("scroll", onScroll)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Ambiente", href: "#ambiente" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contato", href: "#contato" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const openWhatsApp = (msg?: string) => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      ;(window as any).fbq("track", "Lead")
    }
    const phone = "5511949912798"
    const message = msg ?? "Olá! Gostaria de conhecer a estrutura e agendar uma sessão na Care For Men - Jardins."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const mainBenefits = [
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Privacidade",
      description: "Ambiente reservado e atendimento individual. Sua discrição garantida em cada detalhe.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Ambiente Premium",
      description: "Espaços sofisticados, confortáveis e acolhedores, pensados para o homem moderno.",
    },
    {
      icon: <Wind className="w-7 h-7" />,
      title: "Conforto Total",
      description: "Toalhas macias, maca aquecida e clima ideal para a melhor experiência possível.",
    },
    {
      icon: <Droplets className="w-7 h-7" />,
      title: "Aromaterapia",
      description: "Aromas selecionados para relaxar corpo e mente desde o momento em que você chega.",
    },
  ]

  const detailCards = [
    {
      icon: <Sofa className="w-6 h-6" />,
      title: "Lounge Exclusivo",
      description: "Espaço reservado para relaxar antes ou depois da sessão.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Banho Disponível",
      description: "Mais conforto e praticidade para a sua experiência.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Produtos Premium",
      description: "Apenas produtos selecionados para cuidar de você.",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Toalhas Macias",
      description: "Conforto que faz toda a diferença nos detalhes.",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Beba e Relaxe",
      description: "Água, drinks e chás disponíveis para sua comodidade.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Aromaterapia",
      description: "Ambiente perfumado com óleos essenciais premium.",
    },
  ]

  const exclusivityCards = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Acesso Restrito",
      description: "Ambiente seguro e controlado.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Segurança",
      description: "Sua privacidade é nossa prioridade.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Atendimento Personalizado",
      description: "Foco total no seu bem-estar.",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Agendamento Fácil",
      description: "Reserve seu horário rapidamente.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização Privilegiada",
      description: "No coração dos Jardins, com acesso discreto.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Até Tarde",
      description: "Atendimento de segunda a sábado até 23h59.",
    },
  ]

  const testimonials = [
    {
      name: "Renato F.",
      rating: 5,
      text: "O ambiente é de outro nível. Parece um spa de hotel cinco estrelas. Você se sente especial desde a recepção.",
      service: "Massagem Relaxante",
    },
    {
      name: "Daniel C.",
      rating: 5,
      text: "Nunca pensei que um lugar assim existia em SP. A privacidade, o conforto, os produtos... tudo impecável.",
      service: "Pedras Quentes",
    },
    {
      name: "Leandro P.",
      rating: 5,
      text: "Já fui em vários spas, mas a Care For Men tem algo diferente. O cuidado com os detalhes é surpreendente.",
      service: "Massagem Terapêutica",
    },
    {
      name: "Gustavo M.",
      rating: 5,
      text: "O lounge exclusivo antes da sessão já vale a visita. Depois da massagem você sai completamente renovado.",
      service: "Massagem Quatro Mãos",
    },
    {
      name: "Rafael S.",
      rating: 5,
      text: "Discrição total e ambiente de altíssimo padrão. É exatamente o que eu precisava sem saber que precisava.",
      service: "Massagem Nuru",
    },
    {
      name: "Bruno T.",
      rating: 5,
      text: "Voltei pela terceira vez. O ambiente premium e a atenção aos detalhes fazem a diferença. Recomendo muito.",
      service: "Massagem Sensitiva",
    },
  ]

  const testimonialsPerPage = isMobile ? 1 : 3
  const totalTestPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const currentTestimonials = testimonials.slice(
    currentTestPage * testimonialsPerPage,
    (currentTestPage + 1) * testimonialsPerPage
  )

  return (
    <div className="min-h-screen bg-surface-dark text-foreground">

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card shadow-dark" : "bg-transparent"
        }`}
      >
        <div className="border-b border-white/5 hidden md:block">
          <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-8 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-coral" />
              Rua Pamplona, 985 — Jardins — São Paulo/SP
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-coral" />
              Segunda a Sábado — 09h às 23h59
            </span>
            <span className="flex items-center gap-1.5">
              <Train className="w-3 h-3 text-coral" />
              Próximo ao metrô Trianon-MASP
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => handleNavClick("#inicio")} className="flex items-center gap-2">
              <Image
                src="/logo-care-for-men.png"
                alt="Care For Men Logo"
                width={50}
                height={50}
                priority
                className="object-contain"
              />
            </button>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-gray-300 hover:text-coral transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => openWhatsApp()}
                className="contato-whatsapp hidden sm:flex btn-premium text-black font-bold text-sm px-5 py-2 rounded-full"
              >
                Agendar Agora
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg glass-card-light"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-coral" /> : <Menu className="w-6 h-6 text-coral" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <div className="flex flex-col gap-1 text-xs text-gray-400 py-2 border-b border-white/10 mb-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-coral" /> Rua Pamplona, 985 — Jardins — SP
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-coral" /> Seg a Sáb — 09h às 23h59
                </span>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 px-4 text-gray-300 hover:text-coral hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => { setMobileMenuOpen(false); openWhatsApp() }}
                className="contato-whatsapp mt-2 btn-premium text-black font-bold py-3 rounded-full"
              >
                Agendar pelo WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/barbearia-real/recepcao.jpg"
            alt="Ambiente premium Care For Men Spa Masculino"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/50 to-surface-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/70 via-transparent to-surface-dark/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-coral font-medium mb-5 tracking-[0.3em] uppercase text-sm">
              Experiência • Ambiente • Diferencial Premium
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance leading-tight">
              Um ambiente feito<br />
              <span className="text-gradient text-glow">para o seu melhor.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Cada detalhe foi pensado para proporcionar conforto, privacidade e uma experiência premium completa de bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => openWhatsApp()}
                className="contato-whatsapp btn-premium text-black font-bold px-10 py-6 text-lg rounded-full glow-coral-intense hover:scale-105 transition-all"
              >
                Chamar no WhatsApp
              </Button>
              <Button
                onClick={() => handleNavClick("#ambiente")}
                className="bg-transparent border border-coral/50 text-white hover:border-coral hover:text-coral px-10 py-6 text-lg rounded-full transition-all"
              >
                Conhecer o Espaço
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 glass-card-light rounded-full px-5 py-2.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4,7 no Google</span>
              </div>
              <div className="flex items-center gap-2 glass-card-light rounded-full px-5 py-2.5">
                <MapPin className="w-4 h-4 text-coral" />
                <span className="text-white text-sm font-medium">Jardins, São Paulo</span>
              </div>
              <div className="flex items-center gap-2 glass-card-light rounded-full px-5 py-2.5">
                <Lock className="w-4 h-4 text-coral" />
                <span className="text-white text-sm font-medium">Acesso Privativo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-coral/60" />
        </div>
      </section>

      {/* Main Benefits Section */}
      <section id="beneficios" className="py-16 md:py-20 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {mainBenefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-dark-lg transition-all duration-300 group"
                style={{ boxShadow: "4px 4px 12px rgba(0,0,0,0.5), -2px -2px 8px rgba(212,175,55,0.04)" }}
              >
                <div className="w-14 h-14 rounded-full btn-premium flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiente Section */}
      <section id="ambiente" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">O Espaço</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
              Conforto, Discrição e<br />
              <span className="text-gradient">Exclusividade em Cada Detalhe</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-coral to-transparent mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Não é uma massagem comum. É uma experiência premium completa, do momento em que você chega até a hora de ir embora.
            </p>
          </div>

          {/* Main atmosphere image */}
          <div className="relative rounded-3xl overflow-hidden mb-8 aspect-video md:aspect-[21/9]"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.1)" }}
          >
            <Image
              src="/barbearia-real/massagem-sessao.jpg"
              alt="Sessão premium de massagem Care For Men"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-white font-serif text-xl md:text-3xl font-bold max-w-xl text-balance leading-tight">
                "Imagine chegar, relaxar e viver uma experiência fora do comum."
              </p>
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/barbearia-real/sala-atendimento.jpg", label: "Sala Premium" },
              { src: "/barbearia-real/ambiente-premium.jpg", label: "Ambiente Elegante" },
              { src: "/barbearia-real/lounge-2.jpg", label: "Lounge Exclusivo" },
              { src: "/barbearia-real/espaco-massagem.jpg", label: "Drinks & Chás" },
            ].map((item, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group"
                style={{ boxShadow: "4px 4px 16px rgba(0,0,0,0.6)" }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Cards Section — Experiência Premium */}
      <section id="diferenciais" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Sessão</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
              Experiência <span className="text-gradient">Premium</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-coral to-transparent mx-auto mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto">
              Cada detalhe foi pensado para que sua sessão seja muito mais do que uma massagem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {detailCards.map((card, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:shadow-dark-lg transition-all duration-300 group"
                style={{ boxShadow: "4px 4px 12px rgba(0,0,0,0.5), -2px -2px 6px rgba(212,175,55,0.04)" }}
              >
                <div className="w-11 h-11 rounded-xl btn-premium flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm md:text-base">{card.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Products image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/5] md:aspect-[21/6]"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.08)" }}
          >
            <Image
              src="/massagem1/produtos.jpg"
              alt="Produtos premium utilizados nas sessões"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/90 via-surface-dark/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-14">
                <p className="text-coral text-sm tracking-widest uppercase mb-2">Produtos Selecionados</p>
                <h3 className="text-white font-serif font-bold text-2xl md:text-4xl text-balance leading-tight max-w-sm">
                  Apenas o melhor para cuidar de você.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Strip — Até Tarde */}
      <section className="py-16 md:py-20 px-4 relative overflow-hidden bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-coral/5 to-coral/10" />
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <div
            className="glass-card rounded-3xl px-8 py-12 md:py-16"
            style={{ boxShadow: "0 0 60px rgba(212,175,55,0.08), 4px 4px 20px rgba(0,0,0,0.6), -4px -4px 20px rgba(255,255,255,0.02)" }}
          >
            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-4">Disponibilidade</p>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-4 tracking-tight text-glow">
              ATÉ TARDE
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6">Seu tempo. Sua escolha.</p>
            <p className="text-gray-400 mb-8 text-lg">
              Atendemos de segunda a sábado, das 09h às 23h59.
            </p>
            <Button
              onClick={() => openWhatsApp()}
              className="contato-whatsapp btn-premium text-black font-bold px-10 py-5 text-lg rounded-full glow-coral hover:scale-105 transition-all"
            >
              Verificar Disponibilidade
            </Button>
          </div>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section id="estrutura" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Sessão</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
              Exclusividade em <span className="text-gradient">Cada Detalhe</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-coral to-transparent mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {exclusivityCards.map((card, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-5 md:p-6 text-center hover:shadow-dark-lg transition-all duration-300 group"
                style={{ boxShadow: "4px 4px 12px rgba(0,0,0,0.5), -2px -2px 6px rgba(212,175,55,0.04)" }}
              >
                <div className="w-12 h-12 rounded-full btn-premium flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-white font-bold mb-1 text-sm md:text-base">{card.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Avaliações</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
              O Que Nossos Clientes <span className="text-gradient">Dizem</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-coral to-transparent mx-auto mb-6" />
            <div className="flex items-center justify-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
              <span className="text-gray-300 ml-2 font-medium">4,7 no Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {currentTestimonials.map((t, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:shadow-dark-lg transition-all duration-300"
                style={{ boxShadow: "4px 4px 12px rgba(0,0,0,0.5), -2px -2px 8px rgba(212,175,55,0.04)" }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="text-xs text-coral">{t.service}</span>
                </div>
              </div>
            ))}
          </div>

          {totalTestPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              {[...Array(totalTestPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentTestPage ? "bg-coral w-6" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Página ${i + 1} de avaliações`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contato" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div
            className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
            style={{ boxShadow: "0 0 80px rgba(212,175,55,0.06), 4px 4px 24px rgba(0,0,0,0.7), -4px -4px 24px rgba(255,255,255,0.02)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent" />

            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-4">Reserve Agora</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 text-balance leading-tight">
              Você merece <span className="text-gradient text-glow">o melhor.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-3">
              Discrição, respeito e cuidado.
            </p>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Você merece o melhor. Sempre.
            </p>

            <Button
              onClick={() => openWhatsApp()}
              className="contato-whatsapp btn-premium text-black font-bold px-12 py-6 text-xl rounded-full glow-coral-intense hover:scale-105 transition-all mb-6"
            >
              Chamar no WhatsApp
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-coral" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">Localização</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Rua Pamplona, 985<br />Jardim Paulista — São Paulo/SP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-coral" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">Horário</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Segunda a Sábado<br />09h às 23h59
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Train className="w-4 h-4 text-coral" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">Acesso</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Próximo ao metrô<br />Trianon-MASP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FounderSection />

      <footer className="py-6 px-4 border-t border-white/5 bg-surface-dark">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2025 Care For Men — Todos os direitos reservados.</p>
          <p>Rua Pamplona, 985 — Jardins — São Paulo/SP</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => openWhatsApp()}
        className="contato-whatsapp fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
        aria-label="Chamar no WhatsApp"
      >
        <Image src="/whatsapp-button.png" alt="WhatsApp" width={28} height={28} />
      </button>
    </div>
  )
}
