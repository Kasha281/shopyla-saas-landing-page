"use client";
import shopify from '@/assets/image 1606.png';
import alibaba from '@/assets/image 1616.png';
import aliexpress from '@/assets/image 1617.png';
import global from '@/assets/image 1618.png';
import drop from '@/assets/image 1611.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const LogoTicker = () => {
  return (
    
      <div className="w-[1263px] h-[146px]  flex items-center justify-center  bg-white relative">
  <h1 className="font-outfit text-[40px] font-[400] leading-[24] text-center text-[#64748B] relative top-[-44px]">
    Applies to All Sellers
  </h1>

      <div className='absolute bottom-0 w-full overflow-hidden'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div 
            className='flex gap-40 flex-none'
            animate={{ translateX: '-50%' }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            <div className='flex gap-20'>
              <Image src={shopify} alt="Shopify Logo" className='w-[119px] h-[38px]' />
              <Image src={alibaba} alt="Alibaba Logo" className='w-[123px] h-[38px]' />
              <Image src={aliexpress} alt="AliExpress Logo" className='w-[144px] h-[38px]' />
              <Image src={global} alt="Global Logo" className='w-[171px] h-[26px]' />
              <Image src={drop} alt="Drop Logo" className='w-[168px] h-[38px]' />
              {/* Repeat the logos to create a continuous ticker effect */}
              <Image src={shopify} alt="Shopify Logo" className='w-[119px] h-[38px]' />
              <Image src={alibaba} alt="Alibaba Logo" className='w-[123px] h-[38px]' />
              <Image src={aliexpress} alt="AliExpress Logo" className='w-[144px] h-[38px]' />
              <Image src={global} alt="Global Logo" className='w-[171px] h-[26px]' />
              <Image src={drop} alt="Drop Logo" className='w-[168px] h-[38px]' />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
  );
};
