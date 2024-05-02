'use client';
import {AppContext} from '@/context/AppContext';
import {updateProfile} from '@/utils/apiCalls';
import React, {FC, useContext, useEffect, useState} from 'react';
import {ProfileForm, ProfileFormProp} from './profile.types';
import {toast} from 'react-toastify';

function Profile() {
	const {user} = useContext(AppContext);

	const {first_name, last_name, email, company_name} = user;

	const inputFields: ProfileFormProp['field'][] = [
		{
			label: 'First Name',
			name: 'first_name',
			value: first_name,
		},
		{
			label: 'Last Name',
			name: 'last_name',
			value: last_name,
		},
		{
			label: 'Email',
			name: 'email',
			value: email,
			notEditable: true,
		},
		{
			label: 'Company Name',
			name: 'company_name',
			value: '',
		},
	];

	const [formData, setFormData] = useState<ProfileForm>({
		first_name,
		last_name,
		email,
		company_name,
	});

	useEffect(() => {
		setFormData(() => {
			return {
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				company_name: user.company_name,
			};
		});
	}, [user]);

	return (
		<div className="flex gap-8 text-xl max-sm:px-6 flex-col mt-[50px] justify-center items-center mb-9 max-w-7xl m-auto ">
			<h1 className="text-2xl font-bold">User Profile</h1>
			<div className="flex flex-col gap-5 lg:shadow-lg lg:min-w-[500px] lg:w-fit w-full lg:px-12 px-3 lg:py-20 m-auto lg:border-2">
				{inputFields.map(inputField => (
					<Form
						key={inputField.name}
						field={inputField}
						formData={formData}
						setFormData={setFormData}
					/>
				))}
				<div className="flex flex-col gap-2">
					<label htmlFor="">Country</label>
					<select
						className="inp bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF] p-2"
						name=""
						id=""
					>
						<option value="">Nigeria</option>
						<option value="">Nigeria</option>
						<option value="">Nigeria</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default Profile;

const Form: FC<ProfileFormProp> = ({field, formData, setFormData}) => {
	const {setIsLoading, setReload, user} = useContext(AppContext);
	const [isNameEditing, setIsNameEditing] = useState(false);

	const handleUpdate = async (
		event: React.MouseEvent<HTMLElement, MouseEvent>
	) => {
		try {
			setIsLoading(true);

			const response = await updateProfile(`user/user/${user.email}`, {
				[field.name]: formData[field.name],
			});
			if (response.status === 200) {
				return setReload(prev => !prev);
			}
			throw new Error(response.data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col gap-2 w-full">
			<label htmlFor="">{field.label}</label>

			<div className="flex justify-between items-center gap-2">
				{isNameEditing ? (
					<input
						className="bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-4 min-h-10"
						type="text"
						value={formData[field.name]}
						onChange={e =>
							setFormData(prev => {
								return {
									...prev,
									[field.name]: e.target.value,
								};
							})
						}
					/>
				) : (
					<span className="bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-4 min-h-10">
						{field.value}
					</span>
				)}
				{!field.notEditable && (
					<div>
						{isNameEditing ? (
							<button
								className="btn px-4 py-1 text-sm rounded-md"
								onClick={() => setIsNameEditing(true)}
							>
								<i
									className="fas fa-check text-[#c02dc1] cursor-pointer"
									onClick={handleUpdate}
								></i>
							</button>
						) : (
							<button
								className="btn px-4 py-1 text-sm rounded-md text-white bg-[#c02dc1]"
								onClick={() => setIsNameEditing(true)}
							>
								Edit
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
