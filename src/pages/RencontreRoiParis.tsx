import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function RencontreRoiParis({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/5/57835-a.jpg', alt: 'Rencontre avec Sa Majesté Sinkap Happi V à Paris' },
    { src: 'https://www.net1901.org/image/use2/5/57836-a.jpg', alt: 'Communauté Bana réunie autour du Roi' },
    { src: 'https://www.net1901.org/image/use2/5/57837-a.jpg', alt: 'Bana en Avant et Sa Majesté' },
    { src: 'https://www.net1901.org/image/use2/5/57838-a.jpg', alt: 'Diaspora Bana rassemblée à Paris' },
    { src: 'https://www.net1901.org/image/use2/5/57839-a.jpg', alt: 'Moment historique avec le Roi des Bana' },
    { src: 'https://www.net1901.org/image/use2/5/57840-a.jpg', alt: 'Échanges entre la diaspora et le Roi' },
    { src: 'https://www.net1901.org/image/use2/5/57841-a.jpg', alt: 'Engagement pour le développement de Bana' },
    { src: 'https://www.net1901.org/image/use2/5/57842-a.jpg', alt: 'Cérémonie officielle à Paris' },
    { src: 'https://www.net1901.org/image/use2/5/57845-a.jpg', alt: 'Unis pour un Bana meilleur' },
  ];

  return (
    <ActionDetailLayout
      title="Bana en Avant rencontre le Roi des Bana à Paris"
      subtitle="Visite historique de Sa Majesté Sinkap Happi V renforçant l'engagement pour Bana"
      date="Février 2017"
      category="Communauté"
      categoryColor="purple"
      heroImage="https://www.net1901.org/image/use2/5/57835-a.jpg"
      description={`La communauté Bana de la diaspora était en effervescence pendant 2 mois à Paris, suite à la visite de notre Roi Sa Majesté Sinkap HAPPI V.

Les mois d'Octobre à Septembre 2016 ont été très marquants pour toute la communauté Bana de France car notre roi nous a honoré de sa visite. Nous sommes issus des us et coutumes très variables. Le peuple bamileke est resté très traditionnel et jaloux des richesses ancestrales.

Au temps de nos parents, il n'était pas possible de voir un Roi encore moins de s'en approcher facilement : les rois chez nous sont des mystères et des mythes. Le privilège est tellement grandiose qu'il ne peut s'écrire. Nos enfants ne peuvent pas mesurer la chance qu'ils ont eu de rencontrer un Roi, car il y eut des parents qui naquirent, grandirent, moururent sans jamais voir un Roi.

Suite à cette visite, l'association Bana en Avant a encore réaffirmé son besoin de travailler jour et nuit pour le développement du village Bana. Nous avons été frappés par l'ouverture d'esprit de notre roi, sa disponibilité et surtout sa volonté d'avancer avec l'ère du temps.

Tous unis pour un Bana meilleur.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
