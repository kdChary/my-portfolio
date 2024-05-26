import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero';
import Parallax from './components/parallax';
import Services from './components/myServices';
import Projects from './components/projects';
import Contacts from './components/contacts';

const App = () => {
	return (
		<main>
			<section id="HomePage">
				<Navbar />
				<Hero />
			</section>

			<section id="Skills">
				<Parallax type="Skills" />
			</section>

			<section>
				<Services />
			</section>

			<section id="About">About</section>

			<section id="Projects">
				<Parallax type="Projects" />
			</section>
			<Projects />
			<Contacts id="Contact" />
		</main>
	);
};

export default App