"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu when navigating
    }
  };

  return (
    <nav className="bg-white fixed w-full z-30 top-0 h-[71px] start-0 border-b border-gray-200 flex items-center justify-center">
      <div className="w-full max-w-screen-xl my-auto mx-auto">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2">
          {/* Logo Section */}
          <Link href="/"
            className="flex items-center cursor-pointer"
            onClick={() => handleScroll("hero")}
          >
            <Image
              height={1000}
              width={1000}
              src="/logo.svg"
              alt="Unfold Logo"
              className="h-5 w-auto"
            />
            <span className=" font-[700] ml-2">Unfold</span>
          </Link >

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-[34px]">
            <button
              onClick={() => handleScroll("transform")}
              className="text-gray-900 hover:text-gray-700 focus:outline-none "
            >
              Features
            </button>
              <Link
              href="/privacy"
              className="hover:text-gray-700 transition focus:outline-none "
            >
              Privacy Policy
            </Link>
              <Link
              href="/#"
              className="hover:text-gray-700 transition focus:outline-none "
            >
              Pricing
            </Link>
              <Link
              href="/#"
              className="hover:text-gray-700 transition focus:outline-none "
            >
              Resources
            </Link>
          </div>


          {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll("waitlist")}
              className="text-white text-sm bg-blue-700 transition-colors duration-300 hover:bg-blue-800 rounded-full px-4 py-2 font-medium"
            >
              Join the Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <button
                  onClick={() => handleScroll("hero")}
                  className="block w-full text-left text-gray-900 hover:bg-blue-100 rounded-lg px-4 py-2 font-medium transition duration-150 focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("transform")}
                  className="block w-full text-left text-gray-900 hover:bg-blue-100 rounded-lg px-4 py-2 font-medium transition duration-150 focus:outline-none"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("sync")}
                  className="block w-full text-left text-gray-900 hover:bg-blue-100 rounded-lg px-4 py-2 font-medium transition duration-150 focus:outline-none"
                >
                  Partnerships
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("faq")}
                  className="block w-full text-left text-gray-900 hover:bg-blue-100 rounded-lg px-4 py-2 font-medium transition duration-150 focus:outline-none"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("waitlist")}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-full px-4 py-2 font-medium text-center transition duration-150 focus:outline-none"
                >
                  Join the Waitlist
                </button>
              </li>
            </ul>

          </div>
        )}
      </div>
    </nav>
  );
}
