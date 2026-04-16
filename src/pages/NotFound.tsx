import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-24 text-center relative overflow-hidden">
        {/* Background 404 */}
        <span
          className="absolute select-none pointer-events-none font-black text-white/[0.03] leading-none"
          style={{ fontSize: 'clamp(12rem, 40vw, 28rem)' }}
          aria-hidden="true"
        >
          404
        </span>

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em]">Sayfa Bulunamadı</span>
            <span className="w-8 h-px bg-[#D4A853]" aria-hidden="true"></span>
          </div>

          <h1
            className="text-white font-black mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Bu Sayfa Mevcut Değil
          </h1>

          <p className="text-white/50 text-base md:text-lg max-w-md leading-relaxed mb-10">
            Aradığınız sayfa kaldırılmış, taşınmış ya da hiç oluşturulmamış olabilir.
            Ana sayfamızdan devam edebilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D4A853] text-[#0f0f0f] font-bold text-sm hover:bg-[#c49840] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Icon name="home-line" aria-hidden="true" />
              Ana Sayfaya Dön
            </Link>
            <Link
              to="/hizmetler"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Icon name="list-check-line" aria-hidden="true" />
              Hizmetleri İncele
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileCTA />
      <div className="md:hidden h-14"></div>
    </div>
  );
}
