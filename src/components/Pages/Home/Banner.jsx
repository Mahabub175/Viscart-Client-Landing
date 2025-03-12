"use client";

import Image from "next/image";
import banner from "@/assets/images/banner2.png";
import bg from "@/assets/images/bg.png";

const Banner = () => {
  return (
    <section className="relative -mb-20 lg:mb-16 xl:-mb-1 xxl:mb-0">
      <Image
        src={bg}
        alt="wave"
        className="w-full absolute -top-20 -z-10 h-full lg:h-[650px] xxl:h-[700px]"
      />
      <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-center text-white my-container text-center lg:text-start pb-32 pt-10 lg:pt-0 xl:-mt-5">
        <div className="lg:mt-28 xxl:mt-0">
          <h1 className="text-3xl lg:text-5xl font-bold">
            <span className="text-violet-300">Viscart Demo</span> - Single
            Vendor Marketplace Software Project
          </h1>
          <p className="mt-6 text-sm lg:text-lg text-gray-200">
            Explore the real-life demo of the Viscart E-Commerce marketplace
            software. Learn how it works and how you can manage, operate,
            monitor, and make a profit out of it.
          </p>
        </div>
        <div>
          <Image
            src={banner}
            alt="banner"
            width={1000}
            height={1000}
            className="mb-20 lg:mb-0 lg:mt-10 xxl:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
