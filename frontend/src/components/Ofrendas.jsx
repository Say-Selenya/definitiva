export default function Ofrendas() {
  const items = [
    {
      titulo: "Ritual Lunar",
      desc: "Un viaje guiado con piedras, velas y energía cósmica para armonizar tus chakras.",
      img: "/ritual-lunar.jpg",
    },
    {
      titulo: "Amuleto Cósmico",
      desc: "Creado a mano con piedras estelares y símbolos galácticos. Conexión y protección.",
      img: "/amuleto-cosmico.jpg",
    },
    {
      titulo: "Sesión Reiki",
      desc: "Energía sanadora para desbloquear y equilibrar tu cuerpo y mente.",
      img: "/reiki.jpg",
    },
    {
      titulo: "Arte Visionario",
      desc: "Obras que mezclan lo místico y lo estético, un portal a otros mundos.",
      img: "/arte-visionario.jpg",
    },
  ];

  return (
    <section id="ofrendas" className="py-20 bg-gray-900 text-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          ✦ Ofrendas Cósmicas ✦
        </h2>
        <p className="text-gray-400">
          Cada ofrenda es un puente entre lo visible y lo invisible.  
          Elige la que resuene con tu alma 🌌
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="card bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={item.img}
              alt={item.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">
                {item.titulo}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
              <button className="btn w-full">Descubrir ✨</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
