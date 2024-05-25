import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

import './index.css';
import Sidebar from '../sidebar';
const iconSize = { height: 30, width: 30 };

const Navbar = () => {
	return (
		<header className="navbar">
			{/* sidebar */}
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}>
					Siva_Dinesh
				</motion.span>
				<ul className="social">
					<li href="#">
						<SocialIcon url="www.mail.google.com" style={iconSize} />
					</li>

					<li href="#">
						<SocialIcon url="www.linkedin.com" style={iconSize} />
					</li>

					<li href="#">
						<SocialIcon url="www.github.com" style={iconSize} />
					</li>

					<li href="#">
						<SocialIcon url="www.instagram.com" style={iconSize} />
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
