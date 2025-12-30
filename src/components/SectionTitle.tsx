interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionTitle({ badge, title, highlight, description, centered = true }: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 animate-fade-in">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 animate-slide-up">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground animate-slide-up delay-100">
          {description}
        </p>
      )}
    </div>
  );
}
