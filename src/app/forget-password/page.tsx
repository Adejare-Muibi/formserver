'use client';
import {AppContext} from '@/context/AppContext';
import {forgetPassword} from '@/utils/apiCalls';
import React, {useContext, useState} from 'react';
import {toast} from 'react-toastify';

const ForgetPassword = () => {
	const {setIsLoading} = useContext(AppContext);

	const [step, setStep] = useState(1);
	const [email, setEmail] = useState('');

	const handleSubmit = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (!email) {
			return toast.error('Please input your email address');
		}
		setIsLoading(true);

		try {
			const response = await forgetPassword({email});
			const {status, data, message} = response;

			if (status >= 400) throw new Error(message);

			if (status === 200) {
				toast.success('Reset link has been sent to your email address');
				setStep(2);
			}
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	if (step === 1) {
		return (
			<main className="max-w-7xl m-auto my-10">
				<h2 className="text-center text-2xl font-bold">Forget Password</h2>

				<form
					action=""
					className="flex flex-col gap-y-5 lg:shadow-lg max-w-[500px] px-12 lg:py-20 m-auto mt-16 lg:border-2"
				>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
							className="border-2 p-3"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					<button
						className="bg-[#c02dc1] text-white py-5 rounded-lg shadow-lg mt-10"
						onClick={handleSubmit}
					>
						Continue
					</button>
				</form>
			</main>
		);
	} else if (step === 2) {
		return (
			<main className="max-w-7xl m-auto my-10">
				<h2 className="text-center text-2xl font-bold">Forget Password</h2>
				<div className="flex flex-col gap-y-5 lg:shadow-lg max-w-[500px] px-12 lg:py-20 m-auto mt-16 lg:border-2 text-2xl text-center font-semibold">
					<p>A reset link has been sent to your email address</p>
				</div>
			</main>
		);
	}
	return <div>ForgetPassword</div>;
};

export default ForgetPassword;
