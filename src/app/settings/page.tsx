'use client';
import {AppContext} from '@/context/AppContext';
import React, {useContext, useState} from 'react';
import {toast} from 'react-toastify';

function Settings() {
	const {setIsLoading, user} = useContext(AppContext);
	const {plan} = user;
	const [formData, setFormData] = useState({
		old: '',
		password: '',
		confirm: '',
	});

	const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (Object.values(formData).includes('')) {
			toast.error('Please input all fields');
		} else if (formData.password !== formData.confirm) {
			toast.error('Passwords do not match');
		} else if (formData.password.length < 6) {
			toast.error('Passwords must be at least 6 characters long');
		} else {
		}
	};

	return (
		<div className="flex flex-col px-9 gap-[50px] max-sm:gap-[20px]  max-sm:mb-[150px] mt-[30px] max-sm:mt-[50px] text-2xl  mb-4">
			<h1>Settings</h1>
			<div className="flex justify-around gap-10 max-sm:flex-col-reverse">
				<div className="flex flex-col gap-6 max-sm:gap-4">
					<div className="flex items-center text-xl font-bold justify-center max-sm:justify-start">
						<h2>Password Update</h2>
					</div>
					<div className="flex gap-2 text-xl max-sm:flex-col">
						<label className="w-[60%]" htmlFor="">
							Old Password
						</label>
						<input
							className="inp bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-8 "
							type="text"
							placeholder=""
							value={formData.old}
							onChange={e =>
								setFormData(prev => {
									return {
										...prev,
										old: e.target.value,
									};
								})
							}
						/>
					</div>
					<div className="flex gap-2 text-xl max-sm:flex-col">
						<label className="w-[60%]" htmlFor="">
							New Password
						</label>
						<input
							className="inp bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-8 "
							type="text"
							placeholder=""
							value={formData.password}
							onChange={e =>
								setFormData(prev => {
									return {
										...prev,
										password: e.target.value,
									};
								})
							}
						/>
					</div>
					<div className="flex gap-2 text-xl max-sm:flex-col">
						<label className="w-[60%]" htmlFor="">
							Confirm New Password
						</label>
						<input
							className="inp bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-8 "
							type="text"
							placeholder=""
							value={formData.confirm}
							onChange={e =>
								setFormData(prev => {
									return {
										...prev,
										confirm: e.target.value,
									};
								})
							}
						/>
					</div>
					<div>
						<button
							className="btn float-right px-4 py-1 text-sm rounded-md text-white bg-[#c02dc1]"
							onClick={handleUpdate}
						>
							Update
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<h2 className="text-xl font-bold">User Plan</h2>
					<div className="new py-[50px] px-[60px] bg-[#F3F4F6] border-2 rounded-lg">
						<h2 className="capitalize">{plan} plan</h2>
						<div>
							{plan === 'basic' && (
								<button className="btn px-4 py-1 text-sm rounded-md text-white bg-[#c02dc1]">
									Upgrade plan
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-8 items-center mt-[20px]">
				<div className="text-center text-xl">
					<h1>Join Our Community</h1>
				</div>
				<div className="flex justify-between gap-8 max-sm:gap-8">
					<div>
						<i className="fab fa-twitter text-[#c02dc1]"></i>
					</div>
					<div>
						<i className="fab fa-discord text-[#c02dc1]"></i>
					</div>
					<div>
						<i className="fab fa-telegram text-[#c02dc1]"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
