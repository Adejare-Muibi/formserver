"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { LuBookOpen } from "react-icons/lu";

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
  return (
    <header className="p-4">
      <nav className="w-full flex items-center justify-between">
        <div className="flex items-center justify-between w-[40%]">
          <div className="">
            <Image
              src={"/next.svg"}
              height={80}
              width={80}
              alt="logo"
              priority
            />
          </div>
          <div className="flex items-center gap-8">
            <Link className="font-[600] text-[18px]" href={"/"}>
              Plan
            </Link>
            <button
              onClick={handleOpen}
              className="font-[600] relative flex items-center gap-1 text-[18px]"
            >
              Resources{" "}
              <span>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</span>
              <div
                className={`absolute transition-all duration-300 top-10 ${
                  isOpen
                    ? " opacity-100 translate-y-0"
                    : " translate-y-[100px] opacity-0 overflow-hidden"
                } bg-white flex gap-3 shadow-md rounded-xl w-[500px]  h-fit`}
              >
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
            <Link className="font-[600] text-[18px]" href={"/"}>
              Help
            </Link>
          </div>
        </div>
        <div className="w-[60%] gap-4 flex justify-end items-end">
          <Link
            href={"/register"}
            className="px-4 py-2 bg-[#E5122E] text-white rounded-[5px]"
          >
            Get Started
          </Link>
          <Link
            href={"/login"}
            className="px-4 py-2 bg-[#FECACA] rounded-[5px] text-[#E5122E]"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
