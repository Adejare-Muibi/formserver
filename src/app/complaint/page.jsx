"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const page = () => {
    const [isCopy, setIsCopy] = useState(false);
    const codeString = `    <div className='lg:flex flex-col
     items-center gap-[30px] p-6'>
    <div className='lg:flex flex-col items-center 
    gap-[30px]'>
        <div className="flex flex-col items-center gap-[16px]
         max-md:mb-[15px]">
          <h1 className='text-[25px] max-sm:text-center 
          font-bold'>Complaint Form</h1>
          <p className=' max-md:w-[85vw] max-sm:text[px] 
          text-[15px] w-[47vw] text-center'>Use this HTML
           Complaint Form to provide an outlet for your 
           customers to voice their displeasure so you can 
           fix the problem.</p>
          <h5 className='text-[12px] max-sm:text-center 
          font-bold underline decoration-1 text-[#c02dc1]'> 
          GET THE CODE</h5> 
        </div>
        <form className='flex max-sm:flex   flex-col shadow-lg 
         gap-6 border-solid border-2  p-7'>
          <div className="flex flex-col gap-[6px]">
            <label className='lg:text-[15px]  text-[grey]' 
            htmlFor="Full-Name">Full Name</label>
            <input className='border-solid border-2  lg:w-[45vw]
              p-3' type="text" placeholder='First and Last' /> 
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className=' lg:text-[15px] text-[grey]'
             htmlFor="">Email Address</label>
            <input className='border-solid border-2 lg:w-[45vw] p-3'
             type="text" placeholder='@EmailToshConsultGmail.Com' />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label className='lg:text-[15px]  text-[grey]' 
            htmlFor="">Telephone Number (Optional)</label>
            <input className='border-solid border-2 lg:w-[45vw] 
            p-3' type="text" placeholder='+234 8145 0785' />
          </div>              

          <div className="flex flex-col gap-[6px]">
            <label className='text-[15px] text-[grey] '
             htmlFor="">Complaint</label>
            <textarea className='border-solid border-2 lg:w-[45vw]
             p-3' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='border-solid text-[grey] flex items-center
           justify-center border-2 max-md:w-[100%] py-[10px] w-[12vw]'>
           <button className=''>File Complaint</button></div>
        </form> 
    </div>
    <div className='flex flex-col items-center justify-center p-5'>
      <h2 className='text-[19px] text-[#0E232D] font-bold text-center
        items-center'>GET THE CODE</h2>
    <div>
`;
  
    const handleCopyCode = () => {
      navigator.clipboard.writeText(codeString);
      setIsCopy(!isCopy);
  
      setTimeout(() => {
        setIsCopy(false)
      }, 2000);
    };
  return (
    
    <div className='lg:flex flex-col items-center gap-[30px] p-6'>
        <div className='lg:flex flex-col items-center gap-[30px]'>
            <div className="flex flex-col items-center gap-[16px] max-md:mb-[15px]">
              <h1 className='text-[25px] max-sm:text-center font-bold'>Complaint Form</h1>
              <p className=' max-md:w-[85vw] max-sm:text[px] text-[15px] w-[47vw] text-center'>Use this HTML Complaint Form to provide an outlet for your customers to voice their displeasure so you can fix the problem.</p>
              <h5 className='text-[12px] max-sm:text-center font-bold underline decoration-1 text-[#c02dc1]'> GET THE CODE</h5> 
            </div>
            <form className='flex max-sm:flex   flex-col shadow-lg  gap-6 border-solid border-2  p-7'>
              <div className="flex flex-col gap-[6px]">
                <label className='lg:text-[15px]  text-[grey]' htmlFor="Full-Name">Full Name</label>
                <input className='border-solid border-2  lg:w-[45vw]  p-3' type="text" placeholder='First and Last' /> 
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className=' lg:text-[15px] text-[grey]' htmlFor="">Email Address</label>
                <input className='border-solid border-2 lg:w-[45vw] p-3' type="text" placeholder='@EmailToshConsultGmail.Com' />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className='lg:text-[15px]  text-[grey]' htmlFor="">Telephone Number (Optional)</label>
                <input className='border-solid border-2 lg:w-[45vw] p-3' type="text" placeholder='+234 8145 0785' />
              </div>              

              <div className="flex flex-col gap-[6px]">
                <label className='text-[15px] text-[grey] ' htmlFor="">Complaint</label>
                <textarea className='border-solid border-2 lg:w-[45vw] p-3' name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className='border-solid text-[grey] flex items-center justify-center border-2 max-md:w-[100%] py-[10px] w-[12vw]'><button className=''>File Complaint</button></div>
            </form> 
        </div>
        <div className='flex flex-col items-center justify-center p-5'>
          <h2 className='text-[19px] text-[#0E232D] font-bold text-center  items-center'>GET THE CODE</h2>
        <div>

        <div className="flex flex-col max-sm:w-[90vw] w-[50vw] relative overflow-x-hidden items-center gap-4">
          <SyntaxHighlighter
            customStyle={{ padding: "40px",width:"100%", borderRadius: "20px"}}
            language="javascript"
            style={vscDarkPlus}
          >
            {codeString}
          </SyntaxHighlighter>
          <button
            className="bg-[#384951]  absolute top-3  py-1 text-sm px-4 rounded right-1  text-white text-opacity-40"
            onClick={handleCopyCode}
          >
            {isCopy ? "Copied!" : "Copy"}
          </button>
        </div>
          <div className="flex justify-center items-center p-7">
              <button className="w-25 hover:bg-[#0D232D] font-bold text-[white] text-[15px] p-3 bg-[#C02DC1] ">Download HTML</button>
          </div>
        </div>
    </div>
        
        
 </div>
  )
}

export default page