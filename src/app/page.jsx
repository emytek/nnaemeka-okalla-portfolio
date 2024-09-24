"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="w-3/4 sm:w-full lg:w-1/2 h-1/3 sm:h-1/2 lg:h-full relative">
          <Image src="/hero-pic.jpeg" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="sm:text-3xl md:text-5xl font-bold text-[#4B0082]">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-[#4B0082]">
            Welcome to my portfolio, where innovation meets creativity. With a
            sharp eye for design and expertise in coding, my work highlights a
            diverse range of projects, showcasing my dedication to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-[#4B0082] bg-[#4B0082] text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[#4B0082] hover:ring-[#4B0082] shadow-lg hover:shadow-xl">
              View My Work
            </button>

            <button className="p-4 rounded-lg ring-1 ring-[#4B0082] text-[#4B0082]">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
