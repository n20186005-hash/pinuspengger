import type { Lang } from "./site";
import type { Topic, TopicContent, TopicGroup } from "./topic-types";
import { CORE_TOPICS } from "./topics-core";
import { ACCESS_TOPICS } from "./topics-access";
import { EXPERIENCE_TOPICS } from "./topics-experience";
import { FOOD_TOPICS } from "./topics-food";
import { ITINERARY_TOPICS } from "./topics-itinerary";
import { TOPIC_GROUP_LABELS } from "./topic-types";
export { TOPIC_GROUP_LABELS };

// Combined topic registry. Each slug is cross-language (same URL in id & en).
export const TOPICS: Topic[] = [
  ...CORE_TOPICS,
  ...ACCESS_TOPICS,
  ...EXPERIENCE_TOPICS,
  ...FOOD_TOPICS,
  ...ITINERARY_TOPICS,
];

export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getTopicContent(slug: string, lang: Lang): TopicContent | undefined {
  const t = getTopic(slug);
  if (!t) return undefined;
  return lang === "en" ? t.en : t.id;
}

// Short labels per language for breadcrumbs and related-link cards.
export const TOPIC_LABELS: Record<string, { id: string; en: string }> = Object.fromEntries(
  TOPICS.map((t) => [t.slug, { id: t.id.name, en: t.en.name }])
);

export function topicLabel(slug: string, lang: Lang): string {
  const l = TOPIC_LABELS[slug];
  return l ? (lang === "en" ? l.en : l.id) : slug;
}

export function topicPath(slug: string, lang: Lang): string {
  return lang === "en" ? `/en/${slug}/` : `/${slug}/`;
}

// hreflang alternates for a topic URL (id default + en).
export function topicAlternates(slug: string): { lang: Lang; href: string }[] {
  return [
    { lang: "id", href: `https://pinuspengger.com/${slug}` },
    { lang: "en", href: `https://pinuspengger.com/en/${slug}` },
  ];
}

// Topics grouped, for the home guide index and sitemap ordering.
export function topicsByGroup(): Record<TopicGroup, Topic[]> {
  const groups = {} as Record<TopicGroup, Topic[]>;
  for (const t of TOPICS) {
    (groups[t.group] ||= []).push(t);
  }
  return groups;
}

// English-variant slugs that appear inside `related` arrays of English topic
// content. Slugs are shared across languages, so map them back to canonical.
const SLUG_ALIASES: Record<string, string> = {
  "best-time": "waktu-terbaik",
  "night-view": "malam",
  "opening-hours": "jam-buka",
  "rainy-season": "cuaca-hujan",
  tickets: "tiket",
  parking: "parkir",
  budget: "anggaran",
  "getting-there": "transportasi",
  motorbike: "naik-motor",
  "taxi-ride-hailing": "taksi-online",
  "public-transport": "transportasi-umum",
  accessibility: "aksesibilitas",
  "photo-spots": "spot-foto",
  "photo-service": "jasa-foto",
  "giant-hand": "tangan-raksasa",
  sunset: "senja",
  kids: "anak",
  "how-long": "lama-kunjungan",
  "forest-walk": "jalan-kaki",
  "pine-environment": "alam-pinus",
  picnic: "piknik",
  "responsible-tourism": "wisata-bertanggung-jawab",
  camping: "kemah",
  prewedding: "foto-prewedding",
  "food-inside": "kuliner",
  "nearby-cafes": "kedai-kopi",
  "nearby-restaurants": "restoran-dekat",
  "nearby-attractions": "tempat-dekat",
  "day-trip": "itinerary-sehari",
  "family-itinerary": "itinerary-anak",
  "budget-itinerary": "itinerary-budget",
  "sunset-itinerary": "itinerary-senja",
  "return-to-yogyakarta": "perjalanan-pulang",
  location: "lokasi",
  "dlingo-pine-guide": "panduan-dlingo",
  background: "latar-belakang",
  "mangunan-pine-forest": "hutan-pinus-mangunan",
  facilities: "fasilitas",
};

export function canonicalSlug(slug: string): string {
  return SLUG_ALIASES[slug] ?? slug;
}
