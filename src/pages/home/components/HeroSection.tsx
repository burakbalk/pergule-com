import { useEffect, useState } from 'react';
import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants';
import Icon from '@/components/Icon';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative bg-[#0f0f0f] flex items-center overflow-hidden"
      style={{ height: '100dvh' }}
      aria-label="Pergule ana başlık alanı"
    >
      <h1 className="sr-only">Pergule — Tente, Pergola ve Branda Sistemleri</h1>

      {/* Arka plan görseli */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/hero/main.webp"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Mobil koyulaştırma */}
        <div className="absolute inset-0 bg-[#0f0f0f]/75 lg:hidden" />
        {/* Desktop: sol taraf tamamen siyah, sağ açık */}
        <div className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(to right, #0f0f0f 45%, rgba(15,15,15,0.7) 60%, transparent 80%)' }}
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 w-full lg:max-w-[55%] px-5 sm:px-8 md:px-12 lg:px-20">

        <div className={`flex items-center gap-3 mb-4 sm:mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="w-6 h-px bg-[#D4A853]" aria-hidden="true" />
          <span className="text-[#D4A853] text-[11px] font-semibold uppercase tracking-[0.2em]">Ücretsiz Keşif Hizmeti</span>
        </div>

        <p
          className={`text-white font-black leading-[1.05] mb-3 sm:mb-5 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem, 5vw, 4.8rem)' }}
          aria-hidden="true"
        >
          Tente,{' '}
          <span className="text-[#D4A853]">Pergola</span>
          <br />ve Branda Sistemleri
        </p>

        <p className={`text-white/55 leading-relaxed mb-5 sm:mb-8 max-w-md transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)' }}
        >
          Kasetli tente, bioklimatik pergola, zip perde ve şeffaf branda çözümleriyle yaşam alanlarınızı dört mevsim konforlu hale getiriyoruz.
        </p>

        <div className={`flex flex-col sm:flex-row gap-3 mb-6 sm:mb-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D4A853] text-[#0f0f0f] font-bold text-sm hover:bg-[#c49840] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <Icon name="phone-fill" aria-hidden="true" />
            Hemen Ara
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:border-white/50 hover:bg-white/5 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <Icon name="whatsapp-line" aria-hidden="true" />
            WhatsApp&apos;tan Yaz
          </a>
        </div>

        <div className={`flex gap-6 sm:gap-10 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { val: '500+', lbl: 'Proje' },
            { val: '10+', lbl: 'Yıl Deneyim' },
            { val: '11', lbl: 'Sistem' },
          ].map((s) => (
            <div key={s.lbl} className="flex flex-col">
              <span className="font-black text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>{s.val}</span>
              <span className="text-white/40 uppercase tracking-widest mt-0.5" style={{ fontSize: '0.65rem' }}>{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aktif Proje badge — sadece desktop */}
      <div className={`hidden lg:block absolute bottom-10 right-10 bg-[#0f0f0f]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" aria-hidden="true" />
          <span className="text-white/50 text-xs uppercase tracking-wider">Aktif Proje</span>
        </div>
        <p className="text-white font-bold text-base leading-tight">Bioklimatik<br />Pergola</p>
        <p className="text-[#D4A853] text-xs mt-1">Villa Projesi — 2025</p>
      </div>

      {/* Scroll göstergesi */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/25 text-[10px] uppercase tracking-widest z-10" aria-hidden="true">
        <Icon name="arrow-down-line" className="animate-bounce text-sm" />
      </div>
    </section>
  );
}
