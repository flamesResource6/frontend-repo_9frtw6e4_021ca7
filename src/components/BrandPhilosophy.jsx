import React from 'react'
import { motion } from 'framer-motion'

const copy = `Silence is our first material. In the quiet, intent sharpens and forms emerge. We design fragrances the way architects draw light—subtracting until only the essential remains. Each composition is a study in restraint, a patient choreography of raw materials shaped into presence.\n\nUBQARI is neither trend nor noise; it is a language of poise. Notes unfold with the calm precision of breath—opening, deepening, lingering—until they settle into memory. Our bottles are vessels, our scents are gestures, and together they suggest a way of being: deliberate, grounded, unmistakably human.\n\nThis is perfume as practice. Art as attention. Minimal not as lack, but as clarity. What stays with you is not volume, but resonance.`

const BrandPhilosophy = () => {
  return (
    <section className="relative bg-white text-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          A Practice in Restraint
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 text-lg leading-relaxed text-slate-700 whitespace-pre-line">
          {copy}
        </motion.p>
      </div>
    </section>
  )
}

export default BrandPhilosophy
