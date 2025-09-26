// Hero.jsx
export default function Hero() {
  return (
    <div className="hero-avatar">
  <img src="/imagenes/avatar.jpg" alt="Zäe Selenya" />
</div>

<h1 className="hero-title title-glow">Zäe Selenya ✦</h1>
<p className="hero-sub">Portal mágico de arte, energía y creación.</p>

<div style={{ marginTop: 20 }}>
  <a className="btn-magic" href="#planes">Entrar al Portal</a>
  <a className="btn-magic" style={{ marginLeft: 10 }} href="#intro">Ver presentación</a>
</div>    <section className="hero container">
      <div>
        <h1 className="hero-title title-glow">Zäe Selenya ✦</h1>
        <p className="hero-sub">
          Portal mágico de arte, energía y creación.
        </p>

        <div style={{ marginTop: 16 }}>
          <span className="badge badge-blue">fantasy life</span>{" "}
          <span className="badge badge-pink">kawaii + místico</span>{" "}
          <span className="badge badge-red">rojo fogoso</span>
        </div>

        <div style={{ marginTop: 20 }}>
          <a className="btn-magic" href="#planes">
            Ver Tiers ✨
          </a>
        </div>
      </div>
    </section>
  );
}
