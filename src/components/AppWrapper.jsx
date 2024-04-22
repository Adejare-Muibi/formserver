'use client';
import {usePathname} from 'next/navigation';
import React from 'react';
import Navbar from '../components/landing-page/Navbar';
import DashboardNavbar from '../components/DashboardNavbar';
import {ToastContainer} from 'react-toastify';

const AppWrapper = ({children}) => {
	const pathname = usePathname();

	const isLoggedIn = true;
	return (
		<section>
			{isLoggedIn ? (
				<DashboardNavbar />
			) : pathname === '/login' || pathname === '/register' ? (
				''
			) : (
				<Navbar />
			)}
			<div>{children}</div>
			<ToastContainer />
		</section>
	);
};

export default AppWrapper;
