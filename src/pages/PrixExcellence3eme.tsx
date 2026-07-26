import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function PrixExcellence3eme({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/3/33909-a.jpg', alt: 'Prix de l\'Excellence 3ème édition à Bana' },
    { src: 'https://www.net1901.org/image/use2/3/33910-a.jpg', alt: 'Cérémonie de remise des prix scolaires' },
    { src: 'https://www.net1901.org/image/use2/3/33911-a.jpg', alt: 'Élèves récompensés, 3ème édition' },
    { src: 'https://www.net1901.org/image/use2/3/33912-a.jpg', alt: 'Autorités et communauté réunies' },
    { src: 'https://www.net1901.org/image/use2/3/33913-a.jpg', alt: 'Distribution des prix scolaires à Bana' },
    { src: 'https://www.net1901.org/image/use2/3/33914-a.jpg', alt: 'Enfants et parents lors de la cérémonie' },
    { src: 'https://www.net1901.org/image/use2/3/33915-a.jpg', alt: 'Rentrée scolaire exceptionnelle 2015' },
    { src: 'https://www.net1901.org/image/use2/3/33916-a.jpg', alt: 'Festivités du Prix de l\'Excellence' },
    { src: 'https://www.net1901.org/image/use2/3/33917-a.jpg', alt: 'Clôture de la 3ème édition' },
  ];

  return (
    <ActionDetailLayout
      title="Prix de l'Excellence, 3ème Édition"
      subtitle="Rentrée scolaire exceptionnelle le 19 septembre 2015 à Bana"
      date="Septembre 2015"
      category="Éducation"
      categoryColor="cyan"
      heroImage="https://www.net1901.org/image/use2/3/33909-a.jpg"
      description={`L'association Bana en Avant suit son petit chemin, toujours près de la population de Bana, Cameroun, situé à l'Ouest, un village de 9 000 âmes.

Notre projet phare annuel dénommé le Prix de l'Excellence s'est encore déroulé avec bravoure cette année. Le 19 septembre 2015, Bana fut le théâtre de tout le département. La cérémonie était grandiose : toutes les autorités étaient présentes, le chef du village et tous ses invités ont donné la couleur à cet événement.

Grâce à la bienveillance des uns et des autres, les enfants ont eu droit à une belle rentrée scolaire, et nous en sommes très contents.

Nous continuerons à soutenir les populations à notre niveau tout en espérant qu'un jour les donateurs et autres se joigneront à nous afin qu'ensemble nous élargissions ce prix à une grande échelle.

Un enfant éduqué est un gain pour la nation. Ensemble donnons du sourire. Merci à tous ceux qui nous suivent et nous soutiennent.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
