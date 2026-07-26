import { HandHeart, Users, Share2, Mail, CheckCircle } from 'lucide-react';

export default function GetInvolved() {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  const ways = [
    {
      icon: Users,
      title: 'Devenir bénévole',
      description: 'Donnez de votre temps et de vos compétences partout dans le monde',
      color: 'from-blue-500 to-indigo-500',
      light: 'bg-blue-50',
      href: '',
    },
    {
      icon: Share2,
      title: 'Partager',
      description: 'Faites connaître notre action autour de vous, chaque partage compte',
      color: 'from-purple-500 to-pink-500',
      light: 'bg-purple-50',
      href: '',
    },
    {
      icon: Mail,
      title: 'Nous contacter',
      description: 'Posez-nous vos questions ou proposez un partenariat',
      color: 'from-orange-500 to-amber-500',
      light: 'bg-orange-50',
      href: 'https://mail.google.com/mail/?view=cm&to=Tchaptchet80@yahoo.fr',
    },
  ];

  return (
    <section id="get-involved" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Agir avec nous
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-400 mx-auto mb-6 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {ways.map(({ icon: Icon, title, description, color, href }) => (
            <div
              key={title}
              onClick={href ? () => window.open(href, '_blank') : undefined}
              className={`group relative bg-gray-50 hover:bg-white rounded-3xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-400 w-full md:w-72 ${href ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon className="text-white" size={26} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden bg-gray-900 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-400 -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-teal-400 translate-y-1/3 -translate-x-1/3" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 text-white flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                Votre contribution<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  fait la différence
                </span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Chaque don, chaque action compte. Ensemble, nous construisons un avenir meilleur fondé sur la solidarité, pour les communautés camerounaises, européennes et internationales.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "100% de vos dons vont directement aux projets",
                  "Transparence totale sur l'utilisation des fonds",
                  "Suivi régulier de l'impact de vos contributions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={17} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToDonate}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 w-fit text-sm"
              >
                Je fais un don maintenant
              </button>
            </div>
            <div className="relative h-72 md:h-auto overflow-hidden rounded-b-3xl md:rounded-b-none md:rounded-r-3xl">
              <img
                src="/ex.jpg"
                alt="Communauté Bana"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
