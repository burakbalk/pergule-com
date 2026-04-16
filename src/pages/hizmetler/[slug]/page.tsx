import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import { getServiceDetail } from '@/mocks/servicesDetail';
import { servicesList } from '@/mocks/services';
import { usePageSeo } from '@/lib/usePageSeo';
import { PHONE_HREF, WHATSAPP_HREF, SITE_URL } from '@/lib/constants';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const detail = getServiceDetail(slug ?? '');
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!detail) return <Navigate to="/hizmetler" replace />;

  const otherServices = servicesList.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <ServiceDetailContent
      detail={detail}
      otherServices={otherServices}
      slug={slug ?? ''}
      lightbox={lightbox}
      setLightbox={setLightbox}
    />
  );
}

function ServiceDetailContent({
  detail,
  otherServices,
  slug,
  lightbox,
  setLightbox,
}: {
  detail: ReturnType<typeof getServiceDetail> & object;
  otherServices: typeof servicesList;
  slug: string;
  lightbox: number | null;
  setLightbox: (i: number | null) => void;
}) {
  usePageSeo({
    title: detail.title,
    description: detail.intro,
    canonical: `${SITE_URL}/hizmetler/${slug}`,
  });

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + detail.gallery.length) % detail.gallery.length);
  };
  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % detail.gallery.length);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden" aria-label={`${detail.title} başlık`}>
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={detail.gallery[0].src}
            alt=""
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#0f0f0f]/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-8 flex-wrap" aria-label="Sayfa yolu">
            <Link to="/" className="hover:text-white/70 transition-colors cursor-pointer">Ana Sayfa</Link>
            <i className="ri-arrow-right-s-line" aria-hidden="true"></i>
            <Link to="/hizmetler" className="hover:text-white/70 transition-colors cursor-pointer">Hizmetler</Link>
            <i className="ri-arrow-right-s-line" aria-hidden="true"></i>
            <span className="text-[#D4A853]" aria-current="page">{detail.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em]">Hizmet Detayı</span>
          </div>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            {detail.h1}
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            {detail.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D4A853] text-[#0f0f0f] font-bold text-sm hover:bg-[#c49840] transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill" aria-hidden="true"></i>
              Ücretsiz Keşif İçin Ara
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line" aria-hidden="true"></i>
              Hızlı Teklif İçin WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Description + Advantages */}
      <section className="py-16 md:py-20 bg-[#111111]" aria-label="Sistem açıklaması ve avantajlar">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — description */}
            <div>
              <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                — Sistem Hakkında
              </span>
              <h2
                className="text-white font-bold text-2xl md:text-3xl mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {detail.title} Nedir?
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {detail.description}
              </p>
            </div>

            {/* Right — advantages */}
            <div>
              <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                — Avantajlar
              </span>
              <h2
                className="text-white font-bold text-2xl md:text-3xl mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Neden Bu Sistem?
              </h2>
              <ul className="flex flex-col gap-3">
                {detail.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#D4A853]/20 shrink-0 mt-0.5" aria-hidden="true">
                      <i className="ri-check-line text-[#D4A853] text-xs"></i>
                    </div>
                    <span className="text-white/60 text-sm leading-relaxed">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Areas */}
      <section className="py-16 md:py-20 bg-[#0f0f0f]" aria-label="Kullanım alanları">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              — Nerede Kullanılır?
            </span>
            <h2
              className="text-white font-bold text-2xl md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kullanım Alanları
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {detail.usageAreas.map((area) => (
              <div key={area.title} className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-[#D4A853]/30 hover:bg-white/5 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#D4A853]/15 mb-5" aria-hidden="true">
                  <i className={`${area.icon} text-[#D4A853] text-2xl`}></i>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{area.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-[#111111]" aria-label="Uygulama galerisi">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              — Uygulama Görselleri
            </span>
            <h2
              className="text-white font-bold text-2xl md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Galeri
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {detail.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ height: '240px' }}
                onClick={() => setLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`${img.alt} büyütmek için tıklayın`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightbox(idx); }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 transition-all" aria-hidden="true">
                    <i className="ri-zoom-in-line text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl"></i>
                  </div>
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
          aria-label={detail.gallery[lightbox].alt}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            onClick={() => setLightbox(null)}
            aria-label="Kapat"
          >
            <i className="ri-close-line text-xl" aria-hidden="true"></i>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Önceki görsel"
          >
            <i className="ri-arrow-left-line text-xl" aria-hidden="true"></i>
          </button>
          <img
            src={detail.gallery[lightbox].src}
            alt={detail.gallery[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Sonraki görsel"
          >
            <i className="ri-arrow-right-line text-xl" aria-hidden="true"></i>
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {detail.gallery.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === lightbox ? 'bg-[#D4A853]' : 'bg-white/30'}`}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                aria-label={`${i + 1}. görsele git`}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#D4A853]" aria-label="Ücretsiz keşif için iletişim">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2
            className="text-[#0f0f0f] font-black text-2xl md:text-3xl mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {detail.title} İçin Ücretsiz Keşif Talep Edin
          </h2>
          <p className="text-[#0f0f0f]/60 text-sm mb-8 leading-relaxed max-w-xl mx-auto">
            Uzman ekibimiz projenizi yerinde inceleyerek size en uygun sistemi önerir ve ücretsiz fiyat teklifi sunar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0f0f0f] text-white font-bold text-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill" aria-hidden="true"></i>
              Hemen Ara
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#0f0f0f]/30 text-[#0f0f0f] font-bold text-sm hover:border-[#0f0f0f] transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line" aria-hidden="true"></i>
              Hızlı Teklif İçin WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-[#0f0f0f]" aria-label="Diğer hizmetlerimiz">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2
            className="text-white font-bold text-xl md:text-2xl mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Diğer Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/hizmetler/${s.slug}`}
                className="group rounded-xl overflow-hidden border border-white/8 hover:border-[#D4A853]/40 transition-all cursor-pointer"
                aria-label={s.title}
              >
                <div className="w-full h-28 overflow-hidden">
                  <img src={s.image} alt={`${s.title} sistemi`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-3">
                  <p className="text-white/70 text-xs font-semibold group-hover:text-[#D4A853] transition-colors">{s.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
      <div className="md:hidden h-14"></div>
    </div>
  );
}
