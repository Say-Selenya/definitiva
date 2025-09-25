export default function Ofrendas() {
  const amounts = [5, 10, 25, 50, 100];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Ofrendas 🔮</h2>
      <p className="text-gray-400 mb-6">Elige tu propina mágica ✨</p>

      {/* Imagen pokebola */}
      <img
        src="/imagenes/pokebola.png"
        alt="Pokebola mágica"
        className="w-32 h-32 mx-auto mb-8 animate-bounce"
      />

      {/* Botones de propinas */}
      <div className="flex flex-wrap justify-center gap-4">
        {amounts.map((amount, index) => (
          <button
            key={index}
            className="px-5 py-2 border-2 border-pink-500 text-pink-400 rounded-full hover:bg-pink-600 hover:text-white transition"
          >
            {amount} €
          </button>
        ))}
      </div>

      {/* Opción personalizada */}
      <div className="mt-6">
        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition">
          Cantidad personalizada
        </button>
      </div>
    </section>
  );
}
