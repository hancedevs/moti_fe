import type { ReactNode } from "react";
import {
  Leaf01Icon,
  Shield01Icon,
  ChartIncreaseIcon,
  PackageIcon,
} from "hugeicons-react";

export const COFFEE_HERO_BADGE_ICONS: ReactNode[] = [
  <Leaf01Icon key="leaf" className="w-5 h-5 text-white" />,
  <Shield01Icon key="shield" className="w-5 h-5 text-white" />,
  <ChartIncreaseIcon key="chart" className="w-5 h-5 text-white" />,
  <PackageIcon key="pkg" className="w-5 h-5 text-white" />,
];

export const GRADING_SYSTEM_DATA = [
  { grade: "Grade 1", defects: "Max 3 Defects", flavor: "Outstanding Flavor" },
  { grade: "Grade 2", defects: "4 – 12 Defects", flavor: "Excellent Flavor" },
  { grade: "Grade 3", defects: "13 – 25 Defects", flavor: "Very Good Flavor" },
  { grade: "Grade 4", defects: "26 – 45 Defects", flavor: "Good Flavor" },
  { grade: "Grade 5", defects: "46 – 100 Defects", flavor: "Fair Flavor" },
];

export const REGIONS_DATA = [
  "Yirgacheffe",
  "Sidamo",
  "Kaffa",
  "Djimmah",
  "Harar",
  "Limu",
];

export type CoffeeDetailMock = {
  processing: string;
  acidity: string;
  body: string;
  harvestSeason: string;
  gradesAvailable: string;
  tastingNotes: string[];
  badgeText: string;
  buttonText: string;
  region: string;
  altitude: string;
};

const DEFAULT_DETAIL: CoffeeDetailMock = {
  processing: "Washed / Natural",
  acidity: "Medium",
  body: "Medium",
  harvestSeason: "October – January",
  gradesAvailable: "Grade 1, Grade 2",
  tastingNotes: ["premium", "coffee"],
  badgeText: "Ethiopian",
  buttonText: "Request Sample",
  region: "Ethiopia",
  altitude: "1,500 – 2,200 meters",
};

export const COFFEE_DETAIL_MOCKS: Record<string, Partial<CoffeeDetailMock>> = {
  "Sidama Coffee": {
    processing: "Washed / Natural",
    acidity: "Medium-High",
    body: "Medium to Full",
    harvestSeason: "October – January",
    gradesAvailable: "Grades 3, 4, 5 (Specialty Grades 1 & 2 coming soon)",
    tastingNotes: ["Lemon", "Orange", "Honey", "Caramel", "Cream"],
    badgeText: "Sidama",
    buttonText: "Request Sidama Sample",
    region: "Sidama Region, Southern Ethiopia",
    altitude: "1,500 – 2,200 meters",
  },
  "Yirgacheffe Coffee": {
    processing: "Washed",
    acidity: "High",
    body: "Light to Medium",
    harvestSeason: "October – December",
    gradesAvailable: "Grade 1, Grade 2",
    tastingNotes: ["Jasmine", "Citrus", "Bergamot", "Honey"],
    badgeText: "Yirgacheffe",
    buttonText: "Request Yirgacheffe Sample",
    region: "Gedeo Zone, Southern Ethiopia",
    altitude: "1,700 – 2,200 meters",
  },
  "Guji Coffee": {
    processing: "Natural",
    acidity: "Medium",
    body: "Full",
    harvestSeason: "October – January",
    gradesAvailable: "Grade 1, Grade 2",
    tastingNotes: ["Berry", "Wine", "Chocolate", "Tropical"],
    badgeText: "Guji",
    buttonText: "Request Guji Sample",
    region: "Guji Zone, Oromia",
    altitude: "1,800 – 2,300 meters",
  },
};

export function getCoffeeDetail(name: string): CoffeeDetailMock {
  const lower = name.toLowerCase();
  for (const [key, mock] of Object.entries(COFFEE_DETAIL_MOCKS)) {
    if (lower.includes(key.toLowerCase().replace(" coffee", ""))) {
      return { ...DEFAULT_DETAIL, ...mock };
    }
  }
  const badge = name.replace(/ Coffee/i, "").trim();
  return {
    ...DEFAULT_DETAIL,
    badgeText: badge,
    buttonText: `Request ${badge} Sample`,
    region: (COFFEE_DETAIL_MOCKS[name]?.region) || `${badge}, Ethiopia`,
  };
}

export function formatRegion(raw: string): string {
  if (!raw) return "Ethiopia";
  const parts = raw.split(",").map((s) => s.trim());
  if (parts.length >= 2) {
    return `${parts[1]}, ${parts[0]}`;
  }
  return raw;
}

const TASTE_KEYWORDS = [
  "jasmine", "citrus", "chocolate", "berry", "nutty", "spice",
  "floral", "fruity", "wine", "herbal", "caramel", "honey",
  "lemon", "orange", "cream", "tropical", "bergamot",
];

export function parseTasteNotes(description: string): string[] {
  if (!description) return ["premium", "coffee"];
  const lower = description.toLowerCase();
  const found = TASTE_KEYWORDS.filter((kw) => lower.includes(kw));
  return found.length > 0 ? found : ["premium", "coffee"];
}

export function parseProcessFromName(name: string): "Washed" | "Natural" {
  if (!name) return "Washed";
  const lower = name.toLowerCase();
  if (lower.includes("natural")) return "Natural";
  return "Washed";
}
