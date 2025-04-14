"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/component/atom/CostumButton";

const PixelgradeSection = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-20">
      {/* Left Image */}
      <div className="mb-8 md:mb-0 md:w-1/2">
        <Image
          src="/rafiki.png"
          alt="Pixelgrade Illustration"
          width={600}
          height={400}
        />
      </div>

      {/* Right Text */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          in Pixelgrade you will learn more than what you pay for, lots of
          challenges to stimulate your brain, connections into the world of
          photography, digital certificate to boost your credibility and much
          more
        </p>
        <CustomButton
          text="Learn More"
          onClick={() => (window.location.href = "/learn more")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold transition"
        />
      </div>
    </section>
  );
};

export default PixelgradeSection;
