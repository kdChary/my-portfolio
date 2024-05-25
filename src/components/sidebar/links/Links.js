import React from 'react';
import { motion } from 'framer-motion';

const lists = ['HomePage', 'About', 'Skills', 'Projects', 'Contact'];
const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggeredDirection: -1,
		},
	},
};
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};
const Links = () => {
	return (
		<motion.div className="menu-links" variants={variants}>
			{lists.map((item) => (
				<motion.a
					href={`#${item}`}
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}>
					{item}
				</motion.a>
			))}
		</motion.div>
	);
};

export default Links;
