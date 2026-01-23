export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1515923169340-3f89a8cfe6d6",
    "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e",
    "https://images.unsplash.com/photo-1542362567-b07e54358753",
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl text-center font-bold mb-12">
        Workshop Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Garage work"
            className="rounded-xl shadow-xl object-cover h-48 w-full"
          />
        ))}
      </div>
    </section>
  );
}
