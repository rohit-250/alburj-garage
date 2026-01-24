import {
  Wrench,
  Zap,
  Paintbrush,
  Wind,
  Car,
  Droplet,
  ShieldCheck,
  Truck,
  Settings
} from "lucide-react";

const services = [
  { icon: Wrench, title: "All Mechanical Works" },
  { icon: Zap, title: "Electrical Works" },
  { icon: Settings, title: "Denting Works" },
  { icon: Paintbrush, title: "Painting Works" },
  { icon: Wind, title: "Air Conditioning Works" },
  { icon: Car, title: "Car Polishing & Detailing" },
  { icon: Droplet, title: "Oil Changing & Lubrication" },
  { icon: ShieldCheck, title: "General & Preventive Maintenance" },
  { icon: Truck, title: "Fleet & Heavy Vehicle Maintenance" },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-[#0b0b0b]">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-[0.18em]">
          Our <span className="text-[#d61f26]">Services</span>
        </h2>
        <div className="w-20 h-[3px] bg-[#d61f26] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          Complete maintenance and repair solutions for Cars, SUVs,
          Fleet Vehicles, and Heavy Commercial Vehicles — handled by
          experienced professionals using quality parts.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-[#141414] p-8 rounded-2xl border border-transparent
                         hover:border-[#d61f26] transition duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full
                                bg-[#d61f26]/10 text-[#d61f26]">
                  <Icon size={26} />
                </div>
<div className="flex items-center gap-3">
  <div className="w-[2px] h-7 bg-[#d61f26]"></div>

  <h3 className="text-[18px] md:text-[19px] font-medium uppercase tracking-[0.03em] text-gray-200">
    {service.title}
  </h3>
</div>





              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                
              </p>
            </div>
          );
        })}
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto mt-20 bg-[#141414] rounded-2xl p-10 border border-[#d61f26]/40">
     <div className="flex justify-center mb-6">
  <div className="flex items-center gap-3">
    <div className="w-[2px] h-8 bg-[#d61f26]"></div>

    <h3 className="text-[24px] md:text-[26px] font-medium uppercase tracking-[0.08em] text-gray-200">
      Benefits of Maintenance for Fleet & Company Vehicles
    </h3>
  </div>
</div>


        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          <li>✔ Vehicle check-up without appointments during work hours</li>
          <li>✔ Quality parts and professional repairs</li>
          <li>✔ Qualified team for company vehicle maintenance</li>
          <li>✔ Repairs done only after company approval</li>
          <li>✔ Company employees’ private cars receive
            <span className="text-yellow-400 font-semibold"></span>
          </li>
        </ul>
      </div>
    </section>
  );
}
