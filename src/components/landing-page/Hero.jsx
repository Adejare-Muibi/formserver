"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Hero = () => {
  const [isCopy, setIsCopy] = useState(false);
  const codeString = `<form action="https://formspree.io/f/{form_id}" method="post">
    < label for= "email" > Your Email</label >
      <input name="Email" id="email" type="email">
        <button type="submit">Submit</button>
      </form>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setIsCopy(!isCopy);

    setTimeout(() => {
      setIsCopy(false)
    }, 2000);
  };
  

  return (
    <div className="flex flex-col justify-center items-center py-20 gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[50px] font-bold">
          The form solution for any developer
        </h1>
        <p>
          Utilize original front-end code. Send data to our API. We will see to
          the rest.
        </p>
        <Link
          href={"/register"}
          className="px-7 py-4 bg-[#c02dc1] text-white rounded-[5px]"
        >
          Get Started
        </Link>
      </div>
      <div className="flex flex-col relative items-center gap-4">
        <SyntaxHighlighter
          customStyle={{ padding: "40px", borderRadius: "20px" }}
          language="javascript"
          style={vscDarkPlus}
        >
          {codeString}
        </SyntaxHighlighter>
        <button
          className="bg-[#384951] absolute top-3 py-1 text-sm px-4 rounded right-2 text-white text-opacity-40"
          onClick={handleCopyCode}
        >
          {isCopy ? "Copied!" : "Copy"}
        </button>
        <p className="w-[30vw] text-center text-[14px]">
          <span className="font-semibold">
            Because ToshConsult forms inherit your website's
          </span>{" "}
          CSS, they can exactly complement your website.
        </p>
      </div>
    </div>
  );
};

export default Hero;
