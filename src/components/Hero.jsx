import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

const Header = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 12))
  }, [scrollY])

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/5 border-b border-white/10' : 'bg-transparent'} `}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="text-white tracking-widest text-sm uppercase">UBQARI</div>
        <button className="text-white/70 hover:text-white transition">Menu</button>
      </div>
    </div>
  )
}

const Hero = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#e9e5ff]">
      <Header />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#e9e5ff] via-transparent to-[#e9e5ff] opacity-60" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.12)' }} />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-slate-900">
            The Fragrance of Quiet Power
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="mt-6 text-slate-700 max-w-2xl mx-auto">
            Minimal by design. Maximal in feeling. Crafted for those who speak softly and are felt deeply.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <div className="flex flex-col items-center text-slate-900/70">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="mt-2 h-10 w-px bg-slate-900/40 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
