import React from 'react'

function settings() {
  return (
    <div className='flex flex-col px-9 gap-[50px] max-sm:gap-[20px]  max-sm:mb-[150px] mt-[30px] max-sm:mt-[50px] text-2xl  mb-4'>
        <h1>Settings</h1>
        <div className='flex justify-around gap-5 max-sm:flex-col-reverse'>
            <div className='flex flex-col gap-6'>
                <div className='flex items-center text-xl font-bold justify-center'><h2>Password Update</h2></div>
                <div className='flex gap-2 text-xl max-sm:flex-col'>
                    <label className='w-[60%]' htmlFor="">Old Password</label>
                    <input className='inp bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-8 ' type="text" placeholder='' />
                </div>
                <div className='flex gap-2 text-xl max-sm:flex-col'>
                    <label className='w-[60%]' htmlFor="">New Password</label>
                    <input className='inp bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-8 ' type="text" placeholder='' />
                </div>
                <div><button className='btn float-right px-4 py-1 text-sm rounded-md text-white bg-[#c02dc1]'>Update</button></div>
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>User Plan</h2>
                <div className='new py-[50px] px-[60px] bg-[#F3F4F6] border-2 rounded-lg'>
                    <h2>Basic plan</h2>
                    <div><button className='btn px-4 py-1 text-sm rounded-md text-white bg-[#c02dc1]'>Upgrade plan</button></div>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center gap-8 items-center'>
            <div className='text-center text-xl'><h1>Join Our Community</h1></div>
            <div className='flex max-sm:flex-col justify-between gap-28 max-sm:gap-8'>
            <div><button className='btn px-9 py-4 text-xl rounded-md text-white bg-[#c02dc1] hover:text-2xl'>Twitter</button></div>
            <div><button className='btn px-9 py-4 text-xl rounded-md text-white bg-[#c02dc1]'>Discord</button></div>
            <div><button className='btn px-7 py-4 text-xl rounded-md text-white bg-[#c02dc1]'>Telegram</button></div>
            </div>
        </div>
    </div>
  )
}

export default settings