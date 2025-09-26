Tiers.jsx  
──────────────────────────────  
1  export default function Tiers() {  
2    return (  
3      <section className="py-16 px-6 md:px-20">  
4        <h2 className="text-3xl font-bold text-center mb-12">Entradas Mágicas ✨</h2>  
5        ...  
40     </section>  
41   );  
42 }
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Entradas Mágicas ✨</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Frikilandia */}
        <div className="card tier frikilandia text-white p-6 rounded-2xl shadow-lg transition">
          <div className="mb-2 text-2xl">💙</div>
          <h3 className="text-xl font-semibold mb-2">Frikilandia</h3>
          <p className="opacity-90">Mundos frikis y cultura pop.</p>
          <a
            href="https://ko-fi.com/tu-enlace-frikilandia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn neon-btn mt-4 bg-white text-black font-semibold inline-block"
          >
            Unirme
          </a>
        </div>

        {/* Tragedias de Pesadillas */}
        <div className="card tier tragedias text-white p-6 rounded-2xl shadow-lg transition">
          <div className="mb-2 text-2xl">🖤</div>
          <h3 className="text-xl font-semibold mb-2">Tragedias de Pesadillas</h3>
          <p className="opacity-90">Oscuridad y emociones profundas.</p>
          <a
            href="https://ko-fi.com/tu-enlace-tragedias"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-4 bg-white text-black font-semibold inline-block"
          >
            Unirme
          </a>
        </div>

        {/* Humor + Arte + Kawaii */}
        <div className="card tier kawaii p-6 rounded-2xl shadow-lg transition">
          <div className="mb-2 text-2xl">💚</div>
          <h3 className="text-xl font-semibold mb-2">Humor + Arte + Kawaii</h3>
          <p className="opacity-80">Contenido alegre, tierno y artístico.</p>
          <a
            href="https://ko-fi.com/tu-enlace-kawaii"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-4 bg-black text-white font-semibold inline-block"
          >
            Unirme
          </a>
        </div>

      </div>
    </section>
  );
}
