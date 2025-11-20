const links = [
  { href: '#boats', label: 'เรือทั้งหมด' },
  { href: '#experiences', label: 'ประสบการณ์' },
  { href: '#cta', label: 'เริ่มจอง' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1877F2] text-lg font-black text-white shadow-md">
            JJ
          </div>
          <div>
            <p className="text-sm text-slate-500">JoinJoy</p>
            <p className="text-lg font-semibold text-slate-900">Krabi Journeys</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-[#1877F2]" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/30 transition hover:bg-[#1877F2]/5 sm:inline-flex">
            เข้าสู่ระบบ
          </button>
          <button className="inline-flex rounded-xl bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#1877F2]/30 transition hover:scale-[1.01]">
            จองเรือกับเรา
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
