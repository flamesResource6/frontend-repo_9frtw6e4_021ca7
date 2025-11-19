import React from 'react'
import { motion } from 'framer-motion'

const DiscoveryQuizCTA = () => {
  return (
    <section className="relative bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Find Your Scent</h2>
        <p className="mt-4 text-slate-700 max-w-2xl mx-auto">Answer a few questions and we’ll suggest the composition that resonates most with your pace, space, and presence.</p>
        <div className="mt-8 inline-flex items-center gap-4">
          <a href="#" className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition">Start the Quiz</a>
          <a href="#" className="px-6 py-3 rounded-full border border-slate-300 text-slate-900 hover:bg-white transition">Explore the Collection</a>
        </div>
      </div>
    </section>
  )
}

export default DiscoveryQuizCTA
