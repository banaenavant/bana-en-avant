import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function AgricultureBangoulap({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: '/m.jpeg', alt: 'Dons agricoles à Bangoulap - cérémonie officielle' },
    { src: '/n.jpeg', alt: 'Remise des outils agricoles par le Prince Arnaud' },
    { src: '/o.jpeg', alt: 'Planteurs de Bangoulap réunis à la chefferie' },
    { src: '/p.jpeg', alt: 'Match de gala FC Sagna vs FC Kirikou' },
    { src: '/q.jpeg', alt: 'Festivités à la chefferie de Bangoulap' },
    { src: '/r.jpeg', alt: 'Communauté de Bangoulap unie pour l\'événement' },
  ];

  return (
    <ActionDetailLayout
      title="Soutien à l'agriculture et match de gala à Bangoulap"
      subtitle="Dons d'outils agricoles aux planteurs et fête communautaire à la chefferie de Bangoulap"
      date="Février 2016"
      category="Agriculture"
      categoryColor="emerald"
      heroImage="/m.jpeg"
      description={`En février 2016, l'association Bana en Avant a étendu son engagement solidaire au village de Bangoulap, en organisant une journée de soutien à l'agriculture et de fraternité communautaire qui restera gravée dans les mémoires.

Dans le cadre de cette initiative, l'association a offert aux agriculteurs et planteurs de Bangoulap un ensemble complet d'outils agricoles : bouettes, houes, machettes et arrosoirs. Ces équipements essentiels ont été remis solennellement par le Prince Arnaud à la chefferie de Bangoulap, dans une atmosphère de reconnaissance et d'émotion.

L'objectif de cette action était clair : encourager et valoriser l'agriculture locale, véritable pilier économique de ces communautés rurales dont la grande majorité des familles vit de la terre. En dotant les planteurs d'outils adaptés, Bana en Avant contribue directement à améliorer leur productivité, à alléger leur quotidien et à renforcer leur autonomie alimentaire.

La cérémonie de remise des dons s'est déroulée dans une ambiance chaleureuse et festive à la chefferie de Bangoulap, symbole du lien indéfectible entre la diaspora et ses racines. Pour couronner cette belle journée de solidarité, un match de gala a été organisé, opposant deux équipes locales : le FC Sagna face au FC Kirikou. Ce moment sportif et convivial a rassemblé toute la communauté dans la joie et la bonne humeur, offrant à chacun un espace de célébration et d'unité.

Cet événement illustre parfaitement l'esprit de Bana en Avant : agir concrètement au plus près des besoins réels des populations, en combinant aide matérielle, soutien économique et animation communautaire. Car le développement durable se construit aussi par la fierté, la cohésion et le sourire.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
