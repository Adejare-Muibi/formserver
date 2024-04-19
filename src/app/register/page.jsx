import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex w-[full] p-[40px] gap-[50px]'>
      <div>
        <Link className='text-[#DC2626]' href={"/register"}></Link>
      

        <form className='w-full flex flex-col gap-2 mt-5'>
          <div className='flex gap-[40px]'>
            <div className=''>
              <label htmlFor="">First Name*</label>
              <input type="password" className='p-2  bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]' />
            </div>
            <div>
              <label  htmlFor="">First Name*</label>
              <input type="password" className='p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]' /> 
            </div>
          </div>
          <div className='mb-4 relative'>
            <label htmlFor="">Email*</label>
            <input type="password" className='p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]' />
          </div>
          <div className='mb-4 relative'>
            <label htmlFor="">password*</label>
            <input type="password" className='p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]' />
          </div>
        </form>
        <div className='text-sm '>
          <span>Please check out our</span> <Link className='text-[#DC2626]' href={"/"}>Help Site</Link>, <Link className='text-[#DC2626]' href={"/"}>Terms of Use</Link>, <span>and</span> <Link className='text-[#DC2626]' href={"/"}>Privacy Policy</Link>
          <h4>Please send me occasional Formspree news updates</h4>
          <div className='flex flex-col '>
            <Link className='p-2 w-[25%] rounded-[4px] mt-[41px] mb-[15px] bg-[#F3F4F6] text-[#9fa2a8]' href={"/register"}>
              <button>Register</button>
            </Link>
          </div  >
            <span>Already have an account?</span>  <Link className='text-[#DC2626] ' href={"/"}>Register</Link>,
        </div>

      </div>
    
    

      <div className='bg-black flex flex-col p-[30px] min-h-[80vh] rounded-bl-[15px] rounded-br-[15px] sm:hidden'>
        <div className='flex flex-col gap-[40px]'>
          <div className='text-white'>
            <h1>Block spam with AI</h1>
            <h4 className='w-[55%] mt-[20px]'>With Formshield your forms are protected using a combination of AI, machine learning and pattern matching techniques.</h4>
          </div>
          <div className='text-white'>
            <h1>All your submissions in one place</h1>
            <h4 className='w-[55%]'>No more hunting through emails. You can search, sort and filter your form submissions in your Formspree dashboard.</h4>
          </div>
          <div className='text-white'>
            <h1>Trigger 3rd party integrations</h1>
            <h4 className='w-[55%]'>Formspree has built dozens of integrations with popular 3rd party services. We monitor each plugin to ensure your data is delivered.</h4>
          </div>
          <div className='text-white'>
            <p>Trusted by 500,000+ freelancers, agencies, and Fortune 500 companies</p>
            <div className='text-white flex gap-2'>
              <h1>Amazon</h1>
              <h1>Adobe</h1>
              <h1>Walmart</h1>
              <h1>IBM</h1>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default page
