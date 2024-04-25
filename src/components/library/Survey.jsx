import React from 'react'

const Survey = () => {
  return (
    <div className='lg:flex flex-col items-center p-6'>
        <h1 className='text-[35px] max-sm:text-center font-bold'>Survey Form</h1>
        <p className=' max-sm:w-[100vw] max-sm:text[px] p-8 text-[15px] w-[47vw] text-center'>Use this HTML Survey Form to check your customers satisfaction level. You’ll understand better what works well in your offering and what could use some improvement.</p>
            <h5 className='text-[20px] max-sm:text-center pb-[30px] font-bold underline decoration-1 text-[#c02dc1]'> GET THE CODE</h5> 
    
        <form className='flex max-sm:flex   flex-col  shadow-lg  gap-4 border-solid border-2   p-7'>
      
          <label className='lg:text-[15px]  text-[grey]' htmlFor="">FULL NAME</label>
          <input className='border-solid border-2  lg:w-[45vw]  p-3' type="text" placeholder='First and Last' />

          <label className=' lg:text-[15px] text-[grey]' htmlFor="">Email Address</label>
          <input className='border-solid border-2 lg:w-[45vw] p-3' type="text" placeholder='@EmailToshConsultGjmail.Com' />
          
          <label className='lg:text-[15px]  text-[grey]' htmlFor="">1.The Service Provide was Complete in a Timely Manner</label>
          <select className='p-3  border-solid border-2 text-[grey] ' name="timely" id="timely" required="">
            <option value="" selected="" disabled="">Choose</option>
            <option value="1">Strongly Agree</option>
            <option value="3">Agree</option>
            <option value="5">Neutral</option>
            <option value="7">Disagree</option>
            <option value="9">Strongly Disagree</option>
          </select>

          <label className='text-[15px]  text-[grey]' htmlFor="">2.The quality of the work was high in quality.</label>
          <select className='p-3  border-solid border-2 text-[grey] ' name="timely" id="timely" required="">
            <option value="" selected="" disabled="">Choose</option>
            <option value="1">Strongly Agree</option>
            <option value="3">Agree</option>
            <option value="5">Neutral</option>
            <option value="7">Disagree</option>
            <option value="9">Strongly Disagree</option>
          </select>

          <label className='text-[15px] text-[grey] ' htmlFor="">2.The quality of the work was high in quality.</label>
          <textarea className='border-solid border-2 lg:w-[45vw]  p-3' name="" id="" cols="30" rows="10"></textarea>

          <div className='border-solid text-[grey]  border-2 lg:w-[15vw] p-3'><button>Send Responses</button></div>
        </form> 
 </div>
  )
}

export default Survey
