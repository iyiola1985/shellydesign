import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="up">
          <span className="heading-eyebrow">
            <span className="h-px w-6 bg-gold-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05}>
        <h2
          className={cn(
            "mt-3 font-display text-2xl font-bold leading-[1.1] tracking-tight text-balance sm:mt-4 sm:text-3xl md:text-[2.75rem]",
            light ? "text-white" : "text-navy-900 dark:text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.1}>
          <p
            className={cn(
              "mt-4 text-sm leading-relaxed sm:mt-5 sm:text-base md:text-lg",
              light ? "text-white/70" : "text-navy-500 dark:text-white/60"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
