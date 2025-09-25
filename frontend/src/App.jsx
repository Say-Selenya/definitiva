import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Tiers from "./components/Tiers";
import Ofrendas from "./components/Ofrendas";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Hero />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <Intro />
        <Tiers />
        <Ofrendas />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
