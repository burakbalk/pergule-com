import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants';

const features = [
  { icon: 'ri-shield-check-line', title: 'Dayanıklı Malzeme Kalitesi', desc: 'Sertifikalı, UV dayanımlı ve uzun ömürlü malzemeler. Her ürün yıllarca sorunsuz hizmet verecek şekilde üretilir.' },
  { icon: 'ri-team-line', title: 'Uzman Montaj Ekibi', desc: 'Deneyimli ekibimiz kurulumu titizlikle gerçekleştirir. İşin her aşamasında yanınızdayız.' },
  { icon: 'ri-price-tag-3-line', title: 'Uygun Fiyat Politikası', desc: 'Kaliteden ödün vermeden rekabetçi fiyatlar. Bütçenize uygun çözümler için ücretsiz keşif talep edin.' },
  { icon: 'ri-time-line', title: 'Hızlı Kurulum', desc: 'Anlaşma sonrası kısa sürede kurulum tamamlanır. Zamanınıza saygı duyuyor, söz verdiğimiz tarihe uyuyoruz.' },
  { icon: 'ri-customer-service-2-line', title: 'Satış Sonrası Destek', desc: 'Kurulum bittikten sonra da yanınızdayız. Bakım, onarım ve teknik destek için her zaman ulaşabilirsiniz.' },
  { icon: 'ri-search-eye-line', title: 'Ücretsiz Keşif Hizmeti', desc: 'Projenizi yerinde inceliyor, ihtiyacınıza en uygun sistemi öneriyor ve ücretsiz fiyat teklifi sunuyoruz.' },
];

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden" aria-label="Neden Pergule seçilmeli">
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/hero/whyus-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/88"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">

        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              — Fark Yaratan Detaylar
            </span>
            <h2
              className="text-white font-black leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Neden Pergule?
            </h2>
          </div>

          {/* Big numbers */}
          <div className="flex gap-10">
            {[
              { val: '500+', lbl: 'Tamamlanan Proje' },
              { val: '10+', lbl: 'Yıl Deneyim' },
              { val: '%100', lbl: 'Müşteri Memnuniyeti' },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <p className="text-[#D4A853] font-black text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{s.val}</p>
                <p className="text-white/40 text-xs mt-1 whitespace-nowrap">{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-[#D4A853]/30 transition-all duration-300">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#D4A853]/15 mb-5" aria-hidden="true">
                <i className={`${f.icon} text-[#D4A853] text-xl`}></i>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#D4A853] text-[#0f0f0f] font-bold text-sm hover:bg-[#c49840] transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill" aria-hidden="true"></i>
            Ücretsiz Keşif İçin Ara
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-line" aria-hidden="true"></i>
            Hızlı Teklif İçin WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
