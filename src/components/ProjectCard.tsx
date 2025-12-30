import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  image?: string;
  title: string;
  type: string;
  description: string;
  features: string[];
}

export function ProjectCard({ image, title, type, description, features }: ProjectCardProps) {
  return (
  <div className="glass-card overflow-hidden hover-lift group">
    
    {/* IMAGEM / TOPO DO CARD */}
    <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-4xl font-display font-bold text-foreground/20">
          DN4
        </span>
      )}
    </div>
    
    {/* CONTEÚDO */}
    <div className="p-6">
      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
        {type}
      </span>
      
      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <li
            key={index}
            className="text-sm text-foreground/80 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button variant="outline" className="w-full group/btn" asChild>
        <Link to="/contato">
          Quero uma solução parecida
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </Button>
    </div>
  </div>
);

}
