const services = [
  "Servicing",
  "Engine Repair",
  "Oil Change",
  "Brake & Clutch Repair",
  "Battery Replacement",
  "General Maintenance",
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-[#0f0f0f]">
      <h2 className="text-3xl text-center font-bold mb-12">
        Our Premium Services
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#161616] p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition"
          >
            <h3 className="text-yellow-500 text-xl font-semibold mb-3">
              {service}
            </h3>
            <p className="text-gray-400">
              Expert service using modern equipment and experienced mechanics.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
