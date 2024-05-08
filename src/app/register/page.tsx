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
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isPasswordVisible, setIsPasswordVisible] = useState({
		password: false,
		confirmPassword: false,
	});
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e: any) => {
		const {value, name} = e.target;

		setErrorMessage('');
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async () => {
		try {
			if (formData.password !== confirmPassword)
				return setErrorMessage("Passwords doesn't match");
			setIsLoading(true);
			const response = await registerUser(formData);

			const {status, data, message} = response;
			if (status >= 400) throw new Error(message);
			if (status === 200) {
				// const {token} = data;
				// localStorage.setItem('_tkn', token);
				toast.success(
					'User account successfully created please check your email to verify your account'
				);
				router.push('/login');
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
		<div className="flex items-center justify-center w-full h-screen gap-[50px] max-md:w-[90%] max-md:m-auto max-md:py-[20px] max-md:h-auto min-h-screen">
			<div className="w-full max-w-[500px] max-md:w-[100%] flex flex-col max-mditems-center py-10">
				<h2></h2>
				<h1 className="font-[800] max-md:text-[25px] max-md: text-3xl mb-5">
					Register for Formspree
				</h1>
				<form className="w-full flex flex-col gap-2 mt-5 max-md:">
					<div className="flex gap-[40px] max-md:flex-col max-md:gap-[4px]">
						<div className="flex flex-col gap-y-2 mb-5">
							<label htmlFor="">First Name*</label>
							<input
								value={formData.first_name}
								name="first_name"
								id="first_name"
								onChange={handleInputChange}
								type="text"
								className="p-2  bg-[#F3F4F6] border-2 border-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							/>
						</div>
						<div className="flex flex-col gap-y-2 mb-5">
							<label htmlFor="">Last Name*</label>
							<input
								value={formData.last_name}
								name="last_name"
								id="last_name"
								onChange={handleInputChange}
								type="text"
								className="p-2 bg-[#F3F4F6] border-2 border-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							/>
						</div>
					</div>
					<div className="relative flex flex-col gap-y-2 mb-5">
						<label htmlFor="">Email*</label>
						<input
							value={formData.email}
							name="email"
							id="email"
							onChange={handleInputChange}
							type="email"
							className="p-2 bg-[#F3F4F6] border-2 border-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
						/>
					</div>
					<div className="relative flex flex-col gap-y-2 mb-5">
						<label htmlFor="password">Password*</label>
						<div className="relative flex justify-center items-center">
							<input
								value={formData.password}
								name="password"
								id="password"
								onChange={handleInputChange}
								type={isPasswordVisible.password ? 'text' : 'password'}
								className={`p-2 bg-[#F3F4F6] border-2 ${
									errorMessage ? 'border-red-300' : 'border-[#F3F4F6]'
								} rounded w-full focus:outline-[#9CA3AF]`}
								onBlur={() =>
									confirmPassword &&
									formData.password !== confirmPassword &&
									setErrorMessage("Passwords don't match")
								}
							/>
							<i
								className={`fas ${
									isPasswordVisible.password ? 'fa-eye-slash' : 'fa-eye'
								} text-[#c02dc1] absolute right-4 cursor-pointer`}
								onClick={() =>
									setIsPasswordVisible(prev => {
										return {
											...prev,
											password: !prev.password,
										};
									})
								}
							></i>
						</div>
					</div>
					<div className="relative flex flex-col gap-y-2 mb-5">
						<label htmlFor="">Confirm Password*</label>
						<div className="relative flex justify-center items-center">
							<input
								value={confirmPassword}
								name="confirmPassword"
								id="confirmPassword"
								onChange={e => {
									setConfirmPassword(e.target.value);
									setErrorMessage('');
								}}
								type={isPasswordVisible.confirmPassword ? 'text' : 'password'}
								className={`p-2 bg-[#F3F4F6] border-2 ${
									errorMessage ? 'border-red-300' : 'border-[#F3F4F6]'
								} rounded w-full focus:outline-[#9CA3AF]`}
								onBlur={() =>
									formData.password &&
									formData.password !== confirmPassword &&
									setErrorMessage("Passwords don't match")
								}
							/>
							<i
								className={`fas ${
									isPasswordVisible.confirmPassword ? 'fa-eye-slash' : 'fa-eye'
								} text-[#c02dc1] absolute right-4 cursor-pointer`}
								onClick={() =>
									setIsPasswordVisible(prev => {
										return {
											...prev,
											confirmPassword: !prev.confirmPassword,
										};
									})
								}
							></i>
						</div>
					</div>
				</form>
				{errorMessage && (
					<div className="text-red-500 font-semibold mb-5 flex flex-row items-center gap-x-2">
						<i className="fas fa-warning"></i>
						<span>{errorMessage}</span>
					</div>
				)}
				<div className="text-sm max-md:flex max-md:flex-col max-md:gap-[10px]">
					<div className="flex items-center gap-1 max-md:items-start mb-2">
						<input
							type="checkbox"
							name="privacy"
							id="privacy"
							className="max-md:mt-[3px]"
						/>
						<label htmlFor="privacy" className="max-md:w-[70vw]">
							<span>Please check out our</span>{' '}
							<Link className="text-[#c02dc1]" href={'/help'}>
								Help Site
							</Link>
							,{' '}
							<Link className="text-[#c02dc1]" href={'/terms'}>
								Terms of Use
							</Link>
							, <span>and</span>{' '}
							<Link className="text-[#c02dc1]" href={'/privacy-policy'}>
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
								!formData.password ||
								!confirmPassword
							}
							type="submit"
							className={` ${
								!formData.first_name ||
								!formData.last_name ||
								!formData.email ||
								!formData.password ||
								!confirmPassword
									? 'bg-[#F3F4F6] text-[#9fa2a8]'
									: 'bg-[#c02dc1] text-white'
							}  rounded-xl px-4 py-3 mt-4 w-[40%] max-md:w-[90%] max-md:py-4`}
						>
							Register
						</button>
						<span>Already have an account?</span>{' '}
						<Link className="text-[#c02dc1]" href={'/login'}>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
