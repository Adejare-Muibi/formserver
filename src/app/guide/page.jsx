import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col items-center gap-[80px] py-[40px] justify-center'>
        <div className='flex flex-col gap-1 items-center justify-center max-md:items-center'>
            <h1 className='text-[60px] font-bold max-md:w-[80vw] max-md:text-center max-md:text-[45px] max-md:leading-[40px]'>Integration Guides</h1>
            <p className='text-[20px] max-md:w-[80vw] max-md:text-center'>Contact forms that work out of the box with top website platforms.</p>
        </div>
        <div className='flex flex-col items-center gap-[30px] justify-center'>
            <div className='flex gap-12 max-md:flex-col max-md:items-center'>
                <div className='flex flex-col gap-3 max-md:items-center'>
                    <div className='bg-[black] h-[30vh] shadow w-[23vw] max-md:w-[80vw] flex items-center justify-center rounded-[20px]'>
                        <Image src={'/gitbook.svg'} height={200} width={200}/>
                    </div>
                    <Link href={'/gitbook'} className='text-[19px] text-[#c02dc1]'>Adding a form to GitBook</Link>
                </div>
                <div className='flex flex-col gap-3 max-md:items-center'>
                    <div className='bg-[white] shadow h-[30vh] w-[23vw] max-md:w-[80vw] flex items-center justify-center rounded-[20px]'>
                        <Image src={'/shopify.svg'} height={200} width={200}/>
                    </div>
                    <Link href={'/shopify'} className='text-[19px] text-[#c02dc1]'>Adding a form to Shopify</Link>
                </div>
                <div className='flex flex-col gap-3 max-md:items-center'>
                    <div className='bg-[white] shadow h-[30vh] w-[23vw] max-md:w-[80vw] flex items-center justify-center rounded-[20px]'>
                        <Image src={'/gatsby.svg'} height={200} width={200}/>
                    </div>
                    <Link href={'/'} className='text-[19px] text-[#c02dc1]'>React Forms with Gatsby</Link>
                </div>   
            </div>
            <div className='flex gap-12 max-md:flex-col max-md:items-center'>
                <div className='flex flex-col gap-3 max-md:items-center'>
                    <div className='bg-[black] h-[30vh] shadow w-[23vw] max-md:w-[80vw] flex items-center justify-center rounded-[20px]'>
                        <Image src={'/11ty.svg'} height={10} width={100}/>
                    </div>
                    <Link href={'/11tyHtml'} className='text-[19px] text-[#c02dc1]'>HTML Forms with Eleventy (11ty)</Link>
                </div>
                <div className='flex flex-col gap-3 max-md:items-center'>
                    <div className='bg-[black] shadow h-[30vh] w-[23vw] max-md:w-[80vw] flex items-center justify-center rounded-[20px]'>
                        <Image src={'/jekyll.svg'} height={200} width={200}/>
                    </div>
                    <Link href={'/'} className='text-[19px] text-[#c02dc1]'>HTML Forms with Jekyll</Link>
                </div>
                <div className='flex flex-col gap-3 max-md:items-center'>
                    <div className='bg-[black] shadow h-[30vh] w-[23vw] max-md:w-[80vw] flex items-center justify-center rounded-[20px]'>
                        <Image src={'/nextjs.svg'} height={200} width={200}/>
                    </div>
                    <Link href={'/next.js'} className='text-[19px] text-[#c02dc1]'>React Forms with NextJS</Link>
                </div>   
            </div>
        </div>

    </div>
  )
}

export default page