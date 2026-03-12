import { HandHeart, Users, Share2, Mail } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agir avec nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez-nous dans notre mission pour un Bana autonome et prospère
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <HandHeart className="text-white" size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Faire un don</h3>
            <p className="text-gray-600">Soutenez nos projets financièrement</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-pink-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="text-white" size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Devenir bénévole</h3>
            <p className="text-gray-600">Donnez de votre temps et compétences</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Share2 className="text-white" size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Partager</h3>
            <p className="text-gray-600">Faites connaître notre action</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Mail className="text-white" size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nous contacter</h3>
            <p className="text-gray-600">Posez vos questions</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-pink-500 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Votre contribution fait la différence</h3>
              <p className="text-lg mb-8 text-blue-50">
                Chaque don, chaque action compte. Ensemble, nous construisons un avenir meilleur pour les populations de Bana.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="bg-white/20 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span>100% de vos dons vont directement aux projets</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span>Transparence totale sur l'utilisation des fonds</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 rounded-full p-1 mr-3 mt-1">✓</span>
                  <span>Suivi régulier de l'impact de vos contributions</span>
                </li>
              </ul>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-fit">
                Je fais un don maintenant
              </button>
            </div>
            <div className="relative h-80 md:h-auto">
              <img
                src="https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
