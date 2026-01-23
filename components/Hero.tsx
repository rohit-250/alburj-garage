export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515923169340-3f89a8cfe6d6')] bg-cover bg-center" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
          AL BURJ GARAGE
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Complete Auto Care Specialists
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+971525298828"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Call Now
          </a>

          <a
            href="#contact"
            className="border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            Get Location
          </a>
        </div>
      </div>
    </section>
  );
}
