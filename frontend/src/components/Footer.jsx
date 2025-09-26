export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 mt-10 border-t border-gray-800">
      <p>©️ {new Date().getFullYear()} Zäe Selenya Portal 🌙 — Todos los universos creativos reservados</p>
    </footer>
  );
}
/* ------------------ Footer ------------------ */
.footer {
  background: #000010; /* negro cósmico */
  color: #ccc;
  text-align: center;
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.08);
  font-size: 0.9rem;
}

.footer p {
  margin: 0;
  color: var(--cosmic-text, #9ec9f1);
  letter-spacing: 1px;
}

.footer a {
  color: #ff49d9; /* tu rosa */
  text-decoration: none;
  font-weight: bold;
}

.footer a:hover {
  color: #88f7ff; /* azul brillante */
}
