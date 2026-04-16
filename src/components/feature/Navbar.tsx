import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants';
import Icon from '@/components/Icon';

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link to="/" className="cursor-pointer flex items-center" aria-label="Pergule Ana Sayfa">
          <img
            src="/logo.webp"
            alt="Pergule — Tente ve Pergola Sistemleri"
            className="h-9 md:h-11 w-auto object-contain"
            width="200"
            height="44"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2" aria-label="Ana navigasyon">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[13px] font-medium tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                location.pathname === link.href
                  ? 'text-[#D4A853]'
                  : 'text-white/70 hover:text-white'
              }`}
              aria-current={location.pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white/80 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            aria-label={`Telefon: ${PHONE_DISPLAY}`}
          >
            <Icon name="phone-line" className="text-[#D4A853]" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D4A853] text-[#0f0f0f] text-[13px] font-bold hover:bg-[#c49840] transition-colors cursor-pointer whitespace-nowrap"
            aria-label="WhatsApp ile iletişime geçin"
          >
            <Icon name="whatsapp-line" className="text-sm" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close-line' : 'menu-3-line'} className="text-xl" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/10" role="navigation" aria-label="Mobil navigasyon">
          <nav className="flex flex-col px-5 py-5 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                  location.pathname === link.href
                    ? 'text-[#D4A853] bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                aria-current={location.pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
              <a
                href={PHONE_HREF}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#D4A853] text-[#0f0f0f] text-sm font-bold cursor-pointer whitespace-nowrap"
                aria-label="Telefon ile arayın"
              >
                <Icon name="phone-line" aria-hidden="true" /> Ara
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-white/20 text-white text-sm font-semibold cursor-pointer whitespace-nowrap"
                aria-label="WhatsApp ile yazın"
              >
                <Icon name="whatsapp-line" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
