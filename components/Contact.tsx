export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0f0f0f]">
      <h2 className="text-3xl text-center font-bold mb-12">
        Contact & Location
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-[#161616] p-8 rounded-2xl shadow-xl">
          <p className="text-gray-300 mb-4">
            📞{" "}
            <a
              href="tel:+971525298828"
              className="hover:text-yellow-500"
            >
              +971 52 529 8828
            </a>
          </p>

          <p className="text-gray-300 mb-4">
            📞{" "}
            <a
              href="tel:+971557598101"
              className="hover:text-yellow-500"
            >
              +971 55 759 8101
            </a>
          </p>

          <p className="text-gray-400">
            📍 Alburj Garage, Dubai, United Arab Emirates
          </p>
        </div>

        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps?q=Alburj%20Garage&output=embed"
          className="w-full h-[320px] rounded-2xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
