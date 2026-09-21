// Single source of truth for the SEO site name.
// Format: 景点名称 (attraction) + 城市 (city) + 旅游指南 (travel guide).
export const SITE_NAME = {
  id: "Pinus Pengger Yogyakarta — Panduan Wisata",
  en: "Pinus Pengger Yogyakarta — Travel Guide",
} as const;

export type Lang = keyof typeof SITE_NAME;
