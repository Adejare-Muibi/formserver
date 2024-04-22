"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from 'react-toastify';

const page = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [isValidated, setisValidated] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      const { success, data, error } = result;
      const { token } = data;
      if (response.ok) {
        localStorage.setItem("_tkn", token);
        toast.success("User account successfully created please check your email to verify your account")
      } else {
        toast.error(error)
      }
    } catch (error) {
      toast.error("Internal server error")
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen gap-[50px]">
      <div className="w-full max-w-[500px]">
        <h2></h2>
        <h1 className="font-[800] text-3xl">Register for Formspree</h1>
        <Link className="text-[#DC2626]" href={"/register"}></Link>

        <form className="w-full flex flex-col gap-2 mt-5">
          <div className="flex gap-[40px]">
            <div className="">
              <label htmlFor="">First Name*</label>
              <input
                value={formData.first_name}
                name="first_name"
                id="first_name"
                onChange={handleInputChange}
                type="text"
                className="p-2  bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
              />
            </div>
            <div>
              <label htmlFor="">Last Name*</label>
              <input
                value={formData.last_name}
                name="last_name"
                id="last_name"
                onChange={handleInputChange}
                type="text"
                className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="">Email*</label>
            <input
              value={formData.email}
              name="email"
              id="email"
              onChange={handleInputChange}
              type="email"
              className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="">password*</label>
            <input
              value={formData.password}
              name="password"
              id="password"
              onChange={handleInputChange}
              type="password"
              className="p-2 bg-[#F3F4F6] rounded w-full focus:outline-[#9CA3AF]"
            />
          </div>
        </form>
        <div className="text-sm ">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="privacy" id="privacy" />
            <label htmlFor="privacy">
              <span>Please check out our</span>{" "}
              <Link className="text-[#DC2626]" href={"/"}>
                Help Site
              </Link>
              ,{" "}
              <Link className="text-[#DC2626]" href={"/"}>
                Terms of Use
              </Link>
              , <span>and</span>{" "}
              <Link className="text-[#DC2626]" href={"/"}>
                Privacy Policy
              </Link>
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input type="checkbox" name="update" id="update" />
            <label htmlFor="update">
              <h4>Please send me occasional Formspree news updates</h4>
            </label>
          </div>
          <div className="flex flex-col ">
            <button
              onClick={handleSubmit}
              disabled={!formData.first_name ||
                !formData.last_name ||
                !formData.email ||
                !formData.password}
              type="submit"
              className={` ${
                !formData.first_name ||
                !formData.last_name ||
                !formData.email ||
                !formData.password
                  ? "bg-[#F3F4F6] text-[#9fa2a8]"
                  : "bg-[#c02dc1] text-white"
              }  rounded-xl px-4 py-2 mt-4 w-[25%]`}
            >
              Register
            </button>
          </div>
          <span>Already have an account?</span>{" "}
          <Link className="text-[#DC2626] " href={"/login"}>
            Sign In
          </Link>
          ,
        </div>
      </div>
    </div>
  );
};

export default page;
