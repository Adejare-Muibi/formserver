'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useContext, useEffect, useState} from 'react';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';
import {LuBookOpen} from 'react-icons/lu';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {IoCloseSharp} from 'react-icons/io5';
import {AppContext} from '@/context/AppContext';
import {usePathname} from 'next/navigation';

const ResourcesProps = ({paragraph, text, icon, style, tag}) => {
	return (
		<div className={`${style} p-3 flex items-center gap-2 max-md:w-[100%]`}>
			<div className="">
				<span className="">{icon}</span>
			</div>
			<div className="flex items-start flex-col gap-1">
				<h2>{text}</h2>
				<p className="text-left opacity-50 text-sm">{paragraph}</p>
			</div>
		</div>
	);
};

const Navbar = () => {
	const pathname = usePathname();
	const {isLoggedIn} = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	const [modal, setModal] = useState(false);
	const [resources, setResources] = useState(false);
	function handlemodal() {
		setModal(!modal);
		setResources(!resources);
	}

	function handleResource() {
		setResources(!resources);
	}

	return (
		<header className="p-4">
			<div className="">
				<nav className="w-full flex md:items-center md:justify-between max-md:justify-center max-md:gap-[50px] max-md:flex-col gap-x-14">
					<div className="flex md:items-center justify-between max-md:justify-center max-md:gap-[23px] max-md:w-auto max-md:flex-col gap-x-28">
						<div className="flex max-md:w-[100%] justify-between items-center max-md:relative z-10  ">
							<Link href={'/'} className="">
								<Image
									src={'/formserver.jpg'}
									className="max-md:w-[29vw]"
									height={130}
									width={160}
									alt="logo"
									priority
								/>
							</Link>
							<span
								className="md:hidden cursor-pointer text-[23px]"
								onClick={handlemodal}
							>
								{modal ? <IoCloseSharp /> : <BsThreeDotsVertical />}
							</span>
						</div>
						<div
							className={`flex lg:items-center ${
								modal ? '' : 'max-md:hidden'
							} max-md:flex-col gap-8 max-md:gap-[12px]`}
						>
							<Link
								className="font-[600] text-[18px] hover:text-[#C02DC1]"
								href={'/'}
							>
								Plan
							</Link>
							<button
								onClick={handleOpen}
								className="font-[600] relative flex items-center gap-1 text-[18px] hover:text-[#C02DC1]"
							>
								Resources{' '}
								<span>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</span>
								{isOpen && (
									<div
										className={`absolute max-md:flex-col max-md:w-[80%] transition-all duration-300 top-10 ${
											isOpen
												? ' opacity-100 translate-y-0'
												: ' translate-y-[100px] opacity-0 overflow-hidden'
										} bg-white flex gap-3 shadow-md rounded-xl w-[500px]  h-fit`}
									>
										<div className="flex p-5 gap-4 flex-col w-1/2 max-md:w-[100%]">
											<Link href={'/library-details'}>
												<ResourcesProps
													icon={
														<LuBookOpen className="bg-[#c12dc0!important] p-2 text-4xl  text-white rounded" />
													}
													tag={'/library-details'}
													text={'Library'}
													style={'hover:bg-[#F9FAFB]'}
													paragraph={
														'A collection of example Html forms, on how to use a form'
													}
												/>
											</Link>
											<Link href={'/guide'}>
												<ResourcesProps
													icon={
														<LuBookOpen className="bg-[#c12dc0!important] p-2 text-4xl  text-white rounded" />
													}
													text={'Guide'}
													style={'hover:bg-[#F9FAFB]'}
													paragraph={'On how to use each form endpoints'}
												/>
											</Link>
										</div>
										<div className="bg-[#F9FAFB] p-5 w-1/2 max-md:w-[100%]">
											<ResourcesProps
												icon={
													<LuBookOpen className="bg-[#c12dc0!important] p-2 text-4xl  text-white rounded" />
												}
												text={'Announcement'}
												style={'bg-[#F9FAFB] hover:bg-[white]'}
												paragraph={'Get Update on Our latest news and services'}
											/>
										</div>
									</div>
								)}
							</button>
							<Link
								className="font-[600] text-[18px] hover:text-[#C02DC1]"
								href={'/'}
							>
								Blog
							</Link>
							<Link
								className="font-[600] text-[18px] hover:text-[#C02DC1]"
								href={'/help'}
							>
								Help
							</Link>
						</div>
					</div>
					<div
						className={`gap-4 ${
							modal ? '' : 'max-md:hidden'
						} flex lg:justify-end max-md:items-center lg:items-end max-md:flex-col max-md:w-auto`}
					>
						{isLoggedIn ? (
							<Link
								href={'/dashboard'}
								className="px-4 py-2 bg-[#c12dc0] flex max-md:items-center max-md:justify-center text-white rounded-sm max-md:w-[95%] text-center"
							>
								Go to Dashboard
							</Link>
						) : (
							<>
								<Link
									href={'/register'}
									className="px-4 py-2 bg-[#c12dc0] max-md:w-[95%] flex max-md:items-center max-md:justify-center text-white rounded-[5px] text-center"
								>
									Get Started
								</Link>
								<Link
									href={'/login'}
									className="px-4 py-2 bg-[#FECACA] max-md:w-[95%] flex max-md:items-center max-md:justify-center rounded-[5px] text-[#c12dc0] text-center"
								>
									Sign In
								</Link>
							</>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
