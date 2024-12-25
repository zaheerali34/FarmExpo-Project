import React from "react";
import Header from "../Header/Header";
import Table from "./Table";
import { NavLink } from "react-router-dom";
import Circle from "./Circle";
 
export const Home = () => {
  return (
    <div className="w-full h-screen max-md:h-[125vh] bg-gradient-to-tl from-[#001C79] to-[#3E0170] relative max-sm:h-full">
      <Header />

      <div className="w-[40px] absolute top-[34%] left-[20%] max-sm:top-[24%] max-sm:left-[10%]">
        {/* <img src='./public/1.png' alt="Image" /> */}
      </div>
      <div className="w-full mt-[2.5rem] px-[5rem] flex items-center justify-between max-md:flex-col max-md:w-full max-md:px-[2rem] max-sm:px-[1rem] max-md:text-center">
        <div className="w-[30%] text-white leading-[3.5rem] max-[992px]:leading-[2.3rem] max-md:w-full max-md:leading-[3.4rem]">
          <h1 className="text-[3.5rem] max-[992px]:text-[2.4rem] max-md:text-[3rem]">
            Welcome to
          </h1>
          <h1 className="text-[3.5rem] max-[992px]:text-[2.4rem] max-md:text-[3rem]">
            FarmExpo
          </h1>
          <NavLink to={'/login'}><button className="border-[3px] border-white mt-8 px-12 rounded-full text-[1.1rem] hover:bg-[#12C365] hover:border-[#12C365] transition duration-[0.4s] uppercase max-[992px]:text-[0.7rem] max-[992px]:px-[1.5rem] max-[992px]:py-[0.5rem] max-md:py-0">
            Start Consignment
          </button></NavLink>
        </div>
        <div className="w-[80px] absolute top-[18%] right-[8%] max-sm:w-[60px] max-sm:top-[40%]">
        {/* <img src='./public/2.png' alt="Image" /> */}
      </div>
        <div className="w-[50%] h-full py-10 text-center max-md:w-full max-md:mt-10">
          <h1 className="text-white text-[25px] uppercase py-4 font-bold">
            All Consignment
          </h1>
          <Table />
        </div>
      </div>
        <div className=" max-md:hidden">
        <Circle />
        </div>
    </div>
  );
};
