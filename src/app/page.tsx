import Image from 'next/image';
import Navbar from '@/components/landing-page/Navbar';
import Hero from '@/components/landing-page/Hero';
import Build from '@/components/landing-page/Build';
import How from '@/components/landing-page/How';
import Squash from '@/components/landing-page/Squash';
import Create from '@/components/landing-page/Create';
import Comp from '@/components/landing-page/Comp';
import Footer from '@/components/landing-page/Footer';

const Page = () => {
	return (
		<section>
			<Hero />
			<Build />
			<How />
			<Squash />
			<Create />
			<Comp />
		</section>
	);
};

export default Page;
