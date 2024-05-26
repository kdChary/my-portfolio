import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import './index.css';

const bg1 = 'linear-gradient(180deg, #111132, #0c0c1d)';
const bg2 = 'linear-gradient(180deg, #111132, #505064)';

const Parallax = ({ type }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
	const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const sun = 'images/sun.png';
	const planets = 'images/planets.png';

	return (
		<div
			ref={ref}
			className="parallax"
			style={{ background: type === 'Skills' ? bg1 : bg2 }}>
			<motion.h1 style={{ y: yText }}>
				{type === 'Skills' ? 'What I Learned ?' : 'What I Did'}{' '}
			</motion.h1>
			<motion.div className="mountains"></motion.div>
			<motion.div
				style={{
					y: yBg,
					backgroundImage: `url(${type === 'Skills' ? sun : planets})`,
				}}
				className="planets"></motion.div>
			<motion.div style={{ x: yBg }} className="stars"></motion.div>
		</div>
	);
};

export default Parallax;
