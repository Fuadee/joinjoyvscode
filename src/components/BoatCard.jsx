function BoatCard({ boat }) {
  return (
    <article className="card-surface h-full overflow-hidden border-white/5 bg-gradient-to-b from-white/5 via-white/0 to-white/0">
      <div className="relative">
        <img className="h-44 w-full object-cover" src={boat.image} alt={boat.name} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100 ring-1 ring-white/20">
          {boat.type}
        </div>
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white">{boat.name}</h3>
            <p className="text-sm text-slate-300">Capacity {boat.capacity} guests</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400">From</p>
            <p className="text-xl font-semibold text-cyan-200">${boat.price}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {boat.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.01]">
          View details
        </button>
      </div>
    </article>
  );
}

export default BoatCard;
