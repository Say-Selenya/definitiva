export default function Tiers() {
  const tiers = [
    {
      nombre: "Frikilandia 💙",
      precio: "5€ / mes",
      desc: "Contenido friki, fandom y cultura pop. Un espacio para compartir risas y obsesiones geek.",
      color: "from-sky-400 to-pink-400",
    },
    {
      nombre: "Tragedias de Pesadillas 🖤",
      precio: "8€ / mes",
      desc: "Historias oscuras, emociones profundas y reflexiones intensas. Perfecto para almas melancólicas.",
      color: "from-gray-800 to-purple-800",
    },
    {
      nombre: "Humor + Arte + Kawaii 💚",
      precio: "10€ / mes",
      desc: "Contenido alegre, tierno y artístico. Una mezcla de creatividad, risas y estética adorable.",
      color: "from-green-400 to-pink-400",
    },
  ];

  return (
    <section id="tiers" className="py-20 bg-gray-950 text-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          ✦ Mis Tiers ✦
        </h2>
        <p className="text-gray-400">
          Elige tu nivel de conexión cósmica y apóyame en mi viaje artístico 🌌
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition bg-gradient-to-br ${tier.color}`}
          >
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-3">{tier.nombre}</h3>
              <p className="text-sm mb-6">{tier.desc}</p>
              <div className="mt-auto">
                <p className="text-lg font-semibold mb-4">{tier.precio}</p>
                <button className="btn w-full">Unirme ✨</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
