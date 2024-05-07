import React from 'react'
import Link from 'next/link'

const Create = () => {
  return (
    <div className='mx-[70px] create rounded-[30px] items-center flex flex-col bg-[#0E232D] gap-[45px] my-[30px] max-md:items-center max-md:w-full max-md:mx-0 max-md:rounded-[0] py-[85px] '>
      <div className='flex flex-col items-center'>
        <h1 className='text-[35px] font-bold text-[white] max-md:text-[28px] max-md:w-[70vw] max-md:text-center'>Create a working form in seconds.</h1>
        <p className='text-[20px] text-[#C5D0D4] max-md:text-center max-md:w-[75vw]'>Grab your form code and see form submissions in under a minute.</p>
      </div>
      <div>
        <Link href={"/"} className="px-7 py-4 bg-[#c02dc1] text-white rounded-[5px]">Get Started</Link>
      </div>
    </div>
  )
}

export default Create