"use client"; // Ensure this is at the top

import React from "react";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="lg:h-[993px] sm:h-full md:h-full bg-red-500 flex items-center justify-center lg:mt-[60px] mx-auto sm:px-[25px] md:px-[45px] lg:px-[80px]">
    <section className="flex flex-col items-center justify-center w-full">
      
      {/* "Everything you need at one platform" header */}
      <div className="flex items-center justify-center w-full mt-[30px] sm:mt-[30px] sm:gap-y-2.5 md:mt-[45px] md:gap-y-4 overflow-hidden">
        <h1 className="text-[#FFF] font-outfit font-bold text-center sm:text-[30px] sm:leading-[35px]  md:text-[30px] lg:text-[51px] leading-tight md:leading-normal lg:leading-[56px]">
          Everything you need at one platform
        </h1>
      </div>
        
        {/* Description paragraph */}
        <div className="flex items-center justify-center sm:mt-[5px] lg:mt-[5px] sm:gap-y-[25px] w-full gap-y-[15px]">
          <p className="text-[#E8E8E8] font-inter text-center sm:text-[14px] sm:leading-[21px] lg:text-[25px] lg:leading-[36px] font-normal lg:max-w-[1136px]">
            Quickly find trending products, browse millions from Shopify, track store data, view sales & ads, analyze marketing strategies, and discover top TikTok videos—all in minutes.
          </p>
        </div>

        <div className=" mt-[3px] relative flex sm:flex md:hidden lg:hidden items-center justify-center lg:justify-start lg:ml-[45px]  lg:mt-0 w-full lg:w-1/2">
 


      {/* Responsive Buttons Section for mobile */}
      <div
  className="mt-[-220px] overflow-hidden absolute sm:flex md:hidden lg:hidden max-w-[340px] h-[47px] rounded-[28px] items-center justify-between px-[20px] bg-gradient-to-b from-[#9CA3AF] to-transparent"
>
  <div className="relative left-[-20px] w-[192px] h-[47px] rounded-[28px] flex items-center justify-center group cursor-pointer hover:bg-[#008CFF] hover:rounded-[28px] transition-all duration-300 ease-in-out">
    <span
      className="font-inter text-[16px] sm:text-[14px] text-nowrap font-medium leading-[24px] group-hover:text-white bg-gradient-to-b from-[#9CA3AF] to-transparent bg-clip-text text-transparent transition-colors duration-300 ease-in-out"
    >
      Tiktok Videos Winner
    </span>
  </div>
  <div className="relative right-[-20px] w-[192px] h-[47px] rounded-[28px] flex items-center justify-center group cursor-pointer hover:bg-[#008CFF] hover:rounded-[28px] transition-all duration-300 ease-in-out">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] group-hover:text-white bg-gradient-to-b from-[#9CA3AF] to-transparent bg-clip-text text-transparent transition-colors duration-300 ease-in-out"
    >
      Shopify Store
    </span>
  </div>
</div>






        <Image
    src="/assets/GIF-240826_153630 1@2x.png  "
    alt="Product Search Icon"
    width={225} // Adjust width for small screens
    height={202} // Adjust height for small screens
    className="object-contain mt-[100px]"
  />
</div>


  {/* Responsive Buttons Section for medium*/}

  <div
  className=" hidden sm:hidden lg:hidden md:flex overflow-hidden absolute  md:mt-[-100px] h-[54px] w-auto rounded-[28px] items-center justify-between px-[20px] bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
>
  {/* Buttons Section for Smaller Screens */}
  <div className="relative left-[-20px] w-[240px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] transition-all duration-300 ease-in-out cursor-pointer">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      Browse Shopify Store
    </span>
  </div>
  <div className="relative left-[10px] w-[240px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] transition-all duration-300 ease-in-out cursor-pointer">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      Track Shopify store
    </span>
  </div>
  <div className="relative mr-[-20px] w-[240px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] transition-all duration-300 ease-in-out cursor-pointer">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      Tiktok Video Winners
    </span>
  </div>
</div>

{/* Buttons Section for Larger Screens */}
<div
  className="relative w-full h-[56px] mx-[80px] rounded-[28px] flex items-center mt-[60px] lg:flex md:hidden sm:hidden bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
>
  {/* Inner Divs */}
  <div className="absolute left-0 w-[239px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] hover:text-white transition-all duration-300 ease-in-out">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] w-[184px] h-[24px] text-center group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      Product search
    </span>
  </div>
  <div className="absolute left-[250px] w-[239px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] hover:text-white transition-all duration-300 ease-in-out">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] text-center group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      View Trending Product
    </span>
  </div>
  <div className="absolute left-[510px] w-[239px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] hover:text-white transition-all duration-300 ease-in-out">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] text-center group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      View Product Ideas
    </span>
  </div>
  <div className="absolute left-[740px] w-[239px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] hover:text-white transition-all duration-300 ease-in-out">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] text-center group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      Browse Shopify Store
    </span>
  </div>
  <div className="absolute right-[-5px] w-[239px] h-[54px] rounded-[28px] flex items-center justify-center group hover:bg-[#008CFF] hover:text-white transition-all duration-300 ease-in-out">
    <span
      className="font-inter text-[16px] font-medium leading-[24px] text-center group-hover:text-white text-transparent bg-clip-text bg-gradient-to-b from-[#9CA3AF] to-[rgba(0,0,0,0.2)]"
    >
      Track Shoe
    </span>
  </div>
</div>



        {/* Product Search and Image Section */}
        <div className="flex flex-col lg:flex-row md:flex-row  w-full gap-[87px] mx-auto lg:mt-[45px] sm:mt-[10px] items-center px-[25px] md:mt-[70px]">
  <div className="flex flex-col items-center lg:items-start lg:w-1/2 md:items-start">
    <h3 className="md:mt-[70px] text-[#fff] text-[41px] leading-[56px] font-inter font-semibold mb-[20px] mt-[89px] text-center lg:text-left sm:text-[25px] sm:leading-[36px] sm:mt-[10px]">
      Product Search
    </h3>
    <p className=" sm:min-w-[341px] sm:text-[14px] sm:leading-[21px] text-[#E5E7EB] font-inter lg:text-[25px] font-normal lg:leading-[35px] lg:max-w-[600px] text-center lg:text-left sm:mt-[-20px] md:text-left">
      The Product Search tab makes it easy for users to quickly find products showing all relevant data of stores and providing a smooth, efficient search experience.
    </p>
  

            {/* Call to Action Button */}
            <div className="relative lg:mt-[20px] sm:mb-[30px] sm:mt-[46px] md:mb-[40px] overflow-hidden ">
  <button className=" lg:w-[221px] sm:min-w-[341px] lg:h-[52px] px-[20px] py-[12px] rounded-[24px] bg-[#008CFF] text-white font-inter text-[16px] font-semibold md:w-[156px] md:h-[47px]">
   <span className="md:text-[14px] text-nowrap flex items-center justify-center" >Start my Free Trial</span>
  </button>
            </div>
          </div>
          
          {/* Image section only shown on md and larger screens */}
          <div className="relative hidden md:flex items-center justify-center  gap-[45px] ">
            <Image
            src="/assets/GIF-240826_153630 1@2x.png"
            alt="Product Search Icon"
            width={512}
            height={489}
            className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
