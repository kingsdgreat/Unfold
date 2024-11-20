"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 pt-12 w-full">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-start  lg:justify-between items-center lg:gap-0 gap-4 lg:items-start space-y-6 lg:space-y-0">
        {/* Left Section - Logo and Copyright */}
        <div className="flex flex-col items-center lg:items-start space-y-3">
          <div className="flex items-center space-x-3">
            <Image
              src="/feather-svgrepo-com 1.svg"
              alt="Unfold Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-semibold text-[#4A4E5A]">
              Unfold
            </span>
          </div>
          <p className="text-sm text-center lg:text-left text-[#F9F9F9">
            © Copyright 2024 Unfold. All Rights Reserved
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end space-y-3">
          {/* Center Section - Navigation Links */}
          <div className="flex flex-col items-start lg:flex-row lg:space-x-8 space-y-3 lg:space-y-0 text-sm text-gray-300">
            <Link href="/about" className="hover:text-gray-100 transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-100 transition">
              Contact Us
            </Link>
            <Link href="/terms" className="hover:text-gray-100 transition">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-gray-100 transition">
              Privacy
            </Link>
            <Link href="/faq" className="hover:text-gray-100 transition">
              FAQ
            </Link>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="flex flex-col items-center lg:items-end space-y-3">
            <span className="text-sm text-gray-500">
              Find us on social media
            </span>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank">
                <Image
                  src="/icons/prime_twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image
                  src="/icons/Icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <Image
                  src="/icons/Icon (1).svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Image
                  src="/icons/mdi_linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
