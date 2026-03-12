import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 to-teal-700/75 z-10"></div>
        <img
          src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Community in Cameroon"
          className="w-full h-full object-cover animate-slowZoom"
        />
      </div>

      <div className="relative z-20 text-center text-white px-6 max-w-5xl animate-fadeInUp">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ensemble pour l'autonomie
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 mt-2">
            de Bana
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
          Éducation, santé, agriculture : nous accompagnons les populations de Bana au Cameroun vers un avenir meilleur
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Découvrir notre mission
          </button>
          <button
            onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Soutenir nos actions
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown size={32} className="text-white" />
      </div>
    </section>
  );
}
