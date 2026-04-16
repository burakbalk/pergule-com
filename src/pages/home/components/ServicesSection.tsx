import { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '@/mocks/services';

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-[#111111] py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14 pb-8 md:pb-10 border-b border-white/10">
          <div>
            <span className="text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              — Ürün Yelpazemiz
            </span>
            <h2
              className="text-white font-black leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
            >
              Hizmetlerimiz
            </h2>
          </div>
          <Link
            to="/hizmetler"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#D4A853] transition-colors cursor-pointer whitespace-nowrap group self-start sm:self-auto"
          >
            Tümünü Gör
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>

        {/* Services list */}
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {servicesList.map((service, idx) => (
            <Link
              key={service.slug}
              to={`/hizmetler/${service.slug}`}
              className="group flex items-center gap-4 md:gap-6 py-4 md:py-5 cursor-pointer transition-all duration-300 hover:pl-2 md:hover:pl-3"
              onMouseEnter={() => setHovered(service.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span className="text-white/20 text-xs font-mono w-5 md:w-6 shrink-0 group-hover:text-[#D4A853] transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Thumbnail */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-white/80 font-semibold text-sm md:text-lg group-hover:text-white transition-colors truncate"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/30 text-xs mt-0.5 truncate hidden sm:block">{service.shortDesc}</p>
              </div>

              {/* Arrow icon */}
              <div className={`w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border transition-all duration-300 shrink-0 ${
                hovered === service.slug
                  ? 'border-[#D4A853] bg-[#D4A853] text-[#0f0f0f]'
                  : 'border-white/15 text-white/30'
              }`}>
                <i className="ri-arrow-right-up-line text-sm"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
