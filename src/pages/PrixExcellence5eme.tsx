import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function PrixExcellence5eme({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/7/74392.jpg',   alt: 'Prix de l\'Excellence 5ème édition - cérémonie' },
    { src: 'https://www.net1901.org/image/use2/7/74393-a.jpg', alt: 'Remise des prix aux élèves de Bana' },
    { src: 'https://www.net1901.org/image/use2/7/74394-a.jpg', alt: 'Tables-bancs offertes aux écoles' },
    { src: 'https://www.net1901.org/image/use2/7/74395-a.jpg', alt: 'Enfants récompensés à la chefferie' },
    { src: 'https://www.net1901.org/image/use2/7/74396-a.jpg', alt: 'Cérémonie du Prix de l\'Excellence' },
    { src: 'https://www.net1901.org/image/use2/7/74397-a.jpg', alt: 'Distribution des prix scolaires' },
    { src: 'https://www.net1901.org/image/use2/7/74398-a.jpg', alt: 'Élèves et enseignants réunis' },
    { src: 'https://www.net1901.org/image/use2/7/74399-a.jpg', alt: 'Festivités de la 5ème édition' },
    { src: 'https://www.net1901.org/image/use2/7/74400-a.jpg', alt: 'Communauté Bana en Avant' },
  ];

  return (
    <ActionDetailLayout
      title="Prix de l'Excellence, 5ème Édition"
      subtitle="Plus de 400 enfants primés et tables-bancs offertes aux écoles de Bana"
      date="Mars 2018"
      category="Éducation"
      categoryColor="cyan"
      heroImage="https://www.net1901.org/image/use2/7/74392.jpg"
      description={`Comme chaque année depuis 7 ans, l'association Bana en Avant a encore marqué de sa présence à Bana.

Le Prix de l'Excellence fait son petit bout de chemin depuis 5 ans. Comme à l'accoutumée, la 5ème édition a été une réussite : nous avons primé plus de 400 enfants de toutes les écoles de l'arrondissement de Bana. La fête s'est déroulée à l'esplanade de la chefferie de 1er degré Bana sous la haute coordination du roi des Bana Sa Majesté Sikam Happi V.

Les élèves de plusieurs écoles ont aussi bénéficié de tables-bancs, don d'une sœur Bana qui a vraiment apprécié notre initiative. Nous remercions aussi les sponsors, mécènes et tous les Bana soucieux du développement du village, car avec Bana en Avant, le développement se fait POUR NOUS ET PAR NOUS.

Les enfants, les enseignants, les parents furent contents et la fête était haute en couleur avec la présence de toutes les autorités (maire, sous-préfet, élites, commandant de brigade et autres). Le cap est lancé pour la 6ème édition !`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
