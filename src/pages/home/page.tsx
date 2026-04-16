import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import MobileCTA from '@/components/feature/MobileCTA';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import ReferencesSection from './components/ReferencesSection';
import FaqSection from './components/FaqSection';
import SeoArticle from './components/SeoArticle';
import ContactCTASection from './components/ContactCTASection';
import { usePageSeo } from '@/lib/usePageSeo';
import { SITE_URL } from '@/lib/constants';

export default function Home() {
  usePageSeo({
    title: 'Tente ve Pergola Sistemleri | Pergule',
    description: 'Profesyonel tente ve pergola çözümleri. Kasetli tente, bioklimatik pergola, zip perde ve şeffaf branda sistemleri. Türkiye geneli ücretsiz keşif için hemen arayın.',
    canonical: SITE_URL,
  });
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>
        {/* 1. Hero — sr-only H1 burada */}
        <HeroSection />
        {/* 2. H2: Hizmetlerimiz */}
        <ServicesSection />
        {/* 3. H2: Neden Pergule? */}
        <WhyUsSection />
        {/* 4. H2: Uygulamalarımız ve Referanslarımız */}
        <ReferencesSection />
        {/* 5. H2: Sık Sorulan Sorular */}
        <FaqSection />
        {/* 6. SEO Makale — H2/H3 hiyerarşisi */}
        <SeoArticle />
        {/* 7. H2: Hemen Bizimle İletişime Geçin */}
        <ContactCTASection />
      </main>
      <Footer />
      <MobileCTA />
      <div className="md:hidden h-14"></div>
    </div>
  );
}
