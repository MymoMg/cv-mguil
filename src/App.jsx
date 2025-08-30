import { useState } from 'react'
import Navbar from './components/custom/Navbar/Navbar'
import Hero from './components/custom/Hero/Hero'
import Timeline from './components/custom/Timeline/Timeline'
import ExperiencesSection from './components/custom/ExperiencesSection/ExperiencesSection'
import DevSkills from './components/custom/DevSkills/DevSkills'
import Footer from './components/custom/Footer/Footer'

import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero id="home"/>
      <Timeline id="diplomes"/>
      <ExperiencesSection id="experiences"/>
      <DevSkills id="competences"/>
      <Footer/>
    </>
  )
}

export default App
