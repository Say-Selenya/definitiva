import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/TU_CODIGO_AQUI"; // <-- cámbialo

export default function Contacto() {
  const [status, setStatus] = useState({ loading: false, ok: false, error: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: false, error: "" });

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus({ loading: false, ok: true, error: "" });
      } else {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "No se pudo enviar el formulario.");
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, error: err.message || "Error desconocido" });
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white" id="contacto">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Escríbeme ✨</h2>
        <p className="text-center text-gray-300 mb-8">
          Cuéntame tu idea, ritual o colaboración. Te respondo pronto.
        </p>

        {/* Feedback */}
        <div aria-live="polite" className="mb-4">
          {status.ok && (
            <div className="rounded-md bg-emerald-600/20 border border-emerald-500 px-4 py-3 text-emerald-200">
              ¡Gracias! Tu mensaje se envió correctamente 💌
            </div>
          )}
          {status.error && (
            <div className="rounded-md bg-rose-600/20 border border-rose-500 px-4 py-3 text-rose-200">
              {status.error}
            </div>
          )}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <input
            type="text"
            name="asunto"
            placeholder="Asunto (opcional)"
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <textarea
            name="mensaje"
            rows="5"
            placeholder="Tu mensaje..."
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          {/* Metadatos útiles en el correo */}
          <input type="hidden" name="_subject" value="Nuevo mensaje desde zaestelar.com" />
          {/* Honeypot anti-spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition"
          >
            {status.loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Protegido por Formspree. No comparto tus datos con terceros.
        </p>
      </div>
    </section>
  );
}
