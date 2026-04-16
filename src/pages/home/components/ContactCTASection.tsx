import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants';

export default function ContactCTASection() {
  return (
    <section className="bg-[#D4A853] py-20 md:py-24" aria-label="İletişime geçin">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Left text */}
          <div className="lg:max-w-xl">
            <span className="text-[#0f0f0f]/50 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              — Hemen Başlayalım
            </span>
            <h2
              className="text-[#0f0f0f] font-black leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Hemen Bizimle<br />İletişime Geçin
            </h2>
            <p className="text-[#0f0f0f]/60 text-sm leading-relaxed">
              Projeniz için ücretsiz keşif ve fiyat teklifi almak ister misiniz? Uzman ekibimiz yerinde inceleme yaparak size en uygun sistemi önerir.
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0f0f0f] text-white font-bold text-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer whitespace-nowrap"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10" aria-hidden="true">
                <i className="ri-phone-fill text-sm"></i>
              </div>
              Ücretsiz Keşif İçin Ara
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[#0f0f0f]/30 text-[#0f0f0f] font-bold text-sm hover:border-[#0f0f0f] hover:bg-[#0f0f0f]/8 transition-colors cursor-pointer whitespace-nowrap"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0f0f0f]/10" aria-hidden="true">
                <i className="ri-whatsapp-line text-sm"></i>
              </div>
              Hızlı Teklif İçin WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom divider with trust signals */}
        <div className="mt-14 pt-8 border-t border-[#0f0f0f]/15 flex flex-wrap gap-6 md:gap-10">
          {[
            { icon: 'ri-shield-check-line', text: 'Garantili Ürünler' },
            { icon: 'ri-time-line', text: 'Hızlı Kurulum' },
            { icon: 'ri-search-eye-line', text: 'Ücretsiz Keşif' },
            { icon: 'ri-customer-service-2-line', text: 'Satış Sonrası Destek' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <i className={`${item.icon} text-[#0f0f0f]/50 text-base`} aria-hidden="true"></i>
              <span className="text-[#0f0f0f]/60 text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
