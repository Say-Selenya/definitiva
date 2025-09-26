import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Logo / Nombre */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-xl font-bold text-white tracking-wide">
            ✦ Zäe Selenya ✦
          </span>
          <p className="text-sm text-gray-400">
            Arte cósmico, música y rituales de otro universo.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <a href="#about" className="hover:text-pink-400 transition">
            Sobre mí
          </a>
          <a href="#proyectos" className="hover:text-pink-400 transition">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-pink-400 transition">
            Contacto
          </a>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm flex flex-col items-center space-y-3">
        <p className="flex items-center space-x-2">
          <FaRegCopyright /> 
          <span>{new Date().getFullYear()} Zäe Selenya. Todos los derechos reservados.</span>
        </p>
        <p className="text-xs text-gray-600">
          Hecho con amor cósmico 👽✨
        </p>
      </div>
    </footer>
  );
}
