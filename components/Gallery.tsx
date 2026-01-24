"use client";

import { useState } from "react";

export default function Gallery() {
  const images = [
    "/images/garage1.jpeg",
    "/images/garage2.jpeg",
    "/images/garage3.jpeg",
    "/images/garage4.jpeg",
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-black relative">
      
      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <h2 className="text-[38px] md:text-[48px] font-semibold uppercase tracking-[0.14em] text-white">
          Workshop <span className="text-[#d61f26]">Gallery</span>
        </h2>

        <div className="w-24 h-[4px] bg-[#d61f26] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          Real workshop. Real machines. Real performance.
        </p>
      </div>

      {/* ===== Gallery Grid ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => setActiveImage(img)}
          >
            <img
              src={img}
              alt="Al Burj Garage workshop"
              className="
                w-full h-56 object-cover
                transition duration-300
                group-hover:scale-110
                group-hover:brightness-90
              "
            />

            {/* Red frame on hover */}
            <div className="absolute inset-0 border-2 border-[#d61f26] opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>

      {/* ===== FULL SCREEN VIEWER ===== */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white border-2 border-[#d61f26]
                       px-4 py-2 uppercase tracking-wider hover:bg-[#d61f26] transition"
            onClick={() => setActiveImage(null)}
          >
            Close
          </button>

          {/* Image */}
          <img
            src={activeImage}
            alt="Garage full view"
            className="max-w-[90%] max-h-[85%] object-contain border-4 border-[#d61f26]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
