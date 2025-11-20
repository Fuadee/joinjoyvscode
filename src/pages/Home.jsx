import BoatCard from '../components/BoatCard.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';

const boats = [
  {
    name: 'Azure Dawn 42',
    type: 'Luxury Catamaran',
    capacity: 12,
    price: 820,
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sunset cruises', 'Premium bar', 'Crewed'],
  },
  {
    name: 'Silver Tide 36',
    type: 'Express Cruiser',
    capacity: 8,
    price: 560,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Day trips', 'Snorkeling gear', 'Bluetooth audio'],
  },
  {
    name: 'Mariner 50',
    type: 'Flybridge Yacht',
    capacity: 16,
    price: 1040,
    image: 'https://images.unsplash.com/photo-1500375591096-0bcfc4c0a7a1?auto=format&fit=crop&w=1200&q=80',
    tags: ['Overnight', 'Private chef', 'Staterooms'],
  },
  {
    name: 'Coral Whisper 32',
    type: 'Eco Cat',
    capacity: 6,
    price: 420,
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
    tags: ['Electric hybrid', 'Shallow draft', 'Local guide'],
  },
];

const experiences = [
  {
    title: 'Sunset Champagne Cruise',
    category: 'Evenings',
    icon: '🌅',
    description:
      'Sail into golden hour with curated playlists, chilled champagne, and a crew that times the route for the perfect skyline glow.',
    highlights: ['2.5 hours', 'Sommelier-selected bottles', 'Chef snacks'],
  },
  {
    title: 'Island Hopping Day',
    category: 'Adventure',
    icon: '🏝️',
    description:
      'Hop across hidden sandbars and snorkel reefs with a local guide who knows the calmest coves and clearest waters.',
    highlights: ['6 hours', 'Snorkel gear', 'Drone photos'],
  },
  {
    title: 'Executive Offshore',
    category: 'Corporate',
    icon: '💼',
    description:
      'Host clients with concierge-level service, onboard Wi-Fi, and chef-crafted canapés for productive meetings on the water.',
    highlights: ['Private steward', 'A/V ready', 'Coastal routes'],
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_32%)]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
            Luxury charters • Coastal getaways
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Cruise the coast in comfort with HarborWave.
          </h1>
          <p className="text-lg text-slate-300 sm:max-w-xl">
            Curated boats, concierge crews, and memorable experiences—tailored for sunset soirees, island hopping, and private celebrations.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.01]">
              Start planning
              <span aria-hidden className="text-xl">→</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/5">
              View fleet
            </button>
          </div>
          <div className="grid max-w-lg grid-cols-2 gap-4 sm:gap-6">
            {[
              ['98% five-star trips', 'Service you can trust'],
              ['15 min response', 'Concierge anytime'],
              ['Coastwide routes', 'Pick a harbor'],
              ['Luxury fleet', 'Hand-inspected'],
            ].map(([title, subtitle]) => (
              <div key={title} className="card-surface space-y-1 p-4">
                <p className="text-xs uppercase tracking-wide text-cyan-100">{subtitle}</p>
                <p className="text-lg font-semibold text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-blue-900/40">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
              alt="Yacht on the ocean"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6">
              <p className="text-sm uppercase tracking-wide text-cyan-100">Featured voyage</p>
              <p className="text-xl font-semibold text-white">Twilight harbor sail • Phuket</p>
              <p className="text-sm text-slate-300">Chef tasting menu • Live saxophonist • Drone videography</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceGrid() {
  return (
    <section id="experiences" className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 sm:py-20">
      <div className="section-shell space-y-10">
        <div className="space-y-3 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
            Curated experiences
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Pick your perfect itinerary</h2>
          <p className="text-lg text-slate-300 sm:max-w-2xl sm:mx-auto">
            From romantic sunsets to corporate escapes, our concierge team designs every detail so you can relax into the rhythm of the water.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetSection() {
  return (
    <section id="boats" className="py-16 sm:py-20">
      <div className="section-shell space-y-12">
        <div className="space-y-3 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
            Signature fleet
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Pick the perfect boat</h2>
          <p className="text-lg text-slate-300 sm:max-w-2xl sm:mx-auto">
            Hand-inspected vessels with pro crews, transparent pricing, and flexible itineraries for every occasion.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boats.map((boat) => (
            <BoatCard key={boat.name} boat={boat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/20 via-blue-600/15 to-slate-950 p-10 sm:p-12">
          <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
                White-glove concierge
              </span>
              <h3 className="text-3xl font-black text-white sm:text-4xl">Tell us your dream sail. We handle the rest.</h3>
              <p className="text-lg text-slate-200 sm:max-w-2xl">
                From provisioning to dockside car service, our concierge team scripts every moment. Just share the vibe—romantic, adventurous, or laid-back—and we craft it end-to-end.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
                  Concierge captain
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
                  Menu design
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
                  Onboard events
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl" />
              <div className="relative space-y-4 rounded-2xl border border-white/15 bg-slate-950/70 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-300">Concierge line</div>
                    <div className="text-xl font-semibold text-white">+66 92 777 4400</div>
                  </div>
                  <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-300/40">
                    Available
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm text-slate-200">
                    Preferred date
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                      type="date"
                    />
                  </label>
                  <label className="block text-sm text-slate-200">
                    Guests
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                      type="number"
                      min="2"
                      max="20"
                      placeholder="8"
                    />
                  </label>
                </div>
                <label className="block text-sm text-slate-200">
                  What are you planning?
                  <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-cyan-400 focus:outline-none">
                    <option className="bg-slate-950">Sunset cruise</option>
                    <option className="bg-slate-950">Island hop</option>
                    <option className="bg-slate-950">Celebration</option>
                    <option className="bg-slate-950">Corporate event</option>
                  </select>
                </label>
                <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.01]">
                  Request itinerary
                </button>
                <p className="text-center text-xs text-slate-400">A concierge will call you within 15 minutes to confirm details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-base font-black text-slate-950">
            HW
          </div>
          <span>HarborWave Cruises</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">
            Instagram
          </a>
          <a className="hover:text-white" href="#">
            Facebook
          </a>
          <a className="hover:text-white" href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <ExperienceGrid />
      <FleetSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default Home;
