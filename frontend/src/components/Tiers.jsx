export default function Tiers() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Entradas Mágicas ✨</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Frikilandia */}
        <div className="rounded-2xl border-2 border-blue-500/70 p-6 hover:bg-blue-500/15 transition">
          <div className="text-4xl mb-2">💙</div>
          <h3 className="text-xl font-semibold text-blue-400 mb-1">Frikilandia</h3>
          <p className="text-neutral-300">Mundos frikis y cultura pop.</p>
          <button className="mt-4 w-full rounded-full bg-white text-black font-semibold py-2 hover:bg-neutral-100 transition">
            Ver más
          </button>
        </div>

        {/* Tragedias de Pesadillas */}
        <div className="rounded-2xl border-2 border-purple-600/70 p-6 hover:bg-purple-600/15 transition">
          <div className="text-4xl mb-2">🖤</div>
          <h3 className="text-xl font-semibold text-purple-300 mb-1">Tragedias de Pesadillas</h3>
          <p className="text-neutral-300">Oscuridad y emociones profundas.</p>
          <button className="mt-4 w-full rounded-full bg-white text-black font-semibold py-2 hover:bg-neutral-100 transition">
            Ver más
          </button>
        </div>

        {/* Humor + Arte + Kawaii */}
        <div className="rounded-2xl border-2 border-green-500/70 p-6 hover:bg-green-500/15 transition">
          <div className="text-4xl mb-2">💚</div>
          <h3 className="text-xl font-semibold text-green-400 mb-1">Humor + Arte + Kawaii</h3>
          <p className="text-neutral-300">Contenido alegre, tierno y artístico.</p>
          <button className="mt-4 w-full rounded-full bg-white text-black font-semibold py-2 hover:bg-neutral-100 transition">
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
}
