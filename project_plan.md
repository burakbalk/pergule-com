# Pergule — Tente, Pergola ve Branda Sistemleri Web Sitesi

## 1. Proje Tanımı
Pergule markası için profesyonel, yerel SEO uyumlu, yüksek dönüşüm odaklı kurumsal web sitesi. Hedef kitle: tente, pergola ve branda sistemi arayan yerel müşteriler. Temel dönüşüm kanalları: telefon ve WhatsApp.

## 2. Sayfa Yapısı
- `/` — Ana Sayfa
- `/hakkimizda` — Hakkımızda
- `/hizmetler` — Hizmetler (genel liste)
- `/hizmetler/kasetli-tente` — Kasetli Tente
- `/hizmetler/koruklu-tente` — Körüklü Tente
- `/hizmetler/mafsalli-tente` — Mafsallı Tente
- `/hizmetler/t-model-tente` — T Model Tente
- `/hizmetler/win-tente` — Win Tente
- `/hizmetler/bioklimatik-pergola` — Bioklimatik Pergola
- `/hizmetler/otomatik-pergola` — Otomatik Pergola
- `/hizmetler/rollingroof-pergola` — Rollingroof Pergola
- `/hizmetler/seffaf-branda` — Şeffaf Branda
- `/hizmetler/seffaf-stor-branda` — Şeffaf Stor Branda
- `/hizmetler/zip-perde` — Zip Perde
- `/referanslar` — Referanslar
- `/sss` — Sık Sorulan Sorular
- `/iletisim` — İletişim

## 3. Temel Özellikler
- [x] Ana Sayfa (Hero, Hizmetler, Neden Biz, Referanslar, SSS, CTA)
- [x] Hakkımızda sayfası
- [x] Hizmetler genel sayfası
- [ ] 11 adet hizmet detay sayfası
- [ ] Referanslar sayfası
- [ ] SSS sayfası
- [ ] İletişim sayfası
- [ ] Sabit mobil alt CTA
- [ ] Lightbox galeri (hizmet detay sayfaları)
- [ ] Yerel SEO meta etiketleri

## 4. Veri Modeli
Supabase gerekmez. Tüm içerik statik mock data olarak tutulur.

## 5. Üçüncü Taraf Entegrasyonlar
- Supabase: Gerekmez
- Shopify: Gerekmez
- Stripe: Gerekmez
- İletişim: Yalnızca telefon ve WhatsApp yönlendirmesi

## 6. Geliştirme Aşamaları

### Aşama 1: Ana Sayfa + Hakkımızda + Hizmetler Genel
- Hedef: Temel site yapısı, navigasyon, ana sayfa tam içerik
- Çıktı: Çalışan 3 sayfa + router

### Aşama 2: Hizmet Detay Sayfaları (11 adet)
- Hedef: Her hizmet için SEO uyumlu detay sayfası
- Çıktı: Lightbox galeri, avantajlar, kullanım alanları, CTA

### Aşama 3: Referanslar + SSS + İletişim
- Hedef: Kalan sayfaların tamamlanması
- Çıktı: Yayına hazır tam site
