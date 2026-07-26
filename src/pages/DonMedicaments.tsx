import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function DonMedicaments({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/1/19676.jpg', alt: 'Dons de médicaments à l\'hôpital de Bana' },
    { src: 'https://www.net1901.org/image/use2/1/19677.jpg', alt: 'Remise officielle des médicaments' },
    { src: 'https://www.net1901.org/image/use2/1/19678.jpg', alt: 'Pharmacie de l\'hôpital de Bana renforcée' },
    { src: 'https://www.net1901.org/image/use2/1/19679.jpg', alt: 'Corps médical et équipe Bana en Avant' },
    { src: 'https://www.net1901.org/image/use2/1/19680.jpg', alt: 'Don de médicaments, août 2014' },
    { src: 'https://www.net1901.org/image/use2/1/19681.jpg', alt: 'Présidente et Sa Majesté Sinkap Happi V' },
    { src: 'https://www.net1901.org/image/use2/1/19682.jpg', alt: 'Cérémonie de remise à l\'hôpital' },
    { src: 'https://www.net1901.org/image/use2/1/19683.jpg', alt: 'Médicaments remis à la pharmacie' },
    { src: 'https://www.net1901.org/image/use2/1/19684.jpg', alt: 'Solidarité pour la santé à Bana' },
  ];

  return (
    <ActionDetailLayout
      title="Dons de médicaments à l'hôpital de Bana"
      subtitle="Renforcement de la pharmacie hospitalière pour une meilleure prise en charge"
      date="Août 2014"
      category="Santé"
      categoryColor="red"
      heroImage="https://www.net1901.org/image/use2/1/19676.jpg"
      description={`L'association Bana en Avant a couru au secours des malades de l'hôpital de Bana, petit village de 9 000 habitants situé à l'Ouest Cameroun.

Dans le but de renforcer la capacité de la pharmacie en termes de médicaments, afin de rassurer les patients pour une prise en charge efficiente de leurs maladies.

Nous étions accompagnés par le chef du village Sa Majesté Sinkap Happi V, du corps médical entier, du représentant du chef Bana vivant à Paris Mr Tchokothe François et la présidente de Bana en Avant Salomène Tchaptchet venue de Paris pour plusieurs activités concernant l'association.

Les doléances du corps médical axaient sur une continuité de l'acte posé, tout ceci dans un esprit de développement durable, contribuant au bien-être, à la garantie des prises en charge et surtout à mettre un grand sourire aux lèvres de ceux qui entrent malades et ressortent guéris.

Devise : observons, débattons utiles, agissons.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
