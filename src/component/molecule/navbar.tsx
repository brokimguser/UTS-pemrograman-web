// components/Navbar.js
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "../atom/CostumButton";
const Navbar = () => {
  const [showRegisterContainer, setShowRegisterContainer] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white text-2xl">
      {/* Logo */}
      <div className="text-xl font-bold flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-6" />
        <span className="text-gray-800">Nexcent</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-gray-600">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>

      <CustomButton
        text="Register NOW"
        onClick={() => setShowRegisterContainer(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      />

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
    </nav>
  );
};

export default Navbar;
