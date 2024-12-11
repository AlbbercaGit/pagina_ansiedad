import { FaSpotify, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" bg-opacity-70 text-white py-8 px-4 z-10">
      <div className="container mx-auto flex flex-col  justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Ansiedad Caramelizada</h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link href="#home" className="hover:text-gray-300 transition-colors">
            Inicio
          </Link>
          <Link href="#music" className="hover:text-gray-300 transition-colors">
            Música
          </Link>
          <Link href="#photos" className="hover:text-gray-300 transition-colors">
            Fotos
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://open.spotify.com/artist/your-spotify-id" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            <FaSpotify size={24} />
          </a>
          <a href="https://www.instagram.com/ansiedadcaramelizada/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/channel/UCsIPcWiuxrO8cnavY2VAUZQ/community?pvf=CAI%253D" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

