"use client";
import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Customizable branding features? Sign me up! This platform lets me unleash my creativity and give our brand a unique identity.",
    imageSrc: "/images/testimonial/author-01.png",
    name: "Sophie Williams",
    username: "Creative Designer",
    date: "23-5-2013"
  },
  {
    text: "Since implementing this SaaS platform, our productivity has skyrocketed! It's like having a whole team of superheroes supporting our business.",
    imageSrc: "/images/testimonial/Avator2.png",
    name: "Jane Doe",
    username: "CEO of TechGenius Inc.",
    date: "May 2, 2023"
  },
  {
    text: "As a small business owner, I needed an affordable solution. This SaaS platform delivered beyond my expectations, helping my business compete with the big guys.",
    imageSrc: "/images/testimonial/Avator3.png",
    name: "Sara Johnson",
    username: "Small Business Owner",
    date: "June 2, 2023"
  },
  {
    text: "The advanced reporting and analytics have revolutionized our financial decision-making. Our numbers have never looked better!",
    imageSrc: "/images/testimonial/Avator4.png",
    name: "Robert Turner",
    username: "CFO of Money Matters Corp",
    date: "June 12, 2023"
  },
  {
    text: "I used to juggle multiple tools, but this platform brought everything under one roof. Now I'm a marketing wizard with time to spare for a coffee break!",
    imageSrc: "/images/testimonial/Avator2.png",
    name: "John Smith",
    username: "Marketing Maven",
    date: "June 12, 2023"
  },
  {
    text: "I've seen many platforms, but this one takes the crown! The seamless integrations and robust security features make it a tech-savvy dream.",
    imageSrc: "/images/testimonial/Avator5.png",
    name: "David Lee",
    username: "IT Guru",
    date: "June 12, 2023"
  },
];

const row1 = testimonials.concat(testimonials); // Duplicate testimonials for seamless scrolling
const row2 = testimonials.concat(testimonials); // Duplicate testimonials for seamless scrolling

interface TestimonialsRowProps {
  className?: string;
  testimonials: typeof testimonials;
  animateDirection: "left-to-right" | "right-to-left";
}

const TestimonialsRow: React.FC<TestimonialsRowProps> = ({ className, testimonials, animateDirection }) => (
  <motion.div
    className={twMerge(`flex ${className}`)}
    animate={{ x: animateDirection === "right-to-left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
    transition={{
      repeat: Infinity,
      duration: 60,
      ease: "linear",
    }}
  >
    <div className="flex gap-5 justify-center flex-nowrap">
      {testimonials.map(({ imageSrc, name, username, text, date }, index) => (
        <div
          key={index}
          className={twMerge(
            "border border-[#222222]/10 rounded-[27px] shadow-[0_7px_14px_#EAEAEA] bg-white text-black flex-shrink-0"
          )}
          style={{ flex: '0 0 auto', width: 'calc((100% / 6) - 5px)', minWidth: 'calc((100% / 6) - 5px)', height: '242px' }}
        >
          <div className='flex items-center gap-6 p-4 '>
            <Image src={imageSrc} alt={name} width={54} height={54} className={twMerge("h-10 w-10 rounded-full")} />
            <div className='flex flex-col'>
              <div className={twMerge('text-black font-inter text-[20px] font-bold leading-tight capitalize')}>
                {name}
              </div>
              <div className={twMerge('text-[#979797] text-[14px] font-[500] mt-1')}>
                {username}
              </div>
            </div>
          </div>
          <div className={twMerge('font-inter font-[500] text-[16px] text-black p-4')}>
            {text}
          </div>
          <div className={twMerge('text-[#979797] text-[14px] font-[400] p-4 -mt-3')}>
            {date}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export const Testimonials = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden mt-[100px]">
      {/* Left Gradient */}
      <div className="absolute left-0 mt-[129px] w-[103px] h-[566px] bg-gradient-to-r from-white to-transparent"></div>
      {/* Right Gradient */}
      <div className="absolute right-0 mt-[100px] w-[103px] h-[566px] bg-gradient-to-l from-white to-transparent"></div>
      <h1 className="flex h-[69px] items-center justify-center text-[#0E172B] text-center font-Outfit font-bold lg:leading-[56px] lg:text-[51px] md:text-[40px] md:leading-[50px] sm:text-[30px] sm:leading-[35px] capitalize lg:mt-[100px] md:mt-[60px] sm:mt-[20px] lg:gap-[20px]">
        Our Customers Love
      </h1>
      <div className='overflow-hidden flex flex-col gap-[60px] mt-[15px] items-center'>
        {/* Single row on screens smaller than 1024px (small and medium screens) */}
        <div className="overflow-hidden w-full flex justify-center lg:hidden">
          <TestimonialsRow testimonials={row1} animateDirection="right-to-left" />
        </div>
        {/* Two rows on large screens */}
        <div className="hidden lg:flex flex-col items-center gap-[30px]">
          <div className="overflow-hidden w-full flex" style={{ height: '242px' }}>
            <TestimonialsRow testimonials={row1} animateDirection="right-to-left" />
          </div>
          <div className="overflow-hidden w-full flex" style={{ height: '242px' }}>
            <TestimonialsRow testimonials={row2} animateDirection="left-to-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
