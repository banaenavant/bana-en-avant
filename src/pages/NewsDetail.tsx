import { ArrowLeft, Calendar } from 'lucide-react';

interface NewsDetailProps {
  newsId: string;
  onBack: () => void;
}

interface News {
  title: string;
  date: string;
  description: string;
  fullText: string;
  images: string[];
}

const newsItems: Record<string, News> = {
  'don-de-materiel-medical': {
    title: 'Don de matériel médical à l\'hôpital de Bana',
    date: 'Mars 2026',
    description: 'L\'association a fait don de matériel médical pour améliorer les soins de santé',
    fullText: `
    En mars 2026, BANA EN AVANT a effectué un don significatif de matériel médical à l'hôpital de Bana, marquant une étape importante dans son engagement envers l'amélioration de la santé locale.

    Ce don, d'une valeur de plusieurs milliers d'euros, comprend des équipements médicaux essentiels tels que des lits d'hôpital, des appareils de diagnostic et du matériel pour les soins d'urgence.

    Grâce à ce don, l'hôpital de Bana peut désormais améliorer significativement ses capacités de traitement et offrir une meilleure qualité de soins aux patients locaux. C'est une victoire pour toute la communauté.

    Cette action reflète notre engagement envers l'accessibilité des soins de santé pour tous les habitants de Bana, quelle que soit leur situation économique.
    `,
    images: [
      'https://images.pexels.com/photos/6303760/pexels-photo-6303760.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  'prix-d\'excellence-scolaire': {
    title: 'Prix d\'excellence scolaire : récompenser la réussite',
    date: 'Depuis 2012',
    description: 'Nous récompensons l\'excellence scolaire pour encourager la réussite des jeunes',
    fullText: `
    Depuis 2012, BANA EN AVANT attribue annuellement des prix d'excellence scolaire aux meilleurs élèves de Bana. Cette initiative vise à encourager l'effort, le travail acharné et l'excellence académique.

    Chaque année, des centaines d'élèves participent à cette compétition, motivés par la possibilité de recevoir une reconnaissance publique et des bourses d'études.

    Les lauréats reçoivent non seulement une reconnaissance, mais aussi des bourses qui leur permettent de poursuivre leurs études et de réaliser leurs ambitions.

    Cette initiative a transformé des vies et inspiré une génération entière de jeunes Baniens à poursuivre l'excellence.
    `,
    images: [
      'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8466289/pexels-photo-8466289.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  'celebration-de-la-jeunesse': {
    title: 'Célébration de la jeunesse : les stars de demain',
    date: 'Annuel',
    description: 'Événements communautaires célébrant les jeunes et leurs accomplissements',
    fullText: `
    Chaque année, BANA EN AVANT organise une grande célébration de la jeunesse qui rassemble la communauté pour honorer les accomplissements des jeunes Baniens.

    Cet événement festif est une occasion pour les jeunes de montrer leurs talents, leurs passions et leurs rêves pour l'avenir. C'est aussi une plateforme pour discuter des enjeux jeunesse et imaginer ensemble un avenir meilleur.

    Des artistes, des orateurs inspirants et des mentors partagent leurs expériences avec les jeunes, les motivant à poursuivre leurs objectifs et à contribuer au développement de leur communauté.

    Cette célébration renforce le sentiment d'appartenance et de fierté chez les jeunes, tout en rappelant à toute la communauté que l'avenir du Bana repose sur leurs épaules.
    `,
    images: [
      'https://images.pexels.com/photos/8466283/pexels-photo-8466283.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
};

export default function NewsDetail({ newsId, onBack }: NewsDetailProps) {
  const news = newsItems[newsId] || newsItems['don-de-materiel-medical'];

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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{news.title}</h1>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Calendar size={20} />
            <span className="text-lg">{news.date}</span>
          </div>
        </div>

        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-12">
          <img
            src={news.images[0]}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              {news.fullText.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">À savoir</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Date</h4>
                <p className="text-gray-600">{news.date}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                <p className="text-gray-600">Cette action contribue directement à l'amélioration de la vie des habitants de Bana</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Participer</h4>
                <p className="text-gray-600">Vous pouvez soutenir cette initiative par un don ou en devenant bénévole</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Galerie photos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.images.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img src={img} alt={`${news.title} ${index + 1}`} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Vous aussi, participez à nos actions</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Chaque contribution, grande ou petite, nous aide à continuer ce travail vital
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Je fais un don
          </button>
        </div>
      </div>
    </div>
  );
}
