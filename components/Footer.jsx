"use client";

import Image from "next/image";

export default function Footer() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-gray-400 py-6 pt-12 w-full">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-start lg:justify-between items-center lg:gap-0 gap-4 lg:items-start space-y-6 lg:space-y-0">
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
          <p className="text-sm text-center lg:text-left text-[#F9F9F9]">
            © Copyright 2024 Unfold. All Rights Reserved
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end space-y-3">
          {/* Center Section - Navigation Links */}
          <div className="flex flex-col items-start lg:flex-row lg:space-x-8 space-y-3 lg:space-y-0 text-sm text-gray-300">
            <button
              onClick={() => handleScroll("hero")}
              className="hover:text-gray-100 transition focus:outline-none"
            >
              About Us
            </button>
            <button
              onClick={() => handleScroll("features")}
              className="hover:text-gray-100 transition focus:outline-none"
            >
              Contact Us
            </button>
            <button
              onClick={() => handleScroll("transform")}
              className="hover:text-gray-100 whitespace-nowrap transition focus:outline-none"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="hover:text-gray-100 transition focus:outline-none"
            >
              Privacy
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="hover:text-gray-100 transition focus:outline-none"
            >
              FAQ
            </button>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="flex flex-col items-center lg:items-end space-y-3">
            <span className="text-sm text-gray-500">Find us on social media</span>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/prime_twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/Icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/Icon (1).svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/mdi_linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
