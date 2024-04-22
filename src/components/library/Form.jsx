"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


const Form = () => {

  const [isCopy, setIsCopy] = useState(false);
  const codeString = `<form>
  <label  htmlFor="">FULL NAME</label>
  <input type="text" placeholder='First and Last'/>

  <label  htmlFor="">Email Address</label>
  <input type="text" placeholder='@EmailtoshConsultgmail.com'/>
  
  <label htmlFor="">1.The Service Provide was Complete Manner</label>
  <select  name="timely" id="timely" required="">
    <option value="" selected="" disabled="">Choose</option>
    <option value="1">Strongly Agree</option>
    <option value="3">Agree</option> 
    <option value="5">Neutral</option>
    <option value="7">Disagree</option>
    <option value="9">Strongly Disagree</option>
  </select>

  <label  htmlFor="">2.The quality of the work was high in quality.</label>
  <select  name="timely" id="timely" required="">
     <option value="" selected="" disabled="">Choose</option>
    <option value="1">Strongly Agree</option>
    <option value="3">Agree</option>
    <option value="5">Neutral</option>

    <option value="7">Disagree</option>
    <option value="9">Strongly Disagree</option>
  </select>

  <label  htmlFor="">2.The quality of the work was high in quality.</label>
  <textarea' name="" id="" cols="30" rows="10"></textarea>

  <div><button>Send Respondses</button></div>
</form>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setIsCopy(!isCopy);

    setTimeout(() => {
      setIsCopy(false)
    }, 2000);
  };

  return (
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
    
  )
}

export default Form
