'use client';
import React, {FC, createContext, useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import AppWrapper from '@/components/AppWrapper';
import {getDashboard} from '@/utils/apiCalls';
import {toast} from 'react-toastify';
import LoadingModal from '../components/LoadingModal.jsx';

import {AppContextProps, AppContextProviderProps} from './AppContext.types';
export const AppContext = createContext<AppContextProps>({} as AppContextProps);

// export const useAuthContext = (): AppContextProps => useContext(AppContext);

export const AppContextProvider: FC<AppContextProviderProps> = ({children}) => {
	const pathname = usePathname();
	const authenticatedRoutes = [
		'/dashboard',
		'/contact',
		'/form/create',
		'/form/manage',
		'/settings',
		'/profile',
	];
	const [isLoading, setIsLoading] = useState(
		authenticatedRoutes.includes(pathname)
	);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<User>({
		first_name: '',
		last_name: '',
		email: '',
		isVerified: false,
		plan: 'basic',
	});
	const [forms, setForms] = useState<Form[]>([]);
	const [contact, setContact] = useState<Contact[]>([]);
	const [reload, setReload] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const getUserState = async () => {
			try {
				const response = await getDashboard();
				const {status, data, message} = response;
				if (status === 200) {
					setIsLoggedIn(true);
					setUser(data.user);
					setForms(data.forms);
					setContact(data.contact);
				} else {
					throw new Error(message);
				}
			} catch (error: any) {
				toast(error.message);
				setIsLoggedIn(false);
				router.replace('/login');
			} finally {
				setIsLoading(false);
			}
		};
		const token = localStorage.getItem('_tkn');

		if (token && authenticatedRoutes.includes(pathname)) {
			getUserState();
		} else if (!token && authenticatedRoutes.includes(pathname)) {
			router.replace('/login');
			setIsLoading(false);
			setIsLoggedIn(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reload]);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				forms,
				setForms,
				contact,
				reload,
				setReload,
				isLoading,
				setIsLoading,
			}}
		>
			<AppWrapper isLoading={isLoading}>
				{isLoading ? <LoadingModal /> : children}
			</AppWrapper>
		</AppContext.Provider>
	);
};
