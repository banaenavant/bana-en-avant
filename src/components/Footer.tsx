import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              BANA EN AVANT
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Ensemble pour l'autonomie des populations de Bana au Cameroun
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@banaenvant.org"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Qui sommes nous
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('actions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nos actions
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Agir avec nous
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Je fais un don
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nos actions</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Éducation</li>
              <li>Santé</li>
              <li>Agriculture</li>
              <li>Accès à l'eau</li>
              <li>Électricité</li>
              <li>Développement économique</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-blue-400" />
                <span>1, rue de Savoie<br />93330 Neuilly-sur-Marne<br />France</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={20} className="mr-2 flex-shrink-0 text-pink-400" />
                <span>contact@banaenvant.org</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={20} className="mr-2 flex-shrink-0 text-green-400" />
                <span>+33 (0) XX XX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BANA EN AVANT - Association loi 1901 - RNA W932004075
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
