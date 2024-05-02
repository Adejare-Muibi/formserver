interface User {
	first_name: string;
	last_name: string;
	email: string;
	company_name?: string;
	isVerified: boolean;
	plan: 'basic' | 'premium';
}

interface Form {
	_id?: number;
	form_email: string;
	form_name: string;
	project_name: string;
}
interface Contact {
	_id: string;
	_user: string;
	fullName: string;
	purpose: string;
	email: string;
	project_name: string;
}
