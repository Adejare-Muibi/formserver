"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { LuBookOpen } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const ResourcesProps = ({ paragraph, text, icon, style }) => {
  return (
    <div className={`${style} p-3 flex items-center gap-2`}>
      <div className="">
        <span className="">{icon}</span>
      </div>
      <div className="flex items-start flex-col gap-1">
        <h2>{text}</h2>
        <p className=" opacity-50 text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
    const [modal, setModal] = useState(false)

    function handlemodal (){
        setModal(!modal)
    }


  return (
    <header className="p-4">
      <div className="lg:block hidden">
      <nav className="w-full flex lg:items-center justify-between max-md:justify-center max-md:gap-[80px] max-md:flex-col">
        <div className="flex lg:item-center justify-between max-md:justify-center w-[40%] max-md:gap-[23px] max-md:w-auto max-md:flex-col">
          <div className=""><Image src={"/formserver.jpg"} height={130} width={160} alt="logo" priority/></div>
          <span className="lg:hidden"><BsThreeDotsVertical /> <IoCloseSharp /></span>
          <div className="flex lg:items-center max-md:flex-col gap-8 max-md:gap-[12px]">
            <Link className="font-[600] text-[18px] hover:text-[#C02DC1]" href={"/"}>Plan</Link>
            <button onClick={handleOpen} className="font-[600] relative flex items-center gap-1 text-[18px] hover:text-[#C02DC1]">Resources{" "} <span>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</span><div className={`absolute transition-all duration-300 top-10 ${isOpen? " opacity-100 translate-y-0" : " translate-y-[100px] opacity-0 overflow-hidden"} bg-white flex gap-3 shadow-md rounded-xl w-[500px]  h-fit`}>
                <div className="flex p-5 gap-4 flex-col w-1/2">
                  <ResourcesProps
                    icon={
                      <LuBookOpen className="bg-[#E5122E!important] p-2 text-4xl  text-white rounded" />
                    }
                    text={"Library"}
                    style={"hover:bg-[#F9FAFB]"}
                    paragraph={"hello world"}
                  />
                  <ResourcesProps
                    icon={
                      <LuBookOpen className="bg-[#E5122E!important] p-2 text-4xl  text-white rounded" />
                    }
                    text={"Guide"}
                    style={"hover:bg-[#F9FAFB]"}
                    paragraph={"hello world"}
                  />
                </div>
                <div className="bg-[#F9FAFB] p-5 w-1/2">
                  <ResourcesProps
                    icon={
                      <LuBookOpen className="bg-[#E5122E!important] p-2 text-4xl  text-white rounded" />
                    }
                    text={"Changelog"}
                    style={"bg-[#F9FAFB] hover:bg-[white]"}
                    paragraph={"hello world"}
                  />
                </div>
              </div>
            </button>
            <Link className="font-[600] text-[18px] hover:text-[#C02DC1]" href={"/"}>
              Blog
            </Link>
            <Link className="font-[600] text-[18px] hover:text-[#C02DC1]" href={"/help"}>
              Help
            </Link>
          </div>
        </div>
        <div className="w-[60%] gap-4 flex lg:justify-end max-md:items-center lg:items-end max-md:flex-col max-md:w-auto">
          <Link
            href={"/register"}
            className="px-4 py-2 bg-[#E5122E] max-md:w-[95%] flex max-md:items-center max-md:justify-center text-white rounded-[5px]"
          >
            Get Started
          </Link>
          <Link
            href={"/login"}
            className="px-4 py-2 bg-[#FECACA] max-md:w-[95%] flex max-md:items-center max-md:justify-center rounded-[5px] text-[#E5122E]"
          >
            Sign In
          </Link>
        </div>
      </nav>
      </div>


      <nav className="w-full block lg:hidden lg:items-center justify-between max-md:justify-center max-md:gap-[80px] max-md:flex-col">
        <div className="flex justify-between w-full items-center">
          <Image src={"/formserver.jpg"} height={130} width={160} alt="logo" priority/>
          <span className="lg:hidden cursor-pointer" onClick={handlemodal}>{modal ? <IoCloseSharp /> : <BsThreeDotsVertical /> }</span>
          {/* <div className="flex lg:items-center max-md:flex-col gap-8 max-md:gap-[12px]">
            <Link className="font-[600] text-[18px]" href={"/"}>Plan</Link>
            <button onClick={handleOpen} className="font-[600] relative flex items-center gap-1 text-[18px]">Adejare{" "} <span>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</span><div className={`absolute transition-all duration-300 top-10 ${isOpen? " opacity-100 translate-y-0" : " translate-y-[100px] opacity-0 overflow-hidden"} bg-white flex gap-3 shadow-md rounded-xl w-[500px]  h-fit`}>
                <div className="flex p-5 gap-4 flex-col w-1/2">
                  <ResourcesProps
                    icon={
                      <LuBookOpen className="bg-[#E5122E!important] p-2 text-4xl  text-white rounded" />
                    }
                    text={"Library"}
                    style={"hover:bg-[#F9FAFB]"}
                    paragraph={"hello world"}
                  />
                  <ResourcesProps
                    icon={
                      <LuBookOpen className="bg-[#E5122E!important] p-2 text-4xl  text-white rounded" />
                    }
                    text={"Guide"}
                    style={"hover:bg-[#F9FAFB]"}
                    paragraph={"hello world"}
                  />
                </div>
                <div className="bg-[#F9FAFB] p-5 w-1/2">
                  <ResourcesProps
                    icon={
                      <LuBookOpen className="bg-[#E5122E!important] p-2 text-4xl  text-white rounded" />
                    }
                    text={"Changelog"}
                    style={"bg-[#F9FAFB] hover:bg-[white]"}
                    paragraph={"hello world"}
                  />
                </div>
              </div>
            </button>
            <Link className="font-[600] text-[18px]" href={"/"}>
              Blog
            </Link>
            <Link className="font-[600] text-[18px]" href={"/help"}>
              Help
            </Link>
          </div> */}
        </div>
          {
            modal && (
              <div className="relative">
                <div className="flex flex-col gap-[15px] pt-[20px] absolute bg-[white] w-full h-[100vh]">
                  <Link className="font-[600] text-[18px] hover:text-[#C02DC1]" href={"/"}>Plans</Link>
                  <Link className="font-[600] text-[18px] hover:text-[#C02DC1]" href={"/"}>Resources</Link>
                  <Link className="font-[600] text-[18px] hover:text-[#C02DC1]" href={"/"}>Blog</Link>
                  <Link className="font-[600] text-[18px] hover:text-[#C02DC1]" href={"/"}>Help</Link>
                <div className="absolute bottom-[10%] w-full">
                  <div className="w-full flex flex-col gap-3">
                    <Link className="bg-[#E5122E] text-white rounded-[5px] flex justify-center w-full p-[15px]" href={"/"}>Get started</Link>
                    <Link className="bg-[#FECACA] rounded-[5px] text-[#E5122E] flex justify-center w-full p-[15px]" href={"/"}>Sign in</Link>
                  </div>
                </div>
                </div>
              </div>
            )
          }
        {/* <div className="w-[60%] gap-4 flex lg:justify-end max-md:items-center lg:items-end max-md:flex-col max-md:w-auto">
          <Link
            href={"/register"}
            className="px-4 py-2 bg-[#E5122E] max-md:w-[95%] flex max-md:items-center max-md:justify-center text-white rounded-[5px]"
          >
            Get Started
          </Link>
          <Link
            href={"/login"}
            className="px-4 py-2 bg-[#FECACA] max-md:w-[95%] flex max-md:items-center max-md:justify-center rounded-[5px] text-[#E5122E]"
          >
            Sign In
          </Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
