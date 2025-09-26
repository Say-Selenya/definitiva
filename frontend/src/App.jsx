import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Tiers from "./components/Tiers";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./Clean.css"; // Aquí importas tu CSS correcto

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio"><Hero /></section>
        <section id="intro" className="container"><Intro /></section>
        <section id="planes" className="container"><Tiers /></section>
        <section id="contacto" className="container"><Contacto /></section>
      </main>
      <Footer />
    </>
  );
}
