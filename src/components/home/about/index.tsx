import React from "react";
import Image from "next/image";
import imgAbout from "./about.png";

export default function About() {
  return (
    <section id="about" className="py-10 bg-gray-100 h-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h3 className="text-3xl font-bold tracking-widest text-center mb-8">
          About E-<span className="text-red-500">SHOP</span>
        </h3>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <p className="text-gray-700">
              This template is free to use for business system accounts.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>An item</li>
              <li>A second item</li>
              <li>A third item</li>
              <li>A fourth item</li>
              <li>And a fifth one</li>
            </ul>
            <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              Read more
            </button>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2">
            <Image
              src={imgAbout}
              alt="About E-SHOP"
              layout="responsive"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
