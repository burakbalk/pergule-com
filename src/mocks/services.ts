export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
}

export const servicesList: ServiceItem[] = [
  {
    slug: 'kasetli-tente',
    title: 'Kasetli Tente',
    shortDesc: 'Kullanılmadığında kasete geri çekilen, estetik ve dayanıklı tente sistemi.',
    icon: 'sun-line',
    image: '/images/hizmetler/kasetli-tente.webp',
  },
  {
    slug: 'koruklu-tente',
    title: 'Körüklü Tente',
    shortDesc: 'Katlanabilir körük yapısıyla geniş alanlara uygun, pratik gölgeleme çözümü.',
    icon: 'layout-grid-line',
    image: '/images/hizmetler/koruklu-tente.webp',
  },
  {
    slug: 'mafsalli-tente',
    title: 'Mafsallı Tente',
    shortDesc: 'Eklemli kol mekanizmasıyla her açıya ayarlanabilen esnek tente sistemi.',
    icon: 'tools-line',
    image: '/images/hizmetler/mafsalli-tente.webp',
  },
  {
    slug: 't-model-tente',
    title: 'T Model Tente',
    shortDesc: 'T şeklindeki özel tasarımıyla köşe ve geniş alanlara mükemmel uyum sağlar.',
    icon: 'shape-line',
    image: '/images/hizmetler/t-model-tente.webp',
  },
  {
    slug: 'win-tente',
    title: 'Win Tente',
    shortDesc: 'Rüzgara karşı güçlendirilmiş yapısıyla zorlu hava koşullarında güvenli koruma.',
    icon: 'windy-line',
    image: '/images/hizmetler/win-tente.webp',
  },
  {
    slug: 'bioklimatik-pergola',
    title: 'Bioklimatik Pergola',
    shortDesc: 'Döner lamelli yapısıyla hava akışını ve güneş ışığını tam kontrol altında tutar.',
    icon: 'home-gear-line',
    image: '/images/hizmetler/bioklimatik-pergola.webp',
  },
  {
    slug: 'otomatik-pergola',
    title: 'Otomatik Pergola',
    shortDesc: 'Motorlu sistemiyle tek tuşla açılıp kapanan akıllı pergola çözümü.',
    icon: 'remote-control-line',
    image: '/images/hizmetler/otomatik-pergola.webp',
  },
  {
    slug: 'rollingroof-pergola',
    title: 'Rollingroof Pergola',
    shortDesc: 'Rulo sistemiyle açılıp kapanan, yağmur ve güneşe karşı tam koruma sağlayan pergola.',
    icon: 'contrast-drop-line',
    image: '/images/hizmetler/rollingroof-pergola.webp',
  },
  {
    slug: 'seffaf-branda',
    title: 'Şeffaf Branda',
    shortDesc: 'Görüş açısını kapatmadan rüzgar ve yağmura karşı etkili koruma sağlar.',
    icon: 'eye-line',
    image: '/images/hizmetler/seffaf-branda.webp',
  },
  {
    slug: 'seffaf-stor-branda',
    title: 'Şeffaf Stor Branda',
    shortDesc: 'Stor mekanizmasıyla yukarı toplanabilen şeffaf branda sistemi.',
    icon: 'stack-line',
    image: '/images/hizmetler/seffaf-stor-branda.webp',
  },
  {
    slug: 'zip-perde',
    title: 'Zip Perde',
    shortDesc: 'Fermuar sistemiyle rüzgara karşı sızdırmaz, dört mevsim kullanılabilen perde.',
    icon: 'shield-check-line',
    image: '/images/hizmetler/zip-perde.webp',
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined =>
  servicesList.find((s) => s.slug === slug);
