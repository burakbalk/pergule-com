export interface ServiceDetail {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  description: string;
  advantages: string[];
  usageAreas: { icon: string; title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
}

export const servicesDetail: ServiceDetail[] = [
  {
    slug: 'kasetli-tente',
    title: 'Kasetli Tente',
    h1: 'Kasetli Tente Sistemleri',
    intro: 'Kullanılmadığında kumaşı tamamen kasete geri çekilen kasetli tente, hem estetik hem de uzun ömürlü bir gölgeleme çözümüdür.',
    description: 'Kasetli tente sistemleri, alüminyum kasa içine gizlenen kumaşıyla hem güneş hem de yağmura karşı etkili koruma sağlar. Motorlu veya manuel seçenekleriyle her balkon, teras ve bahçeye uyum sağlayan bu sistem, kullanılmadığında tamamen kasete çekildiği için kumaş ömrü uzar ve görsel kirlilik oluşmaz. Geniş renk ve desen seçenekleriyle yapınızın mimarisine uygun özelleştirme imkânı sunar.',
    advantages: [
      'Kumaş kasete çekildiğinde UV ve yağmurdan korunur',
      'Motorlu veya manuel kullanım seçeneği',
      'Geniş renk ve desen yelpazesi',
      'Alüminyum kasa uzun ömür sağlar',
      'Kolay bakım ve temizlik',
      'Her ölçüye özel üretim',
    ],
    usageAreas: [
      { icon: 'home-3-line', title: 'Konut Terasları', desc: 'Ev terasları ve balkonlar için ideal gölgeleme çözümü.' },
      { icon: 'store-2-line', title: 'Cafe & Restoranlar', desc: 'Dış mekan oturma alanlarını güneşten ve yağmurdan korur.' },
      { icon: 'building-line', title: 'Ticari Binalar', desc: 'Ofis ve iş yeri girişlerinde şık ve işlevsel kullanım.' },
    ],
    gallery: [
      { src: '/images/hizmetler/kasetli-tente-1.jpg', alt: 'Kasetli tente uygulama 1 — teras gölgeleme sistemi' },
      { src: '/images/hizmetler/kasetli-tente-2.jpg', alt: 'Kasetli tente uygulama 2 — balkon tente sistemi' },
      { src: '/images/hizmetler/kasetli-tente-3.jpg', alt: 'Kasetli tente uygulama 3 — cafe tente sistemi' },
    ],
  },
  {
    slug: 'koruklu-tente',
    title: 'Körüklü Tente',
    h1: 'Körüklü Tente Sistemleri',
    intro: 'Katlanabilir körük yapısıyla geniş alanlara uyum sağlayan körüklü tente, pratik ve ekonomik bir gölgeleme çözümüdür.',
    description: 'Körüklü tente sistemleri, esnek körük mekanizması sayesinde geniş açıklıkları kolayca kapatabilir. Özellikle büyük teras ve bahçe alanlarında tercih edilen bu sistem, hafif yapısı ve kolay kurulumu ile öne çıkar. Farklı renk ve kumaş seçenekleriyle her mekâna uyum sağlar. Rüzgar ve güneşe karşı etkili koruma sunarken estetik görünümünü korur.',
    advantages: [
      'Geniş açıklıkları tek parça kapatabilir',
      'Hafif ve kolay kurulum',
      'Ekonomik fiyat avantajı',
      'Çeşitli kumaş ve renk seçenekleri',
      'Dayanıklı mekanik yapı',
      'Hızlı açılıp kapanma',
    ],
    usageAreas: [
      { icon: 'plant-line', title: 'Bahçe Alanları', desc: 'Büyük bahçe ve teras alanlarında geniş gölgeleme.' },
      { icon: 'store-2-line', title: 'Ticari Alanlar', desc: 'Market, dükkan ve iş yeri önlerinde pratik kullanım.' },
      { icon: 'hotel-line', title: 'Otel & Tatil Köyleri', desc: 'Havuz başı ve dış mekan alanlarında konforlu gölge.' },
    ],
    gallery: [
      { src: '/images/hizmetler/koruklu-tente-1.jpg', alt: 'Körüklü tente uygulama 1 — geniş teras gölgeleme' },
      { src: '/images/hizmetler/koruklu-tente-2.jpg', alt: 'Körüklü tente uygulama 2 — bahçe gölgeleme sistemi' },
      { src: '/images/hizmetler/koruklu-tente-3.jpg', alt: 'Körüklü tente uygulama 3 — ticari alan tente sistemi' },
    ],
  },
  {
    slug: 'mafsalli-tente',
    title: 'Mafsallı Tente',
    h1: 'Mafsallı Tente Sistemleri',
    intro: 'Eklemli kol mekanizmasıyla her açıya ayarlanabilen mafsallı tente, esnek ve güçlü bir gölgeleme sistemidir.',
    description: 'Mafsallı tente sistemleri, eklemli kol yapısı sayesinde farklı açılarda konumlandırılabilir. Bu esneklik, güneşin açısına göre optimum gölgeleme sağlar. Güçlü alüminyum kol mekanizması uzun ömürlü kullanım sunarken, geniş kumaş seçenekleri estetik beklentileri karşılar. Motorlu seçenekle uzaktan kumanda ile kolayca kontrol edilebilir.',
    advantages: [
      'Ayarlanabilir açı ile optimum gölgeleme',
      'Güçlü alüminyum kol mekanizması',
      'Motorlu uzaktan kumanda seçeneği',
      'Geniş kumaş ve renk yelpazesi',
      'Rüzgara karşı dayanıklı yapı',
      'Uzun ömürlü mekanik sistem',
    ],
    usageAreas: [
      { icon: 'home-3-line', title: 'Ev Terasları', desc: 'Güneşin açısına göre ayarlanabilen esnek gölgeleme.' },
      { icon: 'restaurant-line', title: 'Restoran Bahçeleri', desc: 'Dış mekan yemek alanlarında konforlu gölge çözümü.' },
      { icon: 'building-4-line', title: 'Apartman Balkonları', desc: 'Dar ve geniş balkonlara uyum sağlayan esnek sistem.' },
    ],
    gallery: [
      { src: '/images/hizmetler/mafsalli-tente-1.jpg', alt: 'Mafsallı tente uygulama 1 — teras gölgeleme' },
      { src: '/images/hizmetler/mafsalli-tente-2.jpg', alt: 'Mafsallı tente uygulama 2 — balkon tente sistemi' },
      { src: '/images/hizmetler/mafsalli-tente-3.jpg', alt: 'Mafsallı tente uygulama 3 — restoran dış alan' },
    ],
  },
  {
    slug: 't-model-tente',
    title: 'T Model Tente',
    h1: 'T Model Tente Sistemleri',
    intro: 'T şeklindeki özel tasarımıyla köşe ve geniş alanlara mükemmel uyum sağlayan T Model Tente, özgün bir gölgeleme çözümüdür.',
    description: 'T Model Tente, standart tente sistemlerinin yetersiz kaldığı köşe ve L şeklindeki alanlara özel olarak tasarlanmıştır. İki yönlü açılım sağlayan T profil yapısı, geniş alanları tek sistemle kapatma imkânı sunar. Özellikle köşe teraslar, L şeklindeki bahçeler ve geniş ticari alanlarda tercih edilen bu sistem, estetik görünümüyle de dikkat çeker.',
    advantages: [
      'Köşe ve L şeklindeki alanlara özel tasarım',
      'İki yönlü açılım ile geniş alan kapatma',
      'Tek sistem ile köşe çözümü',
      'Estetik ve özgün görünüm',
      'Güçlü alüminyum profil yapısı',
      'Özel ölçüye göre üretim',
    ],
    usageAreas: [
      { icon: 'corner-down-right-line', title: 'Köşe Teraslar', desc: 'L ve T şeklindeki teras alanlarında kusursuz uyum.' },
      { icon: 'store-3-line', title: 'Geniş Ticari Alanlar', desc: 'Büyük dış mekan alanlarını tek sistemle kapatma.' },
      { icon: 'hotel-bed-line', title: 'Otel Terasları', desc: 'Farklı geometrilerdeki otel teras alanları için ideal.' },
    ],
    gallery: [
      { src: '/images/hizmetler/t-model-tente-1.jpg', alt: 'T Model tente uygulama 1 — köşe teras gölgeleme' },
      { src: '/images/hizmetler/t-model-tente-2.jpg', alt: 'T Model tente uygulama 2 — L şekilli teras sistemi' },
      { src: '/images/hizmetler/t-model-tente-3.jpg', alt: 'T Model tente uygulama 3 — ticari dış alan' },
    ],
  },
  {
    slug: 'win-tente',
    title: 'Win Tente',
    h1: 'Win Tente Sistemleri',
    intro: 'Rüzgara karşı güçlendirilmiş yapısıyla zorlu hava koşullarında bile güvenle kullanılabilen Win Tente, dayanıklılığın simgesidir.',
    description: 'Win Tente, özellikle rüzgarlı bölgeler için geliştirilmiş güçlendirilmiş kol mekanizması ve yüksek mukavemetli kumaşıyla öne çıkar. Standart tente sistemlerine kıyasla çok daha yüksek rüzgar direnci sunan bu sistem, rüzgar sensörü entegrasyonuyla otomatik olarak kapanabilir. Sahil, yüksek katlı bina terasları ve açık alanlarda güvenle kullanılabilir.',
    advantages: [
      'Yüksek rüzgar direnci ile güvenli kullanım',
      'Güçlendirilmiş kol mekanizması',
      'Rüzgar sensörü entegrasyonu',
      'Yüksek mukavemetli özel kumaş',
      'Sahil ve açık alanlara uygun',
      'Motorlu otomatik kapanma sistemi',
    ],
    usageAreas: [
      { icon: 'windy-line', title: 'Rüzgarlı Bölgeler', desc: 'Sahil ve açık alanlarda güvenli gölgeleme çözümü.' },
      { icon: 'building-2-line', title: 'Yüksek Katlı Binalar', desc: 'Rüzgar etkisinin yoğun olduğu üst kat terasları.' },
      { icon: 'hotel-line', title: 'Otel & Tatil Tesisleri', desc: 'Açık alanlarda dört mevsim güvenli kullanım.' },
    ],
    gallery: [
      { src: '/images/hizmetler/win-tente-1.jpg', alt: 'Win tente uygulama 1 — rüzgara dayanıklı tente sistemi' },
      { src: '/images/hizmetler/win-tente-2.jpg', alt: 'Win tente uygulama 2 — sahil teras tente sistemi' },
      { src: '/images/hizmetler/win-tente-3.jpg', alt: 'Win tente uygulama 3 — yüksek bina terası gölgeleme' },
    ],
  },
  {
    slug: 'bioklimatik-pergola',
    title: 'Bioklimatik Pergola',
    h1: 'Bioklimatik Pergola Sistemleri',
    intro: 'Döner lamelli yapısıyla hava akışını ve güneş ışığını tam kontrol altında tutan bioklimatik pergola, dört mevsim konfor sunar.',
    description: 'Bioklimatik pergola, motorlu döner lamel sistemi sayesinde yaz aylarında hava sirkülasyonu sağlarken kış aylarında lamelleri kapatarak yağmur ve soğuktan koruma sunar. LED aydınlatma, ısıtma sistemi ve yan perde entegrasyonuyla tam donanımlı bir dış mekan yaşam alanı oluşturulabilir. Alüminyum yapısı paslanmaz ve uzun ömürlüdür.',
    advantages: [
      'Motorlu döner lamel ile tam kontrol',
      'Dört mevsim kullanım imkânı',
      'LED aydınlatma entegrasyonu',
      'Isıtma sistemi eklentisi',
      'Yan perde ve zip perde uyumlu',
      'Paslanmaz alüminyum yapı',
    ],
    usageAreas: [
      { icon: 'home-gear-line', title: 'Villa & Konutlar', desc: 'Lüks konut projelerinde dört mevsim dış mekan konforu.' },
      { icon: 'restaurant-2-line', title: 'Restoran & Kafeler', desc: 'Dış mekan yemek alanlarını her mevsim aktif tutun.' },
      { icon: 'hotel-line', title: 'Otel & SPA Alanları', desc: 'Havuz başı ve teras alanlarında premium çözüm.' },
    ],
    gallery: [
      { src: '/images/hizmetler/bioklimatik-pergola-1.jpg', alt: 'Bioklimatik pergola uygulama 1 — döner lamel sistemi' },
      { src: '/images/hizmetler/bioklimatik-pergola-2.jpg', alt: 'Bioklimatik pergola uygulama 2 — villa dış mekan' },
      { src: '/images/hizmetler/bioklimatik-pergola-3.jpg', alt: 'Bioklimatik pergola uygulama 3 — restoran dış alan' },
    ],
  },
  {
    slug: 'otomatik-pergola',
    title: 'Otomatik Pergola',
    h1: 'Otomatik Pergola Sistemleri',
    intro: 'Motorlu sistemiyle tek tuşla açılıp kapanan otomatik pergola, akıllı yaşam alanları için modern bir çözümdür.',
    description: 'Otomatik pergola, uzaktan kumanda veya akıllı ev sistemleriyle entegre çalışan motorlu mekanizmasıyla maksimum konfor sunar. Yağmur ve rüzgar sensörleri sayesinde hava koşullarına otomatik tepki verir. Güçlü alüminyum yapısı ve su geçirmez kumaşıyla yıllarca sorunsuz hizmet verir. Akıllı telefon uygulamasıyla uzaktan kontrol imkânı da mevcuttur.',
    advantages: [
      'Uzaktan kumanda ile kolay kontrol',
      'Akıllı ev sistemleriyle entegrasyon',
      'Yağmur ve rüzgar sensörü',
      'Su geçirmez kumaş sistemi',
      'Akıllı telefon uygulaması desteği',
      'Güçlü alüminyum taşıyıcı yapı',
    ],
    usageAreas: [
      { icon: 'remote-control-line', title: 'Akıllı Evler', desc: 'Ev otomasyon sistemleriyle entegre çalışır.' },
      { icon: 'building-line', title: 'Lüks Konutlar', desc: 'Villa ve rezidans projelerinde premium çözüm.' },
      { icon: 'store-2-line', title: 'Ticari Projeler', desc: 'Otel, restoran ve ticari alanlarda akıllı gölgeleme.' },
    ],
    gallery: [
      { src: '/images/hizmetler/otomatik-pergola-1.jpg', alt: 'Otomatik pergola uygulama 1 — motorlu kumaş sistemi' },
      { src: '/images/hizmetler/otomatik-pergola-2.jpg', alt: 'Otomatik pergola uygulama 2 — akıllı ev entegrasyonu' },
      { src: '/images/hizmetler/otomatik-pergola-3.jpg', alt: 'Otomatik pergola uygulama 3 — otel teras sistemi' },
    ],
  },
  {
    slug: 'rollingroof-pergola',
    title: 'Rollingroof Pergola',
    h1: 'Rollingroof Pergola Sistemleri',
    intro: 'Rulo sistemiyle açılıp kapanan Rollingroof Pergola, yağmur ve güneşe karşı tam koruma sağlayan yenilikçi bir pergola çözümüdür.',
    description: 'Rollingroof Pergola, özel rulo mekanizmasıyla çatı kumaşının kolayca açılıp kapanmasını sağlar. Su geçirmez kumaşı sayesinde yağmurlu havalarda bile dış mekânı kullanılabilir kılar. Güneşli günlerde ise kumaş açılarak doğal ışık ve hava sirkülasyonu sağlanır. Alüminyum taşıyıcı sistem ve paslanmaz aksesuarlarıyla uzun ömürlü kullanım sunar.',
    advantages: [
      'Rulo mekanizmasıyla kolay açılıp kapanma',
      'Su geçirmez özel kumaş',
      'Yağmurda dış mekan kullanımı',
      'Doğal ışık ve hava sirkülasyonu',
      'Paslanmaz alüminyum yapı',
      'Motorlu seçenek mevcuttur',
    ],
    usageAreas: [
      { icon: 'contrast-drop-line', title: 'Teras Alanları', desc: 'Her hava koşulunda kullanılabilir teras çözümü.' },
      { icon: 'restaurant-line', title: 'Dış Mekan Restoranlar', desc: 'Yağmurda kapanıp güneşte açılan esnek sistem.' },
      { icon: 'home-3-line', title: 'Konut Projeleri', desc: 'Villa ve konut bahçelerinde dört mevsim konfor.' },
    ],
    gallery: [
      { src: '/images/hizmetler/rollingroof-pergola-1.jpg', alt: 'Rollingroof pergola uygulama 1 — rulo çatı sistemi' },
      { src: '/images/hizmetler/rollingroof-pergola-2.jpg', alt: 'Rollingroof pergola uygulama 2 — açık konum' },
      { src: '/images/hizmetler/rollingroof-pergola-3.jpg', alt: 'Rollingroof pergola uygulama 3 — restoran dış alan' },
    ],
  },
  {
    slug: 'seffaf-branda',
    title: 'Şeffaf Branda',
    h1: 'Şeffaf Branda Sistemleri',
    intro: 'Görüş açısını kapatmadan rüzgar ve yağmura karşı etkili koruma sağlayan şeffaf branda, dış mekânı dört mevsim kullanılabilir kılar.',
    description: 'Şeffaf branda sistemleri, yüksek kaliteli PVC malzemeden üretilir ve görüş açısını kapatmadan dış etkenlere karşı güçlü bir bariyer oluşturur. Rüzgar, yağmur ve soğuğa karşı etkili koruma sağlarken dış mekânın açık hissini korur. Restoran, kafe ve konut teraslarında yaygın olarak kullanılan bu sistem, kolay temizlenebilir yapısıyla pratik bir çözümdür.',
    advantages: [
      'Görüş açısını kapatmaz',
      'Yüksek kaliteli PVC malzeme',
      'Yağmur ve rüzgara karşı tam koruma',
      'Kolay temizlenebilir yüzey',
      'Farklı kalınlık seçenekleri',
      'Hızlı montaj ve demontaj',
    ],
    usageAreas: [
      { icon: 'restaurant-2-line', title: 'Restoran & Kafeler', desc: 'Dış mekan alanlarını dört mevsim aktif tutun.' },
      { icon: 'home-3-line', title: 'Konut Terasları', desc: 'Balkon ve terasları rüzgar ve yağmurdan koruyun.' },
      { icon: 'store-2-line', title: 'Ticari Alanlar', desc: 'İş yeri ve mağaza önlerinde pratik kapatma çözümü.' },
    ],
    gallery: [
      { src: '/images/hizmetler/seffaf-branda-1.jpg', alt: 'Şeffaf branda uygulama 1 — restoran terası kapatma' },
      { src: '/images/hizmetler/seffaf-branda-2.jpg', alt: 'Şeffaf branda uygulama 2 — PVC branda sistemi' },
      { src: '/images/hizmetler/seffaf-branda-3.jpg', alt: 'Şeffaf branda uygulama 3 — konut balkon kapatma' },
    ],
  },
  {
    slug: 'seffaf-stor-branda',
    title: 'Şeffaf Stor Branda',
    h1: 'Şeffaf Stor Branda Sistemleri',
    intro: 'Stor mekanizmasıyla yukarı toplanabilen şeffaf stor branda, kullanım kolaylığı ve estetik görünümüyle öne çıkar.',
    description: 'Şeffaf Stor Branda, klasik şeffaf brandanın stor mekanizmasıyla birleştirilmiş gelişmiş versiyonudur. Kullanılmadığında yukarı toplanarak görsel kirlilik oluşturmaz. Motorlu seçenekle uzaktan kumanda ile kolayca kontrol edilebilir. Yüksek kaliteli PVC malzeme ve alüminyum profil sistemiyle uzun ömürlü kullanım sağlar.',
    advantages: [
      'Stor mekanizmasıyla yukarı toplanır',
      'Görsel kirlilik oluşturmaz',
      'Motorlu uzaktan kumanda seçeneği',
      'Yüksek kaliteli PVC malzeme',
      'Alüminyum profil sistemi',
      'Kolay bakım ve temizlik',
    ],
    usageAreas: [
      { icon: 'stack-line', title: 'Balkon & Teraslar', desc: 'Toplanabilir yapısıyla balkon ve teraslarda ideal.' },
      { icon: 'store-2-line', title: 'Vitrin & Mağazalar', desc: 'Mağaza vitrinlerinde estetik kapatma çözümü.' },
      { icon: 'restaurant-line', title: 'Dış Mekan Alanları', desc: 'Restoran ve kafe dış alanlarında pratik kullanım.' },
    ],
    gallery: [
      { src: '/images/hizmetler/seffaf-stor-branda-1.jpg', alt: 'Şeffaf stor branda uygulama 1 — balkon kapatma' },
      { src: '/images/hizmetler/seffaf-stor-branda-2.jpg', alt: 'Şeffaf stor branda uygulama 2 — toplanmış konum' },
      { src: '/images/hizmetler/seffaf-stor-branda-3.jpg', alt: 'Şeffaf stor branda uygulama 3 — ticari vitrin' },
    ],
  },
  {
    slug: 'zip-perde',
    title: 'Zip Perde',
    h1: 'Zip Perde Sistemleri',
    intro: 'Fermuar sistemiyle rüzgara karşı sızdırmaz bir kapatma çözümü sunan zip perde, dört mevsim kullanım için tasarlanmıştır.',
    description: 'Zip Perde, özel fermuar mekanizması sayesinde rüzgara karşı mükemmel sızdırmazlık sağlar. Standart perdelerden farklı olarak rüzgarda sallanmaz ve kenarlardan hava girmez. Şeffaf veya opak kumaş seçenekleriyle hem görsel hem de fonksiyonel ihtiyaçları karşılar. Motorlu seçenekle uzaktan kumanda ile kolayca kontrol edilebilir. Dört mevsim kullanım için ideal bir çözümdür.',
    advantages: [
      'Fermuar sistemiyle tam sızdırmazlık',
      'Rüzgarda sallanmaz',
      'Şeffaf veya opak kumaş seçeneği',
      'Motorlu uzaktan kumanda',
      'Dört mevsim kullanım',
      'Böcek ve toz geçirmez yapı',
    ],
    usageAreas: [
      { icon: 'shield-check-line', title: 'Teras & Balkonlar', desc: 'Rüzgar ve yağmura karşı tam koruma sağlar.' },
      { icon: 'restaurant-2-line', title: 'Restoran Dış Alanları', desc: 'Dört mevsim aktif dış mekan yemek alanı.' },
      { icon: 'building-line', title: 'Ticari Projeler', desc: 'Ofis ve iş yeri dış alanlarında profesyonel çözüm.' },
    ],
    gallery: [
      { src: '/images/hizmetler/zip-perde-1.jpg', alt: 'Zip perde uygulama 1 — fermuar sistemi teras kapatma' },
      { src: '/images/hizmetler/zip-perde-2.jpg', alt: 'Zip perde uygulama 2 — restoran dış alan kapatma' },
      { src: '/images/hizmetler/zip-perde-3.jpg', alt: 'Zip perde uygulama 3 — ticari bina dış alan' },
    ],
  },
];

export const getServiceDetail = (slug: string): ServiceDetail | undefined =>
  servicesDetail.find((s) => s.slug === slug);
