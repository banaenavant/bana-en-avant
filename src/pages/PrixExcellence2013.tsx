import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function PrixExcellence2013({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/0/8369.jpg', alt: 'Prix de l\'Excellence 2013, 2ème édition à Bana' },
  ];

  return (
    <ActionDetailLayout
      title="Prix de l'Excellence 2013, 2ème Édition"
      subtitle="327 élèves de 7 écoles primaires célébrés à Bana"
      date="Juin 2013"
      category="Éducation"
      categoryColor="blue"
      heroImage="https://www.net1901.org/image/use2/0/8369.jpg"
      description={`Pour la deuxième édition, le Prix de l'Excellence dans le village Bana se prépare : nous primerons 327 élèves des 6 écoles plus une oubliée l'an dernier, ce qui fera un total de 7 écoles primaires. Nous féliciterons le travail des 5 premiers de chaque classe.

Vive Bana en Avant, vive le village Bana !

Ne jamais oublier d'où on vient, où qu'on soit, afin de savoir où on va.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
