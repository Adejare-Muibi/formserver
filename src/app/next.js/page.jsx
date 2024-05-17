import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[50px] gap-[80px] w-full'>
        <div className='flex items-center justify-center gap-[40px] max-md:flex-col max-md:gap-[0px]'>
            <div className='bg-[black] h-[22vh] shadow w-[18vw] max-md:w-[80vw] max-md:h-[35vh] flex items-center justify-center rounded-[20px]'>
                <Image src={'/nextjs.svg'} height={200} width={200} className='w-[35%]'/>
            </div>
            <div>
                <h1 className='text-[60px] font-bold'>+</h1>
            </div>
            <div>
                <Image src={'/formserver.jpg'} className="max-md:w-[29vw]" height={130} width={130} alt="logg" priority/>
            </div>
        </div>
        <div className='flex justify-center items-center flex-col gap-[35px]'>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <h1 className='text-[40px] font-bold max-md:w-[70vw]'>React Forms with NextJS</h1>
                </div> 
                <div className='flex flex-col gap-[18px]'>
                    <h1 className='text-[30px] font-bold text-[#c02dc1] w-[50vw] max-md:w-[80vw]'>In this guide we&apos;ll show you how to add a contact form to your Next.js website using Formserver.</h1>
                    <p className='font-bold w-[50vw] text-[19px] max-md:w-[80vw]'>Formserver is a form backend that&apos;s an ideal companion for static site generators, letting you get on with building and deploying your Jamstack website.</p>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>At the end of this guide you should have a working React contact form in your Next.js project that sends you email notifications.</p>
                </div>  
            </div>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <h1 className='text-[30px] font-bold max-md:w-[70vw]'>Adding a form to Next.js</h1>
                </div> 
                <div className='flex flex-col gap-[18px]'>
                    <h1 className='text-[20px] w-[50vw] max-md:w-[80vw]'>Since Next.js uses React, the form code you&apos;re about to add can be neatly wrapped up in a React component. You&apos;re going to build a form component that you can place anywhere in your Next.js site. First create a new file called <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">contact-form.js</span> inside of your <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">components</span> directory.</h1>
                    <h1 className='text-[20px] w-[50vw] max-md:w-[80vw]'>Ne xt we&apos;ll build the form component using a helper library from Formserver, <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">@formspree/react</span>. This library contains a <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">useForm</span> hook to simplify the process of handling form submission events and managing form state. Install it with:</h1>
                    <h1 className='text-[20px] w-[50vw] max-md:w-[80vw]'>Ne xt we&apos;ll build the form component using a helper library from Formserver, <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">@formspree/react</span>. This library contains a <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">useForm</span> hook to simplify the process of handling form submission events and managing form state. Install it with:</h1>
                </div>  
                <div className='flex flex-col gap-[25px]'>
                    <div>
                        <h1 className='text-[17px]'>A few notes:</h1>
                    </div>
                    <ul className='flex flex-col gap-[15px] text-[18px] curr'>
                        <li className='w-[50vw] max-md:w-[80vw]'>Currently the form contains a placeholder <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">YOUR_FORM_ID</span>. You&apos;ll replace this with our own form endpoint.</li>
                        <li className='w-[50vw] max-md:w-[80vw]'>The <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">useForm</span> hook returns a <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">state</span> object and a <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">handleSubmit</span> function which we pass to the <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">onSubmit</span> form attribute. Combined, these provide a way to submit the form data via AJAX and update form state depending on the response received.</li>
                        <li className='w-[50vw] max-md:w-[80vw]'><span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">ValidationError</span> components are helpers that display error messages for field errors, or general form errors (if no <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">field</span> attribute is provided).</li>
                        <li className='w-[50vw] max-md:w-[80vw]'>For the sake of <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">clarity</span>, this form doesn&apos;t include any styling, but you can style it to your taste</li>
                        <li className='w-[50vw] max-md:w-[80vw]'>You can create any form you want by adding your own <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">input</span> tags and labels as you want</li>
                    </ul>
                </div> 
                <div className="flex">
					<h1 className='text-[25px] w-[50vw] max-md:w-[80vw]'>You&apos;ve got a Feedback? Reach out to us <span className='text-[#c02dc1] font-bold underline decoration-1'><Link href={'/help'}>here</Link></span></h1>
				</div> 
            </div>
        </div>
    </div>
  )
}

export default page