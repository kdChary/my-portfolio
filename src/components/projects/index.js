import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import './index.css';

const items = [
	{
		id: 1,
		title: 'project1',
		img: 'https://images.pexels.com/photos/23698636/pexels-photo-23698636/free-photo-of-a-room-with-pictures-on-the-wall-and-tables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at obcaecati in voluptas illo est accusamus, maiores',
	},
	{
		id: 2,
		title: 'project2',
		img: 'https://images.pexels.com/photos/17131209/pexels-photo-17131209/free-photo-of-close-up-of-cherry-blossom-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at obcaecati in voluptas illo est accusamus, maiores',
	},
	{
		id: 3,
		title: 'project3',
		img: 'https://images.pexels.com/photos/24355979/pexels-photo-24355979/free-photo-of-porto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at obcaecati in voluptas illo est accusamus, maiores',
	},
	{
		id: 4,
		title: 'project4',
		img: 'https://images.pexels.com/photos/14547334/pexels-photo-14547334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at obcaecati in voluptas illo est accusamus, maiores',
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const Y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

	return (
		<section>
			<div className="project-card">
				<div className="project-details">
					<div className="project-img" ref={ref}>
						<img src={item.img} alt={item.title} />
					</div>
					<motion.div className="project-text" style={{ y: Y }}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<button>Visit</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Projects = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

	return (
		<div className="projects-page" ref={ref}>
			<div className="progress">
				<h1>My Project Works</h1>
				<motion.div className="progress-bar" style={{ scaleX }}></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Projects;
