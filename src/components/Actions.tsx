import { BookOpen, Stethoscope, Sprout, Droplet, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import type { Page } from '../types';

interface ActionsProps {
  onNavigate: (page: Page, id?: string) => void;
}

export default function Actions({ onNavigate }: ActionsProps) {
  const actions = [
    {
      icon: BookOpen,
      title: "Éducation",
      description: "Amélioration des conditions scolaires, soutien aux élèves et enseignants avec du matériel pédagogique de qualité",
      color: "from-blue-500 to-blue-600",
      image: "https://images.pexels.com/photos/8466289/pexels-photo-8466289.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Stethoscope,
      title: "Santé",
      description: "Assistance médicale et soutien aux infrastructures hospitalières pour améliorer l'accès aux soins",
      color: "from-red-500 to-pink-500",
      image: "https://images.pexels.com/photos/6303760/pexels-photo-6303760.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Réduction de la dépendance climatique grâce à la gestion de l'eau et au développement professionnel des agriculteurs",
      color: "from-green-500 to-emerald-600",
      image: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Droplet,
      title: "Accès à l'eau",
      description: "Facilitation de l'accès à l'eau potable pour les communautés rurales",
      color: "from-cyan-500 to-blue-500",
      image: "https://images.pexels.com/photos/7256366/pexels-photo-7256366.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Zap,
      title: "Électricité",
      description: "Amélioration de l'accès à l'électricité pour favoriser le développement local",
      color: "from-yellow-500 to-orange-500",
      image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: TrendingUp,
      title: "Développement économique",
      description: "Promotion d'activités génératrices de revenus et coopératives agricoles pour l'autonomie socio-économique",
      color: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="actions" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Actions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six domaines d'intervention pour un impact durable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={() => onNavigate('action-detail', action.title.toLowerCase().replace(/\s+/g, '-'))}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-left cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={action.image}
                    alt={action.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                      <Icon className="text-gray-900" size={40} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{action.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{action.description}</p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                    En savoir plus <ArrowRight size={20} className="ml-2" />
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
