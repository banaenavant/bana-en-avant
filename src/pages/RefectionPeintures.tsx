import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function RefectionPeintures({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/4/45581-a.jpg', alt: 'Réfection des peintures à la chefferie de Bana' },
    { src: 'https://www.net1901.org/image/use2/4/45582-a.jpg', alt: 'Travaux de rénovation de la chefferie' },
    { src: 'https://www.net1901.org/image/use2/4/45583.jpg',   alt: 'Bénévoles en action à la chefferie' },
    { src: 'https://www.net1901.org/image/use2/4/45584.jpg',   alt: 'Chantier de la chefferie Bana' },
    { src: 'https://www.net1901.org/image/use2/4/45585-a.jpg', alt: 'Jeunesse Bana mobilisée pour la réfection' },
    { src: 'https://www.net1901.org/image/use2/4/45586-a.jpg', alt: 'Peintures en cours à la chefferie' },
    { src: 'https://www.net1901.org/image/use2/4/45587-a.jpg', alt: 'Travail collectif et solidaire' },
    { src: 'https://www.net1901.org/image/use2/4/45588-a.jpg', alt: 'Résultat de la réfection de la chefferie' },
    { src: 'https://www.net1901.org/image/use2/4/45589.jpg',   alt: 'Chefferie de Bana rénovée' },
  ];

  return (
    <ActionDetailLayout
      title="Réfection des peintures à la Chefferie Bana"
      subtitle="Restauration symbolique du patrimoine avec l'engagement de toute la communauté"
      date="Mars 2016"
      category="Patrimoine"
      categoryColor="orange"
      heroImage="https://www.net1901.org/image/use2/4/45581-a.jpg"
      description={`L'association Bana en Avant, forte de sa volonté d'agir sur le terrain, a encore été présente auprès de la population en mars 2016 au village Bana.

Cette fois c'est la chefferie du village qui a été honorée de revoir son vêtement à neuf. Lors de la remise du Prix de l'Excellence en septembre 2015, nous avons été honteux et confus de constater que notre chefferie n'était pas à notre image, tout était vétuste et très sale. Alors avec courage, nous nous sommes mis au travail et avons interpellé tous les élites et ressortissants du village.

Le chantier a duré 15 jours, 15 jours de joie, de volonté, de patience, de sourires, de festivité et pleins de surprises. Nous avons vécu une expérience formidable. Des personnes se sont même sacrifiées : Mami Dree, cette maman de plus de 80 ans toute frêle, qui a préféré se priver de son repas journalier afin de remettre un billet de 500 CFA rempli de bénédictions aux jeunes travaillant sur le chantier.

Nous remercions grandement la jeunesse Bana, cette jeunesse disponible, consciente et travailleuse qui nous a démontré que nous pouvons compter sur elle.

Merci à Sa Majesté Sinkap pour son écoute et sa disponibilité. Vivement Bana en Avant !`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
