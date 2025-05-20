import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';
import { FaCode } from 'react-icons/fa';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [party, setParty] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	const handlePartyMode = () => {
		const newPartyMode = !party;
		setParty(newPartyMode);
		document.body.classList.toggle('party-mode', newPartyMode);

		if (newPartyMode) {
			alert(
				'⚠ Descargando virus o troyanos... por favor no apagues la compu 😈',
			);
		}
	};

	return (
		<nav className="navbar">
			<h2 className="logo">
				<FaCode style={{ marginRight: '8px' }} />
				Orlando Renault 😎
			</h2>

			<button className="hamburger" onClick={toggleMenu}>
				☰
			</button>

			<ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
				<li>
					<NavLink
						to="/"
						end
						className={({ isActive }) => (isActive ? 'active' : '')}
						onClick={closeMenu}
					>
						🏠 Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? 'active' : '')}
						onClick={closeMenu}
					>
						📄 About
					</NavLink>
				</li>
			</ul>

			<div className="toggle-wrapper">
				<ThemeToggle />
			</div>
		</nav>
	);
}

export default Navbar;
