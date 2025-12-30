interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold text-lg group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div>
        <h4 className="font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
