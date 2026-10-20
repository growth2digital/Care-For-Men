import Image from "next/image"

export function FounderSection() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">
              ANDRÉ ALVES
            </h2>
            <p className="mt-3 text-sm md:text-base uppercase tracking-[0.25em] text-[var(--gold-primary)]">
              Fundador da Care For Men
            </p>

            <div className="mt-8 space-y-5 text-gray-400 leading-relaxed text-base md:text-lg max-w-xl">
              <p>
                Sou farmacêutico e construí minha trajetória profissional em multinacionais da indústria
                farmacêutica, em ambientes onde qualidade, padronização, rigor e atenção aos detalhes são
                essenciais.
              </p>
              <p>
                Levei essa mesma visão para a Care For Men: um ecossistema de cuidados masculinos que reúne
                barbearia, visagismo, tratamentos capilares, depilação, estética e massagens em um único lugar,
                com excelência e padrão premium em cada atendimento.
              </p>
            </div>
          </div>

          {/* Foto */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-gold-thin">
              <Image
                src="/fundador-andre-alves.jpg"
                alt="André Alves"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}