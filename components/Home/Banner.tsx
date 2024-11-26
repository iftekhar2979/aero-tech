import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className=" bgImage  flex md:h-[60vh] h-[100vh]">
      <div className="container ">
        <div className="flex flex-col ">
          <h1 className="text-6xl my-2 md:text-6xl font-bold text-gray-800 text-white">
            Welcome to AeroTech
          </h1>
          <p className="text-md my-2 text-gray-600 text-white">
            Aerotech, established in 1997 by Robert Doherty, is a mature, well
            established <br /> company with an excellent reputation for
            consistent, high quality work.
          </p>
          <Link href="/contact">
            <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Get in touch
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Banner;
