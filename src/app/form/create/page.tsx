'use client';
import {AppContext} from '@/context/AppContext';
import {submitForm} from '@/utils/apiCalls';
import {useRouter} from 'next/navigation';
import React, {useContext, useState} from 'react';
import {toast} from 'react-toastify';

const CreateForm = () => {
	const router = useRouter();
	const {user, setReload} = useContext(AppContext);
	const [formData, setFormData] = useState({
		form_email: '',
		form_name: '',
		project_name: '',
	});

	const handleSubmit = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (!formData.form_name || !formData.project_name) {
			return toast.error('Please provide all required fields');
		}
		if (!formData.form_email) {
			formData.form_email = user.email;
		}

		try {
			const response = await submitForm(formData);
			const {status, data, message} = response;

			if (status >= 400) throw new Error(message);
			console.log(status);

			if (status === 201) {
				toast.success('Submitted successfully');
				setReload(prev => !prev);
				return router.push('/dashboard');
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<main className="max-w-7xl m-auto my-10">
			<h2 className="text-center text-2xl font-bold">Create a new form</h2>

			<form
				action=""
				className="flex flex-col gap-y-5 lg:shadow-lg max-w-[500px] px-12 lg:py-20 m-auto mt-16 lg:border-2"
			>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="form_email"
						id="email"
						className="border-2 p-3"
						placeholder={user.email}
						value={formData.form_email}
						onChange={e => {
							setFormData(prev => {
								return {...prev, form_email: e.target.value};
							});
						}}
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="name">Form Name</label>
					<input
						type="text"
						name="form_name"
						id="name"
						className="border-2 p-3"
						required
						value={formData.form_name}
						onChange={e => {
							setFormData(prev => {
								return {...prev, form_name: e.target.value};
							});
						}}
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="project_name">Project Name</label>
					<input
						type="project_name"
						name="project_name"
						id="project_name"
						className="border-2 p-3"
						required
						value={formData.project_name}
						onChange={e => {
							setFormData(prev => {
								return {...prev, project_name: e.target.value};
							});
						}}
					/>
				</div>
				<button
					className="bg-[#c02dc1] text-white py-5 rounded-lg shadow-lg mt-10"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</main>
	);
};

export default CreateForm;
