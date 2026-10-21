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
  Sparkles,
  Shield,
  Award,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function CuidadosMasculinosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentTestPage, setCurrentTestPage] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
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
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre Nós", href: "#sobre" },
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
    const message = msg ?? "Olá! Gostaria de conhecer mais sobre os serviços da Care For Men - Cuidados Masculinos."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const services = [
    {
      title: "Barbearia Premium",
      description: "Corte, barba, barboterapia e tratamentos capilares para valorizar sua imagem.",
    },
    {
      title: "Massagens Terapêuticas",
      description: "Relaxamento, alívio das tensões, recuperação muscular e bem-estar.",
    },
    {
      title: "Depilação Masculina",
      description: "Conforto, higiene e praticidade com técnicas adaptadas ao público masculino.",
    },
    {
      title: "Estética Masculina",
      description: "Limpeza de pele, hidratação facial, tratamentos estéticos e cuidados com a pele.",
    },
    {
      title: "Podologia",
      description: "Saúde, prevenção e cuidados especializados para os pés.",
    },
    {
      title: "Manicure Masculina",
      description: "Unhas sempre bem cuidadas para complementar sua apresentação.",
    },
  ]

  const benefits = [
    {
      icon: <Award className="w-7 h-7 text-coral" />,
      title: "Atendimento Personalizado",
      description: "Cada atendimento é realizado de forma individualizada, respeitando suas necessidades.",
    },
    {
      icon: <Shield className="w-7 h-7 text-coral" />,
      title: "Profissionais Especializados",
      description: "Equipe altamente qualificada e em constante atualização.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-coral" />,
      title: "Produtos Premium",
      description: "Utilizamos produtos reconhecidos pela qualidade e pelos resultados.",
    },
    {
      icon: <Heart className="w-7 h-7 text-coral" />,
      title: "Estrutura de Alto Padrão",
      description: "Ambiente moderno, elegante e desenvolvido para oferecer conforto.",
    },
  ]

  const highlights = [
    {
      icon: "★",
      text: "Avaliação Google",
    },
    {
      icon: "👥",
      text: "+10.000 Clientes Atendidos",
    },
    {
      icon: "👨‍💼",
      text: "Profissionais Especializados",
    },
    {
      icon: "💎",
      text: "Estrutura Premium",
    },
  ]

  const testimonials = [
    {
      name: "André M.",
      rating: 5,
      text: "Excelente atendimento, ambiente impecável e profissionais extremamente qualificados. Recomendo sem dúvidas.",
    },
    {
      name: "Carlos S.",
      rating: 5,
      text: "Encontrei tudo o que precisava em um único lugar. Hoje faço parte da rotina da Care For Men.",
    },
    {
      name: "Felipe T.",
      rating: 5,
      text: "Mais do que uma barbearia. Um espaço completo para cuidar da imagem e do bem-estar.",
    },
    {
      name: "Lucas P.",
      rating: 5,
      text: "Profissionalismo, qualidade e atendimento humanizado. A melhor experiência que já tive.",
    },
    {
      name: "Rodrigo L.",
      rating: 5,
      text: "Recomendo para todos os amigos. A Care For Men é referência em cuidados masculinos.",
    },
    {
      name: "Gustavo R.",
      rating: 5,
      text: "Transformou a minha rotina de cuidados. Tudo em um único lugar, com excelência.",
    },
  ]

  const faqs = [
    {
      question: "Preciso agendar antecipadamente?",
      answer: "Recomendamos o agendamento prévio para garantir seu horário. Você pode agendar pelo WhatsApp de forma rápida e prática.",
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer: "Segunda a sábado: 10h às 23h. Fechado aos domingos. Aceitamos agendamentos para garantir sua disponibilidade.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos dinheiro, PIX, cartões de débito e crédito (todas as bandeiras).",
    },
    {
      question: "Vocês oferecem pacotes ou planos de assinatura?",
      answer: "Sim! Oferecemos planos de assinatura personalizados com benefícios exclusivos para clientes recorrentes.",
    },
    {
      question: "Qual é o endereço de vocês?",
      answer: "Rua Pamplona, 985 – Jardins – São Paulo/SP. Próximo ao metrô Trianon-MASP.",
    },
    {
      question: "Posso levar acompanhante?",
      answer: "Sim. Temos áreas de espera confortáveis. Entre em contato para mais detalhes sobre cada serviço.",
    },
  ]

  const currentTestimonials = isMobile
    ? testimonials.slice(currentTestPage * 1, currentTestPage * 1 + 1)
    : testimonials.slice(currentTestPage * 3, currentTestPage * 3 + 3)

  const maxTestPages = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3)

  return (
    <div className="min-h-screen bg-surface-dark overflow-x-hidden">
      {/* Header/Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-surface-dark/95 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Image
            src="/logo-care-for-men.png"
            alt="Care For Men Logo"
            width={50}
            height={50}
            priority
            className="object-contain"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-coral transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-dark/98 border-t border-gold/20 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-gray-300 hover:text-coral transition-colors py-2 text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/barbearia-real/recepcao.jpg"
            alt="Care For Men - Centro Premium de Cuidados Masculinos"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/50 to-surface-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/60 via-transparent to-surface-dark/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 rounded-full bg-coral/20 border border-coral/50 mb-6">
              <p className="text-coral text-sm font-semibold">🏆 Centro Premium</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
            Centro Premium de <span className="text-gradient text-glow">Cuidados Masculinos</span>
          </h1>

          <p className="text-base md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tudo o que o homem precisa para cuidar da imagem, autoestima e bem-estar em um único lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => openWhatsApp("Quero agendar um horário na Care For Men!")}
              className="contato-whatsapp btn-premium text-black font-bold px-8 py-6 rounded-full glow-coral hover:scale-105 transition-all"
            >
              Agendar Agora
            </Button>
            <Button
              onClick={() => openWhatsApp()}
              variant="outline"
              className="contato-whatsapp border-coral/50 text-coral hover:bg-coral/10 font-bold px-8 py-6 rounded-full"
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Highlights Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300">
                <span className="text-coral text-lg">{item.icon}</span>
                <span className="text-sm md:text-base">{item.text}</span>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Soluções <span className="text-gradient">Completas</span>
            </h2>
            <div className="divider-with-star mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Para o cuidado masculino abrangente e profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card border-none rounded-2xl p-6 md:p-8 overflow-hidden group hover:glow-coral transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-coral" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                <div className="flex items-center text-coral text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => openWhatsApp("Quero conhecer todos os serviços da Care For Men!")}
              className="contato-whatsapp btn-premium text-black font-bold px-8 py-4 rounded-full glow-coral"
            >
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Sobre Nós</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-balance">
                Muito Mais Que Uma <span className="text-gradient">Barbearia</span>
              </h2>

              <p className="text-gray-400 mb-6 leading-relaxed text-base">
                Somos um Centro Premium de Cuidados Masculinos criado para oferecer uma experiência completa ao homem moderno.
              </p>

              <p className="text-gray-400 mb-6 leading-relaxed text-base">
                Reunimos em um único espaço profissionais especializados, estrutura de alto padrão e diversos serviços voltados para imagem, estética, bem-estar e, futuramente, saúde masculina.
              </p>

              <p className="text-gray-400 mb-8 leading-relaxed text-base">
                Nosso propósito é proporcionar praticidade, conforto e excelência, permitindo que cada cliente encontre tudo o que precisa em um só lugar.
              </p>

              <Button
                onClick={() => openWhatsApp()}
                className="contato-whatsapp btn-premium text-black font-bold px-8 py-4 rounded-full glow-coral"
              >
                Conhecer Nossa Estrutura
              </Button>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-gold/20">
              <Image
                src="/barbearia-real/recepcao.jpg"
                alt="Estrutura Care For Men"
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Por Que Escolher</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Excelência em <span className="text-gradient">Cada Detalhe</span>
            </h2>
            <div className="divider-with-star mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card border-none rounded-2xl p-8 text-center hover:glow-coral transition-all">
                <div className="flex justify-center mb-5">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section id="estrutura" className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Nosso Espaço</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Sofisticação em <span className="text-gradient">Cada Detalhe</span>
            </h2>
            <div className="divider-with-star mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa estrutura foi planejada para proporcionar conforto, elegância e uma experiência completa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: "/barbearia-real/recepcao.jpg", label: "Recepção" },
              { src: "/barbearia-real/lounge-2.jpg", label: "Lounge" },
              { src: "/barbearia-real/sala-atendimento.jpg", label: "Atendimento" },
              { src: "/barbearia-real/espaco-massagem.jpg", label: "Massagem" },
              { src: "/barbearia-real/ambiente-premium.jpg", label: "Ambiente" },
              { src: "/barbearia-real/fachada.jpg", label: "Fachada" },
            ].map((item, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-2xl group">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm md:text-base">{item.label}</p>
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              O Que Nossos <span className="text-gradient">Clientes Dizem</span>
            </h2>
            <div className="divider-with-star mb-6"></div>
            <p className="text-gray-400">A experiência de quem já conhece a Care For Men.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="glass-card border-none rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-white">{testimonial.name}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            {[...Array(maxTestPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentTestPage ? "bg-coral w-8" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-surface-dark-alt scroll-mt-20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-coral text-sm tracking-[0.25em] uppercase mb-3">Dúvidas</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card border-none rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gold/5 transition-colors"
                >
                  <span className="text-white font-semibold text-left text-base md:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-coral transition-transform flex-shrink-0 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-gray-300 border-t border-gold/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.7)" }}>
            <div className="absolute inset-0">
              <Image
                src="/barbearia-real/massagem-sessao.jpg"
                alt="Care For Men"
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/70 to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-16 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 text-balance">
                Sua Melhor Versão Começa Aqui
              </h2>
              <p className="text-gray-300 mb-8 text-base md:text-lg max-w-2xl">
                Agende seu horário e descubra uma nova forma de cuidar da sua imagem, autoestima e bem-estar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => openWhatsApp("Quero agendar meu horário na Care For Men!")}
                  className="contato-whatsapp btn-premium text-black font-bold px-8 py-6 rounded-full glow-coral hover:scale-105 transition-all"
                >
                  Agendar Agora
                </Button>
                <Button
                  onClick={() => openWhatsApp()}
                  variant="outline"
                  className="contato-whatsapp border-coral/50 text-coral hover:bg-coral/10 font-bold px-8 py-6 rounded-full"
                >
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                  Agendamento rápido
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                  Atendimento personalizado
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                  Confirmação imediata
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-20 px-4 bg-surface-dark-alt scroll-mt-20 border-t border-gold/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/logo-care-for-men.png"
                alt="Care For Men"
                width={80}
                height={80}
                className="mb-4 object-contain"
              />
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Centro Premium de Cuidados Masculinos
              </p>
              <p className="text-gray-400 mb-8 text-sm">
                Barbearia • Estética • Bem-estar • Saúde (em breve)
              </p>
              <p className="text-coral font-semibold">
                Tudo o que o homem precisa em um único lugar.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Localização</p>
                  <p className="text-gray-400 text-sm">Rua Pamplona, 985 – Jardins – São Paulo/SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Horário de Funcionamento</p>
                  <p className="text-gray-400 text-sm">Segunda a Sábado: 10h às 23h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold mb-1">Contato</p>
                  <a href="https://wa.me/5511949912798" target="_blank" rel="noopener noreferrer" className="contato-whatsapp text-gray-400 hover:text-coral text-sm transition-colors">(11) 94991-2798</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/20 mt-12 pt-8 text-center text-gray-500 text-xs md:text-sm">
            <p>&copy; 2026 Care For Men - Centro Premium de Cuidados Masculinos. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>

      <FounderSection />

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="whatsapp-pulse fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-40 contato-whatsapp"
      >
        <Image src="/whatsapp_float.png" alt="WhatsApp" width={56} height={56} className="object-contain" />
      </button>


    </div>
  )
}
