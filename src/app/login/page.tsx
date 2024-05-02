'use client';
import {AppContext} from '@/context/AppContext';
import {getDashboard, loginUser} from '@/utils/apiCalls';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {useContext, useState} from 'react';
import {toast} from 'react-toastify';

const Login = () => {
	const router = useRouter();
	const {setIsLoggedIn, setUser, setForms, setIsLoading} =
		useContext(AppContext);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleLogin = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		try {
			setIsLoading(true);
			e.preventDefault();
			if (!formData.email || !formData.password)
				throw new Error('Please provide your username and password');
			const response = await loginUser(formData);
			const {status, data, message} = response;

			if (status >= 400) throw new Error(message);
			if (status === 200) {
				const {token, isVerified} = data.data;
				localStorage.setItem('_tkn', token);
				isVerified
					? toast.success('Logged in successfully')
					: toast.success(
							'Logged in successfully, verify your email to create your first form'
					  );
				setIsLoggedIn(true);
				const getUserState = async () => {
					try {
						const response = await getDashboard();
						const {status, data, message} = response;
						if (status === 200) {
							setIsLoggedIn(true);
							setUser(data.user);
							setForms(data.forms);
						} else {
							throw new Error(message);
						}
					} catch (error: any) {
						toast(error.message);
						setIsLoggedIn(false);
						router.replace('/login');
					}
				};
				getUserState()
					.then(() => router.push('/dashboard'))
					.catch(err => toast.error(err.message));
			} else {
				toast.success(response.message);
			}
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-full h-screen flex items-center justify-center max-w-[90%] m-auto">
			<div className="w-full max-w-[500px]">
				<h1 className="font-[800] text-3xl">Sign in</h1>
				<div className="flex items-center mt-2 gap-1">
					<span>Or</span>
					<Link className="text-[#c02dc1]" href={'/register'}>
						register for an account
					</Link>
				</div>
				<form className="w-full flex flex-col gap-2 mt-5">
					<div className="mb-4 relative">
						<label htmlFor="">Email Address</label>
						<input
							type="email"
							className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							onChange={event => {
								console.log();
								setFormData(prev => {
									return {...prev, email: event.target.value};
								});
							}}
						/>
					</div>
					<div className="mb-4 relative">
						<label htmlFor="">Password</label>
						<input
							type="password"
							className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
							onChange={event => {
								setFormData(prev => {
									return {...prev, password: event.target.value};
								});
							}}
						/>
					</div>
					<div className="mb-4 relative">
						<button
							className="bg-[#c02dc1] text-white rounded w-full p-3"
							onClick={handleLogin}
						>
							Sign In
						</button>
					</div>
					<Link className="text-[#c02dc1]" href={'/'}>
						Forgot your password?
					</Link>
				</form>
				<div className="flex items-center flex-col gap-2 mt-4 justify-center">
					<div className="flex items-center gap-2">
						<Link className="text-black opacity-60" href={'/'}>
							Twitter
						</Link>
						<span>|</span>
						<Link className="text-black opacity-60" href={'/'}>
							Facebook
						</Link>
						<span>|</span>
						<Link className="text-black opacity-60" href={'/'}>
							Github
						</Link>
					</div>
					<span className="text-black opacity-50 text-sm">
						© {new Date().getFullYear()} FormServer, Inc.
					</span>
					<div className="text-sm">
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
						.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
