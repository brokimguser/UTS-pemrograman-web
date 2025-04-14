import React from "react";
import Image from "next/image";
import CustomButton from "@/component/atom/CostumButton";

const CustomerTestimonial = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-10">
        <div className="md:w-1/3">
          <Image
            src="/image 9.png"
            alt="Tesla Logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Right content */}
        <div className="md:w-2/3">
          <p className="text-gray-600 mb-4 leading-relaxed">
            “Before we started using this platform, managing our member database
            and renewals felt like a full-time job. Now, everything’s automated
            — from payment tracking to event registrations. It’s saved us hours
            every week. Our members love how simple and clean the interface is,
            and we love the support team — always responsive and helpful.”
          </p>
          <p className="text-green-600 font-semibold">Tim Smith</p>
          <p className="text-gray-400 text-sm mb-6">
            British Dragon Boat Racing Association
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Image src="/1.png" alt="Logo1" width={50} height={50} />
            <Image src="/Logo(4).png" alt="Logo2" width={50} height={50} />
            <Image src="/Logo(3).png" alt="Logo3" width={50} height={50} />
            <Image src="/Logo(2).png" alt="Logo4" width={50} height={50} />
            <Image src="/Logo(1).png" alt="Logo5" width={50} height={50} />
          </div>

          {/* Button */}
          <CustomButton
            text="Meet all customers"
            onClick={() => (window.location.href = "/customers")}
            className="text-green-600 hover:text-green-700 font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
