import React from 'react';
import Image from 'next/image';
import logo from '@/assets/1234.png';
import arrow from '@/assets/57.svg fill.png';
import img1 from '@/assets/testimonial-dominik.jpg (1).png';
import img2 from '@/assets/Img_margin (5).png';
import img3 from '@/assets/Img_margin (6).png';
import img4 from '@/assets/Img_margin (9).png';
import img5 from '@/assets/Img_margin (3).png';
import img6 from '@/assets/Img_margin (25).png';
import con from '@/assets/Container.png';
  // Ensure this path is correct

export const Header = () => {
  return (
    <section className="w-[1263px] h-[1318px] bg-hero-gradient overflow-hidden relative">
      {/* 'Find winning products fast' div moved to Header */}
      <div
        className="
          absolute
          top-[116px] /* Positioned 116px from the top */
          left-1/2 /* Center horizontally */
          transform -translate-x-1/2 /* Center horizontally */
          w-[224px]
          h-[27px]
          rounded-[15px]
          bg-[#022868]
          flex items-center justify-center
          mb-4 /* Margin-bottom to create space between the blue div and other content */
        "
      >
        <span
          className="
            text-[#FFF]
            text-center
            text-[13px]
            font-[600]
            leading-[24px]
            font-inter
          "
        >
          Find winning products fast
        </span>
       
      </div>

      <div className="mt-[36px]">
        <div className="container ml-[44px] mr-[44px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image src={logo} alt="Saas Logo" className='' />

            {/* Navigation links container */}
            <nav className='hidden md:flex items-center flex-grow justify-center gap-[55px] ml-[80px]'>
              <a href="#" className="font-[700] leading-[24px] text-[#001828] text-[16px] no-underline flex items-center justify-center">Home</a>
              <a href="#" className="font-[600] leading-[24px] text-[#001828] text-[16px] no-underline flex items-center justify-center">Pricing</a>
              <a href="#" className="text-nowrap font-[600] leading-[24px] text-[#001828] text-[16px] no-underline flex items-center justify-center">Contact us</a>
              <a href="#" className="font-[600] leading-[24px] text-[#001828] text-[16px] no-underline flex items-center justify-center">Blogs</a>
            </nav>

            {/* Menu icon visible on small screens */}
            {/* Add menu icon if needed */}

            {/* Container for Login and Button */}
            <div className="flex items-center gap-[10px] ">
              <a
                href="#login"
                className="w-[100px] h-[40px] font-[600] leading-[24px] text-[#001828] text-[16px] no-underline flex items-center justify-center"
              >
                Login
              </a>
              <button 
                className="w-[150px] h-[40px] py-[12px] bg-[#008CFF] rounded-[40px] flex items-center justify-center"
              >
                <span className="text-white text-[16px] font-semibold leading-[16px] flex items-center justify-center">
                  Start Free Trial
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[#151E3A] text-center font-outfit text-6xl font-[900] leading-[62px] text-nowrap mt-[85px]">
              Millions of Options, Expert-Level <br /> Insights in Minutes!
            </h1>
            <p className="text-[#151E3A] text-center font-inter  text-[25px] font-normal leading-[35px] text-nowrap ml-[120px] mb-[40px] mt-[32px]">
              Discover top-Suppliers and track their revenue <br /> instantly for strategic business insights.
            </p>
            <div className="absolute mt-[60px] ml-[520px]  w-full">
        
            
            <button className="relative flex flex-col items-center justify-center w-[221px] py-[16px] px-[24px] flex-shrink-0 border-2 border-[#008CFF] rounded-[84px] text-[#008CFF] font-semibold text-[16px] leading-[24px] border-image-[linear-gradient(90deg,#008CFF_0%,#0070CC_50%,#008CFF_100%)] border-image-slice-1 animate-shimmer">
    <span className="text-[#008CFF] bg-gradient-to-r from-[#008CFF] via-[#0070CC] to-[#008CFF] bg-clip-text text-transparent animate-shimmer">Start free trial</span>
  </button>
</div>


              <Image
      src={arrow}
      alt="arrow"
      width={100} // Use the closest approximation
      height={146} // Use the closest approximation
      className="w-[100.68px] h-[146.311px]  mt-[-18px] ml-[750px] rotate-[151]"
    />



<div className="ml-[404px] mt-[20.5px] flex items-center">
              <div className="flex items-center space-x-[-6px]">
              <div className="relative w-[32px] h-[32px] rounded-full ">
        <Image 
          src={img1} 
          alt="Image 1" 
          width={32} 
          height={32} 
          className="w-[32PX] h-[32PX] rounded-full"
         
        />
        </div>
                <Image 
                  src={img2} 
                  alt="Image 2" 
                  width={32} 
                  height={32} 
                  className="w-[32px] h-[32px] rounded-full "
                />
                <Image 
                  src={img3} 
                  alt="Image 3" 
                  width={32} 
                  height={32} 
                  className="w-[32px] h-[32px] rounded-full"
                />
                <Image 
                  src={img4} 
                  alt="Image 4" 
                  width={32} 
                  height={32} 
                  className="w-[32px] h-[32px] rounded-full"
                />
                <Image 
                  src={img5} 
                  alt="Image 5" 
                  width={32} 
                  height={32} 
                  className="w-[32px] h-[32px] rounded-full"
                />
                <Image 
                  src={img6} 
                  alt="Image 6" 
                  width={32} 
                  height={32} 
                  className="w-[32px] h-[32px] rounded-full"
                />
              </div>
              </div>
              <p className="text-[#64748B] text-center font-inter text-[18px] font-normal leading-[20px] ml-[155px] mt-[-25px]">
                + thousands of other merchants!
              </p>

              <Image 
                  src={con} 
                  alt="Image 6" 
                  width={1031} 
                  height={551} 
                  className=" mt-[53px] ml-[116px] mr-[116px]"
                />
                

    </section>
  );
};
