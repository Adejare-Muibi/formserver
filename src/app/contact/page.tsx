'use client';
import {AppContext} from '@/context/AppContext';
import {useRouter} from 'next/navigation';
import React, {FC, useContext} from 'react';

const Contact = () => {
	const {contact: contacts = []} = useContext(AppContext);
	const router = useRouter();

	return (
		<main className="max-w-7xl m-auto">
			<div className="px-5"></div>

			{contacts.length ? (
				<>
					<h3 className="text-center font-semibold text-xl mb-5 my-12">
						User Contacts
					</h3>
					<section className="overflow-scroll lg:overflow-auto max-w-[95%] m-auto">
						<ContactTable contacts={contacts} />
					</section>
				</>
			) : (
				<div className="flex flex-col gap-y-5 items-center justify-center h-96">
					<span>No user has used your form yet</span>
					<button
						className="border-2 border-[#c02dc1] rounded-md shadow-md p-3 bg-[#c02dc1] text-white"
						onClick={() => router.push('/forms/manage')}
					>
						Go to forms
					</button>
				</div>
			)}
		</main>
	);
};

export default Contact;

const ContactTable: FC<{contacts: Contact[]}> = ({contacts}) => {
	const tableHeaders = ['Name', 'Email', 'Project Name', 'Purpose'];

	return (
		<table className="w-full border-gray-200 border-2">
			<thead>
				<tr className="border-b-2">
					{tableHeaders.map((tableHeader, index) => (
						<th
							key={tableHeader}
							className={`pt-8 pb-2 w-1/4 px-3 ${
								index !== tableHeaders.length ? 'border-r-2' : ''
							}`}
						>
							{tableHeader}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{contacts.map(contact => (
					<tr key={contact._id} className="border-b-2">
						<td className="w-1/4 py-5 px-5 border-r-2 text-center">
							{contact.fullName}
						</td>
						<td className="w-1/4 py-5 px-5 border-r-2 text-center">
							{contact.email}
						</td>
						<td className="w-1/4 py-5 px-5 border-r-2 text-center">
							{contact.purpose}
						</td>
						<td className="w-1/4 py-5 px-5 border-r-2 text-center">
							{contact.project_name}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
