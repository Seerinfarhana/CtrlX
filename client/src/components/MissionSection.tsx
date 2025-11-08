import { Card } from "@/components/ui/card";
import { Sparkles, Globe, Award } from "lucide-react";

export function MissionSection() {
  const values = [
    {
      icon: Sparkles,
      title: "Preserve Culture",
      description: "Safeguarding artistic heritage for future generations through digital innovation"
    },
    {
      icon: Globe,
      title: "Global Connection",
      description: "Bridging artists, organizations, and admirers across borders and backgrounds"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Celebrating talent and providing platforms for artists to gain the recognition they deserve"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" data-testid="section-mission">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CULTURA is dedicated to creating a digital ecosystem where art and culture thrive, 
            connecting creative minds with opportunities and audiences worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-value-${index}`}>
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
