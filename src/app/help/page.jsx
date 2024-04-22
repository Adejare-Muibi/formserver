import React from 'react'
import Link from 'next/link';
import Footer from "../../components/landing-page/Footer"


const page = () => {
  return (
    <>
    <div className='bg-[#e7c7e7] flex flex-col items-center gap-[40px] justify-center w-full pt-[100px] pb-[30px] overflow-hidden'>
        <div className='flex flex-col justify-center gap-[30px] items-center'>
            <div>
                <h1 className='font-bold text-[35px] max-md:w-[70vw] max-md:text-center'>WE'RE HERE TO HELP!</h1>
            </div>
            <div className='flex flex-col gap-[20px] text-[17px] max-md:text-[16px]'>
                <p className='w-[60vw] max-md:w-[87vw]'>Please feel free to reach out if you have any questions, we are 100% responsive and reply instantly. Please send us an email at formserver4u@gmail.com or you can fill out the form below. This page will also HELP you.</p>
            </div>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <form action="" className='flex flex-col bg-transparent gap-[30px]'>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex gap-[13px]'>
                        <input className='w-[29.5vw] pl-[10.5px] outline-[#CB6CE7] py-[6px] rounded-[5px] max-md:w-[45vw]' type="text" name='Full_Name' id='Full_Name' placeholder='Full Name' />
                        <input className='w-[29.5vw] pl-[10.5px] outline-[#CB6CE7] py-[6px] rounded-[5px] max-md:w-[45vw]' type="text" placeholder='Email Address' />
                    </div>
                    <div className='flex gap-[13px]'>
                        <input className='w-[29.5vw] pl-[10.5px] outline-[#CB6CE7] py-[6px] rounded-[5px] max-md:w-[45vw]' type="text" placeholder='Live Form URL (Optional)' />
                        <input className='w-[29.5vw] pl-[10.5px] outline-[#CB6CE7] py-[6px] rounded-[5px] max-md:w-[45vw]' type="text" placeholder='Live Form Email Address (Optional)'/>
                    </div>
                </div>
                <textarea className='pl-[10.5px] pt-[10px] outline-[#CB6CE7] border-none rounded-[5px]' name="" id="" cols="30" rows="10" placeholder='Tell us about your problem in detailed'></textarea>
            </form>
            <div className='flex flex-col gap-[20px]'>
                <button className="px-7 py-3 bg-[#c02dc1] text-white border-none rounded-[5px] font-semibold">Submit Your Inquiry</button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page