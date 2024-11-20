"use client";

import Image from "next/image";

export default function WellnessJourneySection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center text-white px-6 md:px-12 lg:px-24 py-16"
      style={{
        backgroundImage: "url('/image2.png')", // Replace with your background image path
        backdropFilter: "blur(10px)", // For a modern blurred effect
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-end gap-12 max-w-screen-xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-center lg:text-left">
            Designed for Every Wellness Journey
          </h1>
          <p
            className="text-base md:text-lg lg:text-xl text-center lg:text-left"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Whether you're a mindfulness enthusiast, a busy professional, or
            someone seeking balance, Unfold adapts to your needs:
          </p>
          <ul className="space-y-4 mx-auto lg:mx-0 w-max">
            {[
              "Reflect on your emotions and goals.",
              "Understand your stress levels and energy.",
              "Build better habits with personalized insights.",
            ].map((text, index) => (
              <li
                key={index}
                className="max-w-[460px] h-[49px]  text-center lg:text-left"
                style={{
                  backgroundColor: "rgba(248, 247, 255, 0.15)", // #F8F7FF26
                  padding: "12px",
                  gap: "16px",
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(90deg, #D0CCFF 0%, #1A1458 100%)",
                  borderImageSlice: "1",
                  backdropFilter: "blur(2px)",
                  transition: "background-color 0.3s ease",
                  backgroundClip: "padding-box",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.3)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(248, 247, 255, 0.15)")
                }
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-center lg:text-left">
            "The concept of syncing mind and body is revolutionary. Unfold is
            set to redefine how we approach mental wellness."
          </blockquote>
          <cite
            className="block mt-2 text-center lg:text-left"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            — Dr. Alex Carter, Mental Health Specialist
          </cite>
        </div>
      </div>
    </section>
  );
}
