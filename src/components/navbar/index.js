import React from 'react';
import { motion } from 'framer-motion';

import './index.css';
import Sidebar from '../sidebar';

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
					<li>
						<img
							src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
							alt="gmail"
							className="social-icon"
						/>
					</li>

					<li>
						<img
							src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
							alt="twitter"
							className="social-icon"
						/>
					</li>

					<li>
						<img
							src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
							alt="instagram"
							className="social-icon"
						/>
					</li>

					<li>
						<img
							src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
							alt="linkedin"
							className="social-icon"
						/>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
