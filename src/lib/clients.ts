export type ClientItem = {
  name: string;
  industry: string;
  initials: string;
  color: string;
  logo?: string;
};

export type ClientCategory = {
  id: string;
  title: string;
  clients: ClientItem[];
};

export const featuredClients: ClientItem[] = [
  { name: "Commercial Bank of Ethiopia", industry: "Banking", initials: "CBE", color: "#1e3a8a", logo: "https://borkena.com/wp-content/uploads/2024/10/Commercial-Bank-of-Ethiopia-_-Dollar-exchange.jpg" },
  { name: "Dashen Bank", industry: "Banking", initials: "DB", color: "#0e7490", logo: "https://play-lh.googleusercontent.com/PJhNWmAwwXIG5X2qM7g_5mHyG2tHpbs-ngnMCJQSiv1mLte-27e74mrpzXe7h3TA4HQ=w416-h235-rw" },
  { name: "Awash Bank", industry: "Banking", initials: "AB", color: "#4338ca", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Awash_International_Bank.png" },
  { name: "Ethiopian Airlines", industry: "Aviation", initials: "EA", color: "#ea580c", logo: "https://corporate.ethiopianairlines.com/images/default-source/affilateimagesliders/now.jpg?sfvrsn=56a9141f_1" },
  { name: "Ethio Telecom", industry: "Telecom", initials: "ET", color: "#16a34a" },
  { name: "Ministry of Finance", industry: "Government", initials: "MOF", color: "#991b1b", logo: "https://upload.wikimedia.org/wikipedia/en/3/38/Ministry_of_Finance_%28Ethiopia%29_Flag.png" },
  { name: "Zemen Bank", industry: "Banking", initials: "ZB", color: "#0369a1", logo: "https://pub-f30882b481294faa997a4d11ff77ce65.r2.dev/company-logo/926769/ZB_Logo.png" },
  { name: "Berhan Bank", industry: "Banking", initials: "BB", color: "#5b21b6", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Berhan_Bank.png" },
];

export const clientCategories: ClientCategory[] = [
  {
    id: "commercial-banks",
    title: "Commercial Banks",
    clients: [
      { name: "Commercial Bank of Ethiopia", industry: "Banking", initials: "CBE", color: "#1e3a8a", logo: "https://borkena.com/wp-content/uploads/2024/10/Commercial-Bank-of-Ethiopia-_-Dollar-exchange.jpg" },
      { name: "Dashen Bank", industry: "Banking", initials: "DB", color: "#0e7490", logo: "https://play-lh.googleusercontent.com/PJhNWmAwwXIG5X2qM7g_5mHyG2tHpbs-ngnMCJQSiv1mLte-27e74mrpzXe7h3TA4HQ=w416-h235-rw" },
      { name: "Awash Bank", industry: "Banking", initials: "AB", color: "#4338ca", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Awash_International_Bank.png" },
      { name: "Bank of Abyssinia", industry: "Banking", initials: "BOA", color: "#1d4ed8" },
      { name: "United Bank", industry: "Banking", initials: "UB", color: "#2563eb" },
      { name: "Nib Bank", industry: "Banking", initials: "NB", color: "#3730a3" },
      { name: "Wegagen Bank", industry: "Banking", initials: "WB", color: "#312e81" },
      { name: "Lion Bank", industry: "Banking", initials: "LB", color: "#1e40af" },
      { name: "Berhan Bank", industry: "Banking", initials: "BB", color: "#5b21b6", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Berhan_Bank.png" },
      { name: "Abay Bank", industry: "Banking", initials: "AYB", color: "#4f46e5" },
  { name: "Zemen Bank", industry: "Banking", initials: "ZB", color: "#0369a1", logo: "https://pub-f30882b481294faa997a4d11ff77ce65.r2.dev/company-logo/926769/ZB_Logo.png" },
    ],
  },
  {
    id: "insurance-companies",
    title: "Insurance Companies",
    clients: [
      { name: "Ethiopian Insurance Corporation", industry: "Insurance", initials: "EIC", color: "#0f766e" },
      { name: "Awash Insurance", industry: "Insurance", initials: "AI", color: "#115e59" },
      { name: "Nyala Insurance", industry: "Insurance", initials: "NI", color: "#0d9488" },
      { name: "United Insurance", industry: "Insurance", initials: "UI", color: "#14b8a6" },
      { name: "Lion Insurance", industry: "Insurance", initials: "LI", color: "#0891b2" },
      { name: "Oromia Insurance", industry: "Insurance", initials: "OI", color: "#06b6d4" },
    ],
  },
  {
    id: "government-organizations",
    title: "Government Organizations",
    clients: [
      { name: "Information Network Security Agency", industry: "Government", initials: "INSA", color: "#991b1b" },
      { name: "Ministry of Finance", industry: "Government", initials: "MOF", color: "#b91c1c", logo: "https://upload.wikimedia.org/wikipedia/en/3/38/Ministry_of_Finance_%28Ethiopia%29_Flag.png" },
      { name: "Ministry of Revenue", industry: "Government", initials: "MOR", color: "#dc2626" },
      { name: "Ethiopian Customs Commission", industry: "Government", initials: "ECC", color: "#7f1d1d" },
      { name: "Ethiopian Investment Commission", industry: "Government", initials: "EIC", color: "#9f1239" },
      { name: "Ethiopian Civil Aviation Authority", industry: "Government", initials: "ECAA", color: "#881337" },
    ],
  },
  {
    id: "private-ngo",
    title: "Private & NGO Companies",
    clients: [
      { name: "Ethio Telecom", industry: "Telecom", initials: "ET", color: "#16a34a" },
  { name: "Ethiopian Airlines", industry: "Aviation", initials: "EA", color: "#ea580c", logo: "https://corporate.ethiopianairlines.com/images/default-source/affilateimagesliders/now.jpg?sfvrsn=56a9141f_1" },
      { name: "Midroc Ethiopia", industry: "Private", initials: "ME", color: "#0d9488" },
      { name: "East African Holding", industry: "Private", initials: "EAH", color: "#0f766e" },
      { name: "Sunshine Construction", industry: "Private", initials: "SC", color: "#ca8a04" },
      { name: "World Vision Ethiopia", industry: "NGO", initials: "WVE", color: "#e11d48" },
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
