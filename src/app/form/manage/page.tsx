'use client';
import FormsTable from '@/components/FormsTable';
import {AppContext} from '@/context/AppContext';
import Link from 'next/link';
import React, {useContext} from 'react';

const Manage = () => {
	const {forms} = useContext(AppContext);
	return (
		<main className="max-w-7xl m-auto my-10">
			{forms.length ? (
				<>
					<h3 className="text-center font-semibold text-xl mb-5 my-12">
						Manage Submitted Forms
					</h3>
					<section className="overflow-scroll lg:overflow-auto w-[95%] m-auto">
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
		</main>
	);
};

export default Manage;
