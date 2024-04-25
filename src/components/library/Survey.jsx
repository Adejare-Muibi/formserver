import React from 'react'

const Survey = () => {
  return (
    <div className='lg:flex flex-col items-center p-6'>
      <div className="flex flex-col items-center gap-[16px] max-md:mb-[15px]">
        <h1 className='text-[25px] max-sm:text-center font-bold'>Survey Form</h1>
        <p className=' max-sm:w-[88vw] max-sm:text[px] text-[15px] w-[47vw] text-center'>Use this HTML Survey Form to check your customers satisfaction level. You’ll understand better what works well in your offering and what could use some improvement.</p>
        <h5 className='text-[15px] max-sm:text-center font-bold underline decoration-1 text-[#c02dc1]'> GET THE CODE</h5> 
      </div>
      <form className='flex max-sm:flex flex-col  shadow-lg  gap-7 border-solid border-2 p-7'>
        <div className="flex flex-col gap-[6px]">
          <label className='lg:text-[15px]  text-[grey]' htmlFor="">Full Name</label>
          <input className='border-solid border-2  lg:w-[45vw]  p-3' type="text" placeholder='First and Last' />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className=' lg:text-[15px] text-[grey]' htmlFor="">Email Address</label>
          <input className='border-solid border-2 lg:w-[45vw] p-3' type="text" placeholder='@EmailToshConsultGjmail.Com' />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className='lg:text-[15px]  text-[grey]' htmlFor="">1.The Service Provide was Complete in a Timely Manner</label>
          <select className='p-3  border-solid border-2 text-[grey] ' name="timely" id="timely" required="">
            <option value="" selected="" disabled="">Choose</option>
            <option value="1">Strongly Agree</option>
            <option value="3">Agree</option>
            <option value="5">Neutral</option>
            <option value="7">Disagree</option>
            <option value="9">Strongly Disagree</option>
          </select>
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className='lg:text-[15px]  text-[grey]' htmlFor="">2.The quality of the work was high in quality.</label>
          <select className='p-3  border-solid border-2 text-[grey] ' name="timely" id="timely" required="">
            <option value="" selected="" disabled="">Choose</option>
            <option value="1">Strongly Agree</option>
            <option value="3">Agree</option>
            <option value="5">Neutral</option>
            <option value="7">Disagree</option>
            <option value="9">Strongly Disagree</option>
          </select>
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className='text-[15px] text-[grey] ' htmlFor="">2.The quality of the work was high in quality.</label>
          <textarea className='border-solid border-2 lg:w-[45vw]  p-3' name="" id="" cols="30" rows="10"></textarea>  
        </div>
        <div className='border-solid text-[grey] flex items-center justify-center border-2 max-md:w-[100%] py-[10px] w-[12vw]'><button className=''>Send Responses</button></div>
      </form> 
  </div>
  )
}

export default Survey
