import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import { servicesList } from '@/mocks/services';
import { usePageSeo } from '@/lib/usePageSeo';
import { PHONE_HREF, WHATSAPP_HREF, SITE_URL } from '@/lib/constants';

const categories = [
  {
    title: 'Tente Sistemleri',
    desc: 'Kasetli, körüklü, mafsallı, T model ve Win tente çözümleri.',
    slugs: ['kasetli-tente', 'koruklu-tente', 'mafsalli-tente', 't-model-tente', 'win-tente'],
  },
  {
    title: 'Pergola Sistemleri',
    desc: 'Bioklimatik, otomatik ve rollingroof pergola çözümleri.',
    slugs: ['bioklimatik-pergola', 'otomatik-pergola', 'rollingroof-pergola'],
  },
  {
    title: 'Branda & Perde Sistemleri',
    desc: 'Şeffaf branda, şeffaf stor branda ve zip perde çözümleri.',
    slugs: ['seffaf-branda', 'seffaf-stor-branda', 'zip-perde'],
  },
];

export default function ServicesPage() {
  usePageSeo({
    title: 'Hizmetlerimiz',
    description: 'Kasetli tente, bioklimatik pergola, otomatik pergola, zip perde, şeffaf branda ve daha fazlası. 11 farklı sistem ile her projeye özel çözüm. Ücretsiz keşif için arayın.',
    canonical: `${SITE_URL}/hizmetler`,
  });

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" aria-label="Hizmetler başlık">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/hero/about-bg.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-stone-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-5">
            Ürün Yelpazemiz
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hizmetlerimiz
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            Kasetli tenteden bioklimatik pergolaya, zip perdeden şeffaf brandaya kadar 11 farklı sistemle her projeye özel çözüm sunuyoruz.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat) => {
        const catServices = servicesList.filter((s) => cat.slugs.includes(s.slug));
        return (
          <section key={cat.title} className="py-16 md:py-20 even:bg-[#F8F6F2] odd:bg-white" aria-label={cat.title}>
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="mb-10">
                <h2
                  className="text-2xl md:text-3xl font-bold text-stone-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {cat.title}
                </h2>
                <p className="text-stone-500 text-sm">{cat.desc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catServices.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/hizmetler/${service.slug}`}
                    className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer border border-stone-100"
                    aria-label={`${service.title} detayları`}
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} sistemi`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-amber-50" aria-hidden="true">
                          <i className={`${service.icon} text-amber-600 text-lg`}></i>
                        </div>
                        <h3 className="font-semibold text-stone-900 text-base">{service.title}</h3>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                      <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-semibold group-hover:gap-2 transition-all">
                        Detaylı İncele
                        <i className="ri-arrow-right-line" aria-hidden="true"></i>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-stone-900" aria-label="Ücretsiz keşif için iletişim">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hangi Sistem Size Uygun?
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            Uzman ekibimiz projenizi yerinde inceleyerek en uygun sistemi önerir. Ücretsiz keşif için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line" aria-hidden="true"></i>
              Ücretsiz Keşif İçin Ara
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line" aria-hidden="true"></i>
              Hızlı Teklif İçin WhatsApp
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
