import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Nombre */}
        <a href="#hero" className="text-xl md:text-2xl font-extrabold text-white tracking-wide hover:text-pink-400 transition">
          ✦ Zäe Selenya ✦
        </a>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#about" className="hover:text-pink-400 transition">Sobre mí</a>
          <a href="#proyectos" className="hover:text-pink-400 transition">Proyectos</a>
          <a href="#contacto" className="hover:text-pink-400 transition">Contacto</a>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800">
          <div className="flex flex-col items-center py-6 space-y-4 text-gray-200 font-medium">
            <a href="#about" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Sobre mí</a>
            <a href="#proyectos" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Proyectos</a>
            <a href="#contacto" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}
