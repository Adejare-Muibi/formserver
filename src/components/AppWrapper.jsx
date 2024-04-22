'use client';
import {usePathname, useRouter} from 'next/navigation';
import React, {useContext, useState} from 'react';
import Navbar from '../components/landing-page/Navbar';
import DashboardNavbar from '../components/DashboardNavbar';
import {ToastContainer} from 'react-toastify';
import {AppContext} from '@/context/AppContext';

const AppWrapper = ({children, isLoading}) => {
	const pathname = usePathname();
	const {isLoggedIn} = useContext(AppContext);

	return (
		<section>
			{!isLoading &&
				(isLoggedIn ? (
					<DashboardNavbar />
				) : pathname === '/login' || pathname === '/register' ? (
					''
				) : (
					<Navbar />
				))}
			<div>{children}</div>
			<ToastContainer />
		</section>
	);
};

export default AppWrapper;
