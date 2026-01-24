export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0f0f0f]">
      
      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <h2 className="text-[36px] md:text-[44px] font-semibold uppercase tracking-[0.12em] text-white">
          Contact <span className="text-[#d61f26]">& Location</span>
        </h2>
        <div className="w-20 h-[3px] bg-[#d61f26] mx-auto mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* ===== Contact Info ===== */}
        <div className="bg-[#141414] p-10 rounded-2xl border border-[#1f1f1f]">

          {/* Phone 1 */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[3px] h-6 bg-[#d61f26]"></div>
            <p className="text-gray-200 text-lg">
              <a
                href="tel:+971525298828"
                className="hover:text-[#d61f26] transition"
              >
                +971 52 529 8828
              </a>
            </p>
          </div>

          {/* Phone 2 */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[3px] h-6 bg-[#d61f26]"></div>
            <p className="text-gray-200 text-lg">
              <a
                href="tel:+971557598101"
                className="hover:text-[#d61f26] transition"
              >
                +971 55 759 8101
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-[3px] h-6 bg-[#d61f26] mt-1"></div>
            <p className="text-gray-400 leading-relaxed">
              Opposite Public Works,<br />
              Al Qussaidat,<br />
              Ras Al-Khaimah,<br />
              United Arab Emirates
            </p>
          </div>
        </div>

        {/* ===== Google Map ===== */}
   <div className="w-full h-[360px] rounded-2xl border border-[#1f1f1f] bg-[#141414] flex items-center justify-center">
  <a
    href="https://maps.app.goo.gl/JJDGXQr6uT96zWFs5"
    target="_blank"
    rel="noopener noreferrer"
    className="text-center"
  >
    <p className="text-gray-200 text-lg mb-2">
      24-14 60C St, Al Qussaidat
    </p>
    <p className="text-gray-400 mb-6">
      Ras Al Khaimah, United Arab Emirates
    </p>

    <span className="inline-block px-8 py-3 border-2 border-[#d61f26] text-white rounded-full hover:bg-[#d61f26] transition">
      Open in Google Maps
    </span>
  </a>
</div>

      </div>
    </section>
  );
}
