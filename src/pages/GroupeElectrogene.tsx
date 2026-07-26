import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function GroupeElectrogene({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/0/8370.jpg', alt: 'Remise du groupe électrogène à l\'hôpital de Bana' },
  ];

  return (
    <ActionDetailLayout
      title="Remise du groupe électrogène à l'hôpital de Bana"
      subtitle="Un équipement vital pour assurer la continuité des soins 24h/24"
      date="Mars 2012"
      category="Santé"
      categoryColor="red"
      heroImage="https://www.net1901.org/image/use2/0/8370.jpg"
      description={`L'association Bana en Avant s'est associée aux autres associations de la diaspora Bana afin de pouvoir offrir un groupe électrogène de 11 KVA à l'hôpital du village, qui était très souvent victime des coupures d'électricité.

Nous avons pensé que ces coupures intempestives pouvaient coûter la vie aux citoyens, car imaginez qu'un malade soit en train de se faire opérer et que le courant se coupe ! Ou qu'une maman accouche normalement ou difficilement et que le courant se coupe ! Quelle perte !

Cet acte a été notre façon de pallier à ce fléau nuisant. Avec un groupe qui peut désormais prendre le relais lors des coupures, nous sommes sereins pour nos malades. Reste plus qu'à les aider avec les dons de médicaments et autres premiers besoins médicaux.

NB : ne jamais oublier d'où on vient, où qu'on soit, afin de savoir où on va.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
