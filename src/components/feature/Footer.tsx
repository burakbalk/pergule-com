import { Link } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF, EMAIL, ADDRESS, BRAND_NAME } from '@/lib/constants';
import Icon from '@/components/Icon';

const serviceLinks = [
  { label: 'Kasetli Tente', href: '/hizmetler/kasetli-tente' },
  { label: 'Körüklü Tente', href: '/hizmetler/koruklu-tente' },
  { label: 'Mafsallı Tente', href: '/hizmetler/mafsalli-tente' },
  { label: 'T Model Tente', href: '/hizmetler/t-model-tente' },
  { label: 'Win Tente', href: '/hizmetler/win-tente' },
  { label: 'Bioklimatik Pergola', href: '/hizmetler/bioklimatik-pergola' },
  { label: 'Otomatik Pergola', href: '/hizmetler/otomatik-pergola' },
  { label: 'Rollingroof Pergola', href: '/hizmetler/rollingroof-pergola' },
  { label: 'Zip Perde', href: '/hizmetler/zip-perde' },
];

const pageLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5 cursor-pointer" aria-label={`${BRAND_NAME} Ana Sayfa`}>
              <img
                src="/logo.webp"
                alt={`${BRAND_NAME} Logosu`}
                className="h-9 w-auto object-contain"
                width="180"
                height="44"
              />
            </Link>
            <p className="text-white/35 text-xs leading-relaxed mb-6">
              Profesyonel tente, pergola ve branda sistemleriyle yaşam alanlarınızı dört mevsim konforlu hale getiriyoruz.
            </p>
            <address className="not-italic flex flex-col gap-3">
              <a href={PHONE_HREF} className="flex items-center gap-3 group cursor-pointer" aria-label={`Telefon: ${PHONE_DISPLAY}`}>
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 group-hover:bg-[#D4A853]/20 transition-colors" aria-hidden="true">
                  <Icon name="phone-line" className="text-[#D4A853] text-sm" />
                </div>
                <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors">{PHONE_DISPLAY}</span>
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer" aria-label="WhatsApp ile iletişime geçin">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 group-hover:bg-[#D4A853]/20 transition-colors" aria-hidden="true">
                  <Icon name="whatsapp-line" className="text-[#D4A853] text-sm" />
                </div>
                <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors">WhatsApp ile Yaz</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group cursor-pointer" aria-label={`E-posta: ${EMAIL}`}>
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 group-hover:bg-[#D4A853]/20 transition-colors" aria-hidden="true">
                  <Icon name="mail-line" className="text-[#D4A853] text-sm" />
                </div>
                <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors">{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/6 shrink-0" aria-hidden="true">
                  <Icon name="map-pin-line" className="text-[#D4A853] text-sm" />
                </div>
                <span className="text-white/35 text-xs leading-relaxed">{ADDRESS}</span>
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.15em] mb-5">Hizmetler</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/45 text-xs hover:text-[#D4A853] transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.15em] mb-5">Sayfalar</h4>
            <ul className="flex flex-col gap-2.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/45 text-xs hover:text-[#D4A853] transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA col */}
          <div>
            <h4 className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.15em] mb-5">Ücretsiz Keşif</h4>
            <p className="text-white/35 text-xs leading-relaxed mb-5">
              Projeniz için ücretsiz keşif ve fiyat teklifi almak için hemen iletişime geçin.
            </p>
            <a
              href={PHONE_HREF}
              className="block w-full text-center py-3 rounded-full bg-[#D4A853] text-[#0a0a0a] text-xs font-bold hover:bg-[#c49840] transition-colors cursor-pointer whitespace-nowrap mb-2.5"
            >
              Ücretsiz Keşif İçin Ara
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-full border border-white/12 text-white/50 text-xs font-semibold hover:border-[#D4A853]/50 hover:text-[#D4A853] transition-colors cursor-pointer whitespace-nowrap"
            >
              Hızlı Teklif İçin WhatsApp
            </a>
          </div>
        </div>

        {/* Schema.org LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: BRAND_NAME,
              description: 'Profesyonel tente, pergola ve branda sistemleri. Kasetli tente, bioklimatik pergola, zip perde ve şeffaf branda çözümleri.',
              url: 'https://pergule.com',
              telephone: PHONE_DISPLAY,
              email: EMAIL,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Yeşillik Caddesi 5757 Sok. No 22/C',
                addressLocality: 'Karabağlar',
                addressRegion: 'İzmir',
                addressCountry: 'TR',
              },
              openingHours: 'Mo-Sa 08:00-18:00',
              priceRange: '₺₺',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Tente ve Pergola Sistemleri',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kasetli Tente' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bioklimatik Pergola' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zip Perde' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Otomatik Pergola' } },
                ],
              },
            }),
          }}
        />

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[11px]">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. Tüm hakları saklıdır.
          </p>
          <p className="text-white/20 text-[11px]">
            Profesyonel Tente, Pergola ve Branda Sistemleri
          </p>
        </div>
      </div>
    </footer>
  );
}
