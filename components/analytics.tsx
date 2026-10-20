"use client"

import { useEffect } from "react"

const GTM_ID = "GTM-TCFQ4ZKN"
const META_PIXEL_ID = "874626572118084"
const GOOGLE_ADS_ID = "AW-16976398170"

export function Analytics() {
  useEffect(() => {
    // Google Tag Manager
    const loadGTM = () => {
      const script = document.createElement("script")
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `
      document.head.appendChild(script)
    }

    // Meta Pixel
    const loadMetaPixel = () => {
      const script = document.createElement("script")
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `
      document.head.appendChild(script)
    }

    // Google Ads
    const loadGoogleAds = () => {
      const gtagScript = document.createElement("script")
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`
      gtagScript.async = true
      document.head.appendChild(gtagScript)

      const configScript = document.createElement("script")
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ADS_ID}');
      `
      document.head.appendChild(configScript)
    }

    // Structured Data (JSON-LD)
    const loadJsonLd = () => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Care For Men SP",
        description: "Barbearia masculina especializada em atendimento privativo e discreto",
        url: "https://lp.careformen.com.br",
        telephone: "+5511979641006",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Conde Vicente de Azevedo, 203",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "04264-000",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -23.5994,
          longitude: -46.6,
        },
        openingHours: "Mo-Su 10:00-23:00",
        priceRange: "$$",
        image: "/logo-round.png",
        logo: "/logo-round.png",
        sameAs: ["https://www.instagram.com/careformen.sp/"],
        serviceType: [
          "Corte de Cabelo Masculino",
          "Depilação Masculina",
          "Massagem Relaxante",
          "Tratamentos Estéticos Masculinos",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          reviewCount: "138",
        },
      })
      document.head.appendChild(script)
    }

    // Load all analytics
    loadGTM()
    loadMetaPixel()
    loadGoogleAds()
    loadJsonLd()
  }, [])

  return null
}
