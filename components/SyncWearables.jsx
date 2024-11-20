"use client";

import Image from "next/image";

export default function SyncWearablesSection() {
  return (
    <section className="py-16 bg-white text-black text-center px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Title */}
        <div className="pb-12">
          <h2 className="text-4xl font-bold md:text-5xl">
            Seamlessly Sync with Your Favorite Wearables.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Unfold works with leading devices to give you a full picture of your
            health.
          </p>
        </div>

        <div className=" w-[90%] h-[90%] ">
          <div className="mx-auto relative max-w-[500px] max-h-[500px]  w-[85vw] h-[85vw] bg-[rgba(248,247,255,1)] rounded-full flex items-center justify-center">
            <div className="w-[75%] h-[75%] bg-[rgba(239,238,255,1)] rounded-full ">
              <Image
                src="/Frame 2.png" // Replace with your actual image
                alt="App Mockup"
                width={594}
                height={594}
                className="z-10"
              />
              {wearables.map((wearable, index) => (
                <div
                  key={index}
                  style={{
                    ...wearable.style,
                  }}
                  className="absolute  rounded-[7.72px] md:rounded-tl-[12.54px] lg:rounded-[18.75px]
                w-[100px] h-[100px] md:w-[80.88px] md:h-[80.88px] lg:w-[100px] lg:h-[100px]
               
                flex items-center justify-center"
                >
                  <Image
                    src={wearable.icon}
                    alt={wearable.name}
                    width={130}
                    height={130}
                    objectFit="contain"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const wearables = [
  {
    name: "Fitbit",
    icon: "/icons/integration (2).svg",
    style: { bottom: "20%", right: "0%" },
  },
  {
    name: "Oura",
    icon: "/icons/integration (4).svg",
    style: { top: "20%", left: "0%" },
  },
  {
    name: "Custom Tracker",
    icon: "/icons/integration (5).svg",
    style: { bottom: "0%", left: "50%", transform: "translate(-50%, 50%)" },
  },
  {
    name: "Garmin",
    icon: "/icons/integration (3).svg",
    style: { bottom: "20%", left: "0%" },
  },
  {
    name: "Apple Health",
    icon: "/icons/integration.svg",
    style: { top: "0%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    name: "Google Fit",
    icon: "/icons/integration (1).svg",
    style: { top: "20%", right: "0%" },
  },
];
