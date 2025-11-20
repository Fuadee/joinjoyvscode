function BoatCard({ boat }) {
  return (
    <article className="card-surface h-full overflow-hidden">
      <div className="relative">
        <img className="h-44 w-full object-cover" src={boat.image} alt={boat.name} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
          {boat.type}
        </div>
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{boat.name}</h3>
            <p className="text-sm text-slate-600">รองรับ {boat.capacity} คน</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">เริ่มต้น</p>
            <p className="text-xl font-semibold text-[#1877F2]">฿{boat.price}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {boat.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#f0f6ff] px-3 py-1 text-xs font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full rounded-xl bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#1877F2]/30 transition hover:scale-[1.01]">
          ดูรายละเอียดเรือ
        </button>
      </div>
    </article>
  );
}

export default BoatCard;
