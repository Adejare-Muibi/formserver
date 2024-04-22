import Link from 'next/link';
import React from 'react';
import FormsTable from '../../components/FormsTable';

const Dashboard = () => {
	const user = {first_name: 'John'};
	const isVerified = false;

	const forms = [
		{
			_id: 1,
			name: 'Form 1',
			email: 'johndoe@gmail.com',
			project_name: 'First submission',
		},
	];
	return (
		<>
			{!isVerified && (
				<span className="text-center inline-block w-full px-5 py-2 bg-red-500 text-white cursor-text">
					You need to verify your email to create a form, verify now
				</span>
			)}
			<main className="max-w-7xl m-auto">
				<div className="py-10 px-5">
					<h2 className="font-bold text-2xl">
						Hello {user.first_name}, Welcome to FormServer
					</h2>

					{forms.length ? (
						<>
							<h3 className="text-center font-semibold text-xl mb-5 my-12">
								Recent Submitted Forms
							</h3>
							<section className="overflow-scroll md:overflow-auto">
								<FormsTable forms={forms} />
							</section>
						</>
					) : (
						<Link href={'/create'}>
							Click here to start creating your first form
						</Link>
					)}
				</div>
			</main>
		</>
	);
};

export default Dashboard;
