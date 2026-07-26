import { ArrowLeft, Heart, Eye, Star, CheckCircle } from 'lucide-react';

interface MissionDetailProps {
  onBack: () => void;
  onGoToActions: () => void;
}

export default function MissionDetail({ onBack, onGoToActions }: MissionDetailProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <img src="/mission7.jpg" alt="Notre mission" className="w-full h-full object-cover animate-slowZoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

        <button
          onClick={onBack}
          className="absolute top-8 left-6 md:left-10 flex items-center gap-2 glass text-white/80 hover:text-white hover:bg-white/20 px-4 py-2.5 rounded-full transition-all duration-300 group z-10"
        >
          <ArrowLeft size={17} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-medium">Retour</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <div className="flex items-center gap-3 mb-4 animate-fadeInUp anim-delay-100">
            <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Association loi 1901
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 text-shadow-lg animate-fadeInUp anim-delay-200">
            Notre Mission
          </h1>
          <p className="text-xl text-white/75 max-w-3xl animate-fadeInUp anim-delay-300">
            Accompagner les communautés vers l'autonomie et un avenir meilleur par la solidarité et le développement durable
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 py-10 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { value: '2012', label: 'Fondée en' },
              { value: '14+', label: 'Actions réalisées' },
              { value: '1000+', label: 'Bénéficiaires' },
              { value: '3', label: 'Continents' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-4xl font-black mb-2">{s.value}</div>
                <div className="text-emerald-100 text-xs font-semibold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-14 mb-16 items-center">
          <div>
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4 block">Notre engagement</span>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Un développement durable centré sur l'humain</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[1.02rem]">
              <p>
                BANA EN AVANT est une association loi 1901 fondée avec la conviction profonde que le développement durable passe par l'autonomisation des communautés locales. Animée par un esprit de solidarité, nous œuvrons chaque jour pour transformer positivement la vie des personnes que nous accompagnons, au Cameroun, en Europe et à l'international.
              </p>
              <p>
                Notre mission s'articule autour d'une vision holistique du développement : nous ne nous contentons pas d'apporter une aide ponctuelle, mais nous travaillons à construire des solutions durables, adaptées aux réalités locales et portées par les communautés elles-mêmes.
              </p>
              <p>
                Basée à Neuilly-sur-Marne, notre association mobilise des ressources et des compétences pour soutenir des projets concrets de solidarité dans les domaines de l'éducation, de la santé, de l'agriculture et du développement économique, partout où notre engagement peut faire la différence.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/mission7.jpg" alt="Mission" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Des communautés prospères et autonomes où chaque individu, au Cameroun, en Europe ou ailleurs dans le monde, a accès à une éducation de qualité, aux soins de santé et aux opportunités économiques.
            </p>
            <ul className="space-y-3">
              {[
                "Accès égal à l'éducation de qualité pour tous",
                'Système de santé accessible et efficace',
                'Économies locales dynamiques et inclusives',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <Star size={24} className="text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">Nos Valeurs</h3>
            <div className="space-y-4">
              {[
                { title: 'Solidarité', desc: "Nous croyons à la force de l'entraide et du partage des ressources" },
                { title: 'Transparence', desc: 'Chaque action est documentée et justifiée auprès de nos partenaires' },
                { title: 'Respect des cultures', desc: 'Nous valorisons les traditions et savoirs locaux de chaque communauté' },
                { title: 'Engagement communautaire', desc: 'Les populations locales sont au cœur de chaque décision' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">{title} </span>
                    <span className="text-gray-500 text-sm"> : {desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-4 rounded-3xl overflow-hidden mb-16 shadow-xl">
          {['/mission4.jpg', '/mission1.jpg', '/mission3.jpg'].map((src, i) => (
            <div key={i} className="relative h-64 overflow-hidden">
              <img src={src} alt={`Mission ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-700 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white -translate-y-1/3 translate-x-1/3" />
          </div>
          <div className="relative">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4">Rejoignez notre mission</h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Que vous soyez bénévole, donateur ou simplement curieux, il existe mille façons de soutenir notre engagement de solidarité envers les communautés du Cameroun, d'Europe et d'ailleurs
            </p>
            <button
              onClick={onGoToActions}
              className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Voir nos actions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
