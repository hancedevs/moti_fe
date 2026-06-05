export type ServiceSubItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  productCount?: number;
};

export type ServiceCategory = {
  id: string;
  title: string;
  href: string;
  items: ServiceSubItem[];
  description?: string;
  stats?: {
    atmInstalled?: string;
    citiesCovered?: string;
    bankClients?: string;
    yearsExperience?: string;
  };
};

export const servicesData: ServiceCategory[] = [
  {
    id: "banking-equipment",
    title: "Banking Equipment & E-payment",
    href: "/services/banking-equipment",
    description: "Complete range of ATM, POS, Banking equipment, and E-payment solutions from leading global manufacturers. Trusted by 14+ banks across Ethiopia.",
    stats: {
      atmInstalled: "12,000+",
      citiesCovered: "770+",
      bankClients: "14+",
      yearsExperience: "20+",
    },
    items: [
      { label: "ATM Solution", href: "/services/banking-equipment/atm-solution", description: "Complete ATM solutions including installation, maintenance, and 24/7 monitoring services.", icon: "atm", productCount: 5 },
      { label: "POS & Card Technology", href: "/services/banking-equipment/pos", icon: "pos", productCount: 4 },
      { label: "Bank Note & Printing", href: "/services/banking-equipment/printing", icon: "printing", productCount: 3 },
      { label: "Branch Effectiveness", href: "/services/banking-equipment/branch", icon: "branch", productCount: 3 },
    ],
  },
  {
    id: "terminal-support",
    title: "Terminal Support Service",
    href: "/services/terminal-support",
    items: [
      { label: "ATM Installation & Support", href: "/services/terminal-support/installation" },
      { label: "Remote Monitoring & Management", href: "/services/terminal-support/monitoring" },
      { label: "Field Services", href: "/services/terminal-support/field-services" },
      { label: "Help Desk & Support", href: "/services/terminal-support/help-desk" },
    ],
  },
  {
    id: "enterprise-it",
    title: "Enterprise IT Infrastructure",
    href: "/services/enterprise-it",
    items: [
      { label: "Server & Storage Solutions", href: "/services/enterprise-it/server" },
      { label: "Data Center Facility", href: "/services/enterprise-it/data-center" },
      { label: "Network Solution", href: "/services/enterprise-it/network" },
      { label: "Cyber Security Solutions", href: "/services/enterprise-it/security" },
    ],
  },
  {
    id: "computer-peripherals",
    title: "Computer & Peripherals",
    href: "/services/computer-peripherals",
    items: [
      { label: "Desktop Computers", href: "/services/computer-peripherals/desktop" },
      { label: "Laptops & Tablets", href: "/services/computer-peripherals/laptops" },
      { label: "Office Machines", href: "/services/computer-peripherals/office" },
      { label: "Meeting Room Solutions", href: "/services/computer-peripherals/meeting" },
      { label: "Networking Devices", href: "/services/computer-peripherals/networking" },
      { label: "Accessories & Peripherals", href: "/services/computer-peripherals/accessories" },
    ],
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software Solutions",
    href: "/services/enterprise-software",
    items: [
      { label: "Digital Banking Solutions", href: "/services/enterprise-software/digital-banking" },
      { label: "CRM Solutions", href: "/services/enterprise-software/crm" },
      { label: "Digital Insurance Solutions", href: "/services/enterprise-software/insurance" },
      { label: "ERP Solutions", href: "/services/enterprise-software/erp" },
      { label: "Enterprise Risk Management", href: "/services/enterprise-software/risk" },
      { label: "Credit/Loan Management", href: "/services/enterprise-software/credit" },
      { label: "Contact Center Solution", href: "/services/enterprise-software/contact-center" },
      { label: "Customer Experience Solution", href: "/services/enterprise-software/cx" },
      { label: "E-Commerce Solutions", href: "/services/enterprise-software/ecommerce" },
    ],
  },
  {
    id: "bpo-service",
    title: "BPO Service",
    href: "/services/bpo-service",
    items: [
      { label: "Customer Support Service", href: "/services/bpo-service/customer-support" },
      { label: "IT Help Desk Support", href: "/services/bpo-service/it-help" },
      { label: "Back Office Support", href: "/services/bpo-service/back-office" },
      { label: "Telemarketing Service", href: "/services/bpo-service/telemarketing" },
      { label: "Data Entry & Management", href: "/services/bpo-service/data-entry" },
    ],
  },
  {
    id: "export",
    title: "Export",
    href: "/export",
    items: [
      { label: "Coffee", href: "/export/coffee" },
      { label: "Coffee Export", href: "/export/coffee-export" },
    ],
  },
];
