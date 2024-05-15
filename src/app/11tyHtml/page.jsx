import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className='flex justify-center items-center flex-col gap-[30px]'>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <h1 className='text-[40px] font-bold max-md:w-[70vw]'>HTML Forms with Eleventy (11ty)</h1>
                </div> 
                <div className='flex flex-col gap-[18px]'>
                    <h1 className='text-[30px] font-bold text-[#c02dc1] w-[50vw] max-md:w-[80vw]'>In this guide we&apos;ll show you how to add a contact form to your Eleventy (11ty) website using Formspree.</h1>
                    <p className='font-bold w-[50vw] text-[19px] max-md:w-[80vw]'>Formserver is a form backend that&apos;s an ideal companion for static site generators, letting you get on with building and deploying your Jamstack website.</p>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>At the end of this guide you should have a working HTML contact form in your Eleventy project that sends you email notifications.</p>
                </div>  
            </div>
            <div className='flex flex-col gap-[30px]'>
                <div>
                    <h1 className='text-[40px] font-bold max-md:w-[70vw]'>Adding a form to Eleventy</h1>
                </div> 
                <div className='flex flex-col gap-[18px]'>
                    <h1 className='text-[30px] font-bold text-[#c02dc1] w-[50vw] max-md:w-[80vw]'>In this guide we&apos;ll show you how to add a contact form to your Eleventy (11ty) website using Formspree.</h1>
                    <p className='font-bold w-[50vw] text-[19px] max-md:w-[80vw]'>Formserver is a form backend that&apos;s an ideal companion for static site generators, letting you get on with building and deploying your Jamstack website.</p>
                    <p className='w-[50vw] text-[18px] max-md:w-[80vw]'>At the end of this guide you should have a working HTML contact form in your Eleventy project that sends you email notifications.</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default page