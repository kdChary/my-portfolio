import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const skills = [
	{
		skill: 'HTML',
		img: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
	},
	{
		skill: 'CSS',
		img: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
	},
	{
		skill: 'JavaScript',
		img: 'https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000',
	},
	{
		skill: 'Bootstrap',
		img: 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000',
	},
	{
		skill: 'Python',
		img: 'https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000',
	},
	{
		skill: 'C',
		img: 'https://img.icons8.com/?size=100&id=40670&format=png&color=000000',
	},
	{
		skill: 'Node.Js',
		img: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000',
	},
	{
		skill: 'React',
		img: 'https://img.icons8.com/?size=100&id=t5K2CR8feVdX&format=png&color=000000',
	},
	{
		skill: 'Express',
		img: 'https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000',
	},
	{
		skill: 'SQLite',
		img: 'https://w7.pngwing.com/pngs/1010/539/png-transparent-sqlite-logo-thumbnail-tech-companies.png',
	},
	{
		skill: '*MongoDB',
		img: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000',
	},
	{
		skill: '*MaterialUI',
		img: 'https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo-thumbnail.png',
	},
	{
		skill: 'React Hooks',
		img: 'https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png',
	},
	{
		skill: '*Redux',
		img: 'https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text.png',
	},
];

const SkillItem = ({skill}) => (
	<motion.li className='skill-item'
	whileHover={{ background: 'lightgrey', color: 'black' }}
	>
		<div className="skill-img">
			<img src={skill.img} alt={skill.skill} />
		</div>
		<h3 className="skill">
			{skill.skill}
		</h3>
	</motion.li>
)

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-50px' });

	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			// whileInView="animate"
			ref={ref}
			animate={isInView && 'animate'}>
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
					<img src="images/skills.jpg" alt="title" />
					<h1>
						My <motion.b whileHover={{ color: 'orange' }}>Skills</motion.b>
					</h1>
				</div>
				<div className="title">
					<h1>
						My<motion.b whileHover={{ color: 'orange' }}>Projects</motion.b>
					</h1>
					<button> View Projects</button>
				</div>
			</motion.div>

			<motion.ul
				className="services-list"
				variants={variants}
				initial="initial"
				animate="animate">
					{skills.map(skill => <SkillItem key={skill.skill} skill={skill} />)}

			</motion.ul>
		</motion.div>
	);
};

export default Services;
