import { RoleCard } from '../RoleCard';
import { Palette, Users, Building } from 'lucide-react';

export default function RoleCardExample() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <RoleCard
        title="Artist"
        description="Showcase your work and connect with organizations"
        icon={Palette}
        features={[
          "Upload unlimited artworks",
          "Build your portfolio",
          "Get recognized by organizations",
          "Track engagement analytics"
        ]}
        onJoin={() => console.log('Join as Artist clicked')}
      />
      <RoleCard
        title="User"
        description="Explore and engage with amazing artworks"
        icon={Users}
        features={[
          "Discover curated art collections",
          "Like and comment on artworks",
          "Rate and review pieces",
          "Save favorite artworks"
        ]}
        onJoin={() => console.log('Join as User clicked')}
      />
      <RoleCard
        title="Organization"
        description="Find talent and collaborate with artists"
        icon={Building}
        features={[
          "Browse artist portfolios",
          "Post collaboration requests",
          "Recognize talented artists",
          "Access analytics dashboard"
        ]}
        onJoin={() => console.log('Join as Organization clicked')}
      />
    </div>
  );
}
