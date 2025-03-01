"use client";

import { useState } from "react";
import Link from "../link";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-8 lg:px-16 xl:px-32">
        <Link className="text-xl font-bold tracking-widest" href="/">
          🛒 E-<span className="text-yellow-400">SHOP</span>
        </Link>

        <button
          className="lg:hidden p-2 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white my-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link className="hover:text-yellow-400" href="/">
            Home
          </Link>
          <Link className="hover:text-yellow-400" href="#about">
            About Us
          </Link>
        </div>

        <div className="hidden lg:flex space-x-4">
          <Link href="/allorder" className="hover:text-yellow-400">
            <i className="fa-solid fa-cart-plus"></i>
          </Link>
          <Link href="/favorits" className="hover:text-yellow-400">
            <i className="fa-regular fa-heart"></i>
          </Link>
          <Link href="/signin" className="hover:text-yellow-400">
            Sign in
          </Link>
          <Link href="/signup" className="hover:text-yellow-400">
            Sign up
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          style={{
            transform: isSidebarOpen ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.3s ease",
          }}
          className="fixed top-0 left-0 h-full w-[300px] bg-gray-900 text-white z-50 shadow-lg"
        >
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex flex-col space-y-4 px-8">
              <Link className="text-xl font-bold tracking-widest" href="/">
                🛒 E-<span className="text-yellow-400">SHOP</span>
              </Link>
            </div>
            <hr />
            <div className="flex flex-col space-y-4">
              <Link className="hover:text-yellow-400" href="/home">
                Home
              </Link>
              <Link className="hover:text-yellow-400" href="#about">
                About Us
              </Link>
              {/* <Link href="/allorder" className="hover:text-yellow-400">
                <i className="fa-solid fa-cart-plus"></i>
              </Link>
              <Link href="/favorits" className="hover:text-yellow-400">
                <i className="fa-regular fa-heart"></i>
              </Link> */}
              <Link href="/signin" className="hover:text-yellow-400">
                Sign in
              </Link>
              <Link href="/signup" className="hover:text-yellow-400">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
