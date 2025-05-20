import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Layout.css';
import Footer from '../components/Footer';

function Layout() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<Navbar />
			<div key={location.pathname} className="fade-layout">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default Layout;
