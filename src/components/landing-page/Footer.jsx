import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#0E232D] text-[#717D83] flex justify-between max-md:justify-center max-md:items-center p-[35px] font-semibold max-md:flex-col-reverse max-md:gap-[20px]'>
        <div>
            <h1>&copy;2024 Freeform.Inc</h1>
        </div>
        <div className='flex gap-[20px] max-md:flex-col max-md:flex max-md:items-center'>
            <Link className="hover:text-[#DC2626]" href={"/"}>Terms of Service</Link>
            <Link className="hover:text-[#DC2626]" href={"/"}>Privacy Policy</Link>
            <Link className="hover:text-[#DC2626]" href={"/"}>Security</Link>
        </div>
    </div>
  )
}

export default Footer