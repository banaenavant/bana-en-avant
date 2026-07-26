import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function PrixExcellence4eme({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/5/55051-a.jpg', alt: 'Prix de l\'Excellence 4ème édition - cérémonie' },
    { src: 'https://www.net1901.org/image/use2/5/55053-a.jpg', alt: 'Distribution des prix aux élèves' },
    { src: 'https://www.net1901.org/image/use2/5/55054-a.jpg', alt: 'Élèves récompensés à Bana' },
    { src: 'https://www.net1901.org/image/use2/5/55055-a.jpg', alt: 'Cérémonie sous patronage royal' },
    { src: 'https://www.net1901.org/image/use2/5/55056-a.jpg', alt: 'Remise des prix à la chefferie' },
    { src: 'https://www.net1901.org/image/use2/5/55057-a.jpg', alt: 'Élèves et associations Bana en Avant' },
    { src: 'https://www.net1901.org/image/use2/5/55058-a.jpg', alt: 'Mobilisation pour l\'excellence à Bana' },
    { src: 'https://www.net1901.org/image/use2/5/55059-a.jpg', alt: 'Parents et enfants lors de la cérémonie' },
    { src: 'https://www.net1901.org/image/use2/5/55060-a.jpg', alt: 'Clôture de la 4ème édition du Prix de l\'Excellence' },
  ];

  return (
    <ActionDetailLayout
      title="Prix de l'Excellence, 4ème Édition"
      subtitle="Plus de 600 enfants valorisés sous le regard de Sa Majesté Sinkam Happi V"
      date="Janvier 2017"
      category="Éducation"
      categoryColor="blue"
      heroImage="https://www.net1901.org/image/use2/5/55051-a.jpg"
      description={`L'association Bana en Avant, toujours présente auprès de la population du village Bana situé à l'Ouest Cameroun, a organisé pour la 4ème fois son projet phare annuel dénommé le Prix de l'Excellence, le samedi 17 septembre 2016.

Sous le patronage de Sa Majesté Sinkam HAPPI V, Roi des Bana, les enfants ont été encore une fois émerveillés et comblés par l'attention des aînés. La cérémonie s'est déroulée en présence des Autorités, des parents d'élèves et des invités venus nombreux.

Toute cette mobilisation pour donner du plaisir à plus de 600 enfants, ce qui nous donne beaucoup de sourire et de joie, car rien n'est plus beau que de bien armer les enfants pour une rentrée scolaire.

Notre but est de valoriser, encourager les enfants afin qu'au fil des années ils soient les meilleurs dans tout ce qu'ils entreprennent, suscitant l'esprit de concurrence entre eux pour un travail soigné.

Un enfant éduqué est un gain pour la nation. Merci à tous ceux qui nous ont soutenus.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
