import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from "react-icons/fi";

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[50px] gap-[80px] w-full'>
        <div className='flex items-center justify-center gap-[40px] max-md:flex-col max-md:gap-[0px]'>
            <div className='bg-[black] h-[22vh] shadow w-[18vw] max-md:w-[80vw] max-md:h-[35vh] flex items-center justify-center rounded-[20px]'>
                <Image src={'/11ty.svg'} height={200} width={200} className='w-[35%]'/>
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
                    <h1 className='text-[40px] font-bold max-md:w-[70vw]'>HTML Forms with Eleventy (11ty)</h1>
                </div> 
                <div className='flex flex-col gap-[18px]'>
                    <h1 className='text-[30px] font-bold text-[#c02dc1] w-[50vw] max-md:w-[80vw]'>In this guide we&apos;ll show you how to add a contact form to your Eleventy (11ty) website using Formserver.</h1>
                    <p className='font-bold w-[50vw] text-[19px] max-md:w-[80vw]'>Formserver is a form backend that&apos;s an ideal companion for static site generators, letting you get on with building and deploying your Jamstack website.</p>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>At the end of this guide you should have a working HTML contact form in your Eleventy project that sends you email notifications.</p>
                </div>  
            </div>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <h1 className='text-[30px] font-bold max-md:w-[70vw]'>Adding a form to Eleventy</h1>
                </div> 
                <div className='flex flex-col gap-[18px]'>
                    <h1 className='text-[20px] font-bold text-[#c02dc1] w-[50vw] max-md:w-[80vw]'>Eleventy has an full templating API meaning that the form code you&apos;re about to add can be neatly wrapped up in a partial. Create a new file called contact-form.html inside of your _includes directory within the source of your Eleventy project.</h1>
                </div>  
            </div>
            <div className='flex flex-col gap-[27px]'>
                <div>
                    <h1 className='text-[30px] font-bold max-md:w-[70vw]'>Creating a form endpoint</h1>
                </div>
                <div  className='flex flex-col gap-[22px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <h1 className='text-[20px w-[50vw] text-[18px] max-md:w-[80vw]'>Next w&apos;ll create a form endpoint using Formserver. If you don&apos;t have an account yet you can sign up <span className='font-bold text-[#c02dc1]'><Link href={'/register'}>here</Link></span>.</h1>
                    </div> 
                    <div className='flex flex-col gap-[13px]'>
                        <h1 className='text-[20px w-[50vw] text-[18px] max-md:w-[80vw]'><span className='font-bold'></span> To start, create a new form with the <span className='font-bold'>+New form</span> button, call it <span className='font-bold'>Contact form</span> and update the recipient email to the email where you wish to receive your form submissions. Then click <span className='font-bold'>Create Form</span>.</h1>
                        <Image src={'/create.png'} width={600} height={100} className='shadow max-md:w-[70vw]'></Image>
                    </div>
                    <div className='flex flex-col gap-[13px]'>
                        <h1 className='text-[20px w-[50vw] text-[18px] max-md:w-[80vw]'><span className='font-bold'>Form Management:</span> Manage your forms by clicking on doc to copy-paste the following example form into your <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">form.html</span> partial and tailor it to meet your needs: Copy the 9 character ID from your new form&apos;s endpoint URL and replace the <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">YOUR_FORM_ID </span> placeholder in your form.html partial. </h1>
                        <div className='flex'>
                            <Image src={'/doc.png'} width={600} height={100} className='shadow max-md:w-[70vw]'></Image>
                            {/* <span className='text-[#c02dc1] text-[40px] relative right-[16%] top-[90px]'><FiArrowUpRight/></span> */}
                        </div>
                        <Image src={'/doc1.png'} width={600} height={100} className='shadow max-md:w-[70vw]'></Image>
                        <div className='flex'>
                         <Image src={'/doc2.png'} width={600} height={100} className='shadow max-md:w-[70vw]'></Image>
                         {/* <span className='text-[#c02dc1] text-[40px] relative right-[14%] top-[23px]'><FiArrowUpRight/></span> */}
                        </div>
                    </div>
                    <div className='flex flex-col gap-[15px]'>
                        <h1 className='text-[18px] w-[50vw] max-md:w-[80vw]'>You can update your form by <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">editing</span> and <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">deleting</span> your existing form(s) in settings</h1>
                        <Image src={'/settings.png'} width={600} height={100} className='shadow max-md:w-[70vw]'></Image>
                    </div>
                </div> 
                <div className='flex flex-col gap-[25px]'>
                    <div>
                        <h1 className='text-[17px]'>A few notes:</h1>
                    </div>
                    <ul className='flex flex-col gap-[15px] text-[18px] curr'>
                        <li className='w-[50vw] max-md:w-[80vw]'>Currently the <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">action</span> attribute contains a placeholder <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">YOUR_FORM_ID</span>. You&apos;ll replace this with our own form endpoint.</li>
                        <li className='w-[50vw] max-md:w-[80vw]'>The <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">method</span> attribute must be <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">POST</span> for the form to submit correctly.</li>
                        <li className='w-[50vw] max-md:w-[80vw]'>Each input has a <span className="bg-[#FDE6E9] text-[#c02dc1] font-bold py-[3px] px-[7px]">name</span> attribute. This is essential to correctly send the data to Formspree.</li>
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