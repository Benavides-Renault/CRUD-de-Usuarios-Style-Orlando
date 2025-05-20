import { useState, useEffect } from 'react';
import {
	FaLaptopCode,
	FaHeart,
	FaBug,
	FaBeer,
	FaFireAlt,
} from 'react-icons/fa';
import './About.css';

function About() {
	const [party, setParty] = useState(false);

	const handlePartyMode = () => {
		const newParty = !party;
		setParty(newParty);
		document.body.classList.toggle('party-mode', newParty);

		if (newParty) {
			alert('⚠ Descargando troyanos... por favor no apagues la compu 😈');
		}
	};

	useEffect(() => {
		return () => {
			document.body.classList.remove('party-mode');
		};
	}, []);

	return (
		<div className="about">
			<h2>¿Qué carajos hace esta app?</h2>

			<p>
				<FaLaptopCode /> Esta app fue escrita con más dudas que certezas, mucho
				código, algo de café, algo de chatGPT... y una birra como dijo el profe
				de backend.
			</p>

			<p>
				<FaHeart style={{ color: 'red' }} /> Los bugs no son errores, son
				“mecánicas no documentadas”. Si todo explota, fue para enseñarte algo.
			</p>

			<p>
				<FaBug /> Cada vez que algo no funcionaba, lo solucioné reiniciando todo
				o llorando suave frente al monitor.
			</p>

			<p>
				<FaBeer /> ¿Responsivo? Sí. ¿Escalable? No. ¿Bonito? Depende de cuántas
				horas llevás sin dormir.
			</p>

			<p>
				<FaFireAlt /> Esta app no solo hace CRUD... también cura el alma del que
				programa y pierde el control de versión cada 3 minutos.
			</p>

			<p className="credit">
				Hecho por Orlando Benavides 😎 — 2025. <br />
				No me responsabilizo si se le descarga un troyano 🤣.
			</p>

			{/* 🎉 Sorpresita final */}
			<button className="party-toggle surprise" onClick={handlePartyMode}>
				🎉 Modo Fiesta (shhh... sorpresa)
			</button>
		</div>
	);
}

export default About;
