export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971525298828"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        width={32}
        height={32}
      />
    </a>
  );
}
