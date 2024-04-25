'use client';
import Link from 'next/link';
import React, {useContext} from 'react';
import FormsTable from '../../components/FormsTable';
import {AppContext} from '@/context/AppContext';

const Dashboard = () => {
	const {user, forms = []} = useContext(AppContext);

	return (
		<>
			<main className="max-w-7xl m-auto">
				<div className="py-10 px-5">
					<h2 className="font-bold text-2xl">
						Hello {user?.first_name}, Welcome to FormServer
					</h2>

					{forms.length ? (
						<>
							<h3 className="text-center font-semibold text-xl mb-5 my-12">
								Recent Submitted Forms
							</h3>
							<section className="overflow-scroll lg:overflow-auto">
								<FormsTable forms={forms} />
							</section>
						</>
					) : (
						<div className="flex items-center justify-center h-96">
							<Link href={'/create'}>
								Click here to start creating your first form
							</Link>
						</div>
					)}
				</div>
			</main>
		</>
	);
};

export default Dashboard;
