const words = [
  "Residential",
  "Commercial",
  "Interior Decoration",
  "Renovation",
  "Equipment Supply",
  "Project Management",
  "Architecture",
  "Remodeling",
];

export function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="border-y bg-navy-950 py-5">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {items.map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-xl font-semibold text-white/40 sm:text-2xl">
                {word}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden="true">
          {items.map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-xl font-semibold text-white/40 sm:text-2xl">
                {word}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
