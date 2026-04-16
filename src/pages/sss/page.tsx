import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import { usePageSeo } from '@/lib/usePageSeo';
import { PHONE_HREF, WHATSAPP_HREF, SITE_URL } from '@/lib/constants';

const faqGroups = [
  {
    group: 'Tente Sistemleri',
    icon: 'ri-sun-line',
    items: [
      { q: 'Tente sistemleri rüzgara dayanıklı mı?', a: 'Evet. Pergule\'nin tente sistemleri, özellikle Win Tente modeli, güçlendirilmiş kol mekanizması ve yüksek mukavemetli kumaşlarıyla rüzgara karşı üstün direnç sağlar. Motorlu sistemlerde rüzgar sensörü entegrasyonu da mümkündür.' },
      { q: 'Kasetli tente ile körüklü tente arasındaki fark nedir?', a: 'Kasetli tente, kullanılmadığında kumaşı tamamen alüminyum kasete çeker; bu sayede kumaş dış etkenlere karşı korunur. Körüklü tente ise katlanabilir körük yapısıyla geniş alanlara uyum sağlar ve daha ekonomik bir seçenektir.' },
      { q: 'Tente kumaşları ne kadar dayanıklıdır?', a: 'Kullandığımız kumaşlar UV dayanımlı, su itici ve yırtılmaya karşı dirençli özel dokumadan üretilmektedir. Düzenli bakım yapıldığında 8-12 yıl sorunsuz kullanım ömrü sunar.' },
      { q: 'Motorlu tente sistemleri nasıl çalışır?', a: 'Motorlu tente sistemleri, uzaktan kumanda veya duvar anahtarıyla kontrol edilir. İsteğe bağlı olarak rüzgar ve güneş sensörleri eklenerek otomatik açılıp kapanma sağlanabilir.' },
    ],
  },
  {
    group: 'Pergola Sistemleri',
    icon: 'ri-home-gear-line',
    items: [
      { q: 'Pergola sistemleri dört mevsim kullanılır mı?', a: 'Bioklimatik ve otomatik pergola sistemlerimiz dört mevsim kullanım için tasarlanmıştır. Döner lamel yapısı sayesinde yaz aylarında hava sirkülasyonu sağlanırken, kış aylarında lameller kapatılarak yağmur ve soğuktan korunulur.' },
      { q: 'Bioklimatik pergola ile otomatik pergola arasındaki fark nedir?', a: 'Bioklimatik pergola, döner alüminyum lamellerle hava ve güneş kontrolü sağlar. Otomatik pergola ise motorlu kumaş sistemiyle çalışır; kumaş açılıp kapanarak gölgeleme ve yağmur koruması sağlar.' },
      { q: 'Pergola sistemlerine ek aksesuarlar eklenebilir mi?', a: 'Evet. LED aydınlatma, ısıtma sistemi, yan zip perde, şeffaf branda ve akıllı ev entegrasyonu gibi pek çok aksesuar eklenebilir. Bu sayede tam donanımlı bir dış mekan yaşam alanı oluşturulabilir.' },
      { q: 'Pergola kurulumu için zemin hazırlığı gerekli mi?', a: 'Pergola sistemleri genellikle mevcut zemine monte edilir. Ancak büyük ve ağır sistemlerde zemin sağlamlığı kontrol edilir. Keşif sırasında uzman ekibimiz zemin durumunu değerlendirir.' },
    ],
  },
  {
    group: 'Branda & Perde Sistemleri',
    icon: 'ri-shield-check-line',
    items: [
      { q: 'Zip perde ne işe yarar?', a: 'Zip perde, fermuar sistemiyle rüzgara karşı sızdırmaz bir kapatma çözümü sunar. Terası veya balkonunuzu dört mevsim kullanılabilir hale getirir; rüzgar, yağmur ve böceklere karşı etkili koruma sağlar.' },
      { q: 'Şeffaf branda yağmur geçirir mi?', a: 'Hayır. Pergule\'nin şeffaf PVC brandaları, yüksek yoğunluklu malzeme yapısıyla yağmura karşı tam su geçirmezlik sağlar. Doğru montaj ve kaliteli profil sistemiyle sızdırmazlık garantisi sunulmaktadır.' },
      { q: 'Şeffaf branda ile zip perde arasındaki fark nedir?', a: 'Şeffaf branda, serbest sarkıtılan PVC panellerden oluşur ve daha ekonomik bir çözümdür. Zip perde ise fermuar sistemiyle raylara kilitlenir; rüzgara karşı çok daha yüksek sızdırmazlık sağlar.' },
      { q: 'Branda sistemleri temizlenmesi kolay mı?', a: 'Evet. Şeffaf PVC brandalar ıslak bez veya yumuşak deterjanla kolayca temizlenebilir. Zip perde kumaşları ise özel temizlik ürünleriyle bakımı yapılabilir. Yılda bir kez profesyonel bakım önerilir.' },
    ],
  },
  {
    group: 'Genel Sorular',
    icon: 'ri-question-line',
    items: [
      { q: 'Kurulum ne kadar sürer?', a: 'Standart bir tente kurulumu genellikle 1 gün içinde tamamlanır. Pergola sistemleri 2-4 gün, büyük ticari projeler ise 1 haftaya kadar sürebilir. Keşif sonrasında size net bir kurulum takvimi sunulur.' },
      { q: 'Bakım ve onarım hizmeti veriyor musunuz?', a: 'Evet. Satış sonrası bakım ve onarım hizmetleri sunuyoruz. Periyodik bakım, kumaş değişimi, mekanik onarım ve teknik destek için ekibimize her zaman ulaşabilirsiniz.' },
      { q: 'Ücretsiz keşif hizmeti nasıl talep edilir?', a: 'Telefon veya WhatsApp üzerinden bizimle iletişime geçmeniz yeterlidir. Uzman ekibimiz uygun bir zamanda projenizi yerinde inceleyerek ücretsiz fiyat teklifi sunar.' },
      { q: 'Ürünlerinizde garanti var mı?', a: 'Evet. Tüm ürünlerimiz üretici garantisi kapsamındadır. Montaj işçiliği için de ayrıca garanti sunulmaktadır. Garanti süreleri ürün tipine göre değişmekte olup keşif sırasında detaylı bilgi verilmektedir.' },
    ],
  },
];

export default function SSSPage() {
  usePageSeo({
    title: 'Sık Sorulan Sorular',
    description: 'Tente, pergola ve branda sistemleri hakkında en çok merak edilen sorular. Kasetli tente, bioklimatik pergola, zip perde ve şeffaf branda hakkında detaylı cevaplar.',
    canonical: `${SITE_URL}/sss`,
  });

  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <div className="min-h-screen bg-[#0f0f0f]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-18" aria-label="SSS başlık">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em]">Merak Edilenler</span>
          </div>
          <h1
            className="text-white font-black leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Sık Sorulan Sorular
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Tente, pergola ve branda sistemleri hakkında en çok merak edilen soruları kategorilere göre derledik.
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="pb-20" aria-label="Sık sorulan sorular listesi">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {faqGroups.map((group) => (
            <div key={group.group} className="mb-10">
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#D4A853]/15" aria-hidden="true">
                  <i className={`${group.icon} text-[#D4A853] text-lg`}></i>
                </div>
                <h2 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {group.group}
                </h2>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-2">
                {group.items.map((item, idx) => {
                  const key = `${group.group}-${idx}`;
                  const isOpen = open === key;
                  return (
                    <div
                      key={key}
                      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                        isOpen ? 'border-[#D4A853]/40 bg-[#D4A853]/6' : 'border-white/8 bg-white/3 hover:border-white/15'
                      }`}
                    >
                      <button
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${key}`}
                      >
                        <h3 className={`font-semibold text-sm leading-snug transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
                          {item.q}
                        </h3>
                        <div
                          className={`w-7 h-7 flex items-center justify-center rounded-full shrink-0 transition-all duration-300 ${
                            isOpen ? 'bg-[#D4A853] text-[#0f0f0f] rotate-45' : 'bg-white/8 text-white/40'
                          }`}
                          aria-hidden="true"
                        >
                          <i className="ri-add-line text-sm"></i>
                        </div>
                      </button>
                      {isOpen && (
                        <div id={`faq-answer-${key}`} className="px-5 pb-5">
                          <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A853]" aria-label="Soru sormak için iletişim">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-[#0f0f0f] font-black text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sorunuzu Bulamadınız mı?
          </h2>
          <p className="text-[#0f0f0f]/60 text-sm mb-8 leading-relaxed">
            Aklınızdaki soruyu burada bulamadıysanız, bizi aramaktan çekinmeyin. Uzman ekibimiz size yardımcı olmaktan memnuniyet duyar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0f0f0f] text-white font-bold text-sm hover:bg-[#1a1a1a] transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-phone-fill" aria-hidden="true"></i> Hemen Ara
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0f0f0f]/30 text-[#0f0f0f] font-bold text-sm hover:border-[#0f0f0f] transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-whatsapp-line" aria-hidden="true"></i> WhatsApp&apos;tan Yaz
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
