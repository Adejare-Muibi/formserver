'use client';
import {AppContext} from '@/context/AppContext';
import {registerUser} from '@/utils/apiCalls';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {useContext, useState} from 'react';
import {toast} from 'react-toastify';

const Register = () => {
	const router = useRouter();
	const {setIsLoading} = useContext(AppContext);
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
	});
	const handleInputChange = (e: any) => {
		const {value, name} = e.target;

		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async () => {
		try {
			setIsLoading(true);
			const response = await registerUser(formData);

			const {status, data, message} = response;
			if (status >= 400) throw new Error(message);
			if (status === 200) {
				const {token} = data;
				localStorage.setItem('_tkn', token);
				toast.success(
					'User account successfully created please check your email to verify your account'
				);
				router.push('/dashboard');
			} else {
				throw new Error(response.message);
			}
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex items-center max-md:items-start justify-center w-full h-screen gap-[50px] max-md:w-[90%] max-md:m-auto max-md:py-[20px] max-md:h-auto">
			<div className="w-full max-w-[500px] max-md:w-[100%] flex flex-col max-mditems-center">
				<h2></h2>
				<h1 className="font-[800] max-md:text-[25px] max-md: text-3xl">
					Register for Formspree
				</h1>
				<Link className="text-[#DC2626]" href={'/register'}></Link>

				<form className="w-full flex flex-col gap-2 mt-5 max-md:">
					<div className="flex gap-[40px] max-md:flex-col max-md:gap-[4px]">
						<div className="max-md:flex flex-col">
							<label htmlFor="">First Name*</label>
							<input
								value={formData.first_name}
								name="first_name"
								id="first_name"
								onChange={handleInputChange}
								type="text"
								className="p-2  bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							/>
						</div>
						<div className="max-md:flex flex-col">
							<label htmlFor="">Last Name*</label>
							<input
								value={formData.last_name}
								name="last_name"
								id="last_name"
								onChange={handleInputChange}
								type="text"
								className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							/>
						</div>
					</div>
					<div className="mb-4 relative max-md:flex flex-col">
						<label htmlFor="">Email*</label>
						<input
							value={formData.email}
							name="email"
							id="email"
							onChange={handleInputChange}
							type="email"
							className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
						/>
					</div>
					<div className="mb-4 relative max-md:flex flex-col">
						<label htmlFor="">password*</label>
						<input
							value={formData.password}
							name="password"
							id="password"
							onChange={handleInputChange}
							type="password"
							className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
						/>
					</div>
				</form>
				<div className="text-sm max-md:flex max-md:flex-col max-md:gap-[10px]">
					<div className="flex items-center gap-1 max-md:items-start">
						<input
							type="checkbox"
							name="privacy"
							id="privacy"
							className="max-md:mt-[3px]"
						/>
						<label htmlFor="privacy" className="max-md:w-[70vw]">
							<span>Please check out our</span>{' '}
							<Link className="text-[#DC2626]" href={'/'}>
								Help Site
							</Link>
							,{' '}
							<Link className="text-[#DC2626]" href={'/'}>
								Terms of Use
							</Link>
							, <span>and</span>{' '}
							<Link className="text-[#DC2626]" href={'/'}>
								Privacy Policy
							</Link>
						</label>
					</div>
					<div className="flex gap-1 max-md:items-start">
						<input
							type="checkbox"
							name="update"
							id="update"
							className="max-md:mt-[3px]"
						/>
						<label htmlFor="update" className="max-md:w-[70vw]">
							<h4>Please send me occasional Formspree news updates</h4>
						</label>
					</div>
					<div className="flex flex-col gap-[7px] max-md: max-md:gap-[7px]">
						<button
							onClick={handleSubmit}
							disabled={
								!formData.first_name ||
								!formData.last_name ||
								!formData.email ||
								!formData.password
							}
							type="submit"
							className={` ${
								!formData.first_name ||
								!formData.last_name ||
								!formData.email ||
								!formData.password
									? 'bg-[#F3F4F6] text-[#9fa2a8]'
									: 'bg-[#c02dc1] text-white'
							}  rounded-xl px-4 py-3 mt-4 w-[40%] max-md:w-[90%] max-md:py-4`}
						>
							Register
						</button>
						<span>Already have an account?</span>{' '}
						<Link className="text-[#DC2626]" href={'/login'}>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
