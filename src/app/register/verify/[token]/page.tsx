'use client';
import LoadingModal from '@/components/LoadingModal';
import {AppContext} from '@/context/AppContext';
import {changePassword, resetPassword, verifyEmail} from '@/utils/apiCalls';
import {useRouter} from 'next/navigation';
import React, {useContext, useEffect, useState} from 'react';
import {toast} from 'react-toastify';

const VerifyEmail = ({params}: {params: {token: string}}) => {
	const router = useRouter();
	const {isLoggedIn} = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(true);
	const [isVerified, setIsVerified] = useState(false);

	useEffect(() => {
		const verify = async () => {
			try {
				const response = await verifyEmail(params.token);
				if (response.status === 200) {
					setIsVerified(true);
				}
			} catch (error: any) {
				toast.error(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		verify();
	}, [params.token]);

	if (isLoading) {
		return <LoadingModal />;
	}

	if (!isVerified) {
		return (
			<main className="max-w-7xl m-auto my-10 px-3">
				<h2 className="text-xl font-semibold">
					Invalid email verification link
				</h2>
				<button
					className="bg-[#c02dc1] text-white py-5 rounded-lg shadow-lg mt-10 p-4"
					onClick={() => router.push('/login')}
				>
					Go to Login
				</button>
			</main>
		);
	}

	return (
		<main className="max-w-7xl m-auto my-10 px-3">
			<h2 className="text-xl font-semibold">Email verified successfully</h2>

			{isLoggedIn ? (
				<button
					className="bg-[#c02dc1] text-white py-5 rounded-lg shadow-lg mt-10 p-4"
					onClick={() => router.push('/dashboard')}
				>
					Go to dashboard
				</button>
			) : (
				<button
					className="bg-[#c02dc1] text-white py-5 rounded-lg shadow-lg mt-10 p-4"
					onClick={() => router.push('/login')}
				>
					Go to Login
				</button>
			)}
		</main>
	);
};

export default VerifyEmail;
