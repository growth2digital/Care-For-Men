import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@/components/analytics"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Care For Men SP - Barbearia de Alto Padrão | São Paulo",
  description:
    "Conheça a Care For Men nos Jardins, SP. Barbearia premium, massagens, estética e terapias capilares em um ambiente sofisticado. Agende seu atendimento!",
  keywords: [
    "barbearia masculina",
    "barbearia premium",
    "depilação masculina",
    "massagem masculina",
    "barbearia São Paulo",
    "Alto do Ipiranga",
    "atendimento privativo",
    "cuidados masculinos",
    "estética masculina",
    "barbearia discreta",
  ],
  authors: [{ name: "Care For Men SP" }],
  creator: "Care For Men SP",
  publisher: "Care For Men SP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://careformen.sp.com.br",
    siteName: "Care For Men SP",
    title: "Care For Men SP - Barbearia de Alto Padrão",
    description:
      "Barbearia masculina especializada em atendimento privativo e discreto. Corte de cabelo, depilação, massagens e tratamentos estéticos para homens em São Paulo.",
    images: [
      {
        url: "/logo-round.png",
        width: 1200,
        height: 630,
        alt: "Care For Men SP - Barbearia de Alto Padrão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Care For Men SP - Barbearia de Alto Padrão",
    description:
      "Barbearia masculina especializada em atendimento privativo e discreto. Agendamento exclusivo em São Paulo.",
    images: ["/logo-round.png"],
    creator: "@careformen.sp",
  },
  verification: {
    google: "google-site-verification-code", // Substitua pelo seu código de verificação do Google
  },
  alternates: {
    canonical: "https://careformen.sp.com.br", // Substitua pela URL canônica do seu site
  },
  category: "Beleza e Estética",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GTM_ID = "GTM-TCFQ4ZKN"

  return (
    <html lang="pt-BR" className={`${inter.className} ${playfair.variable} dark`}>
      <head>
        {/* Preconnect para origens de terceiros */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload hero image for better LCP */}
        <link rel="preload" as="image" href="/hero-barbearia.jpg" fetchPriority="high" />
        
        <link rel="icon" href="/logo-round.png" type="image/png" />
        <link rel="icon" href="/logo-round.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-round.png" />
        <meta name="theme-color" content="#E07A5F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        {/* Meta Pixel (noscript fallback) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=874626572118084&ev=PageView&noscript=1" />`,
          }}
        />

        {children}

        {/* Analytics - GTM, Meta Pixel, Google Ads */}
        <Analytics />
      </body>
    </html>
  )
}
