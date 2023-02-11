import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center p-0 w-[1277px] h-[78px] gap-[204px] order-none flex-grow-0">
      <div className="flex flex-row items-start p-0 w-[281px] h-[60px] ml-[158px] order-none flex-grow-0">
        <h1 className="w-[281px] h-[60px] font-[Poppins]  font-medium text-[40px] leading-[60px] text-[#FFFFFF] order-none flex-grow-0">
          Dark Weather
        </h1>
      </div>
      <div>
        <ul className="flex flex-row justify-center items-center p-0 gap-[50px] w-[495px] h-[38px]">
         <a href="/"> <li className="w-[75px] h-[38px] font-[Poppins] font-medium text-[21px] leading-[38px] text-[#FFFFFF] order-none flex-grow-0">
            Home
          </li></a>
         <a href="/"><li className="w-[183px] h-[38px] font-[Poppins] font-thin text-[21px] leading-[38px] text-[#FFFFFF] order-none flex-grow-0">
            Download App
          </li></a>
          <a href="/"><li className="w-[118px] h-[38px] font-[Poppins] font-thin text-[21px] leading-[38px] text-[#FFFFFF] order-none flex-grow-0">
            Contact us
          </li></a>
        </ul>
      </div>
      <div>
        <button className="flex flex-row items-start pl-[27px] pt-[7px] pr-[35px] gap-[10px] w-[154px] h-[53px] bg-[#3A5E72] shadow-[7px 7px 10px rgba(79,136,167,0.3)] rounded-[15px]">
          <h2 className="w-[95px] h-[38px] font-[Poppins] font-medium text-[24px] leading-[38px] relative text-[#FFFFFF] order-none flex-grow-0">Sign up</h2>
        </button>
      </div>
    </div>
  );
}
