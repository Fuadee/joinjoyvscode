import { useTranslation } from 'react-i18next';
import BoatCard from '../components/BoatCard.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';

const boats = [
  {
    name: 'Azure Dawn 42',
    type: 'คาตามารันหรู',
    capacity: 12,
    price: 820,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    tags: ['ล่องชมพระอาทิตย์ตก', 'บาร์พรีเมียม', 'มีลูกเรือดูแล'],
  },
  {
    name: 'Silver Tide 36',
    type: 'ครูซเซอร์สปีด',
    capacity: 8,
    price: 560,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tags: ['ทริปวันเดียว', 'อุปกรณ์ดำน้ำ', 'เสียงเพลงบลูทูธ'],
  },
  {
    name: 'Mariner 50',
    type: 'ยอชต์ชั้นดาดฟ้า',
    capacity: 16,
    price: 1040,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tags: ['ค้างคืน', 'เชฟส่วนตัว', 'ห้องพักส่วนตัว'],
  },
  {
    name: 'Coral Whisper 32',
    type: 'เรือรักษ์ทะเล',
    capacity: 6,
    price: 420,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
    tags: ['ไฮบริดไฟฟ้า', 'เข้าหาดตื้นได้', 'ไกด์ท้องถิ่น'],
  },
];

const experiences = [
  {
    title: 'ครูซแชมเปญยามเย็น',
    category: 'ช่วงเย็น',
    icon: '🌅',
    description:
      'ออกเรือรับแสงทองพร้อมเพลย์ลิสต์ฟีลกู๊ด แชมเปญเย็นฉ่ำ และทีมงานที่คุมจังหวะให้ได้มุมพระอาทิตย์ตกสวยที่สุด.',
    highlights: ['2.5 ชั่วโมง', 'แชมเปญคัดพิเศษ', 'ของว่างจากเชฟ'],
  },
  {
    title: 'เกาะกระบี่วันเดียวจบ',
    category: 'ผจญภัย',
    icon: '🏝️',
    description:
      'จอดรับลมบนสันทรายลับ ดำน้ำดูปะการังกับไกด์ท้องถิ่นที่รู้จังหวะน้ำใสสงบและอ่าวเงียบที่สุด.',
    highlights: ['6 ชั่วโมง', 'อุปกรณ์ดำน้ำ', 'บริการถ่ายโดรน'],
  },
  {
    title: 'เวิร์กบนเรือ สไตล์ผู้บริหาร',
    category: 'องค์กร',
    icon: '💼',
    description:
      'ต้อนรับลูกค้าหรือทีมงานด้วยคอนเซียร์จเต็มรูปแบบ Wi‑Fi บนเรือ และคานาเป้จากเชฟ ให้ทุกการประชุมริมทะเลราบรื่นและพรีเมียม.',
    highlights: ['สจ๊วตดูแลส่วนตัว', 'ระบบเสียงพร้อมใช้', 'เส้นทางทะเลสวย'],
  },
];

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(24,119,242,0.1),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(66,183,42,0.12),transparent_36%)]" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full bg-[#e8f2ff] px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
            {t('hero.badge')}
          </span>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-slate-700 sm:max-w-xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-5 py-3 text-base font-semibold text-white shadow-md shadow-[#1877F2]/30 transition hover:scale-[1.01]">
              {t('hero.primaryCta')}
              <span aria-hidden className="text-xl">→</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/30 transition hover:bg-[#f0f6ff]">
              {t('hero.secondaryCta')}
            </button>
          </div>
          <div className="grid max-w-lg grid-cols-2 gap-4 sm:gap-6">
            {[
              ['98% ให้คะแนนห้าดาว', 'บริการที่ไว้ใจได้'],
              ['ตอบกลับภายใน 15 นาที', 'คอนเซียร์จพร้อมช่วย'],
              ['เส้นทางรอบกระบี่', 'เลือกท่าที่สะดวก'],
              ['กองเรือพรีเมียม', 'ตรวจเช็กทุกลำ'],
            ].map(([title, subtitle]) => (
              <div key={title} className="card-surface space-y-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1877F2]">{subtitle}</p>
                <p className="text-lg font-semibold text-slate-900">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-[#1877F2]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/90">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
              alt="เรือยอชต์กลางทะเลกระบี่"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-6 text-white">
              <p className="text-sm uppercase tracking-wide text-[#e0ecff]">ทริปแนะนำ</p>
              <p className="text-xl font-semibold">ล่องยามเย็น • อ่าวนาง</p>
              <p className="text-sm text-slate-100">เชฟเสิร์ฟคานาเป้ • แซ็กโซโฟนสด • ถ่ายโดรนบันทึกความทรงจำ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceGrid() {
  return (
    <section id="experiences" className="bg-[#f7f9fb] py-16 sm:py-20">
      <div className="section-shell space-y-10">
        <div className="space-y-3 text-center">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20 shadow-sm">
            ทริปที่คัดสรรให้คุณ
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">เลือกสไตล์ที่ใช่ แล้วไปสนุกกับ JoinJoy</h2>
          <p className="text-lg text-slate-700 sm:mx-auto sm:max-w-2xl">
            ไม่ว่าจะแฮงเอาท์โรแมนติก หรือพาทีมไปเวิร์กชอปริมทะเล คอนเซียร์จของเราดีไซน์ทริปให้ตรงใจ ให้คุณมีเวลาโฟกัสแค่ความสุข
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
          <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20 shadow-sm">
            กองเรือซิกเนเจอร์
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">เลือกเรือที่ตรงใจ แล้วออกทะเลได้เลย</h2>
          <p className="text-lg text-slate-700 sm:mx-auto sm:max-w-2xl">
            ทุกลำผ่านการตรวจเช็ก ทีมงานมืออาชีพ แจ้งราคาโปร่งใส พร้อมปรับแผนตามสไตล์ทริปของคุณ
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
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/80 sm:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#1877F2]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-[#e8f2ff] px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
                คอนเซียร์จดูแลครบ
              </span>
              <h3 className="text-3xl font-black text-slate-900 sm:text-4xl">เล่าแพลนในฝัน เราจัดให้ครบตั้งแต่ท่าเรือถึงบนเรือ</h3>
              <p className="text-lg text-slate-700 sm:max-w-2xl">
                ตั้งแต่เตรียมอาหาร รถรับส่งถึงท่าเรือ จนถึงกิจกรรมบนเรือ ทีม JoinJoy จะช่วยออกแบบให้ตรงฟีล ไม่ว่าจะโรแมนติก ผจญภัย หรือชิลล์ ๆ
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f6ff] px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
                  กัปตันที่รู้เส้นทาง
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f6ff] px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
                  เมนูอาหารตามใจ
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f6ff] px-4 py-2 text-sm font-semibold text-[#1877F2] ring-1 ring-[#1877F2]/20">
                  อีเวนต์บนเรือ
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#1877F2]/10 blur-2xl" />
              <div className="relative space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">สายด่วนคอนเซียร์จ</div>
                    <div className="text-xl font-semibold text-slate-900">+66 92 777 4400</div>
                  </div>
                  <span className="rounded-full bg-[#42B72A]/10 px-3 py-1 text-xs font-semibold text-[#1f7a12] ring-1 ring-[#42B72A]/30">
                    พร้อมดูแล
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm text-slate-700">
                    วันที่ต้องการเดินทาง
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-[#1877F2] focus:outline-none"
                      type="date"
                    />
                  </label>
                  <label className="block text-sm text-slate-700">
                    จำนวนผู้ร่วมทริป
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-[#1877F2] focus:outline-none"
                      type="number"
                      min="2"
                      max="20"
                      placeholder="8"
                    />
                  </label>
                </div>
                <label className="block text-sm text-slate-700">
                  อยากจัดทริปแบบไหน
                  <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:border-[#1877F2] focus:outline-none">
                    <option className="bg-white">ครูซชมพระอาทิตย์ตก</option>
                    <option className="bg-white">ดำน้ำ-กระโดดเกาะ</option>
                    <option className="bg-white">ปาร์ตี้หรือฉลอง</option>
                    <option className="bg-white">ทริปองค์กร/เวิร์กช็อป</option>
                  </select>
                </label>
                <button className="w-full rounded-xl bg-[#1877F2] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-[#1877F2]/30 transition hover:scale-[1.01]">
                  ขอแผนการเดินทาง
                </button>
                <p className="text-center text-xs text-slate-500">ทีมคอนเซียร์จจะติดต่อกลับภายใน 15 นาทีเพื่อยืนยันรายละเอียด</p>
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
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2] text-base font-black text-white shadow-sm">
            JJ
          </div>
          <span>JoinJoy Krabi</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="transition hover:text-[#1877F2]" href="#">
            อินสตาแกรม
          </a>
          <a className="transition hover:text-[#1877F2]" href="#">
            เฟซบุ๊ก
          </a>
          <a className="transition hover:text-[#1877F2]" href="#">
            ข้อกำหนดการใช้บริการ
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
