'use client';
import React, {
	Dispatch,
	FC,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import AppWrapper from '@/components/AppWrapper';
import {getDashboard} from '@/utils/apiCalls';
import {toast} from 'react-toastify';

interface AppContextProps {
	user?: User | null;
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

interface AppContextProviderProps {
	children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

// export const useAuthContext = (): AppContextProps => useContext(AppContext);

export const AppContextProvider: FC<AppContextProviderProps> = ({children}) => {
	const pathname = usePathname();
	const authenticatedRoutes = ['/dashboard', '/profile', '/settings'];
	const [isLoading, setIsLoading] = useState(
		authenticatedRoutes.includes(pathname)
	);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();

	useEffect(() => {
		const getUserState = async () => {
			try {
				const response = await getDashboard();
				const {status, data, message} = response;
				if (status === 200) {
					setIsLoggedIn(true);
					setUser(data.user);
				} else {
					throw new Error(message);
				}
			} catch (error: any) {
				toast(error.message);
				setIsLoggedIn(false);
				// router.replace('/login');
			} finally {
				setIsLoading(false);
			}
		};
		const token = localStorage.getItem('_tkn');
		const authenticatedRoutes = ['/dashboard', '/profile', '/settings'];
		if (token && authenticatedRoutes.includes(pathname)) {
			getUserState();
		} else {
			setIsLoggedIn(false);
			router.replace('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
			<AppWrapper isLoading={isLoading}>
				{isLoading ? <p>Loading...</p> : children}
			</AppWrapper>
		</AppContext.Provider>
	);
};
