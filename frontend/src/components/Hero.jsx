export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner container">
        {/* Imagen de perfil redonda */}
        <img
          src="/imagenes/sexy.jpg"   // 👈 aquí cambia a tu avatar real
          alt="Avatar"
          className="avatar"
        />

        {/* Título */}
        <h1 className="title">Zäe Selenya</h1>

        {/* Botón neón */}
        <button className="neon-btn">
          SUSCRIBIRSE
        </button>
      </div>
    </section>
  );
}
