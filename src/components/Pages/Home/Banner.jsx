"use client";

import Image from "next/image";
import banner from "@/assets/images/banner.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url('/bg.png')` }}
      className="bg-cover h-[100vh] md:h-[140vh] lg:h-[102vh] bg-no-repeat bg-center -mb-20 lg:-mb-10"
    >
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center text-white my-container text-center lg:text-start pt-10 lg:pt-44 lg:-mt-32">
        <div>
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
          <Image src={banner} alt="banner" width={1000} height={1000} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
