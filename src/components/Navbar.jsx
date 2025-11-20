const links = [
  { href: '#boats', label: 'Boats' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#cta', label: 'Get Started' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="section-shell flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-slate-950">
            HW
          </div>
          <div>
            <p className="text-sm text-slate-300">HarborWave</p>
            <p className="text-lg font-semibold text-white">Cruises</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/5 sm:inline-flex">
            Sign in
          </button>
          <button className="inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.01]">
            Book a boat
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
