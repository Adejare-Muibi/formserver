'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

const Hero = () => {
	const [isCopy, setIsCopy] = useState(false);
	const codeString = `<form action="https://formserver.io/f/{form_id}" method="post">
    < label for= "email" > Your Email</label >
      <input name="Email" id="email" type="email">
        <button type="submit">Submit</button>
      </form>`;

	const handleCopyCode = () => {
		navigator.clipboard.writeText(codeString);
		setIsCopy(!isCopy);

		setTimeout(() => {
			setIsCopy(false);
		}, 2000);
	};

	return (
		<div className="flex w-full flex-col justify-center items-center py-10 gap-12 max-md:sticky">
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-[50px] font-bold max-md:text-center max-md:text-[39px] max-md:w-[80vw]">
					Easy Form Endpoints for any developer
				</h1>
				<p className="text-center text-[20px] max-md:w-[80vw] w-[60vw]">
					Connect your Form to our form Endpoints and we we&apos;ll email you
					the submissions. No PHP, Javascript or any backend code required.
				</p>
				<Link
					href={'/register'}
					className="px-7 py-4 bg-[#c02dc1] text-white border-none rounded-[5px] "
				>
					Get Started
				</Link>
			</div>
			<div className="flex max-md:w-[90%] flex-col relative items-center gap-4">
				<SyntaxHighlighter
					customStyle={{padding: '40px', borderRadius: '20px', width: '100%'}}
					language="javascript"
					style={vscDarkPlus}
				>
					{codeString}
				</SyntaxHighlighter>
				<button
					className="bg-[#384951] absolute top-3 py-1 text-sm px-4 rounded right-2 text-white text-opacity-40"
					onClick={handleCopyCode}
				>
					{isCopy ? 'Copied!' : 'Copy'}
				</button>
				<p className="w-[30vw] text-center text-[18px] max-md:w-[90vw]">
					But you have to write your own CSS codes for your forms{' '}
				</p>
			</div>
		</div>
	);
};

export default Hero;
