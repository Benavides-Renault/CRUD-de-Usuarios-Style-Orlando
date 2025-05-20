import './Footer.css';
import { FaReact, FaGithub } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="footer">
			<p>
				Hecho con <FaReact className="icon" /> por Orlando Renault 😎
			</p>
			<a
				href="https://github.com/Benavides-Renault"
				target="_blank"
				rel="noreferrer"
			>
				<FaGithub className="icon" /> GitHub
			</a>
		</footer>
	);
}

export default Footer;
