import {AppContext} from '@/context/AppContext';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import React, {FC, useContext, useEffect, useState} from 'react';

interface NavLinkType {
	label: string;
	url: string;
	isDropdown: boolean;
	dropdown?: {
		label: string;
		url: string;
	}[];
}

const DashboardNavbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const {setIsLoggedIn, setIsLoading, user, setUser, setForms, setContact} =
		useContext(AppContext);
	const [showMobileNav, setShowMobileNav] = useState(false);

	const navLinks: NavLinkType[] = [
		{
			label: 'Dashboard',
			url: '/dashboard',
			isDropdown: false,
		},
		{
			label: 'Form',
			url: 'form',
			isDropdown: true,
			dropdown: [
				{
					label: 'Create',
					url: '/form/create',
				},
				{
					label: 'Manage',
					url: '/form/manage',
				},
			],
		},
		{
			label: 'Contact Management',
			url: '/contact',
			isDropdown: false,
		},
		{
			label: 'Settings',
			url: '/settings',
			isDropdown: false,
		},
	];

	const first_name = user?.first_name;
	const last_name = user?.last_name;
	const isVerified = user.isVerified;

	useEffect(() => {
		setShowMobileNav(false);
	}, [pathname]);

	const handleLogout = () => {
		setIsLoading(true);
		router.push('/login');
		localStorage.removeItem('_tkn');
		setIsLoggedIn(false);
		setUser({
			first_name: '',
			last_name: '',
			email: '',
			isVerified: true,
			plan: 'basic',
		});
		setForms([]);
		setContact([]);
		setIsLoading(false);
	};

	return (
		<>
			<section className="shadow-md">
				{showMobileNav && (
					<div
						className="fixed bg-[rgba(0,0,0,0.7)] top-0 right-0 bottom-0 left-0 z-10"
						onClick={() => setShowMobileNav(false)}
					></div>
				)}
				<nav className="flex justify-between items-center gap-x-48 py-5 lg:py-10 px-5 max-w-7xl m-auto">
					<div className="">
						<Image
							src={'/formserver.jpg'}
							height={80}
							width={80}
							alt="logo"
							priority
						/>
					</div>
					<span className="lg:hidden" onClick={() => setShowMobileNav(true)}>
						<i className="fas fa-bars-staggered fa-2x"></i>
					</span>
					<ul
						className={`flex flex-col lg:flex-row lg:flex-1 lg:justify-center top-0 ${
							showMobileNav ? 'right-0' : '-right-full'
						} w-[60%] pl-5 lg:pl-0 pt-[50%] lg:pt-0 bg-[#c02dc1] lg:bg-transparent gap-8 fixed h-full lg:static z-20 transition-all lg:transition-none duration-500`}
					>
						<span className="lg:hidden">
							<i
								className="fa-solid fa-xmark fa-2x text-white absolute right-10 top-10"
								onClick={() => setShowMobileNav(false)}
							></i>
						</span>
						{navLinks.map(navLink => (
							<NavLink key={navLink.label} navLink={navLink} />
						))}

						<div className="lg:ml-auto lg:pl-12 mt-5 lg:mt-0 text-white lg:text-black">
							<span className="text-xl flex flex-col lg:flex-row gap-y-8 lg:gap-x-3 text-nowrap">
								<span
									className="mr-5 cursor-pointer"
									onClick={() => router.push('/profile')}
								>
									<i className="fas fa-user mr-2"></i>
									{`${first_name} ${last_name}`}
								</span>
								<span onClick={handleLogout}>
									<i className="fa-solid fa-right-from-bracket cursor-pointer mr-2"></i>
									<span className="lg:hidden">Logout</span>
								</span>
							</span>
						</div>
					</ul>
				</nav>
			</section>

			{!isVerified && (
				<span className="text-center inline-block w-full px-5 py-2 bg-red-500 text-white cursor-text">
					You need to verify your email to create a form, verify now
				</span>
			)}
		</>
	);
};

export default DashboardNavbar;

const NavLink: FC<{navLink: NavLinkType}> = ({navLink}) => {
	const pathname = usePathname();
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		setIsExpanded(false);
	}, [pathname]);

	const handleExpand = () => {
		setIsExpanded(true);
	};

	const handleClose = () => {
		setIsExpanded(false);
	};

	return (
		<li className="text-nowrap">
			{navLink.isDropdown ? (
				isExpanded ? (
					<>
						<span
							className={`${
								pathname.split('/')[1] === navLink.url
									? 'lg:text-[#c02dc1] font-bold'
									: 'lg:text-black'
							} text-lg text-white cursor-pointer`}
							onClick={handleClose}
						>
							{navLink.label} <i className="fas fa-chevron-up"></i>
						</span>
						<ul className="ml-5 lg:-ml-5 mt-3 lg:mt-8 flex flex-col gap-y-3 lg:absolute lg:bg-white lg:px-10 lg:py-2 lg:shadow-md">
							{navLink?.dropdown?.map(drop => (
								<li key={drop.label}>
									<Link
										href={drop.url}
										className={`${
											pathname === drop.url
												? 'lg:text-[#c02dc1] font-bold'
												: 'lg:text-black'
										} text-white text-lg`}
									>
										{drop.label}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<span
						className={`${
							pathname.split('/')[1] === navLink.url
								? 'lg:text-[#c02dc1] font-bold'
								: 'lg:text-black'
						} text-lg text-white cursor-pointer`}
						onClick={handleExpand}
					>
						{navLink.label} <i className="fas fa-chevron-down"></i>
					</span>
				)
			) : (
				<Link
					href={navLink.url}
					className={`${
						pathname === navLink.url
							? 'lg:text-[#c02dc1] font-bold'
							: 'lg:text-black'
					} text-white text-lg`}
				>
					{navLink.label}
				</Link>
			)}
		</li>
	);
};
