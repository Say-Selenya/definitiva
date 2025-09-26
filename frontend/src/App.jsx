import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Ofrendas from "./components/Ofrendas";
import Tiers from "./components/Tiers";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero (portada principal) */}
      <Hero />

      {/* Intro / Sobre mí */}
      <Intro />

      {/* Ofrendas cósmicas */}
      <Ofrendas />

      {/* Tiers de apoyo */}
      <Tiers />

      {/* Contacto */}
      <Contacto />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
