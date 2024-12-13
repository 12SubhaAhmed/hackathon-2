import React from "react";
import Navbar from "../component/Navbar/page";
import Image from "next/image";


// export default function Final() {
//     return (
//         <div>
//             <Navbar/>
//       <div className="flex"> {/* Flex container to align sidebar and image horizontally */}
//         {/* SIDE BAR */}
//         <div className="w-[360px] bg-white p-8 hidden sm:block border-2 shadow-md">
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-[0_0_4px_1px_black] transition-all hover:cursor-pointer">M A I N M E N U</h3>
//             <ul className="space-y-4 text-gray-600">
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full cursor-pointer">Dashboard</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Car Rent</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Insight</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Reimburse</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Inbox</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Calendar</li>
//             </ul>
//           </div>
  
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-[0_0_4px_1px_black] transition-all">P R E F E R E N C E S</h3>
//             <ul className="space-y-4">
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Settings</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Help & Center</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Dark Mode</li>
//               <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Log Out</li>
//             </ul>
//           </div>
//         </div>
  
//         {/* IMAGE DIV */}
//         <div className="flex-grow p-8 w-[295px] h-[272px] top-[64px] left-[16px] lg:W-[534px] lg:h-[836px] lg:top-[32px] lg:lafe-[318px] rounded-[10px]"> {/* flex-grow makes the image div take the remaining space */}
//           <img src="/Images/Details Rental.png" alt="details rent"/>  
//         </div>

//         <div>
//         <img src="/Images/route.png" alt="details rent"/> 
//         </div>

//         <div>
//         <img src="/Images/recent.png" alt="details rent"/> 
//         </div>
//       </div>
//       </div>
//     );
//   }

// export default function Final() {
//     return (
//       <div>
//         <Navbar />
//         <div className="flex"> {/* Flex container to align sidebar and image container horizontally */}
//           {/* SIDE BAR */}
//           <div className="w-[360px] bg-white p-8 hidden sm:block border-2 shadow-md">
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-[0_0_4px_1px_black] transition-all hover:cursor-pointer">M A I N M E N U</h3>
//               <ul className="space-y-4 text-gray-600">
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full cursor-pointer">Dashboard</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Car Rent</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Insight</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Reimburse</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Inbox</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Calendar</li>
//               </ul>
//             </div>
  
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-[0_0_4px_1px_black] transition-all">P R E F E R E N C E S</h3>
//               <ul className="space-y-4">
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Settings</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Help & Center</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Dark Mode</li>
//                 <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Log Out</li>
//               </ul>
//             </div>
//           </div>
  
//           {/* IMAGE DIV CONTAINER - Using grid layout to display images in 3 columns */}
//           <div className="grid grid-cols-2 gap-4 flex-grow p-8">
//             <div className="rounded-[10px]">
//               <img src="/Images/Details Rental.png" alt="details rent" className="w-full h-auto"/>
//             </div>
  
//             <div className="grid grid-cols-2 rounded-[10px]">
//               <img src="/Images/route.png" alt="details rent" className="w-full h-auto"/>
//             </div>
  
//             <div className="rounded-[10px]">
//               <img src="/Images/recent.png" alt="details rent" className="w-full h-auto"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
export default function Final() {
    return (
      <div>
        <Navbar />
        <div className="flex"> {/* Flex container to align sidebar and image container horizontally */}
          {/* SIDE BAR */}
          <div className="w-[360px] bg-white p-8 hidden sm:block border-2 shadow-md">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-[0_0_4px_1px_black] transition-all hover:cursor-pointer">M A I N M E N U</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full cursor-pointer">Dashboard</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Car Rent</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Insight</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Reimburse</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Inbox</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Calendar</li>
              </ul>
            </div>
  
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-[0_0_4px_1px_black] transition-all">P R E F E R E N C E S</h3>
              <ul className="space-y-4">
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Settings</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Help & Center</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Dark Mode</li>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">Log Out</li>
              </ul>
            </div>
          </div>
  
          {/* IMAGE DIV CONTAINER - Using grid layout to display images in 2 columns for first two images */}
          <div className="sm:grid grid-cols-2 gap-4 flex-grow p-8">
            <div className="rounded-[10px]">
              <img src="/Images/Details Rental.png" alt="details rent" className="w-full h-auto"/>
            </div>
  
            <div className="rounded-[10px]">
              <img src="/Images/route.png" alt="details rent" className="w-full border-2 h-auto"/>
              <img src="/Images/recent.png" alt="details rent" className="w-full border-2 h-auto"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  