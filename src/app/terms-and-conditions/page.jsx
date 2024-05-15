import React from 'react'
import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className='flex flex-col gap-6 items-center my-[40px] w-[100%] terms'>
        
        <div className='flex flex-col gap-5 max-md:items-center'>
            <div className='flex flex-col gap-14 max-md:items-center'>
                <h1 className='text-[36px] max-md:text-[32px] font-bold max-md:w-[65vw] max-md:text-center'>Formserver Terms of Service</h1>
                <p>Last updated: May 08, 2024</p>
            </div>
            <div className='flex flex-col gap-5 max-md:items-center'>
                <h1 className='w-[80vw] max-md:w-[80vw]'>Welcome to FormServer.io! These Terms of Service ("Terms") govern your access to and use of FormServer.io's website, products, and services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. Please read them carefully before using the Services.</h1>
            </div>
        </div>
        <div className='flex flex-col gap-5 max-md:items-center'>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>1. Acceptance of Terms</h1>
                <p className='w-[80vw]'>By accessing or using the Services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited from using or accessing the Services.</p>
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>2. Description of Services</h1>
                <p className='w-[80vw]'>FormServer.io provides a platform that simplifies form submission for both developers and no-code users. Our Services include, but are not limited to, form creation, customization, hosting, submission management, and data analysis tools.</p>
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>3. User Accounts</h1>
                <p className='w-[80vw]'>In order to access certain features of the Services, you may be required to create a user account. You agree to provide accurate and complete information when creating your account, and to keep your password secure. You are responsible for all activities that occur under your account.</p>   
            </div>
            <div className='gap-4 flex flex-col'>
                <div className='gap-1 flex flex-col'>
                    <h1 className='font-bold text-[15px]'>4. User Responsibilities</h1> 
                    <p className='max-md:w-[80vw]'>When using FormServer.io, you agree to:</p> 
                </div>
                <ul className='my ml-[45px] flex flex-col gap-1 max-md:ml-[0px]'>
                    <li className='max-md:w-[80vw]'>Comply with all applicable laws and regulations.</li>
                    <li className='max-md:w-[80vw]'>Respect the intellectual property rights of others.</li>
                    <li className='max-md:w-[80vw]'>Not engage in any activity that interferes with or disrupts the Services.</li>
                    <li className='max-md:w-[80vw]'>Not attempt to gain unauthorized access to any part of the Services.</li>
                </ul>
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>5. Data Privacy</h1>
                <p className='w-[80vw]'>FormServer.io respects your privacy and is committed to protecting your personal data. Our Privacy Policy explains how we collect, use, and disclose information about you. By using the Services, you consent to the collection and use of your data as described in our Privacy Policy.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>6. Intellectual Property</h1>
                <p className='w-[80vw]'>All content and materials available through the Services, including but not limited to text, graphics, logos, images, and software, are the property of FormServer.io or its licensors and are protected by copyright and other intellectual property laws.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>7. Payment Terms</h1>
                <p className='w-[80vw]'>Certain features of the Services may require payment of fees. By using these paid features, you agree to pay all applicable fees and charges. All payments are non-refundable unless otherwise stated.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>8. Disclaimer of Warranties</h1>
                <p className='w-[80vw]'>The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranties of any kind, either express or implied. FormServer.io makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the Services.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>9. Limitation of Liability</h1>
                <p className='w-[80vw]'>In no event shall FormServer.io be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the Services, whether based on contract, tort, strict liability, or any other legal theory.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>10. Indemnification</h1>
                <p className='w-[80vw]'>You agree to indemnify and hold harmless FormServer.io and its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses arising out of or in any way related to your use of the Services or violation of these Terms.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>11. Changes to Terms</h1>
                <p className='w-[80vw]'>FormServer.io reserves the right to modify or update these Terms at any time without prior notice. By continuing to use the Services after such changes are made, you agree to be bound by the revised Terms.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>12. Governing Law</h1>
                <p className='w-[80vw]'>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.</p>   
            </div>
            <div className='gap-1 flex flex-col'>
                <h1 className='font-bold text-[15px]'>12. Contact Us</h1>
                <p className='max-md:w-[80vw]'>If you have any questions or concerns about these Terms, please contact us at [Contact Information].</p>   
            </div>
        </div>
        <div className='pt-5'>
            <p className='w-[80vw]'>By using FormServer.io, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
        </div>
            
    </div>
  )
}

export default TermsAndConditions