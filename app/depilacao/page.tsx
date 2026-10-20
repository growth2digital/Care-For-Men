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
  Zap,
  Droplets,
  UserCheck,
  ShieldCheck,
  Sofa,
  Play,
  Check,
} from "lucide-react"

const PHONE = "5511949912798"

export default function DepilacaoPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [videoUnmuted, setVideoUnmuted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const openWhatsApp = (serviceMsg?: string) => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Lead")
    }
    const message = serviceMsg
      ? `Olá! Vim pela página de Depilação e gostaria de agendar ${serviceMsg} na Care For Men - Jardins.`
      : "Olá! Vim pela página de Depilação e gostaria de agendar um horário na Care For Men - Jardins."
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const navLinks = [
    { label: "Máquina", href: "#maquina" },
    { label: "Cera", href: "#cera" },
    { label: "Como funciona", href: "#comparativo" },
    { label: "Espaço", href: "#espaco" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const heroChecklist = [
    "Máquina ou cera",
    "Atendimento profissional",
    "Ambiente moderno",
    "No coração de São Paulo",
  ]

  const maquinaServices = [
    { title: "Íntima Masculina", price: "120", image: "/depilacao/intima.jpg" },
    { title: "Peito + Abdômen", price: "80", image: "/depilacao/ba-peito.jpg" },
    { title: "Costas", price: "75", image: "/depilacao/ba-costas.jpg" },
    { title: "Pernas", price: "100", image: "/depilacao/ba-pernas.jpg" },
    { title: "Peito", price: "40", image: "/depilacao/peito.jpg" },
    { title: "Abdômen", price: "40", image: "/depilacao/ba-abdomen.jpg" },
  ]

  const ceraServices = [
    { title: "Peito", price: "85", image: "/depilacao/ba-peito.jpg" },
    { title: "Abdômen", price: "85", image: "/depilacao/ba-abdomen.jpg" },
    { title: "Peito + Abdômen", price: "170", image: "/depilacao/peito.jpg" },
    { title: "Costas", price: "170", image: "/depilacao/ba-costas.jpg" },
    { title: "Pernas", price: "220", image: "/depilacao/ba-pernas.jpg" },
    { title: "Íntima", price: "250", image: "/depilacao/intima.jpg" },
  ]

  const maquinaBenefits = [
    "Procedimento rápido",
    "Maior conforto",
    "Não remove o pelo pela raiz",
    "Ideal para manutenção frequente",
  ]

  const ceraBenefits = [
    "Remove o pelo pela raiz",
    "Resultado mais duradouro",
    "Pele lisa por mais tempo",
    "Indicada para diferentes regiões",
  ]

  const spaceImages = [
    { src: "/depilacao/espaco-recepcao.jpg", alt: "Recepção com logo iluminado Care For Men" },
    { src: "/depilacao/espaco-lounge.jpg", alt: "Lounge de espera com sofás de couro" },
    { src: "/depilacao/espaco-sala-atendimento.jpg", alt: "Sala de atendimento com maca e cadeira" },
    { src: "/depilacao/espaco-lounge-tv.jpg", alt: "Sala de estar com TV e plantas" },
    { src: "/depilacao/espaco-salao.jpg", alt: "Salão com quadros e cadeiras de barbeiro" },
    { src: "/depilacao/espaco-sala-maca.jpg", alt: "Sala reservada com maca de atendimento" },
  ]

  const differentials = [
    { icon: <UserCheck className="w-7 h-7" />, title: "Atendimento Profissional" },
    { icon: <ShieldCheck className="w-7 h-7" />, title: "Higiene e Organização" },
    { icon: <Sofa className="w-7 h-7" />, title: "Conforto" },
    { icon: <MapPin className="w-7 h-7" />, title: "Localização Privilegiada" },
  ]

  const testimonials = [
    {
      name: "Rafael M.",
      text: "Excelente atendimento, ambiente impecável e profissionais de alto nível. Recomendo!",
    },
    {
      name: "Lucas T.",
      text: "Local moderno e muito bem organizado. Fiz a depilação e fiquei muito satisfeito com o resultado.",
    },
    {
      name: "Bruno S.",
      text: "Equipe atenciosa e procedimento super tranquilo. Com certeza voltarei.",
    },
  ]

  const faqs = [
    {
      question: "Qual a diferença entre máquina e cera?",
      answer:
        "A máquina apara o pelo rente à pele — é rápida, confortável e ideal para manutenção frequente. A cera remove o pelo pela raiz, deixando a pele lisa por mais tempo, com resultado mais duradouro.",
    },
    {
      question: "Posso fazer várias regiões no mesmo atendimento?",
      answer:
        "Sim. Você pode combinar quantas regiões quiser em uma única sessão. Informe as áreas desejadas no agendamento para reservarmos o tempo adequado.",
    },
    {
      question: "Preciso agendar?",
      answer:
        "Sim, todos os atendimentos são feitos com hora marcada para garantir sua privacidade e pontualidade. O agendamento é rápido pelo WhatsApp.",
    },
    {
      question: "Quanto tempo dura o procedimento?",
      answer:
        "Depende das regiões escolhidas. Áreas menores como axilas levam poucos minutos, enquanto combinações como peito e abdômen levam um pouco mais. Tudo com conforto e sem pressa.",
    },
    {
      question: "Como saber qual método é ideal para mim?",
      answer:
        "Nossa equipe avalia seu tipo de pelo, sensibilidade e objetivo, e recomenda entre máquina e cera. Você também pode tirar dúvidas pelo WhatsApp antes de agendar.",
    },
  ]

  return (
    <div className="min-h-screen bg-surface-dark text-white overflow-x-hidden font-sans">
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card shadow-dark py-2" : "bg-surface-dark/80 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4">
            <button onClick={() => handleNavClick("#inicio")} className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/logo-care-for-men.png"
                alt="Care For Men"
                width={52}
                height={52}
                priority
                className="w-11 h-11 md:w-13 md:h-13 object-contain"
              />
              <div className="text-left hidden sm:block">
                <span className="block text-sm md:text-base font-bold tracking-wide text-white leading-none font-serif">
                  CARE FOR MEN
                </span>
                <span className="block text-[10px] md:text-[11px] tracking-[0.2em] text-coral uppercase mt-1">
                  Centro Premium de Cuidados Masculinos
                </span>
              </div>
            </button>

            {/* Info central (desktop) */}
            <div className="hidden xl:flex items-center gap-6 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-coral flex-shrink-0" />
                <div>
                  <p className="text-white">Rua Pamplona, 985 - Jardins</p>
                  <p className="text-gray-400">Próximo à Av. Paulista</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-coral flex-shrink-0" />
                <div>
                  <p className="text-white">Seg a Sáb: 10h às 23h</p>
                  <p className="text-gray-400">Dom: 10h às 20h</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => openWhatsApp()}
                className="contato-whatsapp hidden sm:flex btn-premium text-black font-bold px-5 py-2 rounded-full text-xs md:text-sm hover:scale-105 transition-all"
              >
                Agendar no WhatsApp
              </Button>
              <button
                className="lg:hidden text-coral p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* nav desktop */}
          <nav className="hidden lg:flex items-center justify-center gap-8 mt-2">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="text-xs tracking-wider uppercase text-gray-300 hover:text-coral transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-t border-white/10 px-4 py-4 flex flex-col gap-2">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="text-left py-2 px-2 text-gray-300 hover:text-coral text-sm border-b border-white/5 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => openWhatsApp()}
              className="contato-whatsapp btn-premium text-black font-bold py-3 rounded-full mt-2"
            >
              Agendar no WhatsApp
            </Button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="inicio" className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/depilacao/sala.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-surface-dark/45 to-surface-dark" />
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-coral/10 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Texto */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.05] text-balance mb-5">
                Depilação Masculina <span className="text-gradient text-glow">no Jardins</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-7 max-w-xl leading-relaxed">
                Cuidado corporal masculino com conforto e padrão premium.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-7 max-w-lg">
                {heroChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-coral/15 flex-shrink-0">
                      <Check className="w-3 h-3 text-coral" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 mb-8">
                <Image src="/logo.png" alt="" width={0} height={0} className="hidden" />
                <div className="flex items-center gap-2 glass-card-light rounded-full px-4 py-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path
                      fill="#EA4335"
                      d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.9 2.3 2.8 6.4 2.8 11.9S6.9 21.5 12 21.5c6.1 0 8.5-4.3 8.5-8.1 0-.5-.05-.9-.12-1.3H12z"
                    />
                  </svg>
                  <div className="leading-tight">
                    <p className="text-white font-bold text-sm">4,9 no Google</p>
                    <p className="text-gray-400 text-[11px]">Mais de 439 avaliações</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => openWhatsApp()}
                className="contato-whatsapp btn-premium text-black font-bold px-9 py-6 rounded-full text-base md:text-lg glow-coral hover:scale-105 transition-all"
              >
                Agendar pelo WhatsApp
              </Button>
            </div>

            {/* Vídeo */}
            <div
              className="relative rounded-3xl overflow-hidden border-gold-thin"
              style={{ boxShadow: "0 25px 70px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            >
              <div className="relative aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  src="/depilacao/espaco.mp4"
                  poster="/depilacao/sala.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  id="hero-video"
                />
                {!videoUnmuted && (
                  <button
                    onClick={() => {
                      const v = document.getElementById("hero-video") as HTMLVideoElement | null
                      if (v) {
                        v.muted = false
                        v.controls = true
                        setVideoUnmuted(true)
                        v.play()
                      }
                    }}
                    className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur px-4 py-2 text-white text-xs md:text-sm hover:bg-black/75 transition-colors group"
                    aria-label="Ativar som do vídeo"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full btn-premium group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 text-black fill-black ml-0.5" />
                    </span>
                    Ativar som
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPILAÇÃO COM MÁQUINA ── */}
      <ServiceSection
        id="maquina"
        eyebrow="Depilação com máquina"
        title="Depilação com Máquina"
        subtitle="Praticidade, conforto e um visual mais bem cuidado."
        services={maquinaServices}
        onAgendar={(t) => openWhatsApp(`Depilação com máquina — ${t}`)}
        onVerTodas={() => openWhatsApp("ver todas as opções de depilação com máquina")}
      />

      {/* ── DEPILAÇÃO COM CERA ── */}
      <ServiceSection
        id="cera"
        eyebrow="Depilação com cera"
        title="Depilação com Cera"
        subtitle="Pele lisa por mais tempo, com remoção pela raiz."
        services={ceraServices}
        altBg
        onAgendar={(t) => openWhatsApp(`Depilação com cera — ${t}`)}
        onVerTodas={() => openWhatsApp("ver todas as opções de depilação com cera")}
      />

      {/* ── MÁQUINA OU CERA? ── */}
      <section id="comparativo" className="py-16 md:py-24 px-4 bg-black scroll-mt-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-balance">
                Máquina ou cera?
              </h2>
              <p className="text-2xl md:text-3xl font-serif text-gradient mb-8">A escolha é sua.</p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <Zap className="w-5 h-5 text-coral" />
                    <h3 className="text-lg font-bold tracking-wide text-white uppercase">Máquina</h3>
                  </div>
                  <ul className="space-y-3">
                    {maquinaBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <Droplets className="w-5 h-5 text-coral" />
                    <h3 className="text-lg font-bold tracking-wide text-white uppercase">Cera</h3>
                  </div>
                  <ul className="space-y-3">
                    {ceraBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden border-gold-thin"
                style={{ boxShadow: "0 25px 70px rgba(0,0,0,0.7)" }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/depilacao/maquina-cera.jpg"
                    alt="Depilação masculina com cera e com máquina"
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 uppercase tracking-wide">
                    Cuidado masculino<br />de alto padrão
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Na Care For Men, a depilação faz parte de uma experiência completa de cuidados
                    masculinos. Ambiente moderno, atendimento profissional e atenção aos detalhes em
                    cada procedimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSSO ESPAÇO ── */}
      <section id="espaco" className="py-16 md:py-24 px-4 bg-surface-dark scroll-mt-24">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-coral text-xs tracking-[0.25em] uppercase mb-2">Nosso espaço</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-balance">
              Um ambiente pensado para <span className="text-gradient">o seu conforto</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
              Estrutura moderna, reservada e higienizada no coração dos Jardins, para você viver uma
              experiência completa de cuidado masculino.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {spaceImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl border-gold-thin ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => openWhatsApp("conhecer o espaço e agendar uma visita")}
              className="contato-whatsapp btn-premium text-black font-bold px-8 py-6 rounded-full text-base md:text-lg glow-coral hover:scale-105 transition-all"
            >
              Agende sua visita
            </Button>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS BAR ── */}
      <section className="py-10 md:py-12 px-4 bg-surface-light">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {differentials.map((d) => (
              <div key={d.title} className="flex flex-col items-center text-center gap-3">
                <span className="neu-raised flex items-center justify-center w-14 h-14 rounded-full text-coral-dark">
                  {d.icon}
                </span>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ink leading-tight">
                  {d.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES + FAQ ── */}
      <section id="avaliacoes" className="py-16 md:py-24 px-4 scroll-mt-24 bg-surface-light-alt">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Depoimentos */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-ink">
              O que nossos <span className="text-coral-dark">clientes dizem</span>
            </h2>
            <div className="flex items-center gap-2 mb-8">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.9 2.3 2.8 6.4 2.8 11.9S6.9 21.5 12 21.5c6.1 0 8.5-4.3 8.5-8.1 0-.5-.05-.9-.12-1.3H12z"
                />
              </svg>
              <span className="text-ink font-bold text-sm">4,9 no Google</span>
              <span className="text-ink-muted text-xs">· Mais de 200 avaliações</span>
            </div>

            <div className="space-y-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="neu-raised p-6"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-coral fill-coral" />
                    ))}
                  </div>
                  <p className="text-ink-muted text-sm italic leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-ink font-semibold text-sm">{t.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-ink">
              Perguntas <span className="text-coral-dark">frequentes</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="neu-raised-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-sm md:text-base font-semibold text-ink">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-coral-dark flex-shrink-0 transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-ink-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL / LOCALIZAÇÃO ── */}
      <section id="contato" className="relative px-4 py-16 md:py-24 bg-black scroll-mt-24 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Localização + horário */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden relative min-h-56">
                <Image src="/depilacao/sala.jpg" alt="Ambiente Care For Men" fill className="object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-coral" />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wider">Nossa Localização</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Rua Pamplona, 985 — Jardins
                    <br />
                    São Paulo/SP
                    <br />
                    <span className="text-gray-400">Próximo à Avenida Paulista e ao Trianon-MASP.</span>
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-coral" />
                    <h3 className="font-bold text-white text-sm uppercase tracking-wider">Horário de Atendimento</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Segunda a sábado: 10h às 23h
                    <br />
                    Domingo: 10h às 20h
                  </p>
                </div>
              </div>
            </div>

            {/* Card CTA */}
            <div
              className="rounded-3xl p-8 md:p-10 flex flex-col justify-center border-gold-thin"
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(20,20,20,0.9))",
                boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-balance">
                Pronto para <span className="text-gradient">agendar?</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                Escolha a região, consulte os horários e fale diretamente com nossa equipe pelo WhatsApp.
              </p>
              <Button
                onClick={() => openWhatsApp()}
                className="contato-whatsapp btn-premium text-black font-bold px-9 py-6 rounded-full text-base md:text-lg glow-coral hover:scale-105 transition-all self-start"
              >
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <FounderSection />

      <footer className="bg-surface-dark border-t border-white/10 py-10 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo-care-for-men.png" alt="Care For Men" width={44} height={44} className="object-contain" />
            <div>
              <p className="font-serif font-bold text-white text-sm tracking-wide">CARE FOR MEN</p>
              <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                Centro Premium de Cuidados Masculinos
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <a href="/depilacao" className="text-coral">Depilação</a>
            <span className="text-white/20">|</span>
            <a href="/barbearia" className="hover:text-coral transition-colors">Barbearia</a>
            <span className="text-white/20">|</span>
            <span className="text-gray-500">São Paulo — SP</span>
          </nav>
        </div>
      </footer>

      {/* ── WhatsApp Float ── */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all"
        aria-label="Falar no WhatsApp"
      >
        <img
          src="/whatsapp-float.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain drop-shadow"
        />
      </button>
    </div>
  )
}

function ServiceSection({
  id,
  eyebrow,
  title,
  subtitle,
  services,
  altBg,
  onAgendar,
  onVerTodas,
}: {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  services: { title: string; price: string; image: string }[]
  altBg?: boolean
  onAgendar: (title: string) => void
  onVerTodas: () => void
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 px-4 scroll-mt-24 ${altBg ? "bg-surface-light-alt" : "bg-surface-light"}`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-coral-dark text-xs tracking-[0.25em] uppercase mb-2">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink text-balance">{title}</h2>
            <p className="text-ink-muted mt-2 max-w-lg">{subtitle}</p>
          </div>
          <button
            onClick={onVerTodas}
            className="neu-pill self-start md:self-auto text-xs tracking-wider uppercase font-semibold text-coral-dark rounded-full px-5 py-2.5 transition-all hover:text-ink whitespace-nowrap"
          >
            Ver todas as opções
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group neu-raised overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-1 p-3 md:p-4">
                <h3 className="text-sm font-semibold text-ink leading-tight mb-1">{service.title}</h3>
                <p className="text-lg font-serif font-bold text-coral-dark mb-3">
                  R$ {service.price}
                </p>
                <button
                  onClick={() => onAgendar(service.title)}
                  className="contato-whatsapp mt-auto w-full flex items-center justify-center gap-1.5 py-2 rounded-full text-xs font-bold text-black btn-premium hover:scale-[1.03] transition-transform"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-black" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z" />
                  </svg>
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
