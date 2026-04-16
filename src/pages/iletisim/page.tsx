import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import { usePageSeo } from '@/lib/usePageSeo';
import { PHONE_HREF, WHATSAPP_HREF, PHONE_DISPLAY, ADDRESS, EMAIL, SITE_URL } from '@/lib/constants';

export default function ContactPage() {
  usePageSeo({
    title: 'İletişim',
    description: 'Pergule ile iletişime geçin. Ücretsiz keşif ve fiyat teklifi için hemen arayın veya WhatsApp\'tan yazın. Türkiye geneli hizmet veriyoruz.',
    canonical: `${SITE_URL}/iletisim`,
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Full-page CTA */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-28 relative overflow-hidden" aria-label="İletişim">
        {/* Background subtle texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#D4A853] blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D4A853] blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-2xl w-full text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em]">İletişim</span>
            <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
          </div>

          {/* H1 */}
          <h1
            className="text-white font-black leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Projeniz İçin<br />
            <span className="text-[#D4A853]">Hemen</span><br />
            İletişime Geçin
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-12 max-w-md mx-auto">
            Ücretsiz keşif ve fiyat teklifi için bizi arayın ya da WhatsApp&apos;tan yazın. Uzman ekibimiz en kısa sürede size dönüş yapar.
          </p>

          {/* Big CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={PHONE_HREF}
              className="group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#D4A853] text-[#0f0f0f] font-black text-base hover:bg-[#c49840] transition-colors cursor-pointer whitespace-nowrap"
              aria-label={`Telefon: ${PHONE_DISPLAY}`}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0f0f0f]/15" aria-hidden="true">
                <i className="ri-phone-fill text-lg"></i>
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold opacity-70 leading-none mb-0.5">Ücretsiz Keşif İçin</p>
                <p className="font-black text-base leading-none">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border-2 border-white/15 text-white font-black text-base hover:border-white/30 hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap"
              aria-label="WhatsApp'tan hızlı teklif alın"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10" aria-hidden="true">
                <i className="ri-whatsapp-line text-lg text-[#D4A853]"></i>
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold opacity-50 leading-none mb-0.5">Hızlı Teklif İçin</p>
                <p className="font-black text-base leading-none">WhatsApp&apos;tan Yaz</p>
              </div>
            </a>
          </div>

          {/* Contact info */}
          <div className="mb-10 flex flex-col sm:flex-row justify-center gap-6 text-sm">
            <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2 text-white/40 hover:text-white/70 transition-colors">
              <i className="ri-mail-line text-[#D4A853]" aria-hidden="true"></i>
              <span>{EMAIL}</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-white/40">
              <i className="ri-map-pin-line text-[#D4A853]" aria-hidden="true"></i>
              <address className="not-italic">{ADDRESS}</address>
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 pt-10 border-t border-white/8">
            {[
              { icon: 'ri-search-eye-line', text: 'Ücretsiz Keşif' },
              { icon: 'ri-time-line', text: 'Hızlı Dönüş' },
              { icon: 'ri-shield-check-line', text: 'Garantili Ürünler' },
              { icon: 'ri-customer-service-2-line', text: 'Satış Sonrası Destek' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <i className={`${item.icon} text-[#D4A853] text-base`} aria-hidden="true"></i>
                <span className="text-white/40 text-xs font-medium">{item.text}</span>
              </div>
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
