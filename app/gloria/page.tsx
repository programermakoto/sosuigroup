import React from 'react'
import Hero from '../component/Hero'
import GloriaHero from './components/GloriaHero'
import AboutSection from './components/AboutSection'
import LuxuryMap from './components/LuxuryMap'

export default function page() {
  return (
    <div>
      <GloriaHero />
      <AboutSection />
      <LuxuryMap />
    </div>
  )
}
