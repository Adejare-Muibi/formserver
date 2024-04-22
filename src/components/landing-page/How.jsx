import React from 'react'
import Image from 'next/image'
import { MdOutlineSecurity } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";

const How = () => {
  return (
    <div className='py-[100px] flex items-center w-full justify-around max-md:justify-center max-md:flex-col'>
        <div>
            <Image className='w-[] max-md:hidden rounded-[15px]' src={"/front.avif"} height={60} width={400} />
        </div>
        <div className='flex flex-col gap-[70px] max-md:items-center'>
            <div className='max-md:hidden'>
                <h1 className='font-bold text-[40px]'>How it works</h1>
                <p className='w-[42vw]'>Here's what happens after your form is submitted using Javascript forms, HTML forms or <span className='font-bold text-[17px]'>Formbutton</span>.</p>
            </div>
            <div className='max-md:flex max-md:flex-col max-md:items-center lg:hidden gap-[42px]'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-[40px]'>How it works</h1>
                <p className='w-[75vw] max-md:text-center'>Here's what happens after your form is submitted using Javascript forms, HTML forms or <span className='font-bold text-[17px]'>Formbutton</span>.</p>
                </div>
                <div>
                    <Image className='w-[] lg:hidden rounded-[15px]' src={"/front.avif"} height={140} width={250} />
                </div>
            </div>
            <div className='max-md:items-center max-md:flex max-md:flex-col max-md:gap-[22px] items-center'>
                <div className='flex flex-col gap-[45px] max-md:items-center'>
                    <div className='flex gap-[12px]'>
                        <div>
                            <MdOutlineSecurity className='text-[30px]'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px] max-md:text-[18px] max-md:w-[55vw]'>Spam blocked, data validated</h1>
                            <p className='max-md:w-[60vw]'>We validate your data server-side and use machine learning to protect you from spam</p>
                        </div>
                    </div>
                    <div className='flex gap-[12px]'>
                        <div>
                            <MdMarkEmailUnread className='text-[30px]'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px] max-md:text-[18px] max-md:w-[55vw]'>Email notifications and auto-responses are sent</h1>
                            <p className='max-md:w-[60vw]'>Our email templates are fully customizable</p>
                        </div>
                    </div>
                    <div className='flex gap-[12px]'>
                        <div>
                            <RiInboxArchiveFill className='text-[30px]'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px] max-md:text-[18px] max-md:w-[55vw]'>Submissions are saved to the Formspree Inbox</h1>
                            <p className='max-md:w-[60vw]'>View submissions, see daily analytics reports, and export to CSV or JSON</p>
                        </div>
                    </div>
                    <div className='flex gap-[12px]'>
                        <div>
                            <FaShareAlt className='text-[30px]'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px] max-md:text-[18px] max-md:w-[55vw]'>3rd party integrations are triggered</h1>
                            <p className='w-[42vw] max-md:w-[60vw]'>With our direct integrations, we'll get your data where it needs to be - no Zapier required</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex gap-[40px] items-center flex-col'>
                        <Image className='w-[10vw]' width={80} height={80} src={"/airtable.png"}/>
                        <MdMarkEmailUnread className='text-[30px]'/>   
                    </div>
                    <div className='flex gap-[40px] items-center flex-col'>
                        <Image width={80} height={80} src={"/convertkit.png"}/>
                        <Image width={80} height={80} src={"/freshdesk.png"}/>
                    </div>
                    <div className='flex gap-[40px] items-center flex-col'>
                        <Image width={80} height={80} src={"/discord.png"}/>
                        <Image width={80} height={80} src={"/gladly.png"}/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default How
