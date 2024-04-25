import React from 'react'
import Image from 'next/image'

const Squash = () => {
  return (
    <div className='w-[full] flex flex-col items-center justify-center gap-[90px] my-[70px]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[30px] font-bold'>Squash spam</h1>
        <p className='text-[19px] max-md:w-[80vw] max-md:text-center'>Automatic filtering, easy captchas, custom rules</p>
      </div>
      <div className='flex w-full justify-around max-md:justify-center max-md:flex-col max-md:items-center max-md:gap-[50px]'>
        <div className='flex flex-col gap-[20px] max-md:items-center'>
          <div>
            <Image src={"/formserver.jpg"} width={120} height={5} className='w-[]' />
          </div>
          <div className='max-md:items-center flex flex-col'>
            <h1 className='text-[20px] font-bold max-md:text-[17px]'>Formserver spam filter</h1>
            <p>Machine learning spam filtering</p>
          </div>
        </div>
        <div className='flex flex-col gap-[26px] max-md:items-center'>
          <Image src={"/recaptcha.jpg"} width={50} height={20} />
         <div className='max-md:items-center flex flex-col'>
            <h1 className='text-[20px] font-bold max-md:text-[17px]'>reCaptcha</h1>
            <p>One click to add recaptcha</p>
         </div>
        </div>
        <div className='flex flex-col gap-[26px] max-md:items-center'>
          <Image src={"/customrule.png"} width={50} height={50} />
          <div className='max-md:items-center flex flex-col'>
            <h1 className='text-[20px] font-bold max-md:text-[17px]'>Custom rules</h1>
            <p>Custom spam rules let you fight back</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Squash