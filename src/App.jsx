import React from 'react'
import Hero from './components/Hero'
import BrandPhilosophy from './components/BrandPhilosophy'
import SignatureCollection from './components/SignatureCollection'
import IngredientsArtistry from './components/IngredientsArtistry'
import SensoryExperience from './components/SensoryExperience'
import EditorialGallery from './components/EditorialGallery'
import DiscoveryQuizCTA from './components/DiscoveryQuizCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Hero />
      <BrandPhilosophy />
      <SignatureCollection />
      <IngredientsArtistry />
      <SensoryExperience />
      <EditorialGallery />
      <DiscoveryQuizCTA />
      <Footer />
    </div>
  )
}

export default App
