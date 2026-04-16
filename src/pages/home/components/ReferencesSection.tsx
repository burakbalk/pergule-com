import { Link } from 'react-router-dom';
import Icon from '@/components/Icon';

const refs = [
  {
    img: '/images/referanslar/home-ref-01.webp',
    title: 'Bioklimatik Pergola',
    location: 'Villa Projesi',
  },
  {
    img: '/images/referanslar/home-ref-02.webp',
    title: 'Kasetli Tente',
    location: 'Cafe & Restoran',
  },
  {
    img: '/images/referanslar/home-ref-03.webp',
    title: 'Zip Perde',
    location: 'Konut Projesi',
  },
  {
    img: '/images/referanslar/home-ref-04.webp',
    title: 'Şeffaf Branda',
    location: 'Ticari Alan',
  },
  {
    img: '/images/referanslar/home-ref-05.webp',
    title: 'Otomatik Pergola',
    location: 'Otel Projesi',
  },
  {
    img: '/images/referanslar/home-ref-06.webp',
    title: 'Körüklü Tente',
    location: 'Konut Projesi',
  },
];

export default function ReferencesSection() {
  return (
    <section className="bg-[#f5f2ed] py-16 md:py-28" aria-label="Referanslarımız ve uygulamalarımız">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 md:mb-12">
          <div>
            <span className="text-[#8a6a2a] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              — Gerçek Projeler
            </span>
            <h2
              className="text-[#1a1a1a] font-black leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
            >
              Uygulamalarımız ve<br />Referanslarımız
            </h2>
          </div>
          <Link
            to="/referanslar"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a1a1a]/20 text-[#1a1a1a] text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            Tüm Referanslar
            <Icon name="arrow-right-line" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile: simple 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3">
          {refs.map((ref) => (
            <Link
              key={ref.title + ref.location}
              to="/referanslar"
              className="group relative rounded-xl overflow-hidden cursor-pointer block"
              style={{ height: '220px' }}
              aria-label={`${ref.title} — ${ref.location}`}
            >
              <img
                src={ref.img}
                alt={`${ref.title} uygulaması — ${ref.location}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider mb-1">{ref.location}</span>
                <h3 className="text-white font-bold text-sm">{ref.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: masonry-style grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {/* Col 1 — tall (row span 2) */}
          <Link
            to="/referanslar"
            className="col-span-1 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{ minHeight: '420px' }}
            aria-label={`${refs[0].title} — ${refs[0].location}`}
          >
            <img src={refs[0].img} alt={`${refs[0].title} uygulaması — ${refs[0].location}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5">
              <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider mb-1">{refs[0].location}</span>
              <h3 className="text-white font-bold text-base">{refs[0].title}</h3>
            </div>
          </Link>

          {/* Col 2-3 top — wide */}
          <Link
            to="/referanslar"
            className="col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{ minHeight: '200px' }}
            aria-label={`${refs[1].title} — ${refs[1].location}`}
          >
            <img src={refs[1].img} alt={`${refs[1].title} uygulaması — ${refs[1].location}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5">
              <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider mb-1">{refs[1].location}</span>
              <h3 className="text-white font-bold text-base">{refs[1].title}</h3>
            </div>
          </Link>

          {/* Col 4 top */}
          <Link
            to="/referanslar"
            className="col-span-1 group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{ minHeight: '200px' }}
            aria-label={`${refs[2].title} — ${refs[2].location}`}
          >
            <img src={refs[2].img} alt={`${refs[2].title} uygulaması — ${refs[2].location}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider mb-1">{refs[2].location}</span>
              <h3 className="text-white font-bold text-sm">{refs[2].title}</h3>
            </div>
          </Link>

          {/* Col 2 bottom */}
          <Link
            to="/referanslar"
            className="col-span-1 group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{ minHeight: '200px' }}
            aria-label={`${refs[3].title} — ${refs[3].location}`}
          >
            <img src={refs[3].img} alt={`${refs[3].title} uygulaması — ${refs[3].location}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider mb-1">{refs[3].location}</span>
              <h3 className="text-white font-bold text-sm">{refs[3].title}</h3>
            </div>
          </Link>

          {/* Col 3-4 bottom — wide */}
          <Link
            to="/referanslar"
            className="col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer block"
            style={{ minHeight: '200px' }}
            aria-label={`${refs[4].title} — ${refs[4].location}`}
          >
            <img src={refs[4].img} alt={`${refs[4].title} uygulaması — ${refs[4].location}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5">
              <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider mb-1">{refs[4].location}</span>
              <h3 className="text-white font-bold text-base">{refs[4].title}</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
