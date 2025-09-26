export default function Hero() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/imagenes/sombra.jpg')" }}
    >
      {/* Capa oscura encima de la foto */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 text-white">
        {/* Imagen de perfil / logo */}
        <img
          src="/imagenes/pokebola.png"   // 👈 cambia este archivo si quieres otro logo
          alt="Logo"
          className="w-28 h-28 rounded-full border-4 border-white mx-auto mb-4"
        />

        {/* Título */}
        <h1 className="text-4xl font-bold">Zäe Selenya</h1>

        {/* Subtítulo */}
        <p className="mt-2 text-lg">Bienvenid@ a mi mundo de colores ✨</p>

        {/* Botón */}
        <button className="mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition">
          SUSCRÍBETE
        </button>
      </div>
    </section>
  );
}
