"use client";

import Image from "next/image";

export default function KeyFeaturesSection() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="relative mx-auto bg-white text-black pt-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Leaves - Bottom Left */}
      <div className="absolute bottom-24 left-0 w-24 h-24 md:w-32 md:h-32 z-0" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(29%) saturate(507%) hue-rotate(213deg) brightness(95%) contrast(95%)' }}>
        <Image
          src="/featurebottom.svg"
          alt="Decorative leaf"
          width={192}
          height={192}
          className="object-contain opacity-60"
        />
      </div>

      {/* Decorative Leaves - Top Right */}
      <div className="absolute top-0 right-0 md:right-6 w-16 h-16 md:w-24 md:h-24 z-0" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(29%) saturate(507%) hue-rotate(213deg) brightness(95%) contrast(95%)' }}>
        <Image
          src="/featuretop.svg"
          alt="Decorative leaf"
          width={128}
          height={128}
          className="object-contain opacity-60"
        />
      </div>

      <div className="pb-[120px] lg:pb-[180px] w-full max-w-screen-xl my-auto mx-auto md:grid md:grid-cols-2 items-center gap-12 relative">
        {/* Left Content */}
        <div className="md:space-y-6">
          {/* Title */}
          <h2 className="text-[40px] font-bold leading-[60px] text-[#151318] font-nunito relative z-10 text-center md:text-left mb-6">
            What Is Unfold?
          </h2>

          {/* Mobile Image */}
          <div className="md:hidden relative flex justify-center items-center my-6">
            <Image
              src="/feature.svg"
              alt="Unfold App Mockup"
              width={250}
              height={400}
              className="relative z-10"
            />
          </div>

          {/* Description and Button */}
          <p className="text-[18px] leading-[22px] text-[#151318] font-medium relative z-10 text-center md:text-left">
            Unfold is an AI-enhanced journaling app designed to help you reflect, grow, and connect the dots between your emotional and physical wellness. By integrating with popular health wearables like Apple Health, Fitbit, and Oura Ring, Unfold brings your thoughts and body data together in one place.
          </p>

          <button 
            onClick={() => handleScroll("waitlist")} 
            className="bg-[#382CBE] hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-full shadow-md transition relative z-10 mt-6 mx-auto md:mx-0 block"
          >
            Be the First to Try It
          </button>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex relative justify-center items-center">
          <Image
            src="/feature.svg"
            alt="Unfold App Mockup"
            width={450}
            height={400}
            className="relative z-10 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}