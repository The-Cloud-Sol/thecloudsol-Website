import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {features && features.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-secondary mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
