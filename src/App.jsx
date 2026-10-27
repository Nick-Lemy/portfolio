import './App.css'
import { Nav } from './components/Nav'
import { useReveal } from './components/useReveal'
import { Hero } from './sections/Hero'
import { Who } from './sections/Who'
import { WhatIDo } from './sections/WhatIDo'
import { Made } from './sections/Made'
import { Hello } from './sections/Hello'
import { Footer } from './sections/Footer'
import { BazaChat } from './components/BazaChat'

function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Who />
        <WhatIDo />
        <Made />
        <Hello />
      </main>
      <BazaChat/>
      <Footer />
    </>
  )
}

export default App
