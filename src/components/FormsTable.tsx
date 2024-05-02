import React, {FC} from 'react';

const FormsTable: FC<{forms: Form[]}> = ({forms}) => {
	const tableHeaders = ['Name', 'Email', 'Project Name', 'Form ID'];

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
				{forms.map(form => (
					<tr key={form._id} className="border-b-2">
						<td className="w-1/4 py-5 px-5 border-r-2 text-center">
							{form.form_name}
						</td>
						<td className="w-1/4 py-5 px-5 border-r-2 text-center">
							{form.form_email}
						</td>
						<td className="w-1/4 py-5 px-5 border-r-2 text-center">
							{form.project_name}
						</td>
						<td className="w-1/4 py-5 px-5 border-r-2 text-left">{form._id}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default FormsTable;
