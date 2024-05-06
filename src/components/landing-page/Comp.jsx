import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Comp = () => {
  return (
    <div className='flex w-full my-[80px] items-center justify-around max-md:flex-col max-md:justify-center max-md:gap-[50px]'>
      <div className='flex lg:flex-col gap-[24px] max-md:gap-[40px] max-md:flex max-md:items-center max-md:justify-center'>
        <div className='gap-[13px] flex flex-col'>
          <Image src={"/formserver.jpg"} width={130} height={5} className='w-[]' />
          <h1 className='text-[20px] font-bold w-[13vw] max-md:hidden'>The form solution for any developer</h1>
        </div>
        <div className='flex gap-[10px] text-[#8D9396] max-md:hidden'>
          <FaFacebook className='text-[26px]' />
          <FaTwitter className='text-[26px]'/>
          <IoLogoGithub className='text-[26px]'/>
        </div>
        <div className='flex gap-[10px] text-[#8D9396] flex-col lg:hidden'>
          <div>
            <h1 className='text-[#c02dc1] font-bold'>SOCIAL</h1>
          </div>
          <div className='flex gap-[10px] text-[#8D9396]'>
            <FaFacebook className='text-[26px]' />
            <FaTwitter className='text-[26px]'/>
            <IoLogoGithub className='text-[26px]'/>
          </div>
        </div>
      </div>
      <div className='flex gap-[160px] max-md:gap-[40px]'>
        <div className='flex flex-col gap-[17px]'> 
          <div className='text-[#c02dc1] font-bold'>
            <h1>USEFULL LINKS</h1>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <Link href={"/"} className="hover:text-[#c02dc1]">Plans</Link>
            <Link href={"/"} className="hover:text-[#c02dc1]">Blog</Link>
            <Link href={"/"} className="hover:text-[#c02dc1]">Annoucement</Link>
            <Link href={"/"} className="hover:text-[#c02dc1]">API Documentation</Link>
            <Link href={"/"} className="hover:text-[#c02dc1]">Terms of Service</Link>
            <Link href={"/"} className="hover:text-[#c02dc1]">Privacy Policy</Link>
          </div>
        </div>
        <div className='flex flex-col gap-[17px]'>
          <div className='text-[#c02dc1] font-bold'>
            <h1>COMPANY</h1>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <Link href={"/"} className="hover:text-[#c02dc1]">About Us</Link>
            <Link href={"/"} className="hover:text-[#c02dc1]">Our Team</Link>
            <Link href={"/"} className="hover:text-[#c02dc1]">Other Services</Link>
          </div>
        </div>
      </div>
      <div className='flex gap-[20px] max-md:hidden'>
        <Image src={"/aicpa.svg"} width={70} height={180}/>
        <Image src={"/ccpa.svg"} width={50} height={50}/>
        <Image src={"/gdpr.svg"} width={50} height={50}/>
      </div>

    </div>
  )
}

export default Comp