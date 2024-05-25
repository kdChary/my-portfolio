import React from 'react'
import './App.css'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="HomePage">HomePage</section>
      <section id="About">Portfolio</section>
      <section id="Skills">Skills</section>
      <section id="Projects">projects</section>
      <section id="Contact">contact</section>
    </div>
  )
}

export default App