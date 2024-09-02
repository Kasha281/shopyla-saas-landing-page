import React from 'react';
import con from '@/assets/Container (1).png';
import Image from 'next/image';
import one from '@/assets/Group 1321316181 1.png';
import two from '@/assets/search.png';
import img from '@/assets/Group 1321316182 (1) 1.png';
import img2 from '@/assets/Group 1321316180 (4) 1.png';
import img23 from '@/assets/View Products Ideas 1.png';

export const ProductShowcase = () => {
  return (
    <>
      {/* Main Section */}
      <section className="mt-[101px] w-[1263px] h-[1156px] bg-white relative">
        <div className="container mx-auto text-center flex justify-center">
          <h1 className="font-segoe text-[51px] font-bold w-[852px] h-[51px] leading-[50px] text-[#0E172B]">
            Discover Our Product Capabilities
          </h1>
        </div>

        <div className="inset-0 flex items-center justify-center">
          <p
            className="
              text-[#64748B]
              text-center
              font-segoe
              text-[25px]
              font-[400]
              font-Inter
              leading-[35px]
              w-[865px]
              h-[54px]
              mt-[20px] /* Moves the <p> element down by the height of the <h1> plus 20px */
            "
          >
            Boost your Shopify store with Shopyla. Track sales, monitor competitors, spot trends, and unlock your store's full potential.
          </p>
        </div>

        <div className="mt-[70px] ml-[629px] rounded-[20px]">
          <Image
            src={con}
            alt="Container Image" // Provide a descriptive alt text
            width={554} // Provide dimensions for the image
            height={415} // Provide dimensions for the image
            className="object-contain" // Ensure proper object-fit if needed
          />
        </div>

        <div className="ml-[80px] mt-[-415px] w-[520px] h-[420px] relative items-center rounded-[18px] bg-[#EBF9FF]">
          <p
            className="
              absolute
              top-[99px]
              bottom-[104px]
              left-[40px]
              flex
              flex-col
              w-[419px]
              h-[217px]
              justify-center
              text-[#0E172B]
              font-segoe
              text-[32px]
              font-bold
              leading-[42px]
            "
          >
            Boost productivity and <br />
            streamline workflow with <br />
            us. Enjoy our intuitive <br />
            interface and robust <br />
            features.
          </p>
        </div>

        <div className="flex flex-wrap mt-[50px] gap-[35px] items-start justify-center">
          <div className="w-[344px] h-[416px] rounded-[20px] opacity-100 shadow-[0_4px_15px_0px_#8189A51A] bg-[#FFF] relative overflow-hidden">
            <Image
              src={one}
              alt="Container Image"
              width={394}
              height={165}
              className="object-contain w-full h-auto absolute top-[25px] left-[25px]"
            />
            <Image
              src={two}
              alt="Container Image"
              width={440}
              height={57}
              className="object-contain w-full h-auto absolute mt-[210px] left-[25px]"
            />
            <h3 className="font-segoe-ui text-2xl font-bold leading-[21px] text-left w-[190px] h-[30px] ml-[25px] mt-[302px] opacity-100">
              Track any store
            </h3>
            <p className="w-[294px] h-[69px] text-[18px] font-segoe-ui text-base font-semibold leading-[23px] text-left ml-[25px] mb-[25px] text-[#6F767E] line-clamp-3 gap-15">
              Effortlessly discover how much money stores earn by tracking <br /> their daily sales.
            </p>
          </div>

          {/* Pink Div */}
          <div className="w-[344px] h-[416px] rounded-[20px] opacity-100 shadow-[0_4px_15px_0px_#8189A51A] bg-[#fff] relative overflow-hidden">
            <Image
              src={img}
              alt="Container Image"
              width={335}
              height={140}
              className="object-contain w-full h-auto absolute top-[25px] left-[25px]"
            />
            <Image
              src={img2}
              alt="Container Image"
              width={455}
              height={86}
              className="object-contain w-full h-auto absolute mt-[185px] left-[25px]"
            />
            <h3 className="font-segoe-ui text-2xl font-bold leading-[21px] text-left w-[190px] h-[30px] ml-[25px] mt-[302px] opacity-100 text-nowrap">
              Explore Products
            </h3>
            <p className="w-[294px] h-[69px] font-segoe-ui text-base font-semibold leading-[23px] text-left ml-[25px] mb-[25px] text-[#6F767E] line-clamp-2 gap-15">
              All products report is available for each TRACKED store.
            </p>
          </div>

          {/* Green Div */}
          <div className="w-[344px] h-[416px] rounded-[20px] opacity-100 shadow-[0_4px_15px_0px_#8189A51A] bg-[#fff] relative overflow-hidden">
            <Image
              src={img23}
              alt="Container Image"
              width={294}
              height={209}
              className="object-contain w-full h-auto absolute top-[25px] left-[25px]"
            />
            <h3 className="font-segoe-ui text-2xl font-bold leading-[21px] text-left w-[190px] h-[30px] ml-[25px] mt-[302px] opacity-100 text-nowrap">
              Product Changes
            </h3>
            <p className="w-[294px] h-[69px] text-[18px] font-segoe-ui text-base font-semibold leading-[23px] text-left ml-[25px] mb-[25px] text-[#6F767E] line-clamp-3 gap-15">
              Product changes showing change type, field, timestamp, and a link <br /> to view the product.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
