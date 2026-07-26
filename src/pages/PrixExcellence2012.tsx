import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function PrixExcellence2012({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/0/8368.jpg', alt: 'Prix de l\'Excellence 2012, 1ère édition à Bana' },
  ];

  return (
    <ActionDetailLayout
      title="Prix de l'Excellence 2012, 1ère Édition"
      subtitle="La genèse du projet phare de Bana en Avant, 280 élèves récompensés"
      date="Juin 2012"
      category="Éducation"
      categoryColor="blue"
      heroImage="https://www.net1901.org/image/use2/0/8368.jpg"
      description={`Le Prix de l'Excellence est une initiative de l'association Bana en Avant qui se veut annuelle et consiste à encourager les enfants de toutes les écoles primaires élémentaires, privées et publiques, ainsi que les lycées et collèges de la localité.

La première édition s'est tenue en juin 2012. Nous avons remis les dons d'encouragement constitués de fournitures scolaires (cahiers, crayons à bille bleu, rouge, crayon, craies) à 280 élèves, les 5 premiers des 6 écoles du village.

Ce projet s'est réalisé grâce à divers soutiens financiers des ressortissants du village et des sympathisants, et surtout grâce à la volonté.

C'est notre manière de récompenser les enfants qui ont bien travaillé à l'école et de susciter les challenges scolaires, car nous croyons que l'éducation est la première fondation de l'homme.

Nous remercions tous ceux qui se sont mobilisés pour la réussite de ce noble projet : les ressortissants du village, les amis et sympathisants, les directeurs des écoles, les parents d'élèves et surtout les élèves.

Citation : "Ne jamais oublier d'où on vient, quelque soit le lieu où on se trouve, afin de savoir où on va." (Marie Salomène Tchaptchet, Présidente de Bana en Avant)`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
