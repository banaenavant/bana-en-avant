import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate?: () => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate();
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className={`text-2xl font-bold transition-colors duration-300 cursor-pointer hover:opacity-80 ${isScrolled ? 'text-emerald-700' : 'text-white'}`}
          >
            BANA EN AVANT
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className={`transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
              Qui sommes nous
            </button>
            <button onClick={() => scrollToSection('actions')} className={`transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
              Nos actions
            </button>
            <button onClick={() => scrollToSection('get-involved')} className={`transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'}`}>
              Agir avec nous
            </button>
            <button onClick={() => scrollToSection('donate')} className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Je fais un don
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-6 space-y-4 animate-fadeIn">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors py-2">
              Qui sommes nous
            </button>
            <button onClick={() => scrollToSection('actions')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors py-2">
              Nos actions
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors py-2">
              Agir avec nous
            </button>
            <button onClick={() => scrollToSection('donate')} className="block w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all">
              Je fais un don
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
