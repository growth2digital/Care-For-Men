"use client"

import Image from "next/image"
import { Phone, MapPin, Clock, Shield, Users, Star, Scissors, Space as Spa, CheckCircle, ChevronDown, ChevronUp, Instagram, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FounderSection } from "@/components/founder-section"
import { useState, useEffect } from "react"

export default function HomePage() {
  // Estado para controlar a paginação dos depoimentos
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Estado para controlar FAQ expandida
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Estado para controlar o menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Links de navegação
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Ambiente", href: "#ambiente" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ]

  // Função para scroll suave e fechar menu
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  // Definir quantos depoimentos por página baseado no dispositivo
  const testimonialsPerPage = isMobile ? 1 : 3

  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    // Dispara evento Lead do Meta Pixel para rastreamento de conversão
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead")
    }
    const phone = "5511949912798"
    const message = "Olá! Gostaria de agendar um horário na Barbearia Premium Care For Men - Jardim Paulista."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  // Perguntas Frequentes
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

  // Avaliações reais do Google
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

  // Calcular o número total de páginas
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  // Obter os depoimentos da página atual
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

  // Lista de diferenciais
  const highlights = [
    "Profissionais Especializados",
    "Ambiente Exclusivo",
    "Produtos Premium",
    "Atendimento Diferenciado",
  ]

  return (
    <div className="min-h-screen bg-surface-dark text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* Desktop Navigation */}
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

            {/* Right side: CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Button
                onClick={openWhatsApp}
                className="contato-whatsapp hidden sm:flex bg-gradient-coral text-white font-semibold text-sm md:text-base px-4 py-2 md:px-6 rounded-full glow-coral"
              >
                Agendar
              </Button>

              {/* Hamburger Menu Button */}
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

        {/* Mobile Menu */}
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

      {/* Hero Section with Background Image */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/barbearia/corte.jpg"
            alt="Barbeiro cortando cabelo"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/60 to-surface-dark"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-care-for-men.png"
                alt="Care For Men Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Barbearia <span className="text-gradient text-glow">Premium</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Barbearia de Alto Padrão em São Paulo SP. Especializada no cuidado masculino com excelência.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {highlights.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-2 glass-card-light rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-coral" />
                  <span className="text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openWhatsApp}
                className="contato-whatsapp bg-gradient-coral text-white font-semibold px-8 py-6 text-lg rounded-full glow-coral-intense transition-all hover:scale-105"
              >
                Agendar pelo WhatsApp
              </Button>

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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-coral" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Oferecemos uma variedade de serviços especializados para o cuidado masculino, todos em um ambiente
              discreto e confortável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Corte de Cabelo",
                description: "Cortes clássicos e modernos executados por profissionais especializados em cabelo masculino.",
                icon: <Scissors className="w-7 h-7 text-coral" />,
              },
              {
                title: "Barba",
                description: "Modelagem e aparação de barba com navalha, toalha quente e produtos premium.",
                icon: <Users className="w-7 h-7 text-coral" />,
              },
              {
                title: "Barboterapia",
                description: "Tratamento completo com toalhas quentes, óleos essenciais e massagem facial relaxante.",
                icon: <Spa className="w-7 h-7 text-coral" />,
              },
            ].map((service, index) => (
              <Card key={index} className="glass-card border-none rounded-2xl overflow-hidden group hover:glow-coral transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-6">
                    {service.description}
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="contato-whatsapp w-full bg-transparent border border-coral text-coral hover:bg-coral hover:text-white transition-all rounded-full"
                  >
                    Agendar Serviço
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="ambiente" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ambiente <span className="text-gradient">Exclusivo</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Ambiente exclusivo e discreto, projetado para oferecer o máximo de conforto e privacidade para nossos
              clientes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Corte de Cabelo", image: "/barbearia/corte.jpg" },
              { name: "Salão Iluminado", image: "/barbearia/salao-claro.jpg" },
              { name: "Recepção", image: "/barbearia/recepcao-nova.jpg" },
              { name: "Lobby", image: "/barbearia/lobby.jpg" },
              { name: "Sala de Espera", image: "/barbearia/espera.jpg" },
              { name: "Fachada", image: "/barbearia/fachada.jpg" },
              { name: "Salão Completo", image: "/barbearia/salao-completo.jpg" },
              { name: "Terraço", image: "/barbearia/terraco.jpg" },
              { name: "Acesso", image: "/barbearia/acesso.jpg" },
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-2xl group"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
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

          <div className="text-center mt-10 md:mt-12">
            <Button
              onClick={openWhatsApp}
              className="contato-whatsapp bg-gradient-coral text-white font-semibold px-8 py-6 text-lg rounded-full glow-coral transition-all hover:scale-105"
            >
              Agende uma Visita
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="avaliacoes" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              O Que Dizem Nossos <span className="text-gradient">Clientes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Avaliações reais de clientes que experimentaram nossos serviços exclusivos.
            </p>
          </div>

          <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"} gap-6 md:gap-8`}>
            {currentTestimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-none rounded-2xl">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Esclarecemos as principais dúvidas sobre nossos serviços e atendimento.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-sm md:text-base font-medium text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-coral" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-coral" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="bg-coral/10 rounded-lg p-4 border-l-4 border-coral">
                      <p className="text-sm md:text-base text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-400 mb-4">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <Button
              onClick={openWhatsApp}
              className="contato-whatsapp bg-gradient-coral text-white font-semibold px-8 py-4 rounded-full glow-coral"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-3xl p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Entre em <span className="text-gradient">Contato</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-coral mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <p className="text-gray-400">(11) 94991-2798</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Localização</p>
                    <p className="text-gray-400">
                      Rua Pamplona, 985 - Jardim Paulista<br />
                      São Paulo - SP, 01405-200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Horário de Funcionamento</p>
                    <p className="text-gray-400">
                      Segunda a Sábado: 10h às 23h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Instagram</p>
                    <p className="text-gray-400">@careformen.sp</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-coral/20 to-transparent rounded-2xl p-6 border border-coral/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-coral" />
                    <h3 className="text-lg font-semibold text-white">Atendimento Exclusivo</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    Trabalhamos apenas com agendamento prévio para garantir total privacidade e atendimento
                    personalizado. Entre em contato para agendar seu horário.
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="contato-whatsapp w-full bg-gradient-coral text-white font-semibold py-4 rounded-full glow-coral flex items-center justify-center gap-2"
                  >
                    <Image src="/whatsapp_float.png" alt="WhatsApp" width={24} height={24} />
                    <span>Agendar pelo WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FounderSection />

      <footer className="bg-surface-dark-alt border-t border-white/10 py-10 md:py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-coral/30">
                <Image
                  src="/logo-care-for-men.png"
                  alt="Care For Men Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
            </div>
            <div className="text-left">
              <span className="text-xl font-bold text-white block">Care For Men SP</span>
              <p className="text-sm text-coral">Barbearia de Alto Padrão</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Atendimento exclusivo e discreto para o homem moderno
          </p>
          <Button
            onClick={openWhatsApp}
            className="contato-whatsapp bg-gradient-coral text-white font-semibold px-8 py-3 rounded-full glow-coral mb-6"
          >
            Fale Conosco
          </Button>
          <p className="text-xs text-gray-600">© 2024 Care For Men SP. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        id="botao-flutuante-whatsapp"
        onClick={openWhatsApp}
        className="contato-whatsapp whatsapp-pulse fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center bg-whatsapp hover:bg-whatsapp-dark transition-all duration-300 hover:scale-110 glow-coral"
        aria-label="Contato via WhatsApp"
      >
        <Image src="/whatsapp_float.png" alt="WhatsApp" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" />
      </button>
    </div>
  )
}
