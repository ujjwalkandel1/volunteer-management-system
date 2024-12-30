import React from "react";
import img1 from "/assets/Ellipse 5.png";
import img2 from "/assets/Ellipse 6.png";
import img3 from "/assets/Ellipse 9.png";
import img4 from "/assets/Group 20.png";


const Herosection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-8 lg:px-20 min-h-screen bg-gradient-to-r from-[#f0f4f8] via-[#e8eff7] to-[#d1e3f3]">
      {/* Left Content */}
      <div className="flex flex-col items-start max-w-lg lg:max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#2c3e50]">
          Build Your <span className="text-[#007BFF]">Future</span> <br />
          With <span className="text-[#007BFF]">Us</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-[#6c757d]">
          Join a team that values your creativity and innovation. Shape a better
          tomorrow with your talents!
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 text-white bg-[#007BFF] rounded-full shadow-md hover:bg-[#0056b3] transition duration-300">
            Get Started →
          </button>
          <button className="px-6 py-3 text-[#007BFF] bg-white border border-[#007BFF] rounded-full hover:bg-[#f0f8ff] transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full max-w-lg lg:max-w-2xl">
        <img
          src={img4}
          alt="Hero Image"
          className="w-full h-auto object-contain"
        />
        {/* Decorative Floating Images */}
        <img
          src={img1}
          alt="Decorative"
          className="absolute w-16 sm:w-20 lg:w-28 top-[-20px] left-[-20px] transform rotate-12"
        />
        <img
          src={img2}
          alt="Decorative"
          className="absolute w-20 sm:w-24 lg:w-32 bottom-[-40px] left-[30px] transform rotate-6"
        />
        {/* <img
          src={img3}
          alt="Decorative"
          className="absolute w-20 sm:w-24 lg:w-32 top-[-40px] right-[-20px] transform rotate-45"
        /> */}
      </div>
    </div>
  );
};

export default Herosection;
