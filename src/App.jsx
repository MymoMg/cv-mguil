import { useState } from 'react'
import Navbar from './components/custom/Navbar/Navbar'
import Hero from './components/custom/Hero/Hero'
import Timeline from './components/custom/Timeline/Timeline'

import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Timeline/>
    </>
  )
}

export default App
