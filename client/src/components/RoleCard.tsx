import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  onJoin: () => void;
}

export function RoleCard({ title, description, icon: Icon, features, onJoin }: RoleCardProps) {
  return (
    <Card className="p-8 hover-elevate transition-all duration-300 h-full flex flex-col" data-testid={`card-role-${title.toLowerCase()}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-display text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        onClick={onJoin}
        className="w-full"
        data-testid={`button-join-${title.toLowerCase()}`}
      >
        Join as {title}
      </Button>
    </Card>
  );
}
