interface User {
	first_name: string;
	last_name: string;
	email: string;
	isVerified: boolean;
}

interface Form {
	_id?: number;
	form_email: string;
	form_name: string;
	project_name: string;
}
