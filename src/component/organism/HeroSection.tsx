"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/component/atom/CostumButton";

const HeroSection = () => {
  const [showRegisterContainer, setShowRegisterContainer] = useState(false);
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-20 min-h-screen">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900">
          Lessons and insights <br />
          <span className="text-green-500">from 8 years</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <CustomButton
          text="Register"
          onClick={() => setShowRegisterContainer(true)}
          className="mt-6 bg-green-500 text-white hover:bg-green-600 transition"
        />
      </div>

      <div className="mt-8 md:mt-0 flex items-center gap-4">
        <Image src="/Group 238.png" alt="computer" width={200} height={100} />
        <Image src="/Group 237.png" alt="Hero" width={300} height={200} />
      </div>

      {showRegisterContainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Register Now
            </h2>
            <p className="text-gray-600 text-center">
              This is the registration container!
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowRegisterContainer(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
