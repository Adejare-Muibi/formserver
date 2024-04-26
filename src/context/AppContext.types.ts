import {Dispatch, SetStateAction} from 'react';

export interface AppContextProps {
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
	forms: Form[];
	setForms: Dispatch<SetStateAction<Form[]>>;
	reload: boolean;
	setReload: Dispatch<SetStateAction<boolean>>;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface AppContextProviderProps {
	children: React.ReactNode;
}
