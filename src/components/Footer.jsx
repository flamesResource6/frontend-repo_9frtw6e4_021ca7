import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
        <div className="text-left">
          <div className="text-slate-900 tracking-widest text-sm uppercase">UBQARI</div>
          <p className="mt-2 text-slate-600">Newsletter — Quietly delivered.</p>
        </div>
        <form className="flex items-center gap-3">
          <input type="email" placeholder="Your email" className="w-full sm:w-auto flex-1 rounded-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/20" />
          <button type="submit" className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition">Subscribe</button>
        </form>
        <div className="text-right text-slate-500">
          <p>Contact • Journal • Instagram</p>
        </div>
      </div>
      <div className="py-6 text-center text-slate-400 text-sm">© {new Date().getFullYear()} UBQARI — All rights reserved.</div>
    </footer>
  )
}

export default Footer
