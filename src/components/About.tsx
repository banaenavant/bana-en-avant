import { Heart, Target, Users, ArrowRight } from 'lucide-react';
import type { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page, id?: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BANA EN AVANT est une association loi 1901 dédiée au développement durable des populations de Bana au Cameroun
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <button
            onClick={() => onNavigate('mission')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left group cursor-pointer"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aider les populations de Bana et du Cameroun à atteindre l'autonomie à travers des projets de développement durable
            </p>
            <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
              Découvrir <ArrowRight size={20} className="ml-2" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('mission')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left group cursor-pointer"
          >
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Un Bana prospère où chaque individu a accès à l'éducation, aux soins de santé et aux opportunités économiques
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Découvrir <ArrowRight size={20} className="ml-2" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('mission')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left group cursor-pointer"
          >
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Solidarité, transparence, respect des cultures locales et engagement communautaire
            </p>
            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              Découvrir <ArrowRight size={20} className="ml-2" />
            </div>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto">
              <img
                src="https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community in Bana"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fondée avec la conviction que le développement durable passe par l'autonomisation des communautés locales, BANA EN AVANT œuvre depuis sa création pour transformer positivement la vie des habitants de Bana.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Basée à Neuilly-sur-Marne, notre association mobilise des ressources et des compétences pour soutenir des projets concrets dans les domaines de l'éducation, de la santé, de l'agriculture et du développement économique.
              </p>
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  <strong>Siège social:</strong> 1, rue de Savoie, 93330 Neuilly-sur-Marne<br />
                  <strong>RNA:</strong> W932004075
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
