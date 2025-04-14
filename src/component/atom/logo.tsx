"use client";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-2xl font-semibold text-gray-900">Our Clients</h2>
      <p className="text-gray-500">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-center items-center gap-6 mt-6">
        <Image src="/1.png" alt="Client 1" width={50} height={50} />
        <Image src="/Logo(4).png" alt="Client 2" width={50} height={50} />
        <Image src="/Logo(3).png" alt="Client 3" width={50} height={50} />
        <Image src="/Logo(2).png" alt="Client 4" width={50} height={50} />
        <Image src="/Logo(1).png" alt="Client 5" width={50} height={50} />
      </div>
    </section>
  );
};

export default Logo;
