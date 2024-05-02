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
		'dashboard',
		'contact',
		'form',
		'settings',
		'profile',
	];

	const [isContextLoading, setIsContextLoading] = useState(
		authenticatedRoutes.includes(pathname.split('/')[1])
	);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<User>({
		first_name: '',
		last_name: '',
		email: '',
		isVerified: true,
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
				setIsContextLoading(false);
				router.replace('/login');
			} finally {
				setIsContextLoading(false);
			}
		};
		const token = localStorage.getItem('_tkn');

		if (token && authenticatedRoutes.includes(pathname.split('/')[1])) {
			getUserState();
		} else if (!token && authenticatedRoutes.includes(pathname.split('/')[1])) {
			router.replace('/login');
			setIsContextLoading(false);
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
				setContact,
				reload,
				setReload,
				isLoading,
				setIsLoading,
			}}
		>
			<AppWrapper isLoading={isContextLoading}>
				{isContextLoading ? <LoadingModal /> : children}
				{isLoading && <LoadingModal />}
			</AppWrapper>
		</AppContext.Provider>
	);
};
