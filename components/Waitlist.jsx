"use client";
import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Thanks for joining our waitlist!");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center justify-center relative">
          <div className="max-w-[100%] w-[100%] sm:w-[70%] sm:max-w-[800px]  sm:self-end h-[500px]">
            <img
              src="/Frame 1 (2).png"
              alt="Nature Inspiration"
              className="rounded-lg shadow-lg h-full w-full object-cover"
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full max-w-[514px] h-[54px] px-2 py-[14px] gap-[10px] rounded-[4px] border-[#363636] border border-solid"
                  required
                />
                {status && <p className="text-sm text-green-600">{status}</p>}
                <p className="text-sm text-gray-500">
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
