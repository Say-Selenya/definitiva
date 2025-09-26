// Ofrendas.jsx
export default function Ofrendas() {
  return (
    <section id="ofrendas" className="container" style={{ marginTop: "3rem" }}>
      <h2 className="title-glow" style={{ marginBottom: "1.5rem" }}>
        Mis Ofrendas ✦
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: #fff;
  background: linear-gradient(180deg, #0f1220, #141831 60%, #0b0d1e);
}

/* --- Ofrendas --- */
#ofrendas {
  text-align: center;
  margin: 3rem auto;
  padding: 2rem;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tier-card {
  padding: 2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 6px 18px rgba(0,0,0,0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tier-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0,0,0,0.6);
}

.title-glow {
  font-size: 1.5rem;
  text-shadow: 0 0 8px #fff, 0 0 15px #6c63ff, 0 0 30px #ff6ec7;
}

.btn-magic {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #6c63ff, #ff6ec7);
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s ease;
}

.btn-magic:hover {
  transform: scale(1.1);
}
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
