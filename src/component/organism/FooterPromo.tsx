import React from "react";
import Image from "next/image";
import CustomButton from "@/component/atom/CostumButton";

const FooterPromo = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left: Logo and Company Name */}
        <div className="flex flex-col items-start">
          <Image src="/logo.png" alt="Company Logo" width={60} height={60} />
          <h2 className="text-2xl font-bold mt-2">Nexcent</h2>
        </div>

        {/* Right: Navigation + Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-3/4">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
              Get the latest news and updates right in your inbox.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-white text-black w-full md:w-auto"
              />
              <CustomButton
                text="Subscribe"
                onClick={() => alert("Subscribed!")}
                className="bg-white text-green-900 hover:bg-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPromo;
