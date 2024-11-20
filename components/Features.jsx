"use client";

import Image from "next/image";

export default function KeyFeaturesSection() {
  return (
    <section className=" relative mx-auto bg-white text-black py-16 px-6 md:px-12 lg:px-24">
      <div className="pb-[120px] lg:pb-[180px] w-full max-w-screen-xl my-auto mx-auto md:grid md:grid-cols-2 items-center gap-12 relative">
        {/* Dotted Background for Left */}
        <Image
          src="/Group (1).png"
          alt="Dotted Background Left"
          objectFit="contain"
          height={800}
          width={800}
          className="absolute bottom-0 left-0 w-[200px] h-auto"
        />
        {/* Left Content */}
        <div className="md:space-y-6">
          {/* Title */}
          <h2 className="text-[40px] font-bold leading-[60px] text-[#151318] font-nunito relative z-10 text-center md:text-left mb-6">
            What Is Unfold?
          </h2>

          {/* Mobile Image */}
          <div className="md:hidden relative flex justify-center items-center my-6">
            <Image
              src="/Splash Screen.png"
              alt="Unfold App Mockup"
              width={185}
              height={400}
              className="relative z-10"
            />
            {/* <Image
              src="/Group.png"
              alt="Dotted Background Right"
              height={800}
              width={800}
              className="absolute -bottom-[100px] -left-[180px] w-[226px] h-auto"
            /> */}
          </div>

          {/* Description and Button */}
          <p className="text-[18px] leading-[22px] text-[#151318]  font-thin  relative z-10 text-center md:text-left">
            Unfold is an AI-enhanced journaling app designed to help you
            reflect, grow, and connect the dots between your emotional and
            physical wellness. By integrating with popular health wearables like
            Apple Health, Fitbit, and Oura Ring, Unfold brings your thoughts and
            body data together in one place.
          </p>

          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-full shadow-md transition relative z-10 mt-6 mx-auto md:mx-0 block">
            Be the First to Try It
          </button>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex relative justify-center items-center">
          {/* Dotted Background for Right */}
          <Image
            src="/Group.png"
            alt="Dotted Background Right"
            width={800}
            height={800}
            className="absolute -bottom-[100px] -left-[0px] w-[226px] h-auto"
          />

          <Image
            src="/Splash Screen.png"
            alt="Unfold App Mockup"
            width={185}
            height={400}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
