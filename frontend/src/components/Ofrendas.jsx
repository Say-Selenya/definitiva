// Ofrendas.jsx
export default function Ofrendas() {
  return (
    <section id="ofrendas" className="container" style={{ marginTop: "3rem" }}>
      <h2 className="title-glow" style={{ marginBottom: "1.5rem" }}>
        Mis Ofrendas ✦
      </h2>

      <div className="tiers-grid">
        {/* Ofrenda 1 */}
        <article className="tier-card tier--frikilandia glass">
          <h3 className="title-glow">Luz Celeste 💙</h3>
          <p>Claridad, inspiración y energía brillante.</p>
          <a className="btn-magic" href="#contacto">Ver más</a>
        </article>

        {/* Ofrenda 2 */}
        <article className="tier-card tier--tragedias glass">
          <h3 className="title-glow">Sombras del Umbral 🖤</h3>
          <p>Profundidad, misterio y conexión interior.</p>
          <a className="btn-magic" href="#contacto">Ver más</a>
        </article>

        {/* Ofrenda 3 */}
        <article className="tier-card tier--kawaii glass">
          <h3 className="title-glow">Dulce Energía 💚</h3>
          <p>Alegría, ternura y arte mágico.</p>
          <a className="btn-magic" href="#contacto">Ver más</a>
        </article>
      </div>
    </section>
  );
}
