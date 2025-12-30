import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string;
  featured?: boolean;
}

export function ServiceCard({ icon, title, description, features, href = "/contato", featured = false }: ServiceCardProps) {
  return (
    <div className={`glass-card p-6 md:p-8 hover-lift group ${featured ? "border-accent/50 glow-accent" : ""}`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${featured ? "bg-accent text-accent-foreground" : "bg-primary/20 text-primary"}`}>
        {icon}
      </div>
      
      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-foreground/90">
            <Check className="w-5 h-5 text-accent flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={featured ? "hero" : "outline"} className="w-full" asChild>
        <Link to={href}>Solicitar Orçamento</Link>
      </Button>
    </div>
  );
}
