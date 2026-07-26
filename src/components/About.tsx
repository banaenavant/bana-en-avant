import { Heart, ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import type { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page, id?: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
            Notre identité
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Qui sommes-nous ?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            BANA EN AVANT est une association loi 1901 dédiée au développement durable et à la solidarité envers les communautés au Cameroun, en Europe et partout dans le monde où elles ont besoin d'accompagnement
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '2012', label: 'Année de fondation', icon: Calendar },
            { value: '14+', label: 'Actions réalisées', icon: Heart },
            { value: '1000+', label: 'Bénéficiaires', icon: Users },
            { value: '3', label: 'Continents', icon: MapPin },
          ].map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <Icon size={22} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-1">{value}</div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        {/* Mission card */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => onNavigate('mission')}
            className="w-full max-w-2xl bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/50 transform hover:-translate-y-1 transition-all duration-400 text-left group"
          >
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-200">
                <Heart className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Notre Mission</h3>
                <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                  Soutenir les communautés au Cameroun, en Europe et partout dans le monde vers l'autonomie à travers des projets de développement durable et d'accompagnement humain
                </p>
                <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                  Découvrir <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* History section */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-auto overflow-hidden">
              <img
                src="/Chefferie_Bana.jpg"
                alt="Communauté de Bana"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20 md:bg-gradient-to-r md:from-transparent md:to-gray-900/40" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Notre histoire</span>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                Un engagement de plus de 12 ans
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                Fondée avec la conviction que le développement durable passe par l'autonomisation des communautés locales, BANA EN AVANT œuvre depuis sa création pour transformer positivement la vie des personnes qu'elle accompagne, au Cameroun, en Europe et à l'international.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Basée à Neuilly-sur-Marne, notre association mobilise des ressources et des compétences pour soutenir des projets concrets de solidarité dans les domaines de l'éducation, de la santé, de l'agriculture et du développement économique.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Siège social</p>
                    <p className="text-gray-300 font-medium">1, rue de Savoie<br />93330 Neuilly-sur-Marne</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Statut légal</p>
                    <p className="text-gray-300 font-medium">Association loi 1901<br />RNA W932004075</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
