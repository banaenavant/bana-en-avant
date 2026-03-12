import { Calendar, Award, Heart, ArrowRight } from 'lucide-react';
import type { Page } from '../types';

interface NewsProps {
  onNavigate: (page: Page, id?: string) => void;
}

export default function News({ onNavigate }: NewsProps) {
  const news = [
    {
      icon: Heart,
      title: "Don de matériel médical",
      description: "L'association a fait don de matériel médical à l'hôpital de Bana pour améliorer les soins de santé",
      date: "Mars 2026",
      image: "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Award,
      title: "Prix d'excellence scolaire",
      description: "Depuis 2012, nous récompensons l'excellence scolaire pour encourager la réussite des jeunes",
      date: "Depuis 2012",
      image: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Calendar,
      title: "Célébration de la jeunesse",
      description: "Événements communautaires célébrant les jeunes et leurs accomplissements",
      date: "Annuel",
      image: "https://images.pexels.com/photos/8466283/pexels-photo-8466283.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Actualités
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos dernières initiatives et réalisations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => onNavigate('news-detail', item.title.toLowerCase().replace(/\s+/g, '-'))}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-left cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Icon size={20} className="text-emerald-600" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Lire plus <ArrowRight size={20} className="ml-2" />
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
