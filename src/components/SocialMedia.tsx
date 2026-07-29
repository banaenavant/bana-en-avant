import { Facebook, Users, Globe, ArrowUpRight } from 'lucide-react';

export default function SocialMedia() {
  const platforms = [
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Suivez notre page pour les dernières nouvelles, événements et photos de nos actions',
      href: 'https://www.facebook.com/banaenavant',
      label: 'Suivre notre page',
      gradient: 'from-blue-600 to-blue-700',
      light: 'bg-blue-50',
      border: 'hover:border-blue-200',
      iconBg: 'bg-blue-600',
    },
    {
      icon: Users,
      title: 'Groupe Facebook',
      description: 'Suivez notre page pour les dernières nouvelles, événements et photos de nos actions',
      href: 'https://www.facebook.com/share/g/19GXu5dc1Y/?mibextid=wwXIfr',
      label: 'Suivre notre page',
      gradient: 'from-blue-600 to-blue-700',
      light: 'bg-blue-50',
      border: 'hover:border-blue-200',
      iconBg: 'bg-blue-600',
    },
    {
      icon: Globe,
      title: 'Net1901',
      description: 'Découvrez nos actualités officielles publiées sur la plateforme associative Net1901',
      href: 'https://www.net1901.org/actualite/Prix-de-lexcellence-4-eme-editions,28598.html#google_vignette',
      label: 'Voir nos actualités',
      gradient: 'from-emerald-600 to-teal-600',
      light: 'bg-emerald-50',
      border: 'hover:border-emerald-200',
      iconBg: 'bg-emerald-600',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14">
          <span className="inline-block text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4">
            Restez connectés
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Retrouvez-nous en ligne
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Suivez notre actualité et rejoignez notre communauté pour rester informé de nos actions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {platforms.map(({ icon: Icon, title, description, href, label, iconBg, border }) => (
            <div
              key={title}
              className={`group bg-white rounded-3xl border border-gray-100 ${border} shadow-sm hover:shadow-xl p-8 transition-all duration-400 flex flex-col w-full md:w-72`}
            >
              <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{description}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-gray-50 hover:bg-gray-100 text-gray-800 px-5 py-3 rounded-xl transition-all duration-300 font-semibold text-sm group/btn"
              >
                <span>{label}</span>
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300 text-gray-400" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
