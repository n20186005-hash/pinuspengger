// Single source of truth for the SEO site name.
// Format: 景点名称 (attraction) + 城市 (city) + 旅游指南 (travel guide).
export const SITE_NAME = {
  id: "Pinus Pengger Yogyakarta — Panduan Wisata",
  en: "Pinus Pengger Yogyakarta — Travel Guide",
} as const;

export type Lang = keyof typeof SITE_NAME;

// ---------------------------------------------------------------------------
// Attraction facts. These values are drawn from the public Google Maps listing
// and are dated snapshots, not an operational guarantee. Keep them in one place
// so the home guide and every topic page stay consistent.
// ---------------------------------------------------------------------------
export const ATTRACTION = {
  name: "Hutan Pinus Pengger",
  alternateName: "Pinus Pengger",
  streetAddress: "Jl. Dlingo–Patuk, Sendangsari, Terong, Kec. Dlingo",
  addressLocality: "Kabupaten Bantul",
  addressRegion: "Daerah Istimewa Yogyakarta",
  postalCode: "55783",
  addressCountry: "ID",
  latitude: -7.8712041,
  longitude: 110.4595144,
  plusCode: "4FH5+GR Terong, Bantul Regency, Daerah Istimewa Yogyakarta",
  mapsUrl: "https://maps.app.goo.gl/4qXHjvkJ4Ss1Sf36",
  ratingValue: 4.5,
  reviewCount: 27198,
  // Date the public listing snapshot was last read. Update when re-checked.
  ratingChecked: "28 Oktober 2026",
  ratingCheckedEn: "28 October 2026",
  // Google Maps listing opening hours snapshot. NOT an operational guarantee.
  hoursListing: "08.00–21.00",
  hoursListingEn: "08:00–21:00",
  hoursChecked: "19 Oktober 2026",
  hoursCheckedEn: "19 October 2026",
} as const;

// Primary navigation anchors reused by the home guide and topic pages.
export const PRIMARY_SOURCES = [
  { id: "Kalurahan Terong", en: "Kalurahan Terong", url: "https://terong-bantul.desa.id/first/artikel/1417-MELEPAS-PENAT-DENGAN-KEINDAHAN-HUTAN-PINUS-PENGGER" },
  { id: "Pemerintah Kabupaten Bantul", en: "Bantul Regency", url: "https://petapotensi.bantulkab.go.id/potensi-detail/hutan-pinus-pengger" },
  { id: "Visiting Jogja · 2022", en: "Visiting Jogja · 2022", url: "https://visitingjogja.jogjaprov.go.id/37761/jagad-mangunan-pinus-pengger/" },
  { id: "Google Maps", en: "Google Maps", url: "https://maps.app.goo.gl/4qXHjvkJ4Ss1Sf36" },
  { id: "Dinas Perhubungan DIY", en: "DIY Transport Agency", url: "https://dishub.jogjaprov.go.id/trans-jogja" },
] as const;
