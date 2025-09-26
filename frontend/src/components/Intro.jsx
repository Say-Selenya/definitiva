export default function Intro() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-gray-200 px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Imagen / Avatar cósmico */}
        <div className="flex justify-center">
          <img
            src="/alien.png" // 👉 cámbialo por tu imagen/pegatina
            alt="Alien cósmico"
            className="w-60 h-60 rounded-full object-cover border-4 border-pink-500 shadow-xl logo-alien"
          />
        </div>

        {/* Texto de presentación */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">
            ✦ Sobre mí ✦
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Soy <span className="text-pink-400 font-semibold">Zäe Selenya</span>, artista multidisciplinar, 
            exploradora de lo oculto y creadora de universos cósmicos.  
            Mi trabajo mezcla <span className="text-pink-300">arte, música y rituales</span> 
            para invitarte a viajar a otros mundos y conectar con tu propia energía interior. 🌌
          </p>
          <p className="text-lg leading-relaxed mb-8">
            En este portal comparto proyectos, visiones y experiencias que nacen de la conexión 
            entre lo espiritual y lo creativo. Cada detalle está pensado para abrir puertas 
            a lo invisible y transformar la percepción del día a día. ✨
          </p>

          <a
            href="#proyectos"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Explorar proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
