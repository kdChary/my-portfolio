import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero';

const App = () => {
  return (
		<div>
			<section id="HomePage">
				<Navbar />
				<Hero />
			</section>
			<section id="About">Portfolio</section>
			<section id="Skills">Skills</section>
			<section id="Projects">projects</section>
			<section id="Contact">contact</section>
		</div>
	);
}

export default App