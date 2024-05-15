import React from 'react';
import Link from 'next/link';

const page = () => {
	return (
		<div className="flex flex-col w-full items-center justify-center my-[40px] gap-[120px]">
			<div className="flex flex-col items-center gap-2">
				<h1 className="text-[43px] max-md:text-[32px] font-extrabold max-md:w-[65vw] max-md:text-center">
					Our commitment to security
				</h1>
				<p className="max-md:w-[90vw] max-md:text-center">
					Your security, safety, and privacy is our top priority at Formserver
				</p>
			</div>
			<div className="flex flex-col gap-[120px] max-md:items-center">
				<div className="flex flex-col gap-[45px] max-md:items-center">
					<div className="flex flex-col gap-2 max-md:text-center">
						<h1 className="font-extrabold text-[33px]">Secure by design</h1>
						<p className="max-md:w-[90vw] max-md:text-center">
							We&paos;ve built Formspree from the start with your security and
							compliance in mind.
						</p>
					</div>
					<div className="flex gap-14 max-md:flex-col">
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">Cloud security</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								Formserver uses an industry-leading Web Application Firewall
								with automatic updates to thwart the latest attack vectors.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">Encryption</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								All databases are encrypted at rest using AES-256 block-level
								storage encryption. We use a minimum of TLS 1.2 to encrypt
								network traffic between users&paos; browsers and Formspree.
								Formserver salts and hashes passwords.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">
								Vulnerability management
							</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								We perform vulnerability scanning and actively monitor for
								threats. We actively monitor and log various cloud services. We
								use a leading intelligent threat and anomaly detection service
								to proactively to identify and respond to any potential threats.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-[45px] max-md:items-center">
					<div className="flex flex-col gap-2 max-md:items-center">
						<h1 className="font-extrabold text-[33px] max-md:w-[50vw] max-md:text-center">
							Organizational security
						</h1>
						<p className="max-md:w-[90vw] max-md:text-center">
							All of our team members are responsible for ensuring that your
							data remains secure, and we have adopted it into our culture.
						</p>
					</div>
					<div className="flex gap-14 max-md:flex-col">
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">Least privileged access</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								We follow the principle of least privilege. Access to cloud
								infrastructure and tools with access to customer data are
								limited to authorized personnel who require it for their role.
								We enforce 2 factor authentication and strong password policies
								to access critical systems.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">Access reviews</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								We maintain a dedicated offboarding process to immediately
								revoke access when no longer required. We also conduct quarterly
								access reviews of all team members to audit access to sensitive
								systems.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px] max-md:w-[65vw] max-md:text-center">
								Business continuity and disaster recovery
							</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								We have developed an action plan distributed to all personnel to
								prepare for any unexpected disasters. We regularly backup all
								critical data systems and run walkthroughs to allow us to
								quickly recover in the event of a catastrophe.
							</p>
						</div>
					</div>
					<div className="flex gap-14 max-md:flex-col">
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">Incident response</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								We have a process for handling information security events
								including escalation procedures, rapid mitigation, and
								communication. Formspree maintains a bug bounty program to
								encourage responsible disclosure.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">Security awareness</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								Personnel are required to undergo security awareness training
								covering phishing and password management. We perform background
								checks on all new team members in accordance with local laws.
								All team members are required to sign and adhere to an industry
								standard confidentiality agreement prior to their first day of
								work.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">Vendor management</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								Vendor risk is determined and vendor reviews are performed prior
								to authorizing a new vendor. We conduct at least annual risk
								assessments to identify any potential threats.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-[45px] max-md:items-center">
					<div className="flex flex-col gap-2 max-md:items-center">
						<h1 className="font-extrabold text-[33px] max-md:w-[70vw] max-md:text-center">
							Upholding the highest standards
						</h1>
						<p className="max-md:w-[90vw] max-md:text-center">
							We follow industry standards in ensuring we protect your privacy
							and security.
						</p>
					</div>
					<div className="flex gap-14 max-md:flex-col">
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">GDPR</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								Formserver is fully GDPR compliant and believes in the mission
								of advancing privacy worldwide. GDPR compliance is shown through
								actions, not through certifications. GDPR compliance is included
								in our{' '}
								<span className="text-[#c02dc1] font-bold">
									<Link href={'/privacy-policy'}>Privacy Policy</Link>
								</span>
								. We rely on Standard Contractual Clauses (SCCs) as a data
								processor.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">SOC 2 Type II</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								Formserver has achieved SOC 2 Type 2 compliance and been audited
								by an independent third-party auditor. Our auditor is certified
								by the American Institute of Certified Public Accountants
								(AICPA) to evaluate a service organizations controls related to
								the Trust Services Criteria. If you&paos;d like a copy of our
								audit report, please reach out to security@formserver.io.
							</p>
						</div>
						<div className="flex flex-col gap-4 max-md:items-center">
							<h1 className="font-bold text-[17px]">CCPA</h1>
							<p className="w-[27vw] text-[15px] max-md:w-[80vw] max-md:text-center">
								We ensure California consumers can exercise their rights under
								CCPA. This includes the right to know, right to delete, right to
								opt-out, and right to non-discrimination.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-6">
				<div className="flex flex-col items-center gap-1">
					<h1 className="text-[43px] max-md:text-[32px] font-extrabold max-md:w-[65vw] max-md:text-center">
						Report vulnerabilities
					</h1>
					<p className="max-md:w-[80vw] max-md:text-center">
						Found a potential issue? Please help us by reporting it so we can
						fix it quickly
					</p>
				</div>
				<Link
					href={'/help'}
					className="px-7 py-4 bg-[#c02dc1] text-white rounded-[5px]"
				>
					Report an issue
				</Link>
			</div>
		</div>
	);
};

export default page;
