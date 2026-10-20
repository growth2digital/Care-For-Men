'use client'

import { useEffect } from 'react'

export default function QuimicaCapilarPage() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('#quimica-capilar-lp a[href^="#"]')
    const handleClick = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement
      const target = document.querySelector(link.getAttribute('href') || '')
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    links.forEach((link) => link.addEventListener('click', handleClick))
    return () => links.forEach((link) => link.removeEventListener('click', handleClick))
  }, [])

  return (
    <main id="quimica-capilar-lp" className="fixed inset-0 overflow-hidden bg-black">
      <iframe
        title="Care For Men — Química Capilar Masculina"
        src="/quimica-capilar/index.html"
        className="absolute inset-0 block h-[100dvh] w-full border-0"
        style={{ height: '100dvh' }}
      />
    </main>
  )
}
