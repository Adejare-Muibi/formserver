import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[50px] gap-[80px] w-full'>
        <div className='flex items-center justify-center gap-[40px] max-md:flex-col max-md:gap-[0px]'>
            <div className='bg-[black] h-[22vh] shadow w-[18vw] max-md:w-[80vw] max-md:h-[35vh] flex items-center justify-center rounded-[20px]'>
                <Image src={'/gitbook.svg'} height={200} width={200}/>
            </div>
            <div>
                <h1 className='text-[60px] font-bold'>+</h1>
            </div>
            <div>
                <Image src={'/formserver.jpg'} className="max-md:w-[29vw]" height={130} width={130} alt="log" priority/>
            </div>
        </div>
        <div className='flex justify-center items-center flex-col gap-[30px]'>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <h1 className='text-[40px] font-bold max-md:w-[70vw]'>Adding a form to GitBook</h1>
                </div> 
                <div className='flex flex-col gap-[18px]'>
                    <h1 className='text-[30px] font-bold text-[#c02dc1] w-[50vw] max-md:w-[80vw]'>In this guide we'll show you how to add a contact form to your GitBook website using Formserver.</h1>
                    <p className='font-bold w-[50vw] text-[19px] max-md:w-[80vw]'>Formserver is a form API that's an ideal companion for your GitBook documentation site, letting your users easily contact you.</p>
                </div>  
            </div>
            <div className='flex flex-col gap-[22px]'>
                <h1 className='font-bold text-[30px]'>Prerequisites</h1>
                <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>To follow this guide you're going to need a Formserver account, which you can <span className='text-[#c02dc1] font-bold'><Link href={'/register'}>sign up for free right here</Link></span>, and an existing GitBook website. Check out the <span className='text-[#c02dc1] font-bold'><Link href={'/https://www.gitbook.com/'}>GitBook website</Link></span> and documentation to get started.</p>
            </div>
            <div className='flex flex-col gap-[22px]'>
                <div className=''>
                    <h1 className='font-bold text-[30px]'>Getting started</h1>
                </div>
                <div className='flex flex-col gap-[22px]'>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>Within your Formspree account click the button labelled <span className='font-bold '>New Project</span> and name your new dashboard project. Projects let you group forms together if say you were using multiple forms on a single website for example. After naming your project click <span className='font-bold '>Create Project</span>.</p>
                    {/* <Image src={'/gitdoc.jpeg'} width={650} height={100} className='max-md:w-[80vw]'/> */}
                </div>
                <div className='flex flex-col gap-[22px]'>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>Next create a new form with the <span className='font-bold'>New Form</span> button, call it <span className='font-bold'>Contact Form</span> and update the recipient email to the email you wish to receive your form submissions in. Then click  <span className='font-bold'>Create Form</span>.</p>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>After creating the form, you&apos;ll land on the <span className='font-bold'>Integration</span> tab, where you&apos;ll see your form endpoint. Click the <span className='font-bold'>Copy</span> button to copy this URL to your endpoint.</p>
                </div>
                <div className='flex flex-col gap-[22px]'>
                    <h1 className='font-bold text-[18px]'>Integrating with GitBook</h1>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>Visit the GitBook Formspree integration page to add the Formspree integration.</p>
                </div>
                <div className='flex flex-col gap-[22px]'>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>Under the configuration section, include the Formspree endpoint copied from your Formspree dashboard. You can also choose which fields to include in the form.</p>
                    <h1 className='font-bold text-[25px]'>Troubleshooting</h1>
                </div>
                <div className='flex flex-col gap-[22px]'>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>If you would like to move the page that your form appears on, click the three dots to the left of the item on the page and choose which page to move to</p>
                    <Image src={'/gittrouble.webp'} width={650} height={100} className='max-md:w-[80vw] border-b-2 pb-[40px]'/>
                </div>
            </div>
            <div className='flex'>
               <h1 className='text-[25px] w-[50vw]'>You&apos;ve got a Feedback? Get back to us <span className='text-[#c02dc1] font-bold underline decoration-1'><Link href={'/help'}>here</Link></span></h1>
            </div>
        </div>
    </div>
  )
}

export default page