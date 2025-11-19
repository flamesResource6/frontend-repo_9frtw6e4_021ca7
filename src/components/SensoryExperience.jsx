import React from 'react'
import { motion } from 'framer-motion'

const phases = [
  { name: 'Opening', text: 'A clean, lucid ascent. Bright notes lift—air, light, intention.' },
  { name: 'Heart', text: 'Texture emerges. The composition finds cadence and warmth.' },
  { name: 'Drydown', text: 'Quiet depth remains. A resonant finish close to the skin.' }
]

const SensoryExperience = () => {
  return (
    <section className="relative bg-black text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(80%_60%_at_50%_20%,#7c7cf9,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">The Sensory Arc</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="h-40 rounded-lg bg-gradient-to-br from-white/10 to-white/0 mb-4" />
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="mt-2 text-white/80">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SensoryExperience
