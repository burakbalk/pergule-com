import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import { usePageSeo } from '@/lib/usePageSeo';
import { PHONE_HREF, WHATSAPP_HREF, SITE_URL } from '@/lib/constants';
import Icon from '@/components/Icon';

const milestones = [
  { year: '2014', title: 'Kuruluş', desc: 'Pergule, küçük bir ekiple tente ve branda sektörüne adım attı.' },
  { year: '2016', title: 'Pergola Sistemleri', desc: 'Ürün gamına bioklimatik ve otomatik pergola sistemleri eklendi.' },
  { year: '2019', title: '200. Proje', desc: 'İkiyüzüncü tamamlanan projeyle sektördeki güçlü konumumuzu pekiştirdik.' },
  { year: '2022', title: 'Zip Perde & Branda', desc: 'Zip perde ve şeffaf branda sistemleriyle hizmet yelpazemizi genişlettik.' },
  { year: '2025', title: '500+ Proje', desc: 'Beş yüzü aşkın başarılı proje ve büyüyen müşteri portföyümüzle büyümeye devam ediyoruz.' },
];

const team = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Kurucu & Genel Müdür',
    img: '/images/ekip/ahmet-yilmaz.webp',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Teknik Direktör',
    img: '/images/ekip/mehmet-kaya.webp',
  },
  {
    name: 'Fatma Demir',
    role: 'Proje Koordinatörü',
    img: '/images/ekip/fatma-demir.webp',
  },
];

export default function AboutPage() {
  usePageSeo({
    title: 'Hakkımızda',
    description: '2014\'ten bu yana tente, pergola ve branda sistemleri alanında güvenilir çözümler sunuyoruz. 500+ tamamlanmış proje, uzman montaj ekibi ve satış sonrası destek ile hizmetinizdeyiz.',
    canonical: `${SITE_URL}/hakkimizda`,
  });

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" aria-label="Hakkımızda başlık">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/hero/about-bg.webp"
            alt=""
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-stone-900/75"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-5">
            Biz Kimiz?
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-2xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pergule Hakkında
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            2014&apos;ten bu yana tente, pergola ve branda sistemleri alanında güvenilir çözümler sunuyoruz. Her projede kalite, hız ve müşteri memnuniyeti önceliğimizdir.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white" aria-label="Şirket hikayemiz">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
                Hikayemiz
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                On Yılı Aşkın Deneyim, Yüzlerce Mutlu Müşteri
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-5">
                Pergule, 2014 yılında tente ve branda sektörüne küçük ama kararlı bir ekiple adım attı. Başlangıçta yalnızca kasetli ve körüklü tente sistemleri sunarken, artan talep ve gelişen teknoloji doğrultusunda ürün yelpazemizi bioklimatik pergola, otomatik pergola, zip perde ve şeffaf branda sistemleriyle genişlettik.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-5">
                Bugün 500&apos;ü aşkın tamamlanmış proje ve büyüyen müşteri portföyümüzle sektörde güvenilir bir marka haline geldik. Her projede aynı titizliği, aynı kaliteyi ve aynı müşteri odaklı yaklaşımı sürdürüyoruz.
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                Uzman montaj ekibimiz, sertifikalı malzeme seçimlerimiz ve satış sonrası destek anlayışımızla müşterilerimizin yanında olmaya devam ediyoruz.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden">
                <img
                  src="/images/hero/about-story.webp"
                  alt="Pergule showroom ve ürün teşhir alanı"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 md:mt-0 md:absolute md:-bottom-5 md:-left-5 bg-amber-500 text-white rounded-xl p-4 md:p-5 inline-block">
                <p className="text-2xl md:text-3xl font-bold">500+</p>
                <p className="text-sm font-medium opacity-90">Tamamlanan Proje</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-[#F8F6F2]" aria-label="Şirket büyüme hikayesi">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Yolculuğumuz
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Büyüme Hikayemiz
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2" aria-hidden="true"></div>
            <div className="flex flex-col gap-8">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block p-5 rounded-xl bg-white ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <p className="text-amber-600 font-bold text-lg mb-1">{m.year}</p>
                      <h3 className="font-semibold text-stone-900 mb-2">{m.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-amber-500 text-white shrink-0 z-10" aria-hidden="true">
                    <Icon name="check-line" className="text-sm" />
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-white" aria-label="Ekibimiz">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
              Ekibimiz
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Uzman Kadromuz
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.img}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width="112"
                    height="112"
                  />
                </div>
                <h3 className="font-semibold text-stone-900 text-base mb-1">{member.name}</h3>
                <p className="text-stone-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900" aria-label="İletişim çağrısı">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Projeniz İçin Ücretsiz Keşif Talep Edin
          </h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            Uzman ekibimiz yerinde inceleme yaparak size en uygun sistemi önerir. Hemen arayın veya WhatsApp&apos;tan yazın.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Icon name="phone-line" aria-hidden="true" />
              Hemen Ara
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:border-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <Icon name="whatsapp-line" aria-hidden="true" />
              WhatsApp&apos;tan Yaz
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
