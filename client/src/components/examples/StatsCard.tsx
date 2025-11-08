import { StatsCard } from '../StatsCard';
import { Palette, Users, Eye, Heart } from 'lucide-react';

export default function StatsCardExample() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <StatsCard
        title="Total Artworks"
        value="1,247"
        icon={Palette}
        trend="+12% this month"
        trendUp={true}
      />
      <StatsCard
        title="Artists"
        value="384"
        icon={Users}
        trend="+8% this month"
        trendUp={true}
      />
      <StatsCard
        title="Total Views"
        value="45.2K"
        icon={Eye}
        trend="+24% this month"
        trendUp={true}
      />
      <StatsCard
        title="Likes"
        value="12.8K"
        icon={Heart}
        trend="+18% this month"
        trendUp={true}
      />
    </div>
  );
}
