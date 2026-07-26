import { BookOpen, Stethoscope, Sprout, Droplet, Zap, TrendingUp, ArrowRight, Calendar } from 'lucide-react';
import type { Page } from '../types';

interface ActionsProps {
  onNavigate: (page: Page, id?: string) => void;
}

const actions = [
  {
    icon: BookOpen,
    title: 'Mobilisation pour MADOUA',
    description: "L'association Bana en Avant se mobilise pour soutenir les recherches du petit Madoua, 4 ans, enfant autiste non verbal disparu, et appelle chacun à s'unir dans l'espoir de le retrouver sain et sauf",
    date: 'Février 2026',
    category: 'Social',
    categoryColor: 'bg-blue-100 text-blue-700',
    accentColor: 'from-blue-500 to-indigo-600',
    image: 'https://www.net1901.org/image/use2/13/139261-a.jpg',
    page: 'mobilisation-madoua' as Page,
  },
  {
    icon: Stethoscope,
    title: "Remise de materiel a l'hopital de Bana",
    description: "Après avoir découvert l'état vétuste de l'hôpital de Bana, nous avons offert du matériel essentiel à la maternité et au plateau technique",
    date: 'Juillet 2020',
    category: 'Santé',
    categoryColor: 'bg-red-100 text-red-700',
    accentColor: 'from-red-500 to-pink-500',
    image: 'https://www.net1901.org/image/use2/10/102562-a.jpg',
    page: 'remise-materiel-hopital' as Page,
  },
  {
    icon: Sprout,
    title: 'Bana en avant et le covid19',
    description: "Après la crise sanitaire mondiale, l'équipe de Bana a parcouru plusieurs villes pour former la population aux gestes barrières et distribuer masques, savons et désinfectants",
    date: 'Mai 2020',
    category: 'Santé',
    categoryColor: 'bg-red-100 text-red-700',
    accentColor: 'from-green-500 to-emerald-600',
    image: 'https://www.net1901.org/image/use2/10/102556-a.jpg',
    page: 'covid19' as Page,
  },
  {
    icon: Droplet,
    title: "Prix de l'excellence 5eme éditions et remise des tables bancs",
    description: "Pour la 5ᵉ édition du Prix de l'Excellence à Bana, plus de 400 enfants ont été primés, des tables-bancs offertes et une fête haute en couleur",
    date: 'Mars 2018',
    category: 'Éducation',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    accentColor: 'from-cyan-500 to-blue-500',
    image: 'https://www.net1901.org/image/use2/7/74392.jpg',
    page: 'prix-excellence-5eme' as Page,
  },
  {
    icon: Zap,
    title: 'Fête de la jeunesse à bana 11 février 2017',
    description: "À l'occasion de la Fête de la Jeunesse, Bana en Avant a uni ses forces avec la nouvelle génération pour un défilé mémorable",
    date: 'Février 2017',
    category: 'Culture',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    accentColor: 'from-yellow-500 to-orange-500',
    image: 'https://www.net1901.org/image/use2/5/58976-a.jpg',
    page: 'fete-jeunesse-2017' as Page,
  },
  {
    icon: TrendingUp,
    title: "L'association Bana en avant rencontre le Roi des bana à Paris",
    description: 'Lors de la visite historique de Sa Majesté Sinkap Happi V à Paris, la communauté Bana a vécu un moment unique qui renforce notre engagement',
    date: 'Février 2017',
    category: 'Communauté',
    categoryColor: 'bg-purple-100 text-purple-700',
    accentColor: 'from-purple-500 to-pink-500',
    image: 'https://www.net1901.org/image/use2/5/57835-a.jpg',
    page: 'rencontre-roi-paris' as Page,
  },
  {
    icon: TrendingUp,
    title: "Prix de l'excellence 4 éme éditions",
    description: "Pour la 4ᵉ édition du Prix de l'Excellence, plus de 600 enfants ont été valorisés sous le regard de Sa Majesté Sinkam Happi V",
    date: 'Janvier 2017',
    category: 'Éducation',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    accentColor: 'from-blue-500 to-indigo-500',
    image: 'https://www.net1901.org/image/use2/5/55051-a.jpg',
    page: 'prix-excellence-4eme' as Page,
  },
  {
    icon: TrendingUp,
    title: 'Réfection des peintures à la chefferie Bana',
    description: "En mars 2016, Bana en Avant a redonné vie à la chefferie du village grâce à l'engagement de tous, des aînés aux jeunes",
    date: 'Mars 2016',
    category: 'Patrimoine',
    categoryColor: 'bg-amber-100 text-amber-700',
    accentColor: 'from-amber-500 to-orange-500',
    image: 'https://www.net1901.org/image/use2/4/45581-a.jpg',
    page: 'refection-peintures' as Page,
  },
  {
    icon: Sprout,
    title: 'Soutien à l\'agriculture et match de gala à Bangoulap',
    description: 'Dons d\'outils agricoles aux planteurs de Bangoulap remis par le Prince Arnaud, suivis d\'un match de gala FC Sagna vs FC Kirikou à la chefferie',
    date: 'Février 2016',
    category: 'Agriculture',
    categoryColor: 'bg-green-100 text-green-700',
    accentColor: 'from-green-500 to-emerald-600',
    image: '/m.jpeg',
    page: 'agriculture-bangoulap' as Page,
  },
  {
    icon: TrendingUp,
    title: "Prix de l'excellence 3 eme edition",
    description: "Le 19 septembre 2015, Bana en Avant a illuminé le village avec la cérémonie du Prix de l'Excellence",
    date: 'Septembre 2015',
    category: 'Éducation',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    accentColor: 'from-teal-500 to-emerald-500',
    image: 'https://www.net1901.org/image/use2/3/33909-a.jpg',
    page: 'prix-excellence-3eme' as Page,
  },
  {
    icon: TrendingUp,
    title: "Dons des médicaments a l'hôpital de Bana",
    description: "Bana en Avant est venu au secours de l'hôpital de Bana, renforçant la pharmacie et assurant une meilleure prise en charge",
    date: 'Août 2014',
    category: 'Santé',
    categoryColor: 'bg-red-100 text-red-700',
    accentColor: 'from-rose-500 to-pink-500',
    image: 'https://www.net1901.org/image/use2/1/19676.jpg',
    page: 'don-medicaments' as Page,
  },
  {
    icon: TrendingUp,
    title: "Prix de l'excellence 2013",
    description: "Pour sa 2ᵉ édition, le Prix de l'Excellence à Bana récompense 327 élèves de 7 écoles primaires",
    date: 'Juin 2013',
    category: 'Éducation',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    accentColor: 'from-sky-500 to-blue-500',
    image: 'https://www.net1901.org/image/use2/0/8369.jpg',
    page: 'prix-excellence-2013' as Page,
  },
  {
    icon: TrendingUp,
    title: "Prix de l'excellence 2012",
    description: "Depuis 2012, le Prix de l'Excellence de Bana en Avant récompense les élèves les plus méritants et inspire toute la jeunesse",
    date: 'Juin 2012',
    category: 'Éducation',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    accentColor: 'from-indigo-500 to-blue-600',
    image: 'https://www.net1901.org/image/use2/0/8368.jpg',
    page: 'prix-excellence-2012' as Page,
  },
  {
    icon: TrendingUp,
    title: "Remise du groupe électrogène a l'hôpital du village Bana",
    description: "Bana en Avant et les associations de la diaspora ont offert un groupe électrogène à l'hôpital du village, assurant la continuité des soins",
    date: 'Mars 2012',
    category: 'Santé',
    categoryColor: 'bg-red-100 text-red-700',
    accentColor: 'from-slate-500 to-gray-600',
    image: 'https://www.net1901.org/image/use2/0/8370.jpg',
    page: 'groupe-electrogene' as Page,
  },
];

export default function Actions({ onNavigate }: ActionsProps) {
  return (
    <section id="actions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 animate-fadeInUp">
<h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Nos Actions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-orange-400 mx-auto mb-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={() => onNavigate(action.page)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/80 transform hover:-translate-y-1 transition-all duration-500 text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={action.image}
                    alt={action.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.accentColor} opacity-50 group-hover:opacity-35 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className={`${action.categoryColor} text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm bg-white/90`}>
                      {action.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-gray-800" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                    <Calendar size={11} />
                    <span>{action.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {action.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {action.description}
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold text-sm gap-1.5 group-hover:gap-3 transition-all duration-300">
                    Lire la suite
                    <ArrowRight size={15} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
