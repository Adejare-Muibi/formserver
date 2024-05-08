import {useRouter} from 'next/navigation';
import React, {FC} from 'react';

const FormsTable: FC<{forms: Form[]}> = ({forms}) => {
	const router = useRouter();
	const tableHeaders = ['Name', 'Email', 'Project Name', 'Form ID', 'Options'];

	return (
		<table className="w-[full] border-gray-200 border-2">
			<thead>
				<tr className="border-b-2">
					{tableHeaders.map((tableHeader, index) => (
						<th
							key={tableHeader}
							className={`pt-8 pb-2 w-1/5 px-3 ${
								index !== tableHeaders.length ? 'border-r-2' : ''
							}`}
						>
							{tableHeader}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{forms.map(form => (
					<tr key={form._id} className="border-b-2 ">
						<td
							className="w-1/5 py-5 px-5 border-r-2 text-center"
							onClick={() => router.push(`/form/manage/${form.formId}`)}
						>
							{form.form_name}
						</td>
						<td className="w-1/5 py-5 px-5 border-r-2 text-center">
							{form.form_email}
						</td>
						<td className="w-1/5 py-5 px-5 border-r-2 text-center">
							{form.project_name}
						</td>
						<td className="w-1/5 py-5 px-5 border-r-2 text-center">
							{form.formId}
						</td>
						<td className="w-1/5 py-5 px-5 border-r-2 text-center">
							<div className="flex flex-col lg:flex-row gap-5">
								<button
									className="px-4 py-2 text-sm rounded-md border-2 border-[#c02dc1] w-32 text-black max-w-full"
									onClick={() => router.push(`/form/manage/${form.formId}`)}
								>
									Settings
								</button>
								<button
									className="px-4 py-2 text-sm rounded-md text-white bg-[#c02dc1] w-32 max-w-full"
									onClick={() =>
										router.push(`/form/manage/${form.formId}/docs`)
									}
								>
									Docs
								</button>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default FormsTable;
