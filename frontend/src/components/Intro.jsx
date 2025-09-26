export default function Intro() {
  return (
    <section className="py-12">
      <div
        className="max-w-3xl mx-auto px-4 text-center"
        style={{
          background: "rgba(255,255,255,.06)",
          border: "1px solid rgba(255,255,255,.18)",
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,.35)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h2 className="text-3xl font-bold">La Artista Detrás del Portal</h2>
        <p className="mt-3 text-gray-300">
          Bienvenid@ a mi universo creativo. Pinto mundos oníricos, juego con el
          humor y la oscuridad, y convierto la energía en arte. Este espacio es
          un portal para sanar, reír y soñar junt@s. 🌙✨
        </p>

        {/* Etiquetas/badges */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span
            className="px-3 py-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(83,255,231,.16), rgba(140,123,255,.16))",
              border: "1px solid rgba(255,255,255,.2)",
              color: "#eafcff",
            }}
          >
            Energía & Arte
          </span>
          <span
            className="px-3 py-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,77,157,.16), rgba(140,123,255,.16))",
              border: "1px solid rgba(255,255,255,.2)",
              color: "#ffe9f4",
            }}
          >
            Onírico & Kawaii
          </span>
        </div>
      </div>
    </section>
  );
}
