import { ArrowLeft } from 'lucide-react';

interface MissionDetailProps {
  onBack: () => void;
}

export default function MissionDetail({ onBack }: MissionDetailProps) {
  return (
    <div className="min-h-screen bg-white pt-32">
      <button
        onClick={onBack}
        className="fixed top-28 left-6 md:left-12 z-40 flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
      >
        <ArrowLeft size={24} />
        <span>Retour</span>
      </button>

      <div className="container mx-auto px-6 pb-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Notre Mission</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Accompagner les populations de Bana vers l'autonomie par le développement durable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Engagement</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              BANA EN AVANT est une association loi 1901 fondée avec la conviction profonde que le développement durable passe par l'autonomisation des communautés locales. Nous œuvrons chaque jour pour transformer positivement la vie des habitants de Bana au Cameroun.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Notre mission s'articule autour d'une vision holistique du développement : nous ne nous contentons pas d'apporter une aide ponctuelle, mais nous travaillons à construire des solutions durables et adaptées aux réalités locales.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Basée à Neuilly-sur-Marne, notre association mobilise des ressources et des compétences pour soutenir des projets concrets dans les domaines de l'éducation, de la santé, de l'agriculture et du développement économique.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vision</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un Bana prospère et autonome où chaque individu a accès à une éducation de qualité, aux soins de santé, et aux opportunités économiques.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-emerald-600 text-2xl font-bold mr-3">✓</span>
                <p className="text-gray-600">Accès égal à l'éducation de qualité</p>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-600 text-2xl font-bold mr-3">✓</span>
                <p className="text-gray-600">Système de santé accessible et efficace</p>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-600 text-2xl font-bold mr-3">✓</span>
                <p className="text-gray-600">Économie locale dynamique et inclusive</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Valeurs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Solidarité</h4>
                <p className="text-gray-600">Nous croyons à la force de l'entraide et du partage des ressources</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Transparence</h4>
                <p className="text-gray-600">Chaque action est documentée et justifiée auprès de nos partenaires</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Respect des cultures</h4>
                <p className="text-gray-600">Nous valorisons et respectons les traditions et savoirs locaux</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Engagement communautaire</h4>
                <p className="text-gray-600">Les populations de Bana sont au cœur de chaque décision</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="relative h-80 md:h-auto">
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Community 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 md:h-auto">
              <img
                src="https://images.pexels.com/photos/8466289/pexels-photo-8466289.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Community 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 md:h-auto">
              <img
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Community 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Rejoignez notre mission</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Que vous soyez bénévole, donateur ou simplement curieux, il existe mille façons de soutenir nos actions
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Soutenir nos actions
          </button>
        </div>
      </div>
    </div>
  );
}
