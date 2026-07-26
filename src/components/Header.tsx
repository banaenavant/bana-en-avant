import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate?: () => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    onNavigate?.();
    setIsMenuOpen(false);
  };

  const navClass = isScrolled
    ? 'text-gray-700 hover:text-emerald-600'
    : 'text-white/90 hover:text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-gray-200/80'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <img
              src="/l.jpeg"
              alt="BANA EN AVANT"
              className="w-10 h-10 rounded-xl object-cover shadow-md"
            />
            <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-emerald-700' : 'text-white'
            }`}>
              BANA EN AVANT
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Qui sommes-nous', id: 'about' },
              { label: 'Nos actions', id: 'actions' },
              { label: 'Agir avec nous', id: 'get-involved' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-sm font-medium transition-all duration-300 group ${navClass}`}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-500 rounded-full group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('donate')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-orange-200/60 transform hover:scale-105 transition-all duration-300"
            >
              Je fais un don
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl p-5 space-y-1 animate-scaleIn border border-gray-100">
            {[
              { label: 'Qui sommes-nous', id: 'about' },
              { label: 'Nos actions', id: 'actions' },
              { label: 'Agir avec nous', id: 'get-involved' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-xl transition-all text-sm font-medium"
              >
                {label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('donate')}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm"
              >
                Je fais un don
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
