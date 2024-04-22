import React from 'react'

function page() {
  return (
    <div className='sectf flex gap-8 text-xl flex-col mt-[50px] justify-center items-center mb-9'>
        <h1 className='text-2xl font-bold'>User Profile</h1>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Name</label>
                <div className='flex justify-between items-center gap-2'>
                    <input className='inp bg-[rgb(243,244,246)] rounded w-full focus:outline-[#9CA3AF] p-2 px-8 ' type="text" placeholder='' />
                    <div> <button className='btn px-4 py-1 text-sm rounded-md text-white bg-[#c02dc1]'>Edit</button></div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Email</label>
                <div className='flex justify-between items-center gap-2'>
                    <input className='inp bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF] p-2' type="email" />
                    <div><button className='btn px-4 py-1 rounded-md text-sm text-white bg-[#c02dc1]'>Edit</button></div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Company Name</label>
                <div className='flex justify-between items-center gap-2'>
                    <input className='inp bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF] p-2' type="text" />
                    <div><button className='btn px-4 py-1 rounded-md text-sm text-white bg-[#c02dc1]'>Edit</button></div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Country</label>
                <select className='inp bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF] p-2' name="" id="">
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                </select>
            </div>
            
        </div>
        
    </div>
  )
}

export default page