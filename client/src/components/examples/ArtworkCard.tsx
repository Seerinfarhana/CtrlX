import { ArtworkCard } from '../ArtworkCard';
import abstractArt from '@assets/generated_images/Contemporary_abstract_artwork_sample_6d7353f2.png';

export default function ArtworkCardExample() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <ArtworkCard
        id="1"
        title="Abstract Dreams"
        artist="Maria Santos"
        imageUrl={abstractArt}
        status="available"
        views={245}
        likes={32}
        onClick={() => console.log('Artwork clicked')}
      />
      <ArtworkCard
        id="2"
        title="Golden Hour"
        artist="John Chen"
        imageUrl={abstractArt}
        status="reserved"
        views={189}
        likes={28}
        onClick={() => console.log('Artwork clicked')}
      />
      <ArtworkCard
        id="3"
        title="Urban Reflections"
        artist="Elena Rodriguez"
        imageUrl={abstractArt}
        status="sold"
        views={567}
        likes={94}
        onClick={() => console.log('Artwork clicked')}
      />
    </div>
  );
}
