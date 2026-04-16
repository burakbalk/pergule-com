import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import { usePageSeo } from '@/lib/usePageSeo';
import { PHONE_HREF, WHATSAPP_HREF, SITE_URL } from '@/lib/constants';
import Icon from '@/components/Icon';

const categories = ['Tümü', 'Tente', 'Pergola', 'Branda & Perde'];

const projects = [
  { title: 'Bioklimatik Pergola', location: 'Villa Projesi', cat: 'Pergola', img: '/images/referanslar/ref-01.jpg' },
  { title: 'Kasetli Tente', location: 'Cafe & Restoran', cat: 'Tente', img: '/images/referanslar/ref-02.jpg' },
  { title: 'Zip Perde', location: 'Konut Projesi', cat: 'Branda & Perde', img: '/images/referanslar/ref-03.jpg' },
  { title: 'Şeffaf Branda', location: 'Ticari Alan', cat: 'Branda & Perde', img: '/images/referanslar/ref-04.jpg' },
  { title: 'Otomatik Pergola', location: 'Otel Projesi', cat: 'Pergola', img: '/images/referanslar/ref-05.jpg' },
  { title: 'Körüklü Tente', location: 'Konut Projesi', cat: 'Tente', img: '/images/referanslar/ref-06.jpg' },
  { title: 'Rollingroof Pergola', location: 'Rezidans Projesi', cat: 'Pergola', img: '/images/referanslar/ref-07.jpg' },
  { title: 'Mafsallı Tente', location: 'Cafe Projesi', cat: 'Tente', img: '/images/referanslar/ref-08.jpg' },
  { title: 'Win Tente', location: 'Sahil Projesi', cat: 'Tente', img: '/images/referanslar/ref-09.jpg' },
  { title: 'Şeffaf Stor Branda', location: 'Mağaza Projesi', cat: 'Branda & Perde', img: '/images/referanslar/ref-10.jpg' },
  { title: 'T Model Tente', location: 'Villa Projesi', cat: 'Tente', img: '/images/referanslar/ref-11.jpg' },
  { title: 'Bioklimatik Pergola', location: 'Otel Havuzu', cat: 'Pergola', img: '/images/referanslar/ref-12.jpg' },
];

export default function ReferencesPage() {
  usePageSeo({
    title: 'Referanslarımız',
    description: 'Pergule\'nin tamamladığı 500+ projeden seçmeler. Bioklimatik pergola, kasetli tente, zip perde ve daha fazlası. Gerçek proje fotoğrafları ve referanslarımız.',
    canonical: `${SITE_URL}/referanslar`,
  });

  const [active, setActive] = useState('Tümü');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'Tümü' ? projects : projects.filter((p) => p.cat === active);

  const openLightbox = (idx: number) => {
    // idx in filtered array → find in projects
    const proj = filtered[idx];
    const globalIdx = projects.indexOf(proj);
    setLightbox(globalIdx);
  };

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + projects.length) % projects.length);
  };

  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % projects.length);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20" aria-label="Referanslar başlık">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em]">Gerçek Projeler</span>
          </div>
          <h1
            className="text-white font-black leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Uygulamalarımız ve<br />Referanslarımız
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Tamamladığımız projelerden bir seçki. Her biri, kalitemizin ve uzmanlığımızın somut bir yansıması.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-10 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Kategori filtresi">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  active === cat
                    ? 'bg-[#D4A853] text-[#0f0f0f]'
                    : 'border border-white/15 text-white/50 hover:border-white/30 hover:text-white/80'
                }`}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 bg-[#0f0f0f]" aria-label="Proje galerisi">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((proj, idx) => (
              <div
                key={proj.title + proj.location + idx}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ height: '260px' }}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`${proj.title} — ${proj.location} büyütmek için tıklayın`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(idx); }}
              >
                <img
                  src={proj.img}
                  alt={`${proj.title} uygulaması — ${proj.location}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5">
                  <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider mb-1">{proj.location}</span>
                  <h3 className="text-white font-bold text-base">{proj.title}</h3>
                  <span className="text-white/40 text-xs mt-1">{proj.cat}</span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  <Icon name="zoom-in-line" className="text-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${projects[lightbox].title} büyük görünüm`}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            onClick={() => setLightbox(null)}
            aria-label="Kapat"
          >
            <Icon name="close-line" className="text-xl" aria-hidden="true" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Önceki proje"
          >
            <Icon name="arrow-left-line" className="text-xl" aria-hidden="true" />
          </button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[lightbox].img}
              alt={`${projects[lightbox].title} — ${projects[lightbox].location}`}
              className="max-w-full max-h-[75vh] rounded-xl object-contain"
            />
            <div className="text-center">
              <p className="text-[#D4A853] text-xs font-semibold uppercase tracking-wider">{projects[lightbox].location}</p>
              <p className="text-white font-bold text-lg">{projects[lightbox].title}</p>
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === lightbox ? 'bg-[#D4A853]' : 'bg-white/30'}`}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  aria-label={`${i + 1}. projeye git`}
                />
              ))}
            </div>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Sonraki proje"
          >
            <Icon name="arrow-right-line" className="text-xl" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#D4A853]" aria-label="Referans olmak için iletişim">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-[#0f0f0f] font-black text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Siz de Referanslarımız Arasında Yer Alın
          </h2>
          <p className="text-[#0f0f0f]/60 text-sm mb-8 leading-relaxed">
            Projeniz için ücretsiz keşif ve fiyat teklifi almak üzere hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0f0f0f] text-white font-bold text-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer whitespace-nowrap">
              <Icon name="phone-fill" aria-hidden="true" /> Hemen Ara
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0f0f0f]/30 text-[#0f0f0f] font-bold text-sm hover:border-[#0f0f0f] transition-colors cursor-pointer whitespace-nowrap">
              <Icon name="whatsapp-line" aria-hidden="true" /> WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
      <div className="md:hidden h-14"></div>
    </div>
  );
}
