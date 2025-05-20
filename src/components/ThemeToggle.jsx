import { useEffect, useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		const stored = localStorage.getItem('theme') || 'dark';
		setTheme(stored);
		document.body.classList.toggle('light', stored === 'light');
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		document.body.classList.toggle('light', newTheme === 'light');
		localStorage.setItem('theme', newTheme);
	};

	return (
		<button className="theme-toggle" onClick={toggleTheme}>
			{theme === 'dark' ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
		</button>
	);
}

export default ThemeToggle;
