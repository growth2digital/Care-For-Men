'use client'

import Image from 'next/image'
import { FounderSection } from '@/components/founder-section'
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  ClipboardCheck,
  Crown,
  Gem,
  GlassWater,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Star,
  UserRoundCheck,
  Wine,
} from 'lucide-react'

const GOLD = '#d4af37'

const experienceImages = [
  { src: '/barbearia-real/sala-atendimento.jpg', alt: 'Atendimento premium na Care For Men' },
  { src: '/barbearia-real/massagem-sessao.jpg', alt: 'Momento de relaxamento e cuidado' },
  { src: '/barbearia-real/ambiente-premium.jpg', alt: 'Ambiente premium e privativo' },
  { src: '/barbearia-real/lounge-2.jpg', alt: 'Lounge para o Dia do Noivo' },
]

const timeline = [
  { icon: GlassWater, number: '01', title: 'Chegada', description: 'Welcome drink\ne boas-vindas' },
  { icon: ClipboardCheck, number: '02', title: 'Consulta', description: 'Avaliação e\nplanejamento' },
  { icon: Scissors, number: '03', title: 'Barba', description: 'Design e\nbarboterapia' },
  { icon: Crown, number: '04', title: 'Cabelo', description: 'Corte premium\npersonalizado' },
  { icon: Sparkles, number: '05', title: 'Skincare', description: 'Limpeza e\nrevitalização' },
  { icon: Gem, number: '06', title: 'Styling', description: 'Finalização\ndo visual' },
  { icon: Camera, number: '07', title: 'Fotos', description: 'Registros do\nmomento' },
]

const plans = [
  {
    name: 'SILVER',
    label: 'ESSENCIAL',
    price: 'R$ 590',
    items: ['Welcome drink', 'Corte premium', 'Barboterapia', 'Design de sobrancelhas', 'Limpeza facial'],
    className: 'bg-white text-[#0a0a0a]',
    buttonClass: 'bg-[#0a0a0a] text-white hover:bg-[#222]',
  },
  {
    name: 'GOLD',
    label: 'COMPLETO',
    price: 'R$ 890',
    items: ['Tudo do Silver', 'Tábua de frios', 'Massagem relaxante', 'Esfoliação corporal', 'Manicure masculina', 'Fotos do momento'],
    className: 'bg-[#111] text-white border border-[#d4af37] md:scale-105 md:px-10 md:py-12',
    buttonClass: 'bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c39e2d]',
    featured: true,
  },
  {
    name: 'BLACK',
    label: 'EXCLUSIVO',
    price: 'R$ 1.290',
    items: ['Tudo do Gold', 'Sala privativa exclusiva', 'Depilação à escolha', 'Kit Grooming Care For Men', 'Experiência personalizada'],
    className: 'bg-[#111] text-white border border-[#333]',
    buttonClass: 'bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c39e2d]',
    footnote: '*Mediante disponibilidade',
  },
]

export default function DiaDoNoivoPage() {
  const openWhatsApp = (message = 'Olá! Gostaria de reservar meu Dia do Noivo na Care For Men.') => {
    window.open(`https://wa.me/5511949912798?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <header className="bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
          <a href="#inicio" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Care For Men — início">
            <Image src="/logo-round.png" alt="Care For Men" width={52} height={52} className="size-11 shrink-0 object-contain sm:size-[52px]" />
            <div className="min-w-0">
              <p className="truncate font-serif text-base tracking-[0.12em] text-[#d4af37] sm:text-lg sm:tracking-[0.14em]">CARE FOR MEN</p>
              <p className="truncate text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[9px] sm:tracking-[0.2em]">Cuidados masculinos premium</p>
            </div>
          </a>
          <button className="shrink-0 rounded-md p-2 text-[#d4af37] transition-colors hover:bg-[#171717]" aria-label="Abrir menu">
            <Menu className="size-7 sm:size-8" />
          </button>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <Image src="/dia-do-noivo/hero-noivo-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[72%_center] opacity-60 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/25 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />
        <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-8 md:min-h-0 md:grid-cols-2 md:gap-12 md:py-16">
          <div className="flex max-w-[19rem] flex-col justify-center sm:max-w-md md:max-w-none">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#d4af37] md:mb-4 md:text-sm">Dia do noivo</p>
            <h1 className="mb-4 text-balance font-serif text-[2.55rem] leading-[1.08] sm:text-5xl md:mb-6 md:text-6xl md:leading-tight">
              O DIA DO NOIVO QUE VOCÊ VAI LEMBRAR PARA <span className="text-[#d4af37]">SEMPRE.</span>
            </h1>
            <p className="mb-7 max-w-xs text-sm leading-relaxed text-neutral-300 sm:max-w-md sm:text-base md:mb-12 md:text-lg md:text-neutral-400">
              Uma experiência exclusiva de cuidado, confiança e bem-estar para você chegar impecável ao altar.
            </p>

            <div className="mb-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 md:mb-12 md:gap-4">
              {[
                [UserRoundCheck, 'Atendimento exclusivo'],
                [Crown, 'Ambiente premium'],
                [Gem, 'Profissionais especializados'],
                [MapPin, 'Localização privilegiada'],
              ].map(([Icon, label]) => {
                const FeatureIcon = Icon as typeof Crown
                return (
                  <div key={label as string} className="flex flex-col items-center gap-3 text-center">
                    <FeatureIcon className="size-6 stroke-1 text-[#d4af37]" />
                    <p className="text-[9px] uppercase leading-relaxed tracking-wide text-neutral-300 sm:text-[10px]">{label as string}</p>
                  </div>
                )
              })}
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="contato-whatsapp flex w-fit items-center justify-center gap-2 rounded-md bg-[#d4af37] px-8 py-4 font-bold text-[#0a0a0a] transition-colors hover:bg-[#c39e2d]"
            >
              RESERVE SUA DATA
              <Image src="/whatsapp_float.png" alt="" width={22} height={22} className="size-[22px] object-contain" />
            </button>
          </div>

          <div className="relative hidden h-[600px] w-full overflow-hidden rounded-lg md:block">
            <Image src="/dia-do-noivo/hero-noivo-bg.jpg" alt="Noivo elegante em traje branco" fill priority sizes="50vw" className="object-cover object-[72%_center]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-[#0a0a0a] md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#d4af37]">A experiência</p>
            <h2 className="mb-6 text-balance font-serif text-3xl leading-tight sm:text-4xl">CUIDAMOS DE CADA DETALHE PARA VOCÊ</h2>
            <p className="max-w-md text-base leading-relaxed text-neutral-600">
              Do primeiro brinde à finalização, cada etapa é planejada para transformar sua preparação em uma lembrança inesquecível.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {experienceImages.map((image) => (
                <div key={image.src} className="relative aspect-[3/4] overflow-hidden rounded-md">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 18vw, 45vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-2" aria-label="Indicadores da galeria">
              {[true, false, false, false].map((active, index) => (
                <span key={index} className={`size-2 rounded-full ${active ? 'bg-[#d4af37]' : 'bg-neutral-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-center font-serif text-2xl uppercase tracking-[0.22em] text-[#d4af37]">Escolha sua experiência</h2>
          <div className="mt-12 grid items-end gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`relative rounded-lg p-8 ${plan.className}`}>
                {plan.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#d4af37] px-5 py-2 text-[10px] font-bold tracking-wider text-[#0a0a0a]">MAIS ESCOLHIDO</div>}
                <p className="mb-2 text-xs uppercase tracking-[0.2em] opacity-60">{plan.label}</p>
                <h3 className={`font-serif text-3xl ${plan.featured ? 'text-[#d4af37]' : ''}`}>{plan.name}</h3>
                <ul className="mt-8 flex flex-col gap-4">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 size-4 shrink-0 ${plan.name === 'SILVER' ? 'text-[#9a2b2b]' : 'text-[#d4af37]'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => openWhatsApp(`Olá! Quero reservar o plano ${plan.name}.`)} className={`contato-whatsapp mt-8 flex w-full items-center justify-center gap-2 rounded-md py-3 text-sm font-bold transition-colors ${plan.buttonClass}`}>
                  RESERVE
                  <Image src="/whatsapp_float.png" alt="" width={20} height={20} className="size-5 object-contain" />
                </button>
                {plan.footnote && <p className="mt-4 text-center text-[10px] text-neutral-500">{plan.footnote}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="mb-16 text-center font-serif text-2xl uppercase tracking-[0.22em] text-[#d4af37]">Como é a experiência</h2>
          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:justify-between lg:gap-2">
            <div className="absolute left-0 right-0 top-8 z-0 hidden border-t border-neutral-800 lg:block" />
            {timeline.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="relative z-10 flex flex-1 flex-col items-center bg-[#0a0a0a] px-2 text-center">
                <div className="mb-3 flex size-16 items-center justify-center rounded-full border border-[#d4af37] bg-[#0a0a0a]">
                  <Icon className="size-6 stroke-1 text-[#d4af37]" />
                </div>
                <span className="mb-2 text-xs text-[#d4af37]">{number}</span>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider">{title}</h3>
                <p className="whitespace-pre-line text-[11px] leading-relaxed text-neutral-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-[#0a0a0a] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-8 lg:flex-row">
          <p className="font-serif text-xl uppercase tracking-[0.18em] text-[#d4af37] lg:w-1/5">Depoimentos</p>
          <button aria-label="Depoimento anterior" className="text-[#d4af37]"><ArrowLeft className="size-6" /></button>
          <div className="flex flex-1 flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-[#d4af37]">
              <Image src="/barbearia-real/ambiente-premium.jpg" alt="Cliente Rafael S." fill className="object-cover" />
            </div>
            <div>
              <span className="block font-serif text-5xl leading-none text-[#d4af37]">“</span>
              <blockquote className="text-lg leading-relaxed text-neutral-300">Experiência impecável. A atenção aos detalhes e o atendimento fizeram meu dia ainda mais especial.</blockquote>
              <div className="mt-4 flex justify-center gap-1 sm:justify-start" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-[#d4af37] text-[#d4af37]" />)}
              </div>
              <p className="mt-2 text-sm font-semibold">Rafael S.</p>
            </div>
          </div>
          <button aria-label="Próximo depoimento" className="text-[#d4af37]"><ArrowRight className="size-6" /></button>
        </div>
      </section>

      <FounderSection />

      <footer className="bg-[#0a0a0a] py-16 text-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="max-w-2xl text-balance font-serif text-3xl md:text-4xl">GARANTA AGORA A DATA DO SEU DIA DO NOIVO</h2>
              <p className="mt-3 text-neutral-400">Datas limitadas para uma experiência verdadeiramente exclusiva.</p>
            </div>
            <button onClick={() => openWhatsApp()} className="contato-whatsapp flex items-center justify-center gap-2 rounded-md bg-[#d4af37] px-10 py-4 font-bold text-[#0a0a0a] transition-colors hover:bg-[#c39e2d]">
              RESERVE SUA DATA
              <Image src="/whatsapp_float.png" alt="" width={22} height={22} className="size-[22px] object-contain" />
            </button>
          </div>
          <div className="mt-16 grid gap-6 border-t border-neutral-800 pt-8 text-sm text-neutral-400 md:grid-cols-4 md:items-center">
            <div className="flex items-center gap-3"><MapPin className="size-5 text-[#d4af37]" /><span>Rua Pamplona, 985 — Jardins, SP</span></div>
            <a href="tel:+5511949912798" className="flex items-center gap-3 hover:text-white"><Phone className="size-5 text-[#d4af37]" /><span>(11) 94991-2798</span></a>
            <a href="https://instagram.com/careformenbrasil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><Instagram className="size-5 text-[#d4af37]" /><span>@careformenbrasil</span></a>
            <p className="text-xs md:text-right">© 2026 Care For Men</p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => openWhatsApp()}
        className="contato-whatsapp fixed bottom-4 right-4 z-50 rounded-full p-1 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:bottom-6 sm:right-6"
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
    </main>
  )
}
