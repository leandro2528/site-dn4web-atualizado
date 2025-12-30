import { AlertCircle } from "lucide-react";

interface ProblemCardProps {
  text: string;
}

export function ProblemCard({ text }: ProblemCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-destructive/10 border border-destructive/20 hover:border-destructive/40 transition-all duration-300">
      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
      <span className="text-foreground/90">{text}</span>
    </div>
  );
}
