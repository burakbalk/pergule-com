import { Link } from 'react-router-dom';
import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants';
import Icon from '@/components/Icon';

const articleSections = [
  {
    id: 'modeller',
    h2: 'Tente ve Pergola Modelleri',
    subsections: [
      {
        h3: 'Şık ve Fonksiyonel Çözümler',
        content: 'Pergule, kasetli tenteden bioklimatik pergolaya uzanan geniş ürün yelpazesiyle her mekâna uygun gölgeleme çözümü sunar. Kasetli tente, kullanılmadığında kumaşı tamamen kasete çekerek hem estetik hem de uzun ömürlü bir görünüm sağlar. Körüklü tente ise geniş açıklıkları tek parça kapatabilmesiyle büyük teras ve bahçe alanlarında öne çıkar. Her model, farklı mimari yapılara ve kullanım ihtiyaçlarına göre özelleştirilebilir.',
        bullets: ['Kasetli, körüklü, mafsallı ve T model tente seçenekleri', 'Bioklimatik, otomatik ve rollingroof pergola sistemleri', 'Şeffaf branda, şeffaf stor branda ve zip perde çözümleri', 'Her ölçüye ve mekâna özel üretim imkânı'],
      },
      {
        h3: 'Kalite ve Standartlar',
        content: 'Pergule\'nin tüm ürünleri, sertifikalı alüminyum profiller ve UV dayanımlı kumaşlardan üretilmektedir. Kullanılan malzemeler, yoğun güneş ışığına, yağmura ve rüzgara karşı uzun yıllar boyunca performansını koruyacak şekilde seçilir. Motorlu sistemlerde kullanılan mekanizmalar, Avrupa standartlarına uygun olup sessiz ve güvenilir çalışma sağlar.',
        bullets: ['Sertifikalı alüminyum profil ve aksesuar kullanımı', 'UV dayanımlı, su itici özel kumaş seçenekleri', 'Avrupa standartlarına uygun motorlu mekanizmalar', 'Uzun ömürlü ve düşük bakım gerektiren yapı'],
      },
      {
        h3: 'Kullanım Alanına Göre Seçim',
        content: 'Doğru sistemi seçmek, hem konfor hem de uzun vadeli memnuniyet açısından kritik öneme sahiptir. Konut terasları için kasetli veya mafsallı tente; geniş ticari alanlar için körüklü tente veya bioklimatik pergola; dört mevsim kullanım için ise zip perde veya otomatik pergola önerilir. Ücretsiz keşif hizmetimizle uzman ekibimiz, projenizi yerinde inceleyerek en uygun sistemi belirler.',
        bullets: ['Konut terasları için kasetli ve mafsallı tente', 'Ticari alanlar için körüklü tente ve bioklimatik pergola', 'Dört mevsim kullanım için zip perde ve otomatik pergola', 'Ücretsiz keşifle kişiselleştirilmiş sistem önerisi'],
      },
    ],
  },
  {
    id: 'guvenilir',
    h2: 'Pergule Güvenilir Mi?',
    subsections: [
      {
        h3: 'Sektörel Deneyim ve Kurumsal Yaklaşım',
        content: '2014 yılından bu yana tente ve pergola sektöründe faaliyet gösteren Pergule, on yılı aşkın deneyimiyle güvenilir bir marka kimliği oluşturmuştur. Her projede aynı titizliği ve kalite standartlarını uygulayan ekibimiz, müşteri memnuniyetini her şeyin önünde tutar. Kurumsal yapımız, şeffaf fiyatlandırma politikamız ve satış sonrası destek anlayışımızla sektörde fark yaratıyoruz.',
        bullets: ['2014\'ten bu yana kesintisiz hizmet', 'Şeffaf fiyatlandırma ve yazılı teklif', 'Kurumsal yapı ve profesyonel ekip', 'Satış sonrası teknik destek garantisi'],
      },
      {
        h3: 'Referanslar ve Müşteri Memnuniyeti',
        content: '500\'ü aşkın tamamlanmış proje, Pergule\'nin güvenilirliğinin en somut kanıtıdır. Konut projelerinden otel ve restoran uygulamalarına, villa teraslarından ticari alanlara kadar geniş bir referans portföyüne sahibiz. Her tamamlanan proje, müşterilerimizin yaşam ve çalışma alanlarına değer katmaktadır. Memnun müşterilerimizin büyük çoğunluğu, çevrelerine de Pergule\'yi önermektedir.',
        bullets: ['500+ başarıyla tamamlanan proje', 'Konut, ticari ve otel referansları', 'Yüksek müşteri memnuniyeti ve tekrar tercih oranı', 'Çevre tavsiyesiyle büyüyen müşteri portföyü'],
      },
      {
        h3: 'Keşif, Ölçüm ve Planlama Süreci',
        content: 'Pergule\'de her proje, ücretsiz yerinde keşifle başlar. Uzman ekibimiz, mekânınızı ölçer, mimari yapıyı değerlendirir ve kullanım ihtiyaçlarınızı dinler. Bu süreçte size en uygun sistem, malzeme ve renk seçenekleri sunulur. Keşif sonrasında hazırlanan detaylı teklif, kurulum takvimi ve garanti koşullarını kapsar. Hiçbir gizli maliyet yoktur.',
        bullets: ['Ücretsiz yerinde keşif ve ölçüm', 'Detaylı ve şeffaf fiyat teklifi', 'Net kurulum takvimi ve planlama', 'Garanti koşulları ve bakım bilgisi'],
      },
    ],
  },
  {
    id: 'firmalar',
    h2: 'Tente ve Pergola Firmaları (2026)',
    subsections: [
      {
        h3: 'Profesyonel Hizmet ve Uzman Ekip',
        content: 'Tente ve pergola sektöründe doğru firmayı seçmek, yatırımınızın uzun vadeli değerini doğrudan etkiler. Pergule, alanında uzmanlaşmış montaj ekibi, sertifikalı ürün yelpazesi ve kurumsal hizmet anlayışıyla öne çıkmaktadır. Deneyimli ekibimiz, kurulum öncesinde detaylı planlama yaparak olası sorunları önceden önler ve işi zamanında teslim eder.',
        bullets: ['Alanında uzmanlaşmış montaj ekibi', 'Sertifikalı ve test edilmiş ürün yelpazesi', 'Zamanında teslim ve kurulum garantisi', 'Proje sonrası teknik destek ve bakım'],
      },
      {
        h3: 'Teknoloji ve Uygulama Kalitesi',
        content: 'Pergule, sektördeki en güncel teknolojileri takip ederek ürün gamını sürekli günceller. Motorlu sistemlerde kullanılan akıllı sensörler, rüzgar ve yağmur koşullarına otomatik tepki verir. Akıllı ev sistemleriyle entegrasyon, kullanıcı deneyimini üst seviyeye taşır. Tüm ürünler, uzun ömürlü kullanım için titizlikle test edilmektedir.',
        bullets: ['Akıllı sensör ve otomasyon entegrasyonu', 'Akıllı ev sistemleriyle uyumluluk', 'Güncel teknoloji ve sürekli ürün geliştirme', 'Kapsamlı ürün test ve kalite kontrol süreci'],
      },
      {
        h3: 'Yerel İhtiyaca Uygun Çözümler',
        content: 'Her bölgenin iklim koşulları, mimari yapısı ve kullanım alışkanlıkları farklıdır. Pergule, yerel ihtiyaçları göz önünde bulundurarak her projeye özel çözümler üretir. Rüzgarlı bölgeler için güçlendirilmiş Win Tente sistemleri, yoğun yağış alan alanlar için su geçirmez pergola çözümleri ve dört mevsim kullanım gerektiren mekânlar için bioklimatik pergola önerileri sunulmaktadır.',
        bullets: ['Bölgeye özgü iklim koşullarına uygun sistem seçimi', 'Rüzgarlı alanlar için güçlendirilmiş çözümler', 'Yoğun yağışlı bölgeler için su geçirmez sistemler', 'Dört mevsim kullanım için bioklimatik çözümler'],
      },
    ],
  },
  {
    id: 'kasetli',
    h2: 'Kasetli Tente',
    subsections: [
      {
        h3: 'Özellikler ve Avantajlar',
        content: 'Kasetli tente, kullanılmadığında kumaşın tamamen alüminyum kasa içine çekildiği, estetik ve uzun ömürlü bir gölgeleme sistemidir. Kasa yapısı sayesinde kumaş, UV ışınlarından, yağmurdan ve tozdan korunur; bu da ürün ömrünü önemli ölçüde uzatır. Motorlu seçenekle uzaktan kumanda veya akıllı ev sistemiyle kolayca kontrol edilebilir.',
        bullets: ['Kumaş kasete çekildiğinde dış etkenlere karşı korunur', 'Motorlu veya manuel kullanım seçeneği', 'Geniş renk ve desen yelpazesi', 'Uzun ömürlü alüminyum kasa yapısı'],
      },
      {
        h3: 'Model ve Seçenekler',
        content: 'Kasetli tente sistemleri, farklı genişlik ve çıkma uzunluklarında üretilebilir. Kumaş seçenekleri arasında düz renkler, çizgili desenler ve özel baskılı modeller bulunmaktadır. Alüminyum kasa rengi, yapının dış cephesiyle uyumlu olacak şekilde RAL renk skalasından seçilebilir. Rüzgar sensörü, LED aydınlatma ve ısıtma sistemi gibi aksesuarlar da eklenebilir.',
        bullets: ['Farklı genişlik ve çıkma uzunluğu seçenekleri', 'Geniş kumaş renk ve desen kataloğu', 'RAL renk skalasından kasa rengi seçimi', 'Rüzgar sensörü ve LED aksesuar eklentisi'],
      },
      {
        h3: 'Kimler İçin Uygundur?',
        content: 'Kasetli tente, konut balkon ve teraslarından cafe ve restoran dış alanlarına, ofis girişlerinden otel teraslarına kadar geniş bir kullanım alanına sahiptir. Özellikle estetik görünümün ön planda olduğu projelerde tercih edilir. Kumaşın kasete çekilmesiyle oluşan temiz görünüm, modern mimari yapılarla mükemmel uyum sağlar.',
        bullets: ['Konut balkon ve terasları', 'Cafe, restoran ve ticari dış alanlar', 'Ofis ve iş yeri girişleri', 'Otel ve tatil tesisi terasları'],
      },
    ],
  },
  {
    id: 'fiyatlar',
    h2: 'Tente Fiyatları (2026)',
    subsections: [
      {
        h3: 'Maliyet Analizi',
        content: 'Tente ve pergola sistemlerinin fiyatı; seçilen sistem tipine, boyutuna, kumaş kalitesine ve aksesuar seçimlerine göre değişmektedir. Kasetli ve körüklü tente sistemleri, giriş seviyesi bütçeler için uygun seçenekler sunarken; bioklimatik ve otomatik pergola sistemleri daha kapsamlı bir yatırım gerektirmektedir. Her bütçeye uygun çözüm sunmak, Pergule\'nin temel ilkelerinden biridir.',
        bullets: ['Sistem tipine göre değişen fiyat aralıkları', 'Boyut ve kumaş kalitesi fiyatı etkiler', 'Aksesuar seçimleri toplam maliyeti belirler', 'Her bütçeye uygun çözüm seçeneği'],
      },
      {
        h3: 'Ödeme ve Planlama Kolaylığı',
        content: 'Pergule, müşterilerine şeffaf ve anlaşılır fiyatlandırma sunar. Keşif sonrasında hazırlanan detaylı teklif, tüm maliyet kalemlerini açıkça gösterir; gizli ücret bulunmaz. Proje büyüklüğüne göre esnek ödeme seçenekleri değerlendirilebilir. Ücretsiz keşif hizmetimizden yararlanarak projeniz için net bir bütçe planlaması yapabilirsiniz.',
        bullets: ['Şeffaf ve detaylı fiyat teklifi', 'Gizli ücret bulunmaz', 'Esnek ödeme seçenekleri', 'Ücretsiz keşifle net bütçe planlaması'],
      },
      {
        h3: 'Fiyatı Belirleyen Unsurlar',
        content: 'Tente ve pergola fiyatlarını etkileyen başlıca unsurlar şunlardır: sistem tipi ve mekanizma karmaşıklığı, toplam kurulum alanı ve boyutlar, seçilen kumaş kalitesi ve markası, alüminyum profil kalınlığı ve renk seçimi, motorlu veya manuel kullanım tercihi ve ek aksesuarlar. Pergule, tüm bu unsurları göz önünde bulundurarak rekabetçi ve adil fiyatlar sunar.',
        bullets: ['Sistem tipi ve mekanizma karmaşıklığı', 'Kurulum alanı ve toplam boyutlar', 'Kumaş kalitesi ve profil seçimi', 'Motorlu sistem ve aksesuar tercihleri'],
      },
    ],
  },
  {
    id: 'hizmet-bolgeleri',
    h2: 'Hizmet Bölgelerimiz',
    subsections: [
      {
        h3: 'Türkiye Geneli Hizmet',
        content: 'Pergule, Türkiye\'nin tüm şehirlerinde profesyonel tente ve pergola hizmeti sunmaktadır. Geniş bayi ve uygulayıcı ağımız sayesinde İstanbul, Ankara, İzmir, Bursa, Antalya, Adana başta olmak üzere yurt genelindeki tüm illere hizmet ulaştırmaktayız. Bulunduğunuz il fark etmeksizin ücretsiz keşif talep edebilirsiniz.',
        bullets: ['İstanbul, Ankara, İzmir, Bursa, Antalya', 'Adana, Konya, Kayseri, Gaziantep ve daha fazlası', 'Tüm illerde ücretsiz keşif ve uygulama', 'Hızlı teslimat ve montaj organizasyonu'],
      },
      {
        h3: 'Konut ve Ticari Projeler',
        content: 'Pergule, bireysel konut projelerinden büyük ölçekli ticari uygulamalara kadar her türlü projeye hizmet vermektedir. Konut projelerinde balkon, teras ve bahçe alanları için kişiselleştirilmiş çözümler sunulurken; ticari projelerde restoran, cafe, otel ve alışveriş merkezi gibi işletmelerin ihtiyaçlarına yönelik kapsamlı sistemler uygulanmaktadır.',
        bullets: ['Bireysel konut ve villa projeleri', 'Restoran, cafe ve otel uygulamaları', 'Alışveriş merkezi ve ticari alan projeleri', 'Toplu konut ve rezidans projeleri'],
      },
      {
        h3: 'Villa, Teras, Balkon ve İşletme Çözümleri',
        content: 'Her mekânın kendine özgü ihtiyaçları ve kısıtlamaları vardır. Villa projelerinde geniş teras alanları için bioklimatik pergola veya otomatik pergola sistemleri önerilirken; apartman balkonları için kasetli veya mafsallı tente çözümleri tercih edilmektedir. İşletmeler için ise müşteri deneyimini artıran, dört mevsim kullanılabilir dış mekan alanları oluşturulmaktadır.',
        bullets: ['Villa terasları için bioklimatik ve otomatik pergola', 'Apartman balkonları için kasetli ve mafsallı tente', 'İşletmeler için dört mevsim dış mekan çözümleri', 'Her mekâna özel tasarım ve uygulama'],
      },
    ],
  },
];

export default function SeoArticle() {
  return (
    <section className="bg-[#111111] py-16 md:py-24" aria-label="Tente ve Pergola Hakkında Bilgi">
      <div className="max-w-4xl mx-auto px-4 md:px-8">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
          <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em]">— Bilgi Merkezi</span>
        </div>

        {/* Article sections */}
        <article className="flex flex-col gap-16 md:gap-20">
          {articleSections.map((section) => (
            <div key={section.id} id={section.id}>
              {/* H2 */}
              <h2
                className="text-white font-bold mb-8 leading-tight border-b border-white/10 pb-5"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
              >
                {section.h2}
              </h2>

              {/* H3 subsections */}
              <div className="flex flex-col gap-10">
                {section.subsections.map((sub) => (
                  <div key={sub.h3}>
                    <h3
                      className="text-[#D4A853] font-semibold text-base md:text-lg mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {sub.h3}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {sub.content}
                    </p>
                    {/* 4-item bullet summary */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sub.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#D4A853]/20 shrink-0 mt-0.5" aria-hidden="true">
                            <Icon name="check-line" className="text-[#D4A853] text-[10px]" />
                          </div>
                          <span className="text-white/40 text-xs leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </article>

        {/* Bottom CTA */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-base mb-1">Projeniz için ücretsiz keşif talep edin</p>
            <p className="text-white/40 text-sm">Uzman ekibimiz yerinde inceleme yaparak size en uygun sistemi önerir.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D4A853] text-[#0f0f0f] font-bold text-sm hover:bg-[#c49840] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Icon name="phone-fill" className="text-sm" aria-hidden="true" />
              Hemen Ara
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Icon name="whatsapp-line" className="text-sm" aria-hidden="true" />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>

        {/* Internal links */}
        <nav className="mt-8 flex flex-wrap gap-3" aria-label="Hizmet linkleri">
          {[
            { label: 'Kasetli Tente', href: '/hizmetler/kasetli-tente' },
            { label: 'Bioklimatik Pergola', href: '/hizmetler/bioklimatik-pergola' },
            { label: 'Zip Perde', href: '/hizmetler/zip-perde' },
            { label: 'Otomatik Pergola', href: '/hizmetler/otomatik-pergola' },
            { label: 'Şeffaf Branda', href: '/hizmetler/seffaf-branda' },
            { label: 'Tüm Hizmetler', href: '/hizmetler' },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-4 py-1.5 rounded-full border border-white/10 text-white/40 text-xs hover:border-[#D4A853]/40 hover:text-[#D4A853] transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
