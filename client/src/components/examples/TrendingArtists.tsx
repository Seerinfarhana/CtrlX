import { TrendingArtists } from '../TrendingArtists';

export default function TrendingArtistsExample() {
  const artists = [
    {
      id: '1',
      name: 'Maria Santos',
      specialty: 'Abstract Expressionism',
      followers: 3420,
      verified: true,
    },
    {
      id: '2',
      name: 'John Chen',
      specialty: 'Digital Art',
      followers: 2890,
    },
    {
      id: '3',
      name: 'Elena Rodriguez',
      specialty: 'Contemporary Sculpture',
      followers: 4156,
      verified: true,
    },
  ];

  return <TrendingArtists artists={artists} onArtistClick={(id) => console.log(`Clicked artist ${id}`)} />;
}
