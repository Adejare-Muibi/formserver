"use client";
import { usePathname } from 'next/navigation'
import React from 'react';
import Navbar from "../components/landing-page/Navbar"


const AppWrapper = ({ children }) => {
    const pathname = usePathname();
    return (
        <section>
            {
                pathname === "/login" || pathname === "/register" ? "" : <Navbar />
            }
            <div>{children}</div>
        </section>
    )
}

export default AppWrapper