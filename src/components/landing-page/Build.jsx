
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaReact } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaWpforms } from "react-icons/fa6";

const Build = () => {
  return (
    <div className="build justify-center flex flex-col py-[50px] max-md:py-[0] gap-[30px]">
      <div className="flex justify-center flex-col gap-[60px] items-center">
        <div>
          <h2 className='text-[#0E232D] text-[40px] font-bold max-md:text-[30px] max-md:text-center max-md:w-[70vw]'>Build forms your way</h2>
        </div>
        <div className='build1 flex w-full justify-around max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[50px]'>
          <div className='flex flex-col gap-[15px] max-md:items-center'>
            <div className='flex flex-col gap-[15px] max-md:items-center'>
              <div>
               <FaReact className=" text-[#c02dc1] text-[4vw] max-md:text-[12vw]"/>
              </div>
              <div className='flex flex-col gap-[6px] max-md:items-center'>
                <h1 className='text-[#0E232D] text-[20px] font-semibold'>Powerful JavaScript forms</h1>
                <p className='w-[26vw] max-md:w-[75vw] max-md:text-center'>Use the Formspree CLI and React library. Deploy your production forms with CI/CD.</p>
              </div>
            </div>
            <div className='flex items-center gap-[7px]'>
              <Link className="text-[#c02dc1] font-semibold" href={"/"}>Learn more</Link>
              <FaLongArrowAltRight className='text-[#c02dc1]' />
            </div>
          </div>
          <div className='flex flex-col gap-[15px] max-md:items-center'>
            <div className='flex flex-col gap-[15px] max-md:items-center'>
              <div>
                <TiHtml5 className=" text-[#c02dc1] text-[4vw] max-md:text-[12vw]"/>
              </div>
              <div className='flex flex-col gap-[6px] max-md:items-center'>
                <h1 className='text-[#0E232D] text-[20px] font-semibold'>Simple HTML forms</h1>
                <p className='w-[26vw] max-md:w-[75vw] max-md:text-center'>Just set your form&apos;s <span className='bg-[#FDE6E9] text-[#c02dc1] py-[3px] px-[7px]'>action</span> to our endpoint. No server code requi#c02dc1.</p>
              </div>
            </div>
            <div className='flex items-center gap-[7px]'>
              <Link className="text-[#c02dc1] font-semibold" href={"/"}>Learn more</Link>
              <FaLongArrowAltRight className='text-[#c02dc1]' />
            </div>
          </div>
          <div className='flex flex-col gap-[15px] max-md:items-center'>
            <div className='flex flex-col gap-[15px] max-md:items-center'>
              <div>
                <FaWpforms className=" text-[#c02dc1] text-[3vw] max-md:text-[11vw]"/>
              </div>
              <div className='flex flex-col gap-[6px] max-md:items-center'>
                <h1 className='text-[#0E232D] text-[20px] font-semibold'>Formbutton - Easy popup forms</h1>
                <p className='w-[26vw] max-md:w-[75vw] max-md:text-center'>Copy/paste the snippet to overlay an attractive popup form.</p>
              </div>
            </div>
            <div className='flex items-center gap-[7px]'>
              <Link className="text-[#c02dc1] font-semibold" href={"/"}>Learn more</Link>
              <FaLongArrowAltRight className='text-[#c02dc1]' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-[#0E232D] gap-[10%] mx-[45px] py-[58px] max-md:gap-[30px] max-md:flex-col-reverse max-md:py-[25px] max-md:mx-[0px] px-[25px] rounded-[30px] max-md:justify-center max-md:w-full max-md:rounded-[0px]'>
        <div className='flex justify-around w-full max-md:justify-center'>
          <div className='flex flex-col gap-[40px]'>
            <Image className='' src={"/pga.webp"} height={120} width={150} alt="pga" priority/>
            <Image className='' src={"/cdc.png"} height={120} width={150} alt="cdc" priority/>
            <Image className='' src={"/teladoc.webp"} height={120} width={150} alt="tela" priority/>
            <Image className='' src={"/adobe.webp"} height={120} width={150} alt="adobe" priority/>
          </div>
          <div className='flex flex-col gap-[40px]'>
            <Image className='' src={"/amazon1.png"} height={120} width={150} alt="pga" priority/>
            <Image className='' src={"/ups.webp"} height={120} width={150} alt="cdc" priority/>
            <Image className='' src={"/tmobile.webp"} height={120} width={150} alt="tela" priority/>
            <Image className='' src={"/readme.webp"} height={120} width={150} alt="adobe" priority/>
          </div>
          <div className='flex flex-col gap-[40px]'>
            <Image className='' src={"/openai.webp"} height={120} width={150} alt="pga" priority/>
            <Image className='' src={"/walmart.webp"} height={120} width={150} alt="cdc" priority/>
            <Image className='' src={"/ilia.webp"} height={120} width={150} alt="tela" priority/>
            <Image className='' src={"/ibm.webp"} height={120} width={150} alt="adobe" priority/>
          </div>
        </div>
        <div className='text-[white] text-[33px] font-bold max-md:text-[25px] max-md:text-center'>
          <h1 className=''>Trusted by 500,000+ freelancers, agencies, and Fortune 500 companies</h1>
        </div>

      </div>
    </div>
  )
}

export default Build