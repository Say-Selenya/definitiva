export default function Contacto() {
  return (
    <section className="py-16 bg-gray-900 text-white" id="contacto">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Escríbeme ✨</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            rows="4"
            placeholder="Tu mensaje..."
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
