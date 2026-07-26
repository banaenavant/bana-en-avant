import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function MobilisationMadoua({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/13/139261-a.jpg', alt: 'Mobilisation pour retrouver le petit Madoua' },
    { src: 'https://www.net1901.org/image/use2/13/139262-a.jpg', alt: 'Affiche de recherche de Madoua' },
    { src: 'https://www.net1901.org/image/use2/13/139263-a.jpg', alt: 'Appel à témoins pour Madoua' },
    { src: 'https://www.net1901.org/image/use2/13/139264.jpg',   alt: 'Bana en Avant mobilisé pour Madoua' },
    { src: 'https://www.net1901.org/image/use2/13/139265.jpg',   alt: 'Solidarité pour la famille de Madoua' },
    { src: 'https://www.net1901.org/image/use2/13/139266-a.jpg', alt: 'Battues et recherches organisées' },
    { src: 'https://www.net1901.org/image/use2/13/139267-a.jpg', alt: 'Communauté unie pour retrouver Madoua' },
  ];

  return (
    <ActionDetailLayout
      title="Mobilisation pour MADOUA"
      subtitle="L'association Bana en Avant se mobilise pour retrouver le petit Madoua, 4 ans"
      date="Février 2026"
      category="Social"
      categoryColor="blue"
      heroImage="https://www.net1901.org/image/use2/13/139261-a.jpg"
      description={`Depuis le mercredi 25 février le petit MADOUA 4 ans et autiste non verbal a disparu en France. Selon les circonstances, il était au parc Devambez près des bords de Marne avec sa maman. Ils s'échangeaient les passes de ballon et puis il y eut une longue passe du petit garçon vers sa maman. Quand la pauvre dame est allée récupérer le ballon, à son retour le petit avait disparu.

C'est très douloureux et ça pourrait arriver à n'importe qui. L'association Bana en avant ne pouvait pas rester insensible à cette cause : nous nous mobilisons pour aider aux battues et coller les affiches partout.

MADOUA aurait pu être le fils, le cousin, l'ami, le petit fils, le neveu de n'importe qui parmi nous. Levons-nous et unissons nos efforts tout en espérant le retrouver vivant.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
