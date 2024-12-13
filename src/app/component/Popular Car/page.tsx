"use client";
import React, { useState } from "react";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import Image from "next/image";

export function PopularCar() {
  // State to manage the heart icon for each car (Array of booleans)
  const [likedCars, setLikedCars] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  // Toggle function for each car's "like" status
  const toggleHeart = (index: number) => {
    const updatedLikedCars = [...likedCars];
    updatedLikedCars[index] = !updatedLikedCars[index]; // Toggle the specific car's like status
    setLikedCars(updatedLikedCars);
  };

  const carData = [
    { name: "Koenigsegg", image: "/Images/car1.png", price: "$99.00 / day" },
    { name: "Nissan GT-R", image: "/Images/car 2.png", price: "$80.00 / day" },
    { name: "Rolls-Royce", image: "/Images/car3.png", price: "$96.00 / day" },
    { name: "Lamborghini", image: "/Images/car4.png", price: "$80.00 / day" },
  ];

  return (
    <div className="w-full h-full mt-[100px] lg:w-[1312px] lg:h-auto">
      <div className="flex justify-between ml-[64px] w-full h-[44px]">
        <div className="text-gray-600 p-3 hover:shadow-[0_0_4px_1px_black] transition-all">
          Popular Car
        </div>
        <div className="text-[#3563E9] p-3 text-center hover:shadow-[0_0_4px_1px_black] transition-all">
          View All
        </div>
      </div>

      {/* Car Grid Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 ml-[64px]">
        {carData.map((car, index) => (
          <div
            key={index}
            className="w-[304px] h-[388px] border rounded-lg p-4 shadow-md bg-white hover:shadow-lg flex flex-col items-center"
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-semibold text-black">{car.name}</h1>
              {/* Conditionally render the filled or outline heart */}
              {likedCars[index] ? (
                <GoHeartFill
                  className="ml-[35px] text-xl cursor-pointer text-red-500"
                  onClick={() => toggleHeart(index)} // Correctly pass the index
                />
              ) : (
                <GoHeart
                  className="ml-[35px] text-xl cursor-pointer text-gray-600"
                  onClick={() => toggleHeart(index)} // Correctly pass the index
                />
              )}
            </div>
            <p className="text-sm text-[#3563E9]">Sport</p>
            <div className="w-[232px] h-[72px] mt-[100px] relative">
              <Image
                src={car.image} // Correctly pass the image path
                alt={car.name}
                layout="fill" // Fill the parent container (make sure parent has relative positioning)
                objectFit="cover" // Ensures the image covers the area without distortion
                className="rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center w-full">
              <div className="mt-2 text-gray-600 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <BsFillFuelPumpDieselFill className="text-gray-500" />
                  <p>90L</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/Images/manual.png" //
                    alt="manual"
                    width={24}
                    height={24} // Use explicit width and height for this icon
                  />
                  <p>Manual</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdPeopleAlt className="text-gray-500" />
                  <p>2 People</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="mt-2 font-bold text-xl text-black">{car.price}</p>
                <div className="mt-4">
                  <button className="bg-[#3563E9] w-[116px] h-[44px] text-white px-4 py-2 rounded-sm hover:shadow-[0_0_15px_1px_#3563E9] transition-all">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
