"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-screen pt-16 flex items-center justify-center mt-[71px]"
      style={{ backgroundImage: "url('/image0.png')" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#00003D80" }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-[840px] px-4">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-[56px]">
          Your Mental Health, Unfolded.
        </h1>
        <p className="mt-4 text-lg font-semibold md:text-xl">
          Designed for your mind-body wellness, Unfold helps you connect your
          thoughts, feelings, and physical health into one seamless journaling
          experience.
        </p>
        <p className="mt-6 text-sm italic">Coming soon...</p>

        {/* App Store and Google Play Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="#app-store-link" className="block">
            <Image
              src="/icons/app-store-badge.svg"
              alt="Download on the App Store"
              width={160}
              height={48}
              className="hover:scale-105 transition-transform"
            />
          </Link>
          <Link href="#google-play-link" className="block">
            <Image
              src="/icons/google-play-badge.svg"
              alt="Get it on Google Play"
              width={160}
              height={48}
              className="hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
