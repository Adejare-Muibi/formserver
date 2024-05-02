import {Dispatch, SetStateAction} from 'react';

export interface ProfileForm {
	first_name?: string;
	last_name?: string;
	email?: string;
	company_name?: string;
}

export interface ProfileFormProp {
	field: {
		label: string;
		name: 'email' | 'first_name' | 'last_name' | 'company_name';
		value: string;
		notEditable?: boolean;
	};
	formData: ProfileForm;
	setFormData: SetStateAction<Dispatch<ProfileForm>>;
}
