import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function FeteJeunesse2017({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/5/58976-a.jpg', alt: 'Fête de la Jeunesse à Bana, 11 février 2017' },
    { src: 'https://www.net1901.org/image/use2/5/58977.jpg',   alt: 'Défilé Bana en Avant et Bana Nouvelle Génération' },
    { src: 'https://www.net1901.org/image/use2/5/58978.jpg',   alt: 'Jeunesse de Bana en marche' },
    { src: 'https://www.net1901.org/image/use2/5/58979.jpg',   alt: 'Participants au défilé du 11 février' },
    { src: 'https://www.net1901.org/image/use2/5/58980.jpg',   alt: 'Célébration de la Fête de la Jeunesse' },
    { src: 'https://www.net1901.org/image/use2/5/58981.jpg',   alt: 'Unité et fraternité à Bana' },
    { src: 'https://www.net1901.org/image/use2/5/58982.jpg',   alt: 'Mobilisation de la jeunesse de Bana' },
    { src: 'https://www.net1901.org/image/use2/5/58983.jpg',   alt: 'Rassemblement communautaire' },
    { src: 'https://www.net1901.org/image/use2/5/58984-a.jpg', alt: 'Clôture de la fête de la jeunesse 2017' },
  ];

  return (
    <ActionDetailLayout
      title="Fête de la Jeunesse à Bana, 11 février 2017"
      subtitle="Défilé mémorable en symbiose avec Bana Nouvelle Génération"
      date="Février 2017"
      category="Culture"
      categoryColor="orange"
      heroImage="https://www.net1901.org/image/use2/5/58976-a.jpg"
      description={`L'association Bana en Avant a encore une fois été présente auprès des jeunes de l'arrondissement de Bana afin de donner de la hauteur à la Fête de la Jeunesse qui se déroule au Cameroun tous les 11 février.

Dans le souci de l'unité et la fraternité, nous nous sommes mis en symbiose avec une jeune association de la place dénommée Bana Nouvelle Génération, nos frères et sœurs de la nouvelle génération, très actifs, avec qui nous devons travailler régulièrement.

L'initiative d'organiser un défilé commun venant de ce groupe, nous l'avons félicitée et n'avons pas hésité à mobiliser nos troupes afin de communier ensemble. La fête fut belle et Bana en Avant a bien représenté son rôle auprès de la jeunesse consciente et attentive du village.

Le rendez-vous est pris pour le 11 février 2018. En attendant, nous avons du pain sur la planche : projets en cours : électricité à Bana et mise en place d'un secrétariat à la chefferie.

Unis, nous sommes forts.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
