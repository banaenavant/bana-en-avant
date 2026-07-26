import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background photo — overlay allégé pour laisser la photo respirer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Chefferie_Bana.jpg"
          alt="Chefferie de Bana"
          className="w-full h-full object-cover animate-slowZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-emerald-950/55 to-teal-900/40 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/50 to-transparent z-10" />
      </div>

      {/* Orbes lumineux flottants */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-emerald-500/25 blur-[100px] animate-orb-1" />
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-amber-500/20 blur-[100px] animate-orb-2" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-teal-400/10 blur-[80px] animate-orb-3" />
      </div>

      {/* Contenu */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">

        <div className="animate-fadeInUp anim-delay-100 mb-8">
          <span className="inline-flex items-center gap-2.5 glass text-white/90 text-sm font-semibold px-6 py-3 rounded-full border border-white/30">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
            Association loi 1901 · Fondée en 2012
          </span>
        </div>

        <h1 className="font-black leading-none mb-8 animate-fadeInUp anim-delay-200 tracking-tight">
          <span className="block text-6xl md:text-8xl text-white drop-shadow-2xl">
            Ensemble,
          </span>
          <span className="block text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300 animate-gradient-x mt-2">
            bâtissons l'avenir
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-12 text-white/75 max-w-2xl mx-auto leading-relaxed animate-fadeInUp anim-delay-300">
          Éducation, santé, agriculture — depuis 2012, nous accompagnons les communautés camerounaises, européennes et internationales vers plus d'autonomie
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp anim-delay-400">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Découvrir notre mission
          </button>
          <button
            onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-10 py-4 rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30"
          >
            Soutenir nos actions
          </button>
        </div>

        {/* Barre de stats */}
        <div className="mt-14 animate-fadeInUp anim-delay-500">
          <div className="glass rounded-2xl px-8 py-5 inline-grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border border-white/25">
            {[
              { value: '14+', label: 'Actions réalisées' },
              { value: '12+', label: "Années d'engagement" },
              { value: '1000+', label: 'Bénéficiaires' },
              { value: '3', label: 'Continents' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black text-white mb-1 leading-none">{value}</div>
                <div className="text-white/50 text-xs font-medium whitespace-nowrap">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="glass w-11 h-11 rounded-full flex items-center justify-center border border-white/30">
          <ArrowDown size={18} className="text-white" />
        </div>
      </div>
    </section>
  );
}
