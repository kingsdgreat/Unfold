"use client";
import Image from "next/image";
import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/movqlyze", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("Thanks for joining our waitlist!");
        setEmail(""); // Clear the input field after submission
      } else {
        setStatus("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center justify-center relative">
          <div className="max-w-[100%] w-[100%] sm:w-[70%] sm:max-w-[800px] sm:self-end h-[500px]">
            <Image
              src="/Frame 1.svg"
              alt="Nature Inspiration"
              className="rounded-lg shadow-lg h-full w-full object-cover"
              width={800}
              height={500}
            />
          </div>

          <div
            className="
            w-[90%] max-w-[578px] absolute top-1/2 -translate-y-1/2 
            sm:self-start px-8 py-10 rounded-[16px] 
            flex flex-col justify-between 
            bg-white shadow-[0px_8px_20px_0px_#3333330A] z-10"
          >
            <div className="space-y-6">
              <h2 className="font-nunito text-[32px] font-bold leading-[34px] text-left text-black">
                Be the First to Experience Unfold
              </h2>
              <p className="font-gordita text-base font-normal leading-[18px] text-left">
                Discover the future of wellness journaling — where mind meets
                body.
              </p>

              <form
                action="https://formspree.io/f/movqlyze"
                method="POST"
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full max-w-[514px] h-[54px] px-2 py-[14px] gap-[10px] rounded-[4px] border-[#363636] border border-solid"
                  required
                />
                {status && <p className="text-sm text-green-600">{status}</p>}
                <p className="text-sm text-gray-900">
                  This form collects your email so that we can reach you back.
                </p>
                <button
                  type="submit"
                  className="py-2 px-4 hover:bg-[#382CBE] text-white rounded-full bg-blue-600 transition"
                >
                  Join the waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
