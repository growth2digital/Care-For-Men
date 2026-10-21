"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FounderSection } from "@/components/founder-section"
import { MapPin, Clock, Star, ChevronDown, Menu, X, Train, Shield, Zap, Heart, Sparkles, CheckCircle } from "lucide-react"

export default function MassagemPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
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
    { label: "Benefícios", href: "#beneficios" },
    { label: "Serviços", href: "#servicos" },
    { label: "Ambiente", href: "#ambiente" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const openWhatsApp = (serviceMsg?: string) => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead")
    }
    const phone = "5511949912798"
    const message = serviceMsg
      ? `Olá! Gostaria de agendar uma sessão de ${serviceMsg} na Care For Men - Jardins.`
      : "Olá! Gostaria de agendar uma massagem na Care For Men - Jardins."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const services = [
    {
      title: "Massagem Relaxante",
      description: "Movimentos suaves e contínuos que proporcionam leveza e bem-estar. Indicada para aliviar o estresse do dia a dia.",
      image: "/massagem/servico-relaxante.jpg",
    },
    {
      title: "Massagem Terapêutica",
      description: "Focada no alívio de dores musculares, tensões e desconfortos físicos. Ideal para quem tem rotina intensa.",
      image: "/massagem/servico-terapeutica.jpg",
    },
    {
      title: "Pedras Quentes",
      description: "Técnica com pedras aquecidas para relaxamento profundo, melhora da circulação e equilíbrio corporal.",
      image: "/massagem/servico-pedras.jpg",
    },
    {
      title: "Ventosaterapia",
      description: "Ventosas para estimular circulação, aliviar dores musculares e reduzir tensões acumuladas.",
      image: "/massagem/servico-ventosa.jpg",
    },
    {
      title: "Massagem Nuru",
      description: "Experiência diferenciada com movimentos deslizantes e gel especial de alta hidratação corporal. Relaxamento profundo.",
      image: "/massagem/servico-nuru.jpg",
    },
    {
      title: "Nuru 50 Tons",
      description: "Versão premium da Nuru com ambiente sensorial, iluminação especial e atmosfera ainda mais sofisticada e imersiva.",
      image: "/massagem/servico-nuru50.jpg",
    },
    {
      title: "Massagem Sensitiva",
      description: "Movimentos lentos e sensoriais voltados para relaxamento físico profundo e desconexão mental completa.",
      image: "/massagem/servico-sensitiva.jpg",
    },
    {
      title: "Massagem Reversa",
      description: "Experiência premium focada em conforto, conexão corporal e relaxamento diferenciado em ambiente reservado.",
      image: "/massagem/servico-reversa.jpg",
    },
    {
      title: "Massagem Quatro Mãos",
      description: "Realizada simultaneamente por dois profissionais, proporcionando uma experiência intensa de imersão corporal.",
      image: "/massagem/servico-4maos.jpg",
    },
    {
      title: "Massagem de Casal",
      description: "Experiência para duas pessoas no mesmo ambiente, ideal para momentos especiais de relaxamento e conexão.",
      image: "/massagem/servico-casal.jpg",
    },
  ]

  const benefits = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Relaxamento",
      description: "Alívio do estresse e tensões acumuladas do dia a dia.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Desempenho",
      description: "Mais disposição, foco e recuperação muscular acelerada.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Bem-estar",
      description: "Melhora do sono, humor e qualidade de vida.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Exclusividade",
      description: "Ambiente reservado e atendimento premium.",
    },
  ]

  const testimonials = [
    {
      name: "Ricardo M.",
      rating: 5,
      text: "Experiência incrível! Nunca tinha feito uma massagem tão completa. O ambiente é sofisticado e o profissional muito qualificado.",
      service: "Massagem Relaxante",
    },
    {
      name: "Eduardo S.",
      rating: 5,
      text: "A massagem de pedras quentes foi transformadora. Saí renovado, parecia outra pessoa. Recomendo muito!",
      service: "Pedras Quentes",
    },
    {
      name: "Carlos L.",
      rating: 5,
      text: "O ambiente é discreto e premium. Atendimento impecável. Já estou marcando a próxima sessão.",
      service: "Massagem Terapêutica",
    },
    {
      name: "Thiago A.",
      rating: 5,
      text: "Melhor investimento em bem-estar que já fiz. A massagem quatro mãos é uma experiência única e memorável.",
      service: "Massagem Quatro Mãos",
    },
    {
      name: "Felipe B.",
      rating: 5,
      text: "Profissional atencioso, ambiente impecável e a massagem relaxante tirou toda a tensão da semana. Excelente!",
      service: "Massagem Relaxante",
    },
    {
      name: "Marcos V.",
      rating: 5,
      text: "Virei cliente fiel. Toda semana venho para a massagem terapêutica. Minha performance no trabalho melhorou muito.",
      service: "Massagem Terapêutica",
    },
  ]

  const faqs = [
    {
      question: "Preciso agendar horário com antecedência?",
      answer: "Sim, recomendamos o agendamento prévio para garantir sua sessão no horário desejado. Atendemos de segunda a sábado das 09h às 23h59.",
    },
    {
      question: "Quanto tempo dura uma sessão de massagem?",
      answer: "As sessões variam de acordo com o tipo escolhido, geralmente entre 60 e 90 minutos. Na hora do agendamento informamos a duração exata de cada serviço.",
    },
    {
      question: "O ambiente é privativo?",
      answer: "Sim. Todas as sessões acontecem em salas privativas e climatizadas. Garantimos total discrição e conforto durante toda a experiência.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos dinheiro, PIX, cartões de débito e crédito (todas as bandeiras).",
    },
    {
      question: "Como chegar ao espaço?",
      answer: "Estamos na Rua Pamplona, 985 - Jardins, São Paulo/SP. Ficamos próximos ao metrô Trianon-MASP, com fácil acesso e estacionamentos próximos.",
    },
    {
      question: "Preciso levar alguma coisa?",
      answer: "Não é necessário levar nada. Fornecemos toalhas, roupões e todos os produtos necessários para a sua experiência.",
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
        {/* Info bar */}
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
            src="/barbearia-real/massagem-sessao.jpg"
            alt="Massagem premium masculina Care For Men"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/75 via-surface-dark/50 to-surface-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/60 via-transparent to-surface-dark/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-coral font-medium mb-5 tracking-[0.3em] uppercase text-sm">
              Spa Masculino Premium — Jardins SP
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance leading-tight">
              Mais do que massagem.<br />
              <span className="text-gradient text-glow">Uma experiência criada para você.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Massagens relaxantes e terapêuticas para homens que valorizam bem-estar, conforto e exclusividade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => openWhatsApp()}
                className="contato-whatsapp btn-premium text-black font-bold px-10 py-6 text-lg rounded-full glow-coral-intense hover:scale-105 transition-all"
              >
                Chamar no WhatsApp
              </Button>
              <Button
                onClick={() => handleNavClick("#servicos")}
                className="bg-transparent border border-coral/50 text-white hover:border-coral hover:text-coral px-10 py-6 text-lg rounded-full transition-all"
              >
                Ver Serviços
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
                <Train className="w-4 h-4 text-coral" />
                <span className="text-white text-sm font-medium">Próximo ao metrô Trianon-MASP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-coral/60" />
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-20 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-dark-lg transition-all duration-300 group border-gold-thin"
                style={{
                  boxShadow: "4px 4px 12px rgba(0,0,0,0.5), -2px -2px 8px rgba(212,175,55,0.04)",
                }}
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

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Nossos Serviços</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
              Experiências <span className="text-gradient">Exclusivas</span>
            </h2>
            <div className="divider-with-star mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cada sessão é cuidadosamente preparada para proporcionar o máximo de relaxamento e bem-estar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden group hover:shadow-dark-lg transition-all duration-300 border-gold-thin"
                style={{
                  boxShadow: "4px 4px 16px rgba(0,0,0,0.6), -2px -2px 8px rgba(212,175,55,0.05)",
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg leading-tight">{service.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
                  <Button
                    onClick={() => openWhatsApp(service.title)}
                    className="contato-whatsapp w-full bg-transparent border border-coral/40 text-coral hover:bg-coral hover:text-black hover:border-coral transition-all rounded-full text-sm font-semibold"
                  >
                    Agendar {service.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => openWhatsApp()}
              className="contato-whatsapp btn-premium text-black font-bold px-10 py-6 text-lg rounded-full glow-coral hover:scale-105 transition-all"
            >
              Quero Agendar Minha Sessão
            </Button>
          </div>
        </div>
      </section>

      <section id="ambiente" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Nosso Ambiente</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
              Espaço <span className="text-gradient">Premium</span>
            </h2>
            <div className="divider-with-star mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conheça o ambiente sofisticado e aconchegante onde acontecem nossas experiências.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Recepção", image: "/barbearia-real/recepcao.jpg" },
              { name: "Lounge Exclusivo", image: "/barbearia-real/lounge-2.jpg" },
              { name: "Sala Premium", image: "/barbearia-real/sala-atendimento.jpg" },
              { name: "Ambiente Relaxante", image: "/barbearia-real/espaco-massagem.jpg" },
              { name: "Sala de Atendimento", image: "/barbearia-real/ambiente-premium.jpg" },
              { name: "Fachada", image: "/barbearia-real/fachada.jpg" },
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-2xl group"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm md:text-base">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-10 px-4 bg-surface-dark border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+2.000", label: "Clientes atendidos" },
              { value: "4,7★", label: "Nota no Google" },
              { value: "10", label: "Tipos de massagem" },
              { value: "100%", label: "Privativo" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Avaliações</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O Que Dizem Nossos <span className="text-gradient">Clientes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-4"></div>
            <div className="inline-flex items-center glass-card-light rounded-full px-5 py-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-2" />
              <span className="text-white text-sm font-medium">4,7 de média em mais de 138 avaliações no Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border-gold-thin"
                style={{
                  boxShadow: "4px 4px 14px rgba(0,0,0,0.5), -2px -2px 8px rgba(212,175,55,0.04)",
                }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-5 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{testimonial.name}</span>
                  <span className="text-xs text-coral bg-coral/10 px-3 py-1 rounded-full">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>

          {totalTestPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalTestPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestPage(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all font-semibold ${
                    currentTestPage === index
                      ? "btn-premium text-black glow-coral"
                      : "glass-card-light text-gray-400 hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Dúvidas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full"></div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden border-gold-thin"
                style={{
                  boxShadow: expandedFaq === index
                    ? "inset 2px 2px 6px rgba(0,0,0,0.4), inset -1px -1px 4px rgba(212,175,55,0.05)"
                    : "4px 4px 10px rgba(0,0,0,0.4), -2px -2px 6px rgba(212,175,55,0.03)",
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                  aria-expanded={expandedFaq === index}
                >
                  <span className="text-base font-semibold text-white text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-coral flex-shrink-0 transition-transform ml-4 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 px-4 bg-surface-dark-alt relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/massagem/hero-massagem.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-surface-dark/80" />
        </div>
        <div className="relative z-10 container mx-auto max-w-3xl text-center">
          <p className="text-coral text-sm tracking-[0.25em] uppercase mb-4">Experimente Agora</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
            Pronto para viver essa experiência?
          </h2>
          <p className="text-gray-400 text-lg mb-10 text-pretty">
            Seu momento. Seu cuidado. Seu bem-estar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              onClick={() => openWhatsApp()}
              className="contato-whatsapp btn-premium text-black font-bold px-10 py-6 text-lg rounded-full glow-coral-intense hover:scale-105 transition-all"
            >
              Chamar no WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            {["Discrição total", "Profissionais selecionados", "Produtos premium", "Até 23h59"].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-coral" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <section id="contato" className="py-14 px-4 bg-surface-dark border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: "3px 3px 8px rgba(0,0,0,0.5), -2px -2px 6px rgba(212,175,55,0.06)", background: "rgba(212,175,55,0.08)" }}
              >
                <MapPin className="w-5 h-5 text-coral" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Localização</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rua Pamplona, 985<br />
                  Jardins, São Paulo — SP<br />
                  CEP 01405-200
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: "3px 3px 8px rgba(0,0,0,0.5), -2px -2px 6px rgba(212,175,55,0.06)", background: "rgba(212,175,55,0.08)" }}
              >
                <Clock className="w-5 h-5 text-coral" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Horários</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Segunda a Sábado<br />
                  09h às 23h59<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: "3px 3px 8px rgba(0,0,0,0.5), -2px -2px 6px rgba(212,175,55,0.06)", background: "rgba(212,175,55,0.08)" }}
              >
                <Train className="w-5 h-5 text-coral" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Como Chegar</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Próximo ao metrô<br />
                  Trianon-MASP<br />
                  Linha 2 — Verde
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo-care-for-men.png" alt="Care For Men" width={60} height={60} className="object-contain" />
              <div>
                <p className="text-white font-bold text-sm">Care For Men</p>
                <p className="text-coral text-xs">Spa Masculino Premium</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs text-center">
              © {new Date().getFullYear()} Care For Men. Todos os direitos reservados.
            </p>
            <Button
              onClick={() => openWhatsApp()}
              className="contato-whatsapp btn-premium text-black font-bold px-6 py-2 rounded-full text-sm"
            >
              Agendar Sessão
            </Button>
          </div>
        </div>
      </section>

      <FounderSection />

      {/* WhatsApp Float Button */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); openWhatsApp() }}
        className="contato-whatsapp whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
        aria-label="Agendar pelo WhatsApp"
      >
        <Image src="/whatsapp_float.png" alt="WhatsApp" width={32} height={32} className="object-contain" />
      </a>
    </div>
  )
}
