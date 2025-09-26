export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen text-center text-white px-6"
      style={{
        background:
          "radial-gradient(60% 80% at 20% 20%, rgba(0,0,0,.30) 0, transparent 60%), linear-gradient(135deg, var(--bg1), var(--bg2))",
      }}
    >
      <div className="max-w-3xl mx-auto z-10">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
          ✦ Bienvenid@ al Portal Cósmico ✦
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-100 mb-10">
          Soy <span className="text-pink-400 font-semibold">Zäe Selenya</span>, exploradora de lo místico, 
          creadora de arte y rituales que conectan mundos 🌌✨
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 bg-transparent border border-white/40 hover:border-pink-400 rounded-full font-semibold transition"
          >
            Contáctame
          </a>
        </div>
      </div>

      {/* Efecto de brillo detrás */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
    </section>
  );
}
