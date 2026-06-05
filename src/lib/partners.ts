export type PartnerIconKey =
  | "shield"
  | "server"
  | "software"
  | "database"
  | "network"
  | "infrastructure";

export type PartnerItem = {
  name: string;
  category: string;
  icon: PartnerIconKey;
};

export const featuredPartners: PartnerItem[] = [
  { name: "Fortinet", category: "Cybersecurity", icon: "shield" },
  { name: "Dell Technologies", category: "Server & Infrastructure", icon: "server" },
  { name: "Microsoft", category: "Software & Cloud", icon: "software" },
  { name: "Oracle", category: "Software & Cloud", icon: "database" },
  { name: "Cisco Systems", category: "Networking Solutions", icon: "network" },
  { name: "VMware", category: "Software & Cloud", icon: "infrastructure" },
];

export type PartnerTier = "Platinum" | "Gold" | "Silver";

export type PartnerListItem = {
  initials: string;
  name: string;
  tier: PartnerTier;
  description: string;
};

export type PartnerCategory = {
  id: string;
  title: string;
  description: string;
  partners: PartnerListItem[];
};

export const partnerCategories: PartnerCategory[] = [
  {
    id: "atm-banking",
    title: "ATM & Banking Solutions",
    description: "World-class banking equipment partners",
    partners: [
      { initials: "NCR", name: "NCR Corporation", tier: "Platinum", description: "Global leader in ATM and banking technology" },
      { initials: "HYO", name: "Hyosung", tier: "Gold", description: "Innovative ATM solutions provider" },
      { initials: "GLO", name: "Glory Global", tier: "Silver", description: "Cash management solutions" },
      { initials: "DIE", name: "Diebold Nixdorf", tier: "Gold", description: "Banking and retail automation" },
      { initials: "GRG", name: "GRG Banking", tier: "Silver", description: "ATM and payment solutions" },
      { initials: "HIT", name: "Hitachi", tier: "Silver", description: "Banking automation systems" },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Enterprise security partners",
    partners: [
      { initials: "FOR", name: "Fortinet", tier: "Platinum", description: "Cybersecurity leader" },
      { initials: "CIS", name: "Cisco Security", tier: "Gold", description: "Network security solutions" },
      { initials: "SOP", name: "Sophos", tier: "Silver", description: "Security solutions" },
      { initials: "PAL", name: "Palo Alto Networks", tier: "Gold", description: "Next-gen firewall" },
      { initials: "CHE", name: "Check Point", tier: "Silver", description: "Cybersecurity solutions" },
      { initials: "KAS", name: "Kaspersky", tier: "Silver", description: "Endpoint protection" },
      { initials: "TRE", name: "Trend Micro", tier: "Silver", description: "Cloud security" },
      { initials: "MCA", name: "McAfee", tier: "Silver", description: "Security software" },
      { initials: "F5", name: "F5 Networks", tier: "Silver", description: "Application security" },
    ],
  },
  {
    id: "server-infrastructure",
    title: "Server & Infrastructure",
    description: "Enterprise hardware and data center partners",
    partners: [
      { initials: "DEL", name: "Dell Technologies", tier: "Platinum", description: "Enterprise hardware solutions" },
      { initials: "HP", name: "HP Enterprise", tier: "Gold", description: "Server and storage solutions" },
      { initials: "LEN", name: "Lenovo", tier: "Silver", description: "ThinkSystem servers" },
      { initials: "SCH", name: "Schneider Electric", tier: "Gold", description: "Data center infrastructure" },
      { initials: "IBM", name: "IBM", tier: "Gold", description: "Enterprise systems" },
      { initials: "NET", name: "NetApp", tier: "Silver", description: "Storage solutions" },
      { initials: "HIT", name: "Hitachi Vantara", tier: "Silver", description: "Data storage systems" },
      { initials: "SUP", name: "Supermicro", tier: "Silver", description: "Server solutions" },
    ],
  },
  {
    id: "networking",
    title: "Networking Solutions",
    description: "Network infrastructure partners",
    partners: [
      { initials: "CIS", name: "Cisco Systems", tier: "Gold", description: "Network infrastructure" },
      { initials: "JUN", name: "Juniper Networks", tier: "Silver", description: "Network solutions" },
      { initials: "HUA", name: "Huawei", tier: "Gold", description: "ICT infrastructure" },
      { initials: "ARU", name: "Aruba (HPE)", tier: "Silver", description: "Wireless solutions" },
      { initials: "UBI", name: "Ubiquiti", tier: "Silver", description: "Networking devices" },
      { initials: "RUC", name: "Ruckus Networks", tier: "Silver", description: "Wireless infrastructure" },
    ],
  },
  {
    id: "software-cloud",
    title: "Software & Cloud",
    description: "Enterprise software and cloud platform partners",
    partners: [
      { initials: "MIC", name: "Microsoft", tier: "Gold", description: "Cloud and productivity solutions" },
      { initials: "ORA", name: "Oracle", tier: "Gold", description: "Database and enterprise software" },
      { initials: "VMW", name: "VMware", tier: "Platinum", description: "Virtualization and cloud" },
      { initials: "RED", name: "Red Hat", tier: "Gold", description: "Open source solutions" },
      { initials: "SAP", name: "SAP", tier: "Silver", description: "Enterprise applications" },
      { initials: "SAL", name: "Salesforce", tier: "Silver", description: "CRM solutions" },
      { initials: "SER", name: "ServiceNow", tier: "Silver", description: "IT service management" },
      { initials: "AWS", name: "AWS", tier: "Silver", description: "Cloud computing" },
      { initials: "GOO", name: "Google Cloud", tier: "Silver", description: "Cloud platform" },
    ],
  },
  {
    id: "endpoint-peripherals",
    title: "Endpoint & Peripherals",
    description: "Computing devices and peripherals partners",
    partners: [
      { initials: "HP", name: "HP Inc.", tier: "Gold", description: "Personal computing" },
      { initials: "DEL", name: "Dell", tier: "Gold", description: "Laptops and desktops" },
      { initials: "MIC", name: "Microsoft Surface", tier: "Silver", description: "Surface devices" },
      { initials: "APP", name: "Apple Business", tier: "Silver", description: "Mac and iPad" },
      { initials: "EPS", name: "Epson", tier: "Silver", description: "Printers and scanners" },
      { initials: "CAN", name: "Canon", tier: "Silver", description: "Imaging solutions" },
      { initials: "BRO", name: "Brother", tier: "Silver", description: "Printing solutions" },
      { initials: "LEX", name: "Lexmark", tier: "Silver", description: "Enterprise printing" },
    ],
  },
  {
    id: "it-services",
    title: "IT Service & Consulting",
    description: "Global IT service and consulting partners",
    partners: [
      { initials: "ACC", name: "Accenture", tier: "Gold", description: "Global IT consulting" },
      { initials: "DEL", name: "Deloitte", tier: "Silver", description: "Technology consulting" },
      { initials: "CAP", name: "Capgemini", tier: "Silver", description: "IT services" },
      { initials: "WIP", name: "Wipro", tier: "Silver", description: "IT services" },
      { initials: "TAT", name: "Tata Consultancy", tier: "Silver", description: "IT solutions" },
      { initials: "INF", name: "Infosys", tier: "Silver", description: "Digital services" },
    ],
  },
];

export type PartnerCategoryIconKey =
  | "atm"
  | "shield"
  | "server"
  | "network"
  | "software"
  | "peripherals"
  | "consulting";

export const partnerCategoryIconMap: Record<string, PartnerCategoryIconKey> = {
  "atm-banking": "atm",
  cybersecurity: "shield",
  "server-infrastructure": "server",
  networking: "network",
  "software-cloud": "software",
  "endpoint-peripherals": "peripherals",
  "it-services": "consulting",
};
