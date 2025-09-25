export default function Hero() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/imagenes/sombra.jpg')" }}
    >
      {/* Capa oscura encima de la foto */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10">
        <img
          src="/imagenes/avatar.jpg"
          alt="Avatar"
          className="w-28 h-28 rounded-full border-4 border-white mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-white">Zäe Selenya</h1>
        <button className="mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full transition">
          SUSCRIBIRSE
        </button>
      </div>
    </section>
  );
}
