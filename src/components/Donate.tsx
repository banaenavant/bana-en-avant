import { Heart, Shield, TrendingUp } from 'lucide-react';

export default function Donate() {
  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Je fais un don
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Votre générosité transforme des vies
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-10">
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors cursor-pointer">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50€</div>
                  <p className="text-sm text-gray-600">Fournitures scolaires pour 10 élèves</p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors cursor-pointer border-2 border-orange-400">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100€</div>
                  <p className="text-sm text-gray-600">Kit médical complet</p>
                </div>
                <div className="text-center p-6 bg-teal-50 rounded-2xl hover:bg-teal-100 transition-colors cursor-pointer">
                  <div className="text-3xl font-bold text-teal-600 mb-2">200€</div>
                  <p className="text-sm text-gray-600">Équipement agricole</p>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-3">Montant personnalisé</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Entrez un montant"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-full focus:border-emerald-500 focus:outline-none text-lg"
                  />
                  <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">€</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start">
                  <Heart className="text-pink-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Impact direct</h4>
                    <p className="text-sm text-gray-600">Résultats mesurables sur le terrain</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sécurisé</h4>
                    <p className="text-sm text-gray-600">Paiement 100% sécurisé</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="text-green-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent</h4>
                    <p className="text-sm text-gray-600">Rapports d'activité réguliers</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-orange-500 text-white px-8 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Faire un don maintenant
              </button>

              <p className="text-center text-sm text-gray-500 mt-6">
                Association loi 1901 - RNA W932004075
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
