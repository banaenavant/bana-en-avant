import ActionDetailLayout, { GalleryPhoto } from '../components/ActionDetailLayout';
import type { Page } from '../types';

interface Props { onNavigate: (page: Page) => void; }

export default function RemiseMaterielHopital({ onNavigate }: Props) {
  const photos: GalleryPhoto[] = [
    { src: 'https://www.net1901.org/image/use2/10/102562-a.jpg', alt: 'Remise de matériel à l\'hôpital de Bana' },
    { src: 'https://www.net1901.org/image/use2/10/102563-a.jpg', alt: 'Équipement livré à la maternité de Bana' },
    { src: 'https://www.net1901.org/image/use2/10/102564-a.jpg', alt: 'Matériel médical pour le plateau technique' },
    { src: 'https://www.net1901.org/image/use2/10/102565-a.jpg', alt: 'Don de matériel médical, juillet 2020' },
    { src: 'https://www.net1901.org/image/use2/10/102566.jpg',   alt: 'Équipe Bana en Avant à l\'hôpital' },
    { src: 'https://www.net1901.org/image/use2/10/102567-a.jpg', alt: 'Cérémonie de remise du matériel' },
    { src: 'https://www.net1901.org/image/use2/10/102568-a.jpg', alt: 'Corps médical de l\'hôpital de Bana' },
    { src: 'https://www.net1901.org/image/use2/10/102569-a.jpg', alt: 'Maternité équipée grâce à Bana en Avant' },
  ];

  return (
    <ActionDetailLayout
      title="Remise de matériel à l'hôpital de Bana"
      subtitle="Équipement médical essentiel pour la maternité et le plateau technique"
      date="Juillet 2020"
      category="Santé"
      categoryColor="red"
      heroImage="https://www.net1901.org/image/use2/10/102562-a.jpg"
      description={`Après avoir sensibiliser la population pendant plusieurs mois, nous avons visité l'hôpital de Bana qui était très vétuste et avons décidé d'offrir le matériel à la maternité et le plateau technique afin que les soignants prennent en charge les patients plus aisément.

Nous aimerons faire plus la prochaine fois si possible... Merci à tous les donateurs.`}
      photos={photos}
      onBack={() => onNavigate('home')}
    />
  );
}
