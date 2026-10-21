"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FounderSection } from "@/components/founder-section"
import { Phone, MapPin, Clock, Star, Scissors, ChevronDown, ChevronUp, Instagram, Menu, X } from "lucide-react"

// Ícone de Barba customizado
const BeardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5.5C8 16 9 18 9 20h6c0-2 1-4 2-5.5 1-1.5 2-3.5 2-5.5 0-4-3-7-7-7z" />
    <path d="M9 20c0 1 1 2 3 2s3-1 3-2" />
    <path d="M12 2v4" />
  </svg>
)

// Ícone de Toalha Quente customizado
const HotTowelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    <path d="M8 12h8" />
    <path d="M8 16h8" />
  </svg>
)

export default function BarbeariaPremium() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Ambiente", href: "#ambiente" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const openWhatsApp = () => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead")
    }
    const phone = "5511949912798"
    const message = "Olá! Gostaria de agendar um horário na Barbearia Premium Care For Men - Jardim Paulista."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  // Serviços tradicionais de barbearia
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Corte de Cabelo",
      description: "Cortes clássicos e modernos executados por profissionais especializados em cabelo masculino.",
      features: ["Degradê", "Navalhado", "Social", "Moderno"],
    },
    {
      icon: <BeardIcon />,
      title: "Barba",
      description: "Modelagem e aparação de barba com navalha, toalha quente e produtos premium.",
      features: ["Modelagem", "Aparação", "Navalha", "Hidratação"],
    },
    {
      icon: <HotTowelIcon />,
      title: "Barboterapia",
      description: "Tratamento completo com toalhas quentes, óleos essenciais e massagem facial relaxante.",
      features: ["Toalha Quente", "Óleos Essenciais", "Massagem Facial", "Hidratação"],
    },
  ]

  // Depoimentos focados em barbearia
  const testimonials = [
    {
      name: "Rodrigo M.",
      rating: 5,
      text: "Melhor barbearia que já fui! O corte ficou impecável e o ambiente é muito agradável. Recomendo demais!",
      service: "Corte + Barba",
    },
    {
      name: "Felipe S.",
      rating: 5,
      text: "Profissionais muito qualificados. A barboterapia é sensacional, saí de lá renovado.",
      service: "Barboterapia",
    },
    {
      name: "Marcos L.",
      rating: 5,
      text: "Ambiente top, atendimento excelente e o corte sempre fica perfeito. Virei cliente fiel!",
      service: "Corte de Cabelo",
    },
    {
      name: "André C.",
      rating: 5,
      text: "A navalha quente na barba é outro nível. Nunca tinha feito antes e agora não largo mais.",
      service: "Barba Completa",
    },
    {
      name: "Lucas P.",
      rating: 5,
      text: "Atendimento diferenciado, você se sente em casa. E ainda tem cerveja gelada enquanto espera!",
      service: "Corte + Barba",
    },
    {
      name: "Bruno R.",
      rating: 5,
      text: "Faz tempo que procurava uma barbearia assim. Profissionais de verdade que entendem do assunto.",
      service: "Corte de Cabelo",
    },
  ]

  // FAQs específicos para barbearia
  const faqs = [
    {
      question: "Preciso agendar horário?",
      answer: "Sim, recomendamos o agendamento prévio para garantir seu horário. Você pode agendar pelo WhatsApp de forma rápida e prática.",
    },
    {
      question: "Quanto tempo dura um corte de cabelo?",
      answer: "Um corte de cabelo completo leva em média 40 a 50 minutos, dependendo do estilo escolhido. Corte com barba leva aproximadamente 1 hora e 15 minutos.",
    },
    {
      question: "O que está incluso na barboterapia?",
      answer: "A barboterapia inclui toalhas quentes, aplicação de óleos essenciais, modelagem da barba com navalha, massagem facial relaxante e hidratação profunda.",
    },
    {
      question: "Vocês atendem sem hora marcada?",
      answer: "Atendemos por ordem de chegada quando há disponibilidade, mas para garantir seu horário, recomendamos fortemente o agendamento prévio.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos dinheiro, PIX, cartões de débito e crédito (todas as bandeiras).",
    },
  ]

  // Galeria de imagens
  const galleryImages = [
    { src: "/barbearia/corte.jpg", alt: "Barbeiro cortando cabelo" },
    { src: "/barbearia/salao-claro.jpg", alt: "Salão iluminado" },
    { src: "/barbearia/recepcao-nova.jpg", alt: "Recepção com logo" },
    { src: "/barbearia/lobby.jpg", alt: "Lobby com frigobar" },
    { src: "/barbearia/espera.jpg", alt: "Sala de espera" },
    { src: "/barbearia/fachada.jpg", alt: "Fachada da barbearia" },
    { src: "/barbearia/salao-completo.jpg", alt: "Salão completo" },
    { src: "/barbearia/terraco.jpg", alt: "Terraço com plantas" },
    { src: "/barbearia/acesso.jpg", alt: "Corredor de acesso com plantas" },
  ]

  const testimonialsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  return (
    <div className="min-h-screen bg-surface-dark text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => handleNavClick("#inicio")} className="flex items-center gap-2 md:gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                <Image
                  src="/logo-care-for-men.png"
                  alt="Care For Men Logo"
                  width={80}
                  height={80}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-lg md:text-xl font-bold text-white">Care For Men</span>
                <p className="text-xs md:text-sm text-coral">Barbearia Premium</p>
              </div>
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
                onClick={openWhatsApp}
                className="contato-whatsapp hidden sm:flex bg-gradient-coral text-white font-semibold text-sm md:text-base px-4 py-2 md:px-6 rounded-full glow-coral"
              >
                Agendar
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg glass-card-light hover:bg-white/10 transition-colors"
                aria-label="Menu de navegação"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-coral" />
                ) : (
                  <Menu className="w-6 h-6 text-coral" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 px-4 text-gray-300 hover:text-coral hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  openWhatsApp()
                }}
                className="contato-whatsapp mt-2 bg-gradient-coral text-white font-semibold py-3 rounded-full glow-coral"
              >
                Agendar pelo WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/barbearia/corte.jpg"
            alt="Barbeiro cortando cabelo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/60 to-surface-dark" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-coral font-medium mb-4 tracking-wider uppercase">Barbearia Premium em São Paulo</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
              A Arte do <span className="text-gradient text-glow">Corte Masculino</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
              Tradição e excelência em cortes de cabelo, barba e barboterapia. 
              Ambiente exclusivo para o homem moderno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={openWhatsApp}
                className="btn-premium text-black font-bold px-8 py-6 text-lg rounded-full glow-coral-intense transition-all hover:scale-105"
              >
                Agendar Horário
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 glass-card-light rounded-full px-6 py-3">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-white font-medium">4,7 (+138 avaliações no Google)</span>
              </div>
              <div className="flex items-center gap-2 glass-card-light rounded-full px-6 py-3">
                <MapPin className="w-5 h-5 text-coral" />
                <span className="text-white font-medium">Jardim Paulista, SP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <div className="divider-with-star mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Serviços tradicionais de barbearia com técnicas modernas e produtos de alta qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-dark-lg transition-all duration-300 group border-gold-thin"
              >
                <div className="w-16 h-16 rounded-full btn-premium flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-full bg-coral/10 text-coral border border-gold-thin">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={openWhatsApp}
                  className="contato-whatsapp w-full bg-transparent border border-coral text-coral hover:bg-coral hover:text-white transition-all rounded-full"
                >
                  Agendar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="ambiente" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nosso <span className="text-gradient">Ambiente</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Um espaço pensado para o conforto e bem-estar masculino.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl group ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={openWhatsApp}
              className="contato-whatsapp bg-gradient-coral text-white font-semibold px-8 py-6 text-lg rounded-full glow-coral transition-all hover:scale-105"
            >
              Agende sua Visita
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O Que Dizem Nossos <span className="text-gradient">Clientes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials
              .slice(currentPage * testimonialsPerPage, (currentPage + 1) * testimonialsPerPage)
              .map((testimonial, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{testimonial.name}</span>
                    <span className="text-xs text-coral">{testimonial.service}</span>
                  </div>
                </div>
              ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all font-semibold ${
                    currentPage === index
                      ? "bg-gradient-coral text-white glow-coral"
                      : "glass-card-light text-gray-400 hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-2" />
              <span className="text-white font-medium">
                4,7 de média em mais de 138 avaliações no Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-6"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-coral transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mb-4">Ainda tem dúvidas?</p>
            <Button
              onClick={openWhatsApp}
              className="btn-premium text-black font-bold px-8 py-4 rounded-full glow-coral-intense"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visite Nossa <span className="text-gradient">Barbearia</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-dark-lg">
              <Image
                src="/barbearia/fachada.jpg"
                alt="Fachada Care For Men"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-coral flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Endereço</h3>
                    <p className="text-gray-400 mb-4">
                      Rua Pamplona, 985 - Jardim Paulista<br />
                      São Paulo - SP, 01405-200
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Rua+Pamplona+985+Jardim+Paulista+Sao+Paulo+SP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        Google Maps
                      </a>
                      <a
                        href="https://waze.com/ul?q=Rua+Pamplona+985+Jardim+Paulista+Sao+Paulo+SP&navigate=yes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2c-4.42 0-8 3.58-8 8 0 5.25 8 14 8 14s8-8.75 8-14c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                        </svg>
                        Waze
                      </a>
                      <a
                        href="maps://maps.apple.com/?daddr=Rua+Pamplona+985+Jardim+Paulista+Sao+Paulo+SP"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        Apple Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-coral flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Horário de Funcionamento</h3>
                    <p className="text-gray-400">
                      Segunda a Sexta: 10h às 20h<br />
                      Sábado: 9h às 18h<br />
                      Domingo: 10h às 16h
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-coral flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Contato</h3>
                    <p className="text-gray-400 mb-3">(11) 94991-2798</p>
                    <Button
                      onClick={openWhatsApp}
                      className="contato-whatsapp w-full bg-gradient-coral text-white font-semibold py-4 rounded-full glow-coral flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Agendar pelo WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FounderSection />

      <footer className="py-12 px-4 bg-surface-dark-alt border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-coral/30 mx-auto mb-4">
            <Image
              src="/logo-round.png"
              alt="Care For Men Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Care For Men</h3>
          <p className="text-coral mb-4">Barbearia Premium</p>
          
          <Button
            onClick={openWhatsApp}
            className="btn-premium text-black font-bold px-8 py-3 rounded-full glow-coral-intense mb-6"
          >
            Agendar Horário
          </Button>

          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.instagram.com/careformen.sp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card-light flex items-center justify-center hover:bg-coral/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-coral" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Care For Men SP. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        aria-label="Agendar pelo WhatsApp"
        className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ filter: "drop-shadow(0 4px 12px rgba(37, 211, 102, 0.5))" }}
      >
        <Image
          src="/whatsapp_float.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="w-full h-full"
        />
      </button>
    </div>
  )
}
