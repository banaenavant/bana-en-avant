import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gray-950 text-white">

      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-orange-400" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/l.jpeg"
                alt="BANA EN AVANT"
                className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-emerald-900/40"
              />
              <span className="text-xl font-black text-white">BANA EN AVANT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Solidarité et soutien pour les communautés du Cameroun, d'Europe et d'ailleurs
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/banaenavant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:contact@banaenvant.org"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Qui sommes-nous', id: 'about' },
                { label: 'Nos actions', id: 'actions' },
                { label: 'Agir avec nous', id: 'get-involved' },
                { label: 'Faire un don', id: 'donate' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Domaines d'action</h4>
            <ul className="space-y-2.5">
              {[
                'Éducation', 'Santé', 'Agriculture',
                "Accès à l'eau", 'Électricité', 'Développement économique',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                <span>1, rue de Savoie<br />93330 Neuilly-sur-Marne, France</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-500" />
                <span>Bana, Cameroun<br />Europe · International</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="flex-shrink-0 text-orange-400" />
                <a href="mailto:Tchaptchet80@yahoo.fr" className="hover:text-white transition-colors">
                  Tchaptchet80@yahoo.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="flex-shrink-0 text-blue-400" />
                <span>+33 6 81 77 57 72</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} BANA EN AVANT · Association loi 1901 · RNA W932004075
            <span className="hidden md:inline"> · Neuilly-sur-Marne · Cameroun · International</span>
          </p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
