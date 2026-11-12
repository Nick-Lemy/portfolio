import './App.css'
import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Who } from './sections/Who'
import { WhatIDo, Skills } from './sections/WhatIDo'
import { Made } from './sections/Made'
import { Hello } from './sections/Hello'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Who />
        <WhatIDo />
        <Made />
        <Skills />
        <Hello />
      </main>
      <Footer />
    </>
  )
}

export default App
