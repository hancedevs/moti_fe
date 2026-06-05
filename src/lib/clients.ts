export type ClientItem = {
  name: string;
  industry: string;
  initials: string;
};

export type ClientCategory = {
  id: string;
  title: string;
  clients: ClientItem[];
};

export const featuredClients: ClientItem[] = [
  { name: "Commercial Bank of Ethiopia", industry: "Banking", initials: "CBE" },
  { name: "Dashen Bank", industry: "Banking", initials: "DB" },
  { name: "Awash Bank", industry: "Banking", initials: "AB" },
  { name: "Ethiopian Airlines", industry: "Aviation", initials: "EA" },
  { name: "Ethio Telecom", industry: "Telecom", initials: "ET" },
  { name: "Ministry of Finance", industry: "Government", initials: "MOF" },
  { name: "Zemen Bank", industry: "Banking", initials: "ZB" },
  { name: "Berhan Bank", industry: "Banking", initials: "BB" },
];

export const clientCategories: ClientCategory[] = [
  {
    id: "commercial-banks",
    title: "Commercial Banks",
    clients: [
      { name: "Commercial Bank of Ethiopia", industry: "Banking", initials: "CBE" },
      { name: "Dashen Bank", industry: "Banking", initials: "DB" },
      { name: "Awash Bank", industry: "Banking", initials: "AB" },
      { name: "Bank of Abyssinia", industry: "Banking", initials: "BOA" },
      { name: "United Bank", industry: "Banking", initials: "UB" },
      { name: "Nib Bank", industry: "Banking", initials: "NB" },
      { name: "Wegagen Bank", industry: "Banking", initials: "WB" },
      { name: "Lion Bank", industry: "Banking", initials: "LB" },
      { name: "Berhan Bank", industry: "Banking", initials: "BB" },
      { name: "Abay Bank", industry: "Banking", initials: "AYB" },
      { name: "Zemen Bank", industry: "Banking", initials: "ZB" },
    ],
  },
  {
    id: "insurance-companies",
    title: "Insurance Companies",
    clients: [
      { name: "Ethiopian Insurance Corporation", industry: "Insurance", initials: "EIC" },
      { name: "Awash Insurance", industry: "Insurance", initials: "AI" },
      { name: "Nyala Insurance", industry: "Insurance", initials: "NI" },
      { name: "United Insurance", industry: "Insurance", initials: "UI" },
      { name: "Lion Insurance", industry: "Insurance", initials: "LI" },
      { name: "Oromia Insurance", industry: "Insurance", initials: "OI" },
    ],
  },
  {
    id: "government-organizations",
    title: "Government Organizations",
    clients: [
      { name: "Information Network Security Agency", industry: "Government", initials: "INSA" },
      { name: "Ministry of Finance", industry: "Government", initials: "MOF" },
      { name: "Ministry of Revenue", industry: "Government", initials: "MOR" },
      { name: "Ethiopian Customs Commission", industry: "Government", initials: "ECC" },
      { name: "Ethiopian Investment Commission", industry: "Government", initials: "EIC" },
      { name: "Ethiopian Civil Aviation Authority", industry: "Government", initials: "ECAA" },
    ],
  },
  {
    id: "private-ngo",
    title: "Private & NGO Companies",
    clients: [
      { name: "Ethio Telecom", industry: "Telecom", initials: "ET" },
      { name: "Ethiopian Airlines", industry: "Aviation", initials: "EA" },
      { name: "Midroc Ethiopia", industry: "Private", initials: "ME" },
      { name: "East African Holding", industry: "Private", initials: "EAH" },
      { name: "Sunshine Construction", industry: "Private", initials: "SC" },
      { name: "World Vision Ethiopia", industry: "NGO", initials: "WVE" },
    ],
  },
];

export type CategoryIconKey = "bank" | "shield" | "government" | "private";

export const categoryIconMap: Record<string, CategoryIconKey> = {
  "commercial-banks": "bank",
  "insurance-companies": "shield",
  "government-organizations": "government",
  "private-ngo": "private",
};
