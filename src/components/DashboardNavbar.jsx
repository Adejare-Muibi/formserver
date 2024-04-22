import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';

const DashboardNavbar = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const navLinks = [
		{
			label: 'Dashboard',
			url: 'dashboard',
			isDropdown: false,
		},
		{
			label: 'Forms',
			isDropdown: true,
			dropdown: [
				{
					label: 'Create',
					url: 'create',
				},
				{
					label: 'Manage',
					url: 'manage',
				},
			],
		},
		{
			label: 'Profile',
			url: 'profile',
			isDropdown: false,
		},
		{
			label: 'Settings',
			url: 'settings',
			isDropdown: false,
		},
	];

	const first_name = 'John';
	const last_name = 'Doe';
	return (
		<section className="shadow-md">
			{showMobileNav && (
				<div
					className="fixed bg-[rgba(0,0,0,0.7)] top-0 right-0 bottom-0 left-0"
					onClick={() => setShowMobileNav(false)}
				></div>
			)}
			<nav className="flex justify-between py-10 px-5 max-w-7xl m-auto">
				<div className="">
					<Image src={'/next.svg'} height={80} width={80} alt="logo" priority />
				</div>
				<span className="md:hidden" onClick={() => setShowMobileNav(true)}>
					<i className="fas fa-bars-staggered fa-2x"></i>
				</span>
				<ul
					className={`flex flex-col md:flex-row top-0 ${
						showMobileNav ? 'right-0' : '-right-full'
					} w-[60%] pl-5 md:pl-0 pt-[50%] md:pt-0 bg-[#e5122e] md:bg-transparent gap-8 fixed h-full md:static z-10 transition-all md:transition-none duration-500`}
				>
					<i
						className="fas fa-xmark fa-2x text-white md:hidden absolute right-10 top-10"
						onClick={() => setShowMobileNav(false)}
					></i>
					{navLinks.map(navLink => (
						<NavLink key={navLink.label} navLink={navLink} />
					))}

					<div className="md:ml-auto mt-5 md:mt-0 text-white md:text-black">
						<span className="text-xl flex flex-col md:flex-row gap-5">
							<span className="mr-5 cursor-pointer">
								<i className="fas fa-user mr-2"></i>
								{`${first_name} ${last_name}`}
							</span>
							<span>
								<i className="fa-solid fa-right-from-bracket cursor-pointer mr-2"></i>
								<span className="md:hidden">Logout</span>
							</span>
						</span>
					</div>
				</ul>
			</nav>
		</section>
	);
};

export default DashboardNavbar;

const NavLink = ({navLink}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleExpand = () => {
		setIsExpanded(true);
	};

	const handleClose = () => {
		setIsExpanded(false);
	};

	return (
		<li>
			{navLink.isDropdown ? (
				isExpanded ? (
					<>
						<span
							className="cursor-pointer text-white md:text-black text-lg"
							onClick={handleClose}
						>
							{navLink.label} <i className="fas fa-chevron-up"></i>
						</span>
						<ul className="ml-5 md:-ml-5 mt-3 md:mt-8  flex flex-col gap-y-3 md:absolute md:bg-white md:px-10 md:py-2 md:shadow-md">
							{navLink.dropdown.map(drop => (
								<li key={drop.label}>
									<Link
										href={drop.url}
										className="text-white md:text-black text-lg"
									>
										{drop.label}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<span
						className="cursor-pointer text-white md:text-black text-lg"
						onClick={handleExpand}
					>
						{navLink.label} <i className="fas fa-chevron-down"></i>
					</span>
				)
			) : (
				<Link href={navLink.url} className="text-white md:text-black text-lg">
					{navLink.label}
				</Link>
			)}
		</li>
	);
};
