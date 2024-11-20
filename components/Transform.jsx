"use client";

import Image from "next/image";

export default function TransformSection() {
  return (
    <section className="py-16 bg-white text-black px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto space-y-8">
        {/* Title */}
        <h2 className="text-[40px] font-bold leading-[60px] text-[#151318] font-nunito text-center">
          Transform the Way You Journal
        </h2>

        <div className="w-full grid grid-cols-2 gap-8">
          {/* Top Content (Mockup Images Combined Layout) */}
          <div className="w-full relative bg-[#F9F9F9]  h-[594px] rounded-tl-[25.59px] mx-auto overflow-hidden">
            {/* Left image (lowered and positioned) */}
            <Image
              src="/Dashboard (1).png" // Adjust path to your asset
              alt="Left content"
              width={290} // Width of the left image
              height={594} // Full height of the container
              className="w-[40%] h-auto absolute bottom-0 right-[260px] z-10" // Lower the left image and keep it in front
            />

            {/* Right image (partially covering left image) */}
            <Image
              src="/Dashboard.png" // Adjust path to your asset
              alt="Right content"
              width={350} // Slightly larger width for the right image
              height={594} // Full height of the container
              className=" w-[50%] h-auto bottom-0 absolute  right-12 z-20" // Keep it at the top and layer it over the left image
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 bg-white gap-4">
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="p-4 pb-8 rounded-xl bg-[#F9F9F9] shadow-sm flex flex-col items-start justify-between"
              >
                {/* Icon positioned at top left */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="h-23 w-auto"
                />

                {/* Text content at bottom */}
                <div className="h-[140px] bottom-0  space-y-6">
                  <h3 className="text-[24px] font-bold leading-[28px] text-[#151318] font-nunito text-left">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] leading-[18px] text-[#5E5E5E] font-gordita text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 bg-white items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {/* Feature Cards */}
          {features.slice(4, 8).map((feature, index) => (
            <div
              key={index}
              className="h-full gap-[60px] flex flex-col items-start justify-between p-4 rounded-xl bg-[#F9F9F9] shadow-sm relative pb-8"
            >
              {/* Icon positioned at top left */}
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="h-23 w-auto"
              />

              {/* Text content at bottom */}
              <div className="h-[140px] bottom-0 space-y-6">
                <h3 className="text-[24px] font-bold leading-[28px] text-[#151318] font-nunito text-left">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[18px] text-[#5E5E5E] font-gordita text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "/icons/Vector.svg",
    title: "Advanced AI",
    description:
      "Unlock deeper interaction and reflections with the most sophisticated AI models around.",
  },
  {
    icon: "/icons/feature.svg",
    title: "Goal Tracking",
    description:
      "Identify and track your self-improvement goals with ease and efficiency.",
  },
  {
    icon: "/icons/feature (1).svg",
    title: "Private & Safe",
    description: "Your data is encrypted to protect your privacy.",
  },
  {
    icon: "/icons/feature (2).svg",
    title: "Unfold Listen",
    description:
      "Ask Unfold anything about yourself and Unfold will answer based on your entries.",
  },
  {
    icon: "/icons/feature (3).svg",
    title: "Mind-Body Sync",
    description:
      "Keep track of your health activity data seamlessly by syncing your wearables.",
  },
  {
    icon: "/icons/feature (4).svg",
    title: "Long-Term Memory",
    description:
      "Unfold recalls relevant memories as you write, helping you spot patterns and grow.",
  },
  {
    icon: "/icons/feature (5).svg",
    title: "Weekly Report",
    description:
      "Weekly summary and analysis of your journal entries to gain valuable insights.",
  },
  {
    icon: "/icons/feature (6).svg",
    title: "Real-Human Therapy",
    description:
      "Have access to certified professional counselors/therapists for group and personal sessions.",
  },
];