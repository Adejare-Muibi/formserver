"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


const Simple = () => {
    const [isCopy, setIsCopy] = useState(false);
  const codeString = `<form className='flex max-sm:flex  flex-col  shadow-lg  gap-4 border-solid border-2   p-7'>     
  <label className='lg:text-[15px]  text-[grey]' htmlFor="Full-Name">Full Name</label>
  <input className='border-solid border-2  lg:w-[45vw]  p-3' type="text" placeholder='First and Last' />
  <label className=' lg:text-[15px] text-[grey]' htmlFor="">Email Address</label>
  <input className='border-solid border-2 lg:w-[45vw] p-3' type="text" placeholder='@EmailToshConsultGjmail.Com' />
  <label className='text-[15px] text-[grey] ' htmlFor="">Message</label>
  <textarea className='border-solid border-2 lg:w-[45vw]  p-3' name="" id="" cols="30" rows="10"></textarea>

  <div className='border-solid text-[grey]  border-2 lg:w-[7vw] p-2 items-center flex justify-center'><button>Submit</button></div>
  </form> `;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setIsCopy(!isCopy);

    setTimeout(() => {
      setIsCopy(false)
    }, 2000);
  };

  return (
    <div className='lg:flex flex-col items-center gap-4 p-6'>
        <div className='lg:flex flex-col items-center'>
            <h1 className='text-[35px] max-sm:text-center font-bold'>Simple Contact Form</h1>
            <p className=' max-sm:w-[100vw] max-sm:text[px] p-8 text-[15px] w-[47vw] text-center'>Use this simple HTML contact form on your website to provide viewers a quick and easy way to send you an email message without them having to know your email address.</p>
                <h5 className='text-[15px] max-sm:text-center pb-[30px] font-bold underline decoration-1 text-[#c02dc1]'> GET THE CODE</h5> 
        
            <form className='flex max-sm:flex   flex-col  shadow-lg  gap-4 border-solid border-2   p-7'>
        
            <label className='lg:text-[15px]  text-[grey]' htmlFor="Full-Name">Full Name</label>
            <input className='border-solid border-2  lg:w-[45vw]  p-3' type="text" placeholder='First and Last' />

            <label className=' lg:text-[15px] text-[grey]' htmlFor="">Email Address</label>
            <input className='border-solid border-2 lg:w-[45vw] p-3' type="text" placeholder='@EmailToshConsultGjmail.Com' />
            
            

            <label className='text-[15px] text-[grey] ' htmlFor="">Message</label>
            <textarea className='border-solid border-2 lg:w-[45vw]  p-3' name="" id="" cols="30" rows="10"></textarea>

            <div className='border-solid text-[grey]  border-2 lg:w-[7vw] p-2 items-center flex justify-center'><button>Submit</button></div>
            </form> 
        </div>
        <div className='flex flex-col items-center justify-center p-5'>
        <h2 className='text-[25px] text-[#0E232D] font-bold text-center  items-center'>GET THE CODE</h2>
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

export default Simple