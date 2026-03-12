import { ArrowLeft } from 'lucide-react';

interface ActionDetailProps {
  actionId: string;
  onBack: () => void;
}

interface Action {
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  impact: string[];
  stats: { label: string; value: string }[];
}

const actions: Record<string, Action> = {
  'education': {
    title: 'Éducation',
    shortDesc: 'Amélioration des conditions scolaires',
    fullDesc: 'Nous travaillons à transformer le système éducatif de Bana en fournissant du matériel pédagogique de qualité, en formant les enseignants et en soutenant les élèves les plus en difficulté.',
    images: [
      'https://images.pexels.com/photos/8466289/pexels-photo-8466289.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    impact: [
      'Fourniture de matériel pédagogique de qualité',
      'Formation des enseignants aux méthodes modernes',
      'Soutien scolaire pour les élèves en difficulté',
      'Bourses d\'excellence pour les meilleurs étudiants'
    ],
    stats: [
      { label: 'Écoles soutenues', value: '15+' },
      { label: 'Élèves bénéficiaires', value: '2500+' },
      { label: 'Enseignants formés', value: '180+' }
    ]
  },
  'sante': {
    title: 'Santé',
    shortDesc: 'Assistance médicale et accès aux soins',
    fullDesc: 'Nous améliorons l\'accès aux soins de santé en renforçant les infrastructures hospitalières, en fournissant du matériel médical et en formant le personnel soignant.',
    images: [
      'https://images.pexels.com/photos/6303760/pexels-photo-6303760.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8466283/pexels-photo-8466283.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    impact: [
      'Don de matériel médical aux hôpitaux',
      'Formation du personnel médical',
      'Campagnes de prévention sanitaire',
      'Amélioration des infrastructures hospitalières'
    ],
    stats: [
      { label: 'Patients traités', value: '5000+' },
      { label: 'Dons de matériel', value: '30+' },
      { label: 'Campagnes', value: '12/an' }
    ]
  },
  'agriculture': {
    title: 'Agriculture',
    shortDesc: 'Développement agricole durable',
    fullDesc: 'Nous accompagnons les agriculteurs locaux vers des pratiques plus durables et productives, en réduisant leur dépendance aux conditions climatiques et en augmentant leurs revenus.',
    images: [
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    impact: [
      'Formation aux techniques agricoles modernes',
      'Gestion de l\'eau et irrigation',
      'Introduction de cultures résilientes',
      'Appui à la coopérative agricole locale'
    ],
    stats: [
      { label: 'Agriculteurs formés', value: '400+' },
      { label: 'Hectares améliorés', value: '150+' },
      { label: 'Rendement augmenté', value: '+45%' }
    ]
  },
  'acces-a-l\'eau': {
    title: 'Accès à l\'eau',
    shortDesc: 'Eau potable pour les communautés',
    fullDesc: 'Nous travaillons à garantir l\'accès à une eau potable de qualité pour tous en construisant et en réparant des points d\'eau dans les zones rurales.',
    images: [
      'https://images.pexels.com/photos/7256366/pexels-photo-7256366.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7256365/pexels-photo-7256365.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    impact: [
      'Construction de puits et forages',
      'Installation de systèmes de filtration',
      'Entretien régulier des points d\'eau',
      'Éducation à l\'hygiène de l\'eau'
    ],
    stats: [
      { label: 'Points d\'eau construits', value: '25+' },
      { label: 'Personnes bénéficiaires', value: '10000+' },
      { label: 'Accès assuré', value: '95%' }
    ]
  },
  'electricite': {
    title: 'Électricité',
    shortDesc: 'Accès à l\'électricité durable',
    fullDesc: 'Nous favorisons l\'accès à l\'électricité par des solutions durables et adaptées au contexte local, permettant le développement économique et social.',
    images: [
      'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    impact: [
      'Installation de solutions solaires',
      'Électrification des écoles et centres de santé',
      'Énergie pour les entreprises locales',
      'Formation à la maintenance'
    ],
    stats: [
      { label: 'Installations solaires', value: '40+' },
      { label: 'Kw produits', value: '200+' },
      { label: 'Bénéficiaires', value: '8000+' }
    ]
  },
  'developpement-economique': {
    title: 'Développement économique',
    shortDesc: 'Autonomie socio-économique',
    fullDesc: 'Nous promouvons le développement économique endogène en soutenant les activités génératrices de revenus et en accompagnant les coopératives agricoles.',
    images: [
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    impact: [
      'Appui à la création d\'entreprises',
      'Formation en gestion et comptabilité',
      'Accès au crédit et au microfinance',
      'Développement des coopératives'
    ],
    stats: [
      { label: 'Entreprises créées', value: '60+' },
      { label: 'Emplois générés', value: '500+' },
      { label: 'Revenus augmentés', value: '+60%' }
    ]
  }
};

export default function ActionDetail({ actionId, onBack }: ActionDetailProps) {
  const action = actions[actionId] || actions['education'];

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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{action.title}</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">{action.shortDesc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={action.images[0]}
              alt={action.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre action</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{action.fullDesc}</p>

            <div className="grid grid-cols-3 gap-4">
              {action.stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-600">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos réalisations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {action.images.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <img src={img} alt={`${action.title} ${index + 1}`} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos impacts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {action.impact.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Soutenir cette action</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Votre contribution nous aide à continuer et à élargir ce projet vital
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
