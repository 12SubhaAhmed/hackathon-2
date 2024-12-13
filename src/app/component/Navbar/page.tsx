import React from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CiSliderHorizontal } from "react-icons/ci";
import { PiHeartFill } from "react-icons/pi";
import { VscBellDot } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      {/* HEADLINE */}
      <div className="border-1 shadow-md sm:flex w-[800px] sm:w-[1440px] h-[141px] sm:h-[141px] top-[-1562px] sm:top-[-1562px] left-[-2500px] sm:left-[-4000px] justify-between p-[32px] gap-[12px] sm:gap-0 sm:p-[32px]">
        <div className="flex w-[518px] sm:w-[537px] h-[40px] sm:h-[40px] font-bold sm:mt-6">
          <MdKeyboardCommandKey className="w-[21px] h-[22px] text-blue-600" />
          <h1>High Fidelity Dashboard - Home Rent</h1>
        </div>
        <div className="w-[236px] h-[25px] gap-[8px] flex sm:mt-6 mt-3">
          <h2 className="w-[104px] h-[25px]">Last Updated:</h2>
          <h2 className="w-[107] h-[25px] font-bold">8 Aug 2022</h2>
        </div>
      </div>

      {/* NAVBAR */}

      <nav className="w-full lg:w-[1440px] h-[124px] grid grid-cols-2 sm:flex justify-center items-center shadow-md border-2 ">
        <div className="sm:flex items-between sm:space-x-48 w-full px-4 sm:px-10">
          <div className="img w-[108px] sm:w-[168px] h-[28px] sm:h-[44px] mt-5">
            <img src="/Images/Logo.png" alt="Company Logo" />
          </div>

          {/* Search Form */}
          <form className="flex space-x-5 sm:space-x-20  items-center justify-center w-[263px] h-[48px] top-[92px] sm:top-[40px] left-[25px] sm:left-[272px] sm:w-[492px] border-2 rounded-full">
            <IoSearchOutline className="text-black text-[24px] w-[24px] h-[24px]" />
            <input
              className="w-[152px] sm:w-[179px] h-[24px] sm:h-[20px] top-[104px] sm:top-[52px] left-[81px] sm:left-[336px]"
              type="text"
              placeholder="Search something here"
              aria-label="Search"
            />
            <CiSliderHorizontal className="text-[24px]" />
          </form>

          <div className="hidden sm:flex items-center justify-end space-x-3 sm:w-auto w-[236px]">
            <PiHeartFill className="text-black text-[28px]" />
            <VscBellDot className="text-black text-[28px]" />
            <IoIosSettings className="text-black text-[28px]" />
            <img src="/Images/p2.png" alt="profile" />
          </div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
