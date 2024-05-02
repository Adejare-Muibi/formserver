'use client';
import {AppContext} from '@/context/AppContext';
import {deleteForm, updateForm} from '@/utils/apiCalls';
import {useRouter} from 'next/navigation';
import React, {useContext, useState} from 'react';
import {toast} from 'react-toastify';

const EditForm = ({params}: {params: {id: string}}) => {
	const router = useRouter();
	const {forms = [], user, setIsLoading, setReload} = useContext(AppContext);
	const form = forms.find(form => form.formId === params.id);
	const [formData, setFormData] = useState({
		form_email: '',
		form_name: '',
		project_name: '',
		formId: '',
		...form,
	});

	const handleSubmit = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setIsLoading(true);
		if (!formData.form_name || !formData.project_name) {
			return toast.error('Please provide all required fields');
		}
		if (!formData.form_email) {
			formData.form_email = user.email;
		}

		try {
			const response = await updateForm(params.id, formData);
			const {status, data, message} = response;

			if (status >= 400) throw new Error(message);

			if (status === 200) {
				toast.success('Updated successfully');
				setReload(prev => !prev);
				return router.replace('/form/manage');
			}
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setIsLoading(true);
		if (!formData.form_name || !formData.project_name) {
			return toast.error('Please provide all required fields');
		}
		if (!formData.form_email) {
			formData.form_email = user.email;
		}

		try {
			const response = await deleteForm(params.id);
			const {status, data, message} = response;

			if (status >= 400) throw new Error(message);

			if (status === 200) {
				toast.success('Form deleted successfully');
				setReload(prev => !prev);
				return router.replace('/form/manage');
			}
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	if (!form) {
		return <div>Form not found</div>;
	}

	return (
		<main className="max-w-7xl m-auto my-10">
			<h2 className="text-center text-2xl font-bold">
				Update {form.project_name} form
			</h2>

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
					Update Form
				</button>
				<button className="text-red-500" onClick={handleDelete}>
					Delete Form
				</button>
			</form>
		</main>
	);
};

export default EditForm;
