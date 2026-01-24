export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        {/* Tagline */}
    

        <p className="text-gray-300 text-lg md:text-xl mt-50 mb-10">
          DRIVEN BY QUALITY POWERED BY TRUST
        </p>

        {/* Buttons (POSITION UNCHANGED) */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:+971525298828"
            className="bg-[#d61f26] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:opacity-90 transition"
          >
            Call Now
          </a>

          <a
            href="#contact"
            className="border-2 border-[#d61f26] text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-[#d61f26] transition"
          >
            Get Location
          </a>
        </div>
      </div>
    </section>
  );
}
