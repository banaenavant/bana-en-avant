import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function Covid19({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/10/102556-a.jpg', alt: 'Bana en Avant et le Covid-19' },
    { src: 'https://www.net1901.org/image/use2/10/102557-a.jpg', alt: 'Distribution de masques et de savons' },
    { src: 'https://www.net1901.org/image/use2/10/102558-a.jpg', alt: 'Formation aux gestes barrières' },
    { src: 'https://www.net1901.org/image/use2/10/102559-a.jpg', alt: 'Installation de points d\'eau' },
    { src: 'https://www.net1901.org/image/use2/10/102560.jpg',   alt: 'Sensibilisation dans les villages' },
    { src: 'https://www.net1901.org/image/use2/10/102561-a.jpg', alt: 'Équipe Bana en Avant contre le Covid-19' },
  ];

  return (
    <ActionDetailLayout
      title="Bana en Avant et le Covid-19"
      subtitle="Formation aux gestes barrières et distribution de matériel de protection"
      date="Mai 2020"
      category="Santé"
      categoryColor="emerald"
      heroImage="https://www.net1901.org/image/use2/10/102556-a.jpg"
      description={`Suite à la crise sanitaire mondiale, l'équipe de Bana en Avant à travers la plateforme urgence covid-19 s'est rendue à Bana et dans plusieurs autres villes afin d'apprendre les gestes barrières à la population, installer les points d'eau, offrir des masques, savons, gels désinfectants, eaux de javel.

Nous remercions tous les bénévoles et donateurs qui ont rendu cette action possible.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
