import React from 'react'
import { motion } from 'framer-motion'

const images = new Array(8).fill(0)

const EditorialGallery = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Editorial Gallery</h2>
          <p className="text-slate-600">A moodboard of our quiet world</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.06 }} className="aspect-[3/4] rounded-xl bg-gradient-to-br from-slate-100 to-white border border-slate-200" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EditorialGallery
