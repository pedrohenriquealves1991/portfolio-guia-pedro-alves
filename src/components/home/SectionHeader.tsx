interface SectionHeaderProps {
  label: string;
  title: string;
  intro?: string;
}

const SectionHeader = ({ label, title, intro }: SectionHeaderProps) => (
  <div className="mb-10 max-w-3xl md:mb-12">
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">{label}</p>
    <h2 className="text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
      {title}
    </h2>
    {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
  </div>
);

export default SectionHeader;
