import React from 'react';
import { motion } from 'framer-motion';

import './index.css';

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			whileInView="animate">
			<motion.div
				className="services-text-container"
				variants={variants}
				initial="initial"
				animate="animate">
				<motion.p>
					I focus on helping your brand grow
					<br /> and move forward
				</motion.p>
				<motion.hr />
			</motion.div>

			<motion.div
				className="services-title"
				variants={variants}
				initial="initial"
				animate="animate">
				<div className="title">
					<img src="images/people.webp" alt="title" />
					<h1>
						<b>Unique</b> Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						My<b>Projects</b>
					</h1>
					<button> View Projects</button>
				</div>
			</motion.div>

			<motion.ul
				className="services-list"
				variants={variants}
				initial="initial"
				animate="animate">
				<motion.li
					className="box"
					whileHover={{ background: 'lightgrey', color: 'black' }}>
					<h2>Skill</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						mollitia quaerat itaque, saepe quae nesciunt autem iure natus
						voluptates id eum aspernatur aperiam tenetur accusamus minus libero
						eos vitae sint!
					</p>
				</motion.li>
				<motion.li
					className="box"
					whileHover={{ background: 'lightgrey', color: 'black' }}>
					<h2>Skill</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						mollitia quaerat itaque, saepe quae nesciunt autem iure natus
						voluptates id eum aspernatur aperiam tenetur accusamus minus libero
						eos vitae sint!
					</p>
				</motion.li>
				<motion.li
					className="box"
					whileHover={{ background: 'lightgrey', color: 'black' }}>
					<h2>Skill</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						mollitia quaerat itaque, saepe quae nesciunt autem iure natus
						voluptates id eum aspernatur aperiam tenetur accusamus minus libero
						eos vitae sint!
					</p>
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

export default Services;