import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar/page";
export default function Details() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-auto flex">
        {/* Sidebar */}
        <div className="w-[360px] bg-white p-8 hidden sm:block">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-4 hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
              Type
            </h3>
            <ul className="space-y-2">
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                (item, index) => (
                  <li key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={item}
                      className="mr-2 accent-blue-500"
                    />
                    <label htmlFor={item} className="text-gray-600">
                      {item}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-4 hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
              Capacity
            </h3>
            <ul className="space-y-2">
              {["2 Person", "4 Person", "6 Person", "8 or More"].map(
                (item, index) => (
                  <li key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={item}
                      className="mr-2 accent-blue-500"
                    />
                    <label htmlFor={item} className="text-gray-600">
                      {item}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Price</h3>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full h-[16px] accent-blue-500"
            />
            <div className="text-gray-600 mt-2">Max. $100.00</div>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:flex-1 mt-8 px-8 border-2">
          {/* First two images (view and Dcar) side by side */}
          <div className="sm:flex  gap-6">
            <div className=" w-[327px] h-[232px] lg:w-[492px] lg:h-[360px] hover:shadow-[0_0_4px_1px_black] transition-all">
              <img src="/Images/View.png" alt="view" />
            </div>
            <div className="w-[327px] h-[318px] mt-5 sm:mt-0 lg:w-[492px] space-y-10 cursor-pointer lg:h-[408px] ">
              <img src="/Images/Car Name.png" alt="Dcar" />
              <img src="/Images/para.png" alt="Dcar" />
              <img src="/Images/spec.png" alt="Dcar" />
              <div className="sm:flex">
                <img src="/Images/Price.png" alt="Dcar" />
                <Link href={"/billing"}>
                  <button className="ml-40 bg-blue-700 w-[140px] h-14 rounded-md text-white hover:shadow-[0_0_4px_1px_black] transition-all">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional images below in a flex row */}
          <div className="sm:flex hidden gap-6 mb-6">
            <div className=" w-[96px] h-[64px] md:w-[148px] md:h-[124px] hover:shadow-[0_0_4px_1px_black] transition-all">
              <img src="/Images/View 1.png" alt="view1" />
            </div>
            <div className="w-[96px] h-[64px] md:w-[148px] md:h-[124px] hover:shadow-[0_0_4px_1px_black] transition-all">
              <img src="/Images/View 2.png" alt="view2" />
            </div>
            <div className="w-[96px] h-[64px] md:w-[148px] md:h-[124px] hover:shadow-[0_0_4px_1px_black] transition-all">
              <img src="/Images/View 3.png" alt="view3" />
            </div>
          </div>

          {/* Review image below */}
          <div className="lg:w-[1016px] w-[327px] h-[384px] lg:h-[452px]">
            <img src="/Images/Reviews2.png" alt="Reviews" />
          </div>
        </div>
      </div>
    </div>
  );
}
