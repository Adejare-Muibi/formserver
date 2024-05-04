import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import './styles/fontawesome-free-6.1.1-web/css/all.css';
import AppWrapper from '../components/AppWrapper';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AppContextProvider} from '@/context/AppContext';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Form Server',
	description: 'Submit your forms in seconds',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-hidden`}>
				<AppContextProvider>{children}</AppContextProvider>
			</body>
		</html>
	);
}
