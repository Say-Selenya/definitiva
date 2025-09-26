export default function Navbar() {
  const go = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="nav">
      <div className="nav__inner container">
        <div className="nav__brand">Zöe Selenya</div>
        <nav className="nav__links">
          <button onClick={() => go("#inicio")}>Inicio</button>
          <button onClick={() => go("#intro")}>Sobre mí</button>
          <button onClick={() => go("#planes")}>Planes</button>
          <button onClick={() => go("#contacto")}>Contacto</button>
        </nav>
      </div>
    </header>
  );
}
