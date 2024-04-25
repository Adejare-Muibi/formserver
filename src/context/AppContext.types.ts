import {Dispatch, SetStateAction} from 'react';

export interface AppContextProps {
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
	forms: Form[];
	reload: boolean;
	setReload: Dispatch<SetStateAction<boolean>>;
}

export interface AppContextProviderProps {
	children: React.ReactNode;
}
