'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {FaLongArrowAltRight} from 'react-icons/fa';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

function Docs() {
	const [isCopy, setIsCopy] = useState(false);
	const codeString = `<form 
    action="https://formserver.io/"
    method="POST"
    >
    <label>
        Name:
        <input required type="text" name="fullName" />
    </label>
    <label>
        Email:
        <input required type="Email" name="email" />
    </label>
    <label>
        Subject:
        <input required type="text" name="subject" />
    </label>
    <label>
        Message:
        <textarea name="message" id="" required></textarea>
    </label>
</form>`;

	const handleCopyCode = () => {
		navigator.clipboard.writeText(codeString);
		setIsCopy(!isCopy);

		setTimeout(() => {
			setIsCopy(false);
		}, 2000);
	};
	const [CopyText, setCopyText] = useState(false);
	const codString = `Https://formserver.io`;

	function copyCode() {
		navigator.clipboard.writeText(codString);
		setCopyText(!CopyText);

		setTimeout(() => {
			setCopyText(false);
		}, 2000);
	}
	return (
		<div className="flex flex-col justify-center gap-12  py-10 items-center">
			<div className="gap-10 flex flex-col max-md:items-center">
				<div className="flex flex-col gap-5 max-md:items-center">
					<h1 className="text-[27px] font-bold">contact form</h1>
					<div className="flex gap-3 max-md:flex-col max-md:items-center">
						<Link href={'/'}>Integration</Link>
						<Link href={'/'}>Submissions</Link>
						<Link href={'/'}>Settings</Link>
						<Link href={'/'}>Plugins</Link>
						<Link href={'/'}>Rules</Link>
					</div>
				</div>
				<div className="flex gap-2 flex-col max-md:items-center">
					<h1 className="text-[18px] font-bold">
						Your from&apos;s endpoint is:
					</h1>
					<div className="flex gap-3 items-center">
						{/* <p>Http://formserver.io</p> */}
						<SyntaxHighlighter
							customStyle={{
								padding: '15px',
								borderRadius: '10px',
								width: '100%',
							}}
							language="javascript"
							//   style={vscDarkPlus}
						>
							{codString}
						</SyntaxHighlighter>
						<button
							onClick={copyCode}
							className="border 20px border-black h-[7vh] px-4 items-center"
						>
							{CopyText ? 'Copied!' : 'Copy'}
						</button>
					</div>
					<p className="w-[70vw] max-md:w-[90vw]">
						Place this URL in the attribute action of your form. Also, make sure
						your form uses method=&quot;POST&quot;. Finally, ensure that each
						input required has a name attribute
					</p>
				</div>
				<div className="flex gap-2 flex-col max-md:items-center">
					<h1 className="text-[18px] font-bold">See some examples</h1>
					<p className="w-[70vw] max-md:w-[90vw]">
						The <span className="text-[#c02dc1] font-bold">form Library</span>{' '}
						is filled with example forms to get you started. Find everything
						from a contact form to an RSVP form, edit the code live, and
						download or copy/paste your work.
					</p>
				</div>
				<div className="flex gap-3 flex-col max-md:items-center">
					<h1 className="text-[18px] font-bold max-md:w-[70vw] max-md:text-center">
						Want to adjust your preferences
					</h1>
					<p className="max-md:w-[85vw]">
						We&apos;ve got you covered for however you want to set up your form{' '}
						<Link
							href={'/'}
							className="text-[#c02dc1] font-bold flex items-center gap-2"
						>
							See more{' '}
							<span>
								<FaLongArrowAltRight className="text-[#c02dc1]" />
							</span>
						</Link>
					</p>
				</div>
			</div>
			<div className="flex flex-col max-sm:w-[90vw] max-md:items-center w-[50vw] relative overflow-x-hidden items-center gap-4">
				<SyntaxHighlighter
					customStyle={{padding: '40px', width: '100%', borderRadius: '10px'}}
					language="javascript"
					style={vscDarkPlus}
				>
					{codeString}
				</SyntaxHighlighter>
				<button
					className="bg-[#384951]  absolute top-3  py-1 text-sm px-4 rounded right-1  text-white text-opacity-40"
					onClick={handleCopyCode}
				>
					{isCopy ? 'Copied!' : 'Copy'}
				</button>
			</div>
		</div>
	);
}

export default Docs;
