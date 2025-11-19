import React from 'react'
import { motion } from 'framer-motion'

const fragrances = [
  {
    name: 'No. 01 — Still',
    notes: 'Iris, Ambrette, White Musk',
    story: 'A portrait of quiet mornings. Soft light across stone. A hush that blooms into warmth.'
  },
  {
    name: 'No. 02 — Veil',
    notes: 'Black Tea, Cedar, Cashmere Wood',
    story: 'Shadow and silk. A low hum of memory that lingers on the skin like dusk.'
  },
  {
    name: 'No. 03 — Pith',
    notes: 'Bergamot, Neroli, Vetiver',
    story: 'A clean incision of brightness. Green, tactile, impeccably honest.'
  },
  {
    name: 'No. 04 — Loom',
    notes: 'Saffron, Suede, Labdanum',
    story: 'Threads of heat woven into depth. A slow-burn confidence, refined and magnetic.'
  }
]

const Card = ({ item, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.06 }}
    className="group relative rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden"
  >
    <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-white" />
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-slate-900">{item.name}</h3>
        <span className="text-xs uppercase tracking-wider text-slate-500">Eau de Parfum</span>
      </div>
      <p className="mt-2 text-slate-600">{item.notes}</p>
      <p className="mt-4 text-slate-700/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.story}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-slate-900 hover:opacity-70 transition">
        Discover
        <span aria-hidden>→</span>
      </button>
    </div>
  </motion.div>
)

const SignatureCollection = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Signature Collection</h2>
          <button className="text-slate-600 hover:text-slate-900 transition">Shop All</button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fragrances.map((f, i) => <Card key={f.name} item={f} i={i} />)}
        </div>
      </div>
    </section>
  )
}

export default SignatureCollection
