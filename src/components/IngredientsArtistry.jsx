import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Raw Integrity', text: 'We work with materials for their character, not their volume—each chosen for texture, clarity, and persistence.' },
  { title: 'Sourcing with Intent', text: 'Long-term partnerships ensure ethical traceability and quality that is felt, not flaunted.' },
  { title: 'Craft as Discipline', text: 'Every formula is tuned like a composition—edited until it breathes with quiet precision.' },
  { title: 'Time as Ingredient', text: 'We give blends time to settle into themselves, allowing resonance to outlast the opening act.' }
]

const IngredientsArtistry = () => {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Ingredients & Artistry</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-slate-100 to-white mb-4" />
              <h3 className="text-lg font-medium text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-700">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IngredientsArtistry
