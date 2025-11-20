function ExperienceCard({ experience }) {
  return (
    <div className="card-surface flex flex-col gap-4 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20 text-lg text-cyan-200 ring-1 ring-cyan-300/30">
          {experience.icon}
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-cyan-100">{experience.category}</p>
          <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-300">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.highlights.map((highlight) => (
          <span key={highlight} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
