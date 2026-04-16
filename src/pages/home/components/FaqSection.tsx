import { useState } from 'react';

const faqs = [
  {
    q: 'Tente sistemleri rüzgara dayanıklı mı?',
    a: 'Evet. Pergule\'nin tente sistemleri, özellikle Win Tente modeli, güçlendirilmiş kol mekanizması ve yüksek mukavemetli kumaşlarıyla rüzgara karşı üstün direnç sağlar. Motorlu sistemlerde rüzgar sensörü entegrasyonu da mümkündür.',
  },
  {
    q: 'Pergola sistemleri dört mevsim kullanılır mı?',
    a: 'Bioklimatik ve otomatik pergola sistemlerimiz dört mevsim kullanım için tasarlanmıştır. Döner lamel yapısı sayesinde yaz aylarında hava sirkülasyonu sağlanırken, kış aylarında lameller kapatılarak yağmur ve soğuktan korunulur.',
  },
  {
    q: 'Zip perde ne işe yarar?',
    a: 'Zip perde, fermuar sistemiyle rüzgara karşı sızdırmaz bir kapatma çözümü sunar. Terası veya balkonunuzu dört mevsim kullanılabilir hale getirir; rüzgar, yağmur ve böceklere karşı etkili koruma sağlar.',
  },
  {
    q: 'Şeffaf branda yağmur geçirir mi?',
    a: 'Hayır. Pergule\'nin şeffaf PVC brandaları, yüksek yoğunluklu malzeme yapısıyla yağmura karşı tam su geçirmezlik sağlar. Görüş açısını kapatmadan dış etkenlere karşı güvenilir bir bariyer oluşturur.',
  },
  {
    q: 'Kurulum ne kadar sürer?',
    a: 'Standart bir tente kurulumu genellikle 1 gün içinde tamamlanır. Pergola sistemleri ise 2-4 gün arasında kurulabilir. Keşif sonrasında size net bir kurulum takvimi sunulur.',
  },
  {
    q: 'Bakım ve onarım hizmeti veriyor musunuz?',
    a: 'Evet. Satış sonrası bakım ve onarım hizmetleri sunuyoruz. Periyodik bakım, kumaş değişimi, mekanik onarım ve teknik destek için ekibimize her zaman ulaşabilirsiniz.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#0f0f0f] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left sticky label */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              — Merak Edilenler
            </span>
            <h2
              className="text-white font-black leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
            >
              Sık Sorulan<br />Sorular
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              En çok merak edilen soruları derledik. Aklınızdaki soruyu burada bulamazsanız, bizi aramaktan çekinmeyin.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#D4A853]/30 bg-[#D4A853]/8">
              <div className="flex -space-x-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#D4A853]/40 border border-[#0f0f0f]"></div>
                ))}
              </div>
              <span className="text-[#D4A853] text-xs font-semibold">500+ Mutlu Müşteri</span>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  open === idx
                    ? 'border-[#D4A853]/40 bg-[#D4A853]/6'
                    : 'border-white/8 bg-white/3 hover:border-white/15'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <h3 className={`font-semibold text-sm leading-snug transition-colors ${open === idx ? 'text-white' : 'text-white/70'}`}>
                    {faq.q}
                  </h3>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full shrink-0 transition-all duration-300 ${
                    open === idx ? 'bg-[#D4A853] text-[#0f0f0f] rotate-45' : 'bg-white/8 text-white/40'
                  }`}>
                    <i className="ri-add-line text-sm"></i>
                  </div>
                </button>
                {open === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
