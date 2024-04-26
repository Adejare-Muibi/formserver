import React from "react";

const page = () => {
  return (
    <div className="bg-[#E3E3DA]">
      <div className="flex flex-col items-center gap-[25px]">
        <h1 className="font-[800] text-3xl">
          BESPOKE SOFTWARE DEVELOPMENT SERVICES
        </h1>
        <p className="w-[62%]">
          Our team of skilled engineers, doers, and creatives is dedicated to
          accelerating your awesome idea to market. With expertise in designing,
          developing, and delivering intelligent high-tech bespoke software
          solutions, we cater to SMEs, Enterprises, and Startups.
        </p>
        <div>
          <div className="flex flex-col gap-[20px]">
            <div className="bg-[#23272A]">
              <h3 className="text-white text-center">
                10+ In-house SaaS Products
              </h3>
            </div>
            <div className="bg-[#23272A]">
              <h3 className="text-white text-center">5+ Years of Experience</h3>
            </div>
            <div className="bg-[#23272A]">
              <h3 className="text-white text-center">
                10+ Million Monthly Active Users
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-2">
        <h1 className="font-[800] text-3-1">WHAT WE DO</h1>
        <p className="w-[62%]">
          We help product vendors create impactful and futuristic digital
          solutions to solve real user problems.​ Our commitment extends
          throughout the entire journey, from initial planning to delivery, and
          beyond. We'll be there with you every step of the way.
        </p>
        <div className="grid px-16 grid-cols-3 gap-8">
          <div className="shadow">
            <div className="bg-[#FFC7FB] border py-4">
              <h2 className="text-center">Web Solutions</h2>
            </div>
            <div className="bg-[#FFFFFF] p-[35px] text-sm ">
              <p className="text-center">
                Crafting effective websites that are responsive and
                user-friendly to showcase your business.
              </p>
            </div>
          </div>
          <div className="shadow">
            <div className="bg-[#FFC7FB] border py-4">
              <h2 className="text-center">Web Solutions</h2>
            </div>
            <div className="bg-[#FFFFFF] p-[35px] text-sm ">
              <p className="text-center">
                Crafting effective websites that are responsive and
                user-friendly to showcase your business.
              </p>
            </div>
          </div>
          <div className="shadow">
            <div className="bg-[#FFC7FB] border py-4">
              <h2 className="text-center">Web Solutions</h2>
            </div>
            <div className="bg-[#FFFFFF] p-[35px] text-sm ">
              <p className="text-center">
                Crafting effective websites that are responsive and
                user-friendly to showcase your business.
              </p>
            </div>
          </div>
          <div className="shadow">
            <div className="bg-[#FFC7FB] border py-4">
              <h2 className="text-center">Web Solutions</h2>
            </div>
            <div className="bg-[#FFFFFF] p-[35px] text-sm ">
              <p className="text-center">
                Crafting effective websites that are responsive and
                user-friendly to showcase your business.
              </p>
            </div>
          </div>
          <div className="shadow">
            <div className="bg-[#FFC7FB] border py-4">
              <h2 className="text-center">Web Solutions</h2>
            </div>
            <div className="bg-[#FFFFFF] p-[35px] text-sm ">
              <p className="text-center">
                Crafting effective websites that are responsive and
                user-friendly to showcase your business.
              </p>
            </div>
          </div>
          <div className="shadow">
            <div className="bg-[#FFC7FB] border py-4">
              <h2 className="text-center">Web Solutions</h2>
            </div>
            <div className="bg-[#FFFFFF] p-[35px] text-sm ">
              <p className="text-center">
                Crafting effective websites that are responsive and
                user-friendly to showcase your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  mx-auto px-[130px] flex-col items-center">
        <h1>LET'S TALK ABOUT YOUR PROJECT</h1>
        <p>
          We are passionate about discussing software development! Please fill
          out the form below or reach out to us via email at hello@formsubmit.co
          to connect with one of our knowledgeable consultants who can cater to
          your unique software development needs.
        </p>
        <form className="w-full flex flex-col  gap-2 mt-5">
          <div className="flex py-2
           gap-[20px] w-full">
            <input type="text" className="w-1/2" placeholder="Your Name" id="" />
            <input type="email" className="w-1/2 p-2" placeholder="Your email address" id="" />
          </div>
          <div>
            <textarea
            placeholder="How can we help"
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full"
            ></textarea>
          </div>
          {/* <div className="bg-black"> */}
            <button className="text-white bg-black">Jump-start your project</button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default page;
