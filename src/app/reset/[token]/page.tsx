'use client';
import LoadingModal from '@/components/LoadingModal';
import {changePassword, resetPassword} from '@/utils/apiCalls';
import {useRouter} from 'next/navigation';
import React, {useContext, useEffect, useState} from 'react';
import {toast} from 'react-toastify';

const Reset = ({params}: {params: {token: string}}) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [isLinkVerified, setIsLinkVerified] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState({
		password: false,
		confirmPassword: false,
	});
	const [formData, setFormData] = useState({
		password: '',
		confirmPassword: '',
	});

	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		const reset = async () => {
			try {
				const response = await resetPassword(params.token);
				if (response.status === 200) {
					setIsLinkVerified(true);
				}
			} catch (error: any) {
				toast.error(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		reset();
	}, [params.token]);

	if (isLoading) {
		return <LoadingModal />;
	}

	if (!isLinkVerified) {
		setTimeout(() => {
			router.replace('/login');
		}, 3000);

		return (
			<main className="max-w-7xl m-auto my-10 px-3">
				<h2 className="text-xl font-semibold">
					Password reset token is invalid or has expired
				</h2>
			</main>
		);
	}

	const handleSubmit = async (
		event: React.MouseEvent<HTMLElement, MouseEvent>
	) => {
		event.preventDefault();
		try {
			if (formData.password !== formData.confirmPassword)
				return setErrorMessage("Passwords doesn't match");
			else if (formData.password.length < 6)
				return setErrorMessage(
					'Please provide a stronger password at least 6 digits'
				);
			setIsLoading(true);
			const response = await changePassword({token: params.token, ...formData});

			const {status, data, message} = response;
			if (status >= 400) throw new Error(message);
			if (status === 200) {
				toast.success('Password changed successfully');
				router.replace('/login');
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
		<main className="max-w-7xl m-auto my-10">
			<h2 className="text-center text-xl font-semibold text-green-500">
				Link Verified Successfully
			</h2>
			<p className="text-center">Your password has been reset successfully</p>

			<form
				action=""
				className="flex flex-col gap-y-5 lg:shadow-lg max-w-[500px] px-12 lg:pb-20 lg:pt-10 m-auto mt-16 lg:border-2"
			>
				<h3 className="text-xl font-semibold">Input new password</h3>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="password">Password</label>
					<div className="relative flex justify-center items-center">
						<input
							type={isPasswordVisible.password ? 'text' : 'password'}
							name="password"
							id="password"
							className={`border-2 p-3 w-full ${
								errorMessage ? 'border-red-300' : 'border-[#F3F4F6]'
							} `}
							onChange={e => {
								setFormData(prev => {
									return {...prev, password: e.target.value};
								});
								setErrorMessage('');
							}}
							onBlur={() =>
								formData.confirmPassword &&
								formData.password !== formData.confirmPassword &&
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
				<div className="flex flex-col gap-y-2">
					<label htmlFor="confirm-password">Confirm Password</label>
					<div className="relative flex justify-center items-center">
						<input
							type={isPasswordVisible.confirmPassword ? 'text' : 'password'}
							name="confirm-password"
							id="confirm-password"
							className={`border-2 p-3 w-full ${
								errorMessage ? 'border-red-300' : 'border-[#F3F4F6]'
							} `}
							onChange={e => {
								setFormData(prev => {
									return {...prev, confirmPassword: e.target.value};
								});
								setErrorMessage('');
							}}
							onBlur={() =>
								formData.password &&
								formData.password !== formData.confirmPassword &&
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
				{errorMessage && (
					<div className="text-red-500 font-semibold mb-5 flex flex-row items-center gap-x-2">
						<i className="fas fa-warning"></i>
						<span>{errorMessage}</span>
					</div>
				)}

				<button
					className="bg-[#c02dc1] text-white py-5 rounded-lg shadow-lg mt-10"
					onClick={handleSubmit}
				>
					Update Password
				</button>
			</form>
		</main>
	);
};

export default Reset;
