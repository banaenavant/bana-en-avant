import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/75 to-teal-800/70 z-10" />
        <img
          src="/Chefferie_Bana.jpg"
          alt="Chefferie de Bana"
          className="w-full h-full object-cover animate-slowZoom"
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-white/5" />
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full border border-white/8" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full border border-white/5" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">

        <div className="animate-fadeInUp anim-delay-100 mb-6">
          <span className="inline-flex items-center gap-2 glass text-white/80 text-sm font-medium px-5 py-2 rounded-full border border-white/20">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Association loi 1901 · Fondée en 2012
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-shadow-lg animate-fadeInUp anim-delay-200">
          Solidarité, soutien
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 mt-2">
            et développement humain
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed animate-fadeInUp anim-delay-300">
          Éducation, santé, agriculture : nous accompagnons les communautés au Cameroun, en Europe et partout dans le monde vers plus d'autonomie et un avenir meilleur
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp anim-delay-400">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-800 px-9 py-4 rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-black/20 transform hover:scale-105 transition-all duration-300"
          >
            Découvrir notre mission
          </button>
          <button
            onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-9 py-4 rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300"
          >
            Soutenir nos actions
          </button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 animate-fadeInUp anim-delay-500">
          <div className="glass rounded-2xl px-6 py-5 inline-grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { value: '14+', label: 'Actions réalisées' },
              { value: '12+', label: "Années d'engagement" },
              { value: '1000+', label: 'Bénéficiaires' },
              { value: '3', label: 'Continents' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-white/55 text-xs font-medium mt-0.5 whitespace-nowrap">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="glass w-10 h-10 rounded-full flex items-center justify-center">
          <ArrowDown size={18} className="text-white" />
        </div>
      </div>
    </section>
  );
}
