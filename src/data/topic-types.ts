// Shared types and group labels for the data-driven topic pages.
import type { Lang } from "./site";

export type TopicGroup = "core" | "access" | "experience" | "food" | "nearby" | "itinerary" | "background";

export type TopicSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  callout?: string;
};

export type TopicFaq = {
  q: string;
  a: string;
};

export type TopicContent = {
  // Short label used in breadcrumbs, related-link cards and the home guide index.
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  facts: [string, string][];
  sections: TopicSection[];
  faq: TopicFaq[];
  // Slugs of related topics to cross-link. Resolved at render time.
  related: string[];
};

export type Topic = {
  slug: string;
  group: TopicGroup;
  // Existing asset under /assets/ used as the page's reference image.
  image?: string;
  id: TopicContent;
  en: TopicContent;
};

export const TOPIC_GROUP_LABELS: Record<TopicGroup, Record<Lang, string>> = {
  core: { id: "Inti & Rencana Kunjungan", en: "Core & Visit Planning" },
  access: { id: "Akses & Transportasi", en: "Access & Transport" },
  experience: { id: "Pengalaman & Fotografi", en: "Experience & Photography" },
  food: { id: "Kuliner Sekitar", en: "Food & Drink Nearby" },
  nearby: { id: "Tempat Menarik Dekat", en: "Nearby Attractions" },
  itinerary: { id: "Rute & Itinerari", en: "Routes & Itineraries" },
  background: { id: "Latar Belakang & Tanggung Jawab", en: "Background & Responsibility" },
};
