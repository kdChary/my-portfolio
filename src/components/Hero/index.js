import React from 'react';
import { motion } from 'framer-motion';

import './index.css';

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};
const sliderVariant = {
	initial: {
		x: 0,
	},
	animate: {
		x: '-190%',
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 20,
		},
	},
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="text-container"
					variants={textVariants}
					initial="initial"
					animate="animate">
					<motion.h2 variants={textVariants}>Siva Dinesh</motion.h2>
					<motion.h1 variants={textVariants}>
						Full-Stack Web Developer
					</motion.h1>
					<motion.div className="hero-btns" variants={textVariants}>
						<motion.button className="my-projects-btn" variants={textVariants}>
							See my Works
						</motion.button>
						<motion.button className="my-contact-btn" variants={textVariants}>
							Contact Me
						</motion.button>
					</motion.div>
					<motion.img
						src="images/scroll.png"
						alt="scroll"
						className="scroll-img"
						variants={textVariants}
						animate="scrollButton"
					/>
				</motion.div>
				<motion.div
					className="sliding-text"
					variants={sliderVariant}
					initial="initial"
					animate="animate">
					Developer Creator Influencer
				</motion.div>
				<div className="image-container">
					<img src="images/hero.png" alt="profile" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
