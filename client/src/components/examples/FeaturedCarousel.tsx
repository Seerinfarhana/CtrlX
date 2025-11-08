import { FeaturedCarousel } from '../FeaturedCarousel';
import abstractArt from '@assets/generated_images/Contemporary_abstract_artwork_sample_6d7353f2.png';
import portrait from '@assets/generated_images/Classical_portrait_artwork_sample_489c646b.png';
import sculpture from '@assets/generated_images/Sculpture_artwork_sample_24bc8330.png';

export default function FeaturedCarouselExample() {
  const artworks = [
    {
      id: '1',
      title: 'Contemporary Visions',
      artist: 'Maria Santos',
      imageUrl: abstractArt,
      description: 'A stunning exploration of color and form that challenges traditional boundaries.'
    },
    {
      id: '2',
      title: 'Classical Portrait',
      artist: 'Leonardo Rossi',
      imageUrl: portrait,
      description: 'An exquisite oil painting capturing the essence of renaissance portraiture.'
    },
    {
      id: '3',
      title: 'Modern Sculpture',
      artist: 'Yuki Tanaka',
      imageUrl: sculpture,
      description: 'A contemporary piece blending traditional techniques with modern aesthetics.'
    },
  ];

  return <FeaturedCarousel artworks={artworks} />;
}
