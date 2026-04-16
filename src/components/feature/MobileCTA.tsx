import { PHONE_HREF, WHATSAPP_HREF } from '@/lib/constants';

export default function MobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{ boxShadow: '0 -2px 20px rgba(0,0,0,0.3)' }}
      role="complementary"
      aria-label="Hızlı iletişim"
    >
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#D4A853] text-[#0f0f0f] text-sm font-black cursor-pointer whitespace-nowrap"
        aria-label="Telefon ile arayın"
      >
        <i className="ri-phone-fill text-base" aria-hidden="true"></i>
        Hemen Ara
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#0f0f0f] text-white text-sm font-black cursor-pointer whitespace-nowrap border-l border-white/10"
        aria-label="WhatsApp ile yazın"
      >
        <i className="ri-whatsapp-fill text-base" aria-hidden="true"></i>
        WhatsApp&apos;tan Yaz
      </a>
    </div>
  );
}
