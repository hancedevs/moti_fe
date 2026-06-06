export type ProductItem = {
  name: string;
  description: string;
  features: string[];
  image: string;
};

export type ServiceSubItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  productCount?: number;
  products?: ProductItem[];
};

export type ServiceCategory = {
  id: string;
  title: string;
  href: string;
  heroImage?: string;
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
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Complete range of ATM, POS, Banking equipment, and E-payment solutions from leading global manufacturers. Trusted by 14+ banks across Ethiopia.",
    stats: {
      atmInstalled: "12,000+",
      citiesCovered: "770+",
      bankClients: "14+",
      yearsExperience: "20+",
    },
    items: [
      { 
        label: "ATM Solution", 
        href: "/services/banking-equipment/atm-solution", 
        description: "Complete ATM solutions including installation, maintenance, and 24/7 monitoring services.", 
        icon: "atm", 
        productCount: 5,
        products: [
          {
            name: "ATM (Automated Teller Machine)",
            description: "Self-service banking terminals for cash withdrawals, deposits, balance inquiries, and account services. We offer NCR ATMs known for reliability and security.",
            features: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry"],
            image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Interactive Teller Machine (ITM)",
            description: "Advanced ATM with video banking capabilities and remote teller assistance. Provides extended banking services with live support when needed.",
            features: ["Video Banking", "Document Scanning", "Complex Transactions"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Scalable Recycler (SR)",
            description: "Cash recycling machines that accept and dispense cash, reducing cash management costs and improving operational efficiency.",
            features: ["Cash Recycling", "Note Counting", "Counterfeit Detection"],
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Forex ATMs",
            description: "Foreign currency exchange ATMs for international travelers. Supports multiple currencies with competitive exchange rates.",
            features: ["Multiple Currencies", "Exchange Rate Display", "Language Options"],
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Real-time Monitoring",
            description: "24/7 monitoring and management of ATM networks. Proactive alerts and remote diagnostics ensure maximum uptime.",
            features: ["24/7 Monitoring", "Proactive Alerts", "Remote Diagnostics"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      { 
        label: "POS & Card Technology", 
        href: "/services/banking-equipment/pos", 
        description: "Point of sale terminals and card technology solutions for seamless payment processing.",
        icon: "pos", 
        productCount: 4,
        products: [
          {
            name: "POS Terminals",
            description: "Modern point of sale terminals for retail and hospitality businesses. Supports all payment methods including contactless.",
            features: ["Card Payment", "Contactless", "NFC Enabled"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Card Printer Machine",
            description: "Central and instant card printing solutions for banks. High-quality card personalization and embossing.",
            features: ["Instant Issuance", "Embossing", "Encoding"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Card Personalized Solution",
            description: "Complete card personalization and embossing systems. Customize cards with customer details and branding.",
            features: ["Custom Design", "Embossing", "Chip Encoding"],
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Payment Cards",
            description: "Debit, credit, and prepaid card solutions. Eco-friendly and plastic options available.",
            features: ["Contactless", "EMV Chip", "Custom Design"],
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      { 
        label: "Bank Note & Printing", 
        href: "/services/banking-equipment/printing", 
        description: "Secure printing solutions and currency handling equipment for banking operations.",
        icon: "printing", 
        productCount: 3,
        products: [
          {
            name: "Pin Mailer",
            description: "Secure PIN printing and mailing solutions. Tamper-evident design ensures confidentiality.",
            features: ["Secure Printing", "Scratch Panel", "Barcode"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Note Counter",
            description: "High-speed currency counting machines with counterfeit detection. Accurate and efficient cash handling.",
            features: ["High Speed", "Counterfeit Detection", "Batch Counting"],
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Cheque Scanner",
            description: "Cheque scanning and processing systems. Fast and accurate cheque truncation solutions.",
            features: ["Duplex Scanning", "MICR Reading", "OCR Software"],
            image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      { 
        label: "Branch Effectiveness", 
        href: "/services/banking-equipment/branch", 
        description: "Modern banking equipment to enhance branch efficiency and customer experience.",
        icon: "branch", 
        productCount: 3,
        products: [
          {
            name: "Bulk Depositor",
            description: "High-capacity cash deposit machines for commercial banking operations. Allows customers to deposit large volumes of cash with real-time verification.",
            features: ["Bulk Cash Acceptance", "Instant Credit", "Receipt Generation"],
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Self-Service Kiosk",
            description: "Interactive self-service terminals for account services, bill payments, and information queries. Reduces branch congestion.",
            features: ["Touchscreen Interface", "Multi-service Access", "Queue Management"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          },
          {
            name: "Mobile Branch",
            description: "Fully equipped mobile banking units for remote and underserved areas. Brings banking services to customers wherever they are.",
            features: ["Full Banking Services", "ATM Services", "Account Opening"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
    ],
  },
  {
    id: "terminal-support",
    title: "Terminal Support Service",
    href: "/services/terminal-support",
    heroImage: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Complete ATM installation, remote monitoring, field services, and help desk support with nationwide coverage across Ethiopia.",
    items: [
      {
        label: "ATM Installation & Support",
        href: "/services/terminal-support/installation",
        description: "Complete ATM installation, configuration, and ongoing support services with nationwide coverage.",
        icon: "atm",
        productCount: 4,
        products: [
          {
            name: "ATM Installation",
            description: "Professional ATM installation services including site preparation, network configuration, and system integration. Our certified technicians ensure seamless deployment.",
            features: ["Site Survey", "Network Setup", "System Integration"],
            image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Preventive Maintenance",
            description: "Scheduled maintenance programs to prevent downtime and extend equipment life. Regular inspections and component replacements.",
            features: ["Regular Inspections", "Component Replacement", "Software Updates"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Corrective Maintenance",
            description: "Rapid response repair services for equipment failures. Our technicians are available 24/7 across Ethiopia.",
            features: ["24/7 Support", "Rapid Response", "Parts Replacement"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Software Updates & Patches",
            description: "Regular software updates and security patches to keep your ATM fleet current and secure.",
            features: ["Security Patches", "Feature Updates", "Compliance Updates"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Remote Monitoring & Management",
        href: "/services/terminal-support/monitoring",
        description: "24/7 remote monitoring and proactive management of your ATM network for maximum uptime.",
        icon: "monitoring",
        productCount: 3,
        products: [
          {
            name: "Real-time Monitoring",
            description: "Continuous monitoring of all ATMs with instant alerts for any issues. Proactive problem detection and resolution.",
            features: ["24/7 Monitoring", "Instant Alerts", "Health Dashboard"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Remote Diagnostics",
            description: "Remote troubleshooting and diagnostics to resolve issues without on-site visits. Faster resolution times.",
            features: ["Remote Access", "Error Analysis", "Log Review"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Predictive Analytics",
            description: "AI-powered predictive analytics to anticipate failures before they occur. Reduce downtime significantly.",
            features: ["Failure Prediction", "Maintenance Scheduling", "Parts Forecasting"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Field Services",
        href: "/services/terminal-support/field-services",
        description: "Nationwide field service coverage with 117+ points of presence across Ethiopia.",
        icon: "field",
        productCount: 3,
        products: [
          {
            name: "On-site Support",
            description: "Field technicians deployed across Ethiopia for on-site support. Quick response times guaranteed.",
            features: ["Nationwide Coverage", "Quick Response", "Certified Technicians"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Parts & Logistics",
            description: "Comprehensive spare parts management and logistics. Critical parts available at regional hubs.",
            features: ["Parts Inventory", "Regional Hubs", "Express Delivery"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Decommissioning & Relocation",
            description: "Professional ATM decommissioning and relocation services. Safe equipment handling and transport.",
            features: ["Safe Handling", "Data Sanitization", "Site Restoration"],
            image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Help Desk & Support",
        href: "/services/terminal-support/help-desk",
        description: "Multi-channel help desk support for ATM operators and end-users.",
        icon: "help-desk",
        productCount: 3,
        products: [
          {
            name: "Technical Support",
            description: "Expert technical support for hardware and software issues. Available via phone, email, and online portal.",
            features: ["Phone Support", "Email Support", "Online Portal"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "End-user Support",
            description: "Customer support for ATM users. Card retention, transaction disputes, and general inquiries.",
            features: ["24/7 Hotline", "Multi-language", "Card Issues"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Training & Documentation",
            description: "Comprehensive training programs and documentation for ATM operations and maintenance.",
            features: ["Operator Training", "Technical Training", "User Manuals"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "enterprise-it",
    title: "Enterprise IT Infrastructure",
    href: "/services/enterprise-it",
    heroImage: "/datacenter.png",
    description: "Enterprise-grade server, storage, data center, networking, and cybersecurity solutions for mission-critical infrastructure.",
    items: [
      {
        label: "Server & Storage Solutions",
        href: "/services/enterprise-it/server",
        description: "Enterprise-grade server and storage infrastructure for high-performance computing and data management.",
        icon: "server",
        productCount: 3,
        products: [
          {
            name: "Hyper-Converged Infrastructure (HCI)",
            description: "Unified computing, storage, and networking in a single appliance. Simplified management with software-defined infrastructure for modern data centers.",
            features: ["Unified Management", "Software-Defined", "Scalable Architecture"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Storage Solutions",
            description: "Enterprise storage systems including SAN, NAS, and object storage. High-capacity, high-performance solutions for mission-critical data.",
            features: ["SAN Storage", "NAS Systems", "Object Storage"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Backup Systems",
            description: "Comprehensive data protection and backup solutions. Ensure business continuity with reliable backup and disaster recovery systems.",
            features: ["Automated Backup", "Disaster Recovery", "Cloud Backup"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Data Center Facility",
        href: "/services/enterprise-it/data-center",
        description: "Modern data center infrastructure solutions for enterprise-grade reliability and performance.",
        icon: "data-center",
        productCount: 2,
        products: [
          {
            name: "Data Center Networking",
            description: "High-speed, low-latency networking infrastructure for data centers. Software-defined networking for modern workloads.",
            features: ["High-Speed Fabric", "Software-Defined", "Low Latency"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Data Center Design & Build",
            description: "Complete data center design and construction services. Tier III/IV compliant facilities with optimal PUE.",
            features: ["Tier III/IV Design", "Cooling Systems", "Power Management"],
            image: "/datacenter.png",
          },
        ],
      },
      {
        label: "Network Solution",
        href: "/services/enterprise-it/network",
        description: "Comprehensive networking solutions for enterprise connectivity, security, and performance.",
        icon: "network",
        productCount: 3,
        products: [
          {
            name: "SD-WAN Router",
            description: "Software-defined wide area networking for optimized application performance. Intelligent traffic routing and cost savings.",
            features: ["Application Routing", "Cloud Integration", "Zero-Touch Deploy"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Network and Wireless",
            description: "Enterprise networking infrastructure including switches, routers, and wireless access points. Secure, reliable connectivity.",
            features: ["Enterprise Switches", "WiFi 6/6E", "Access Points"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Network Management",
            description: "Centralized network monitoring and management platforms. Proactive monitoring, automation, and analytics.",
            features: ["Central Monitoring", "Auto Discovery", "Performance Analytics"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Cyber Security Solutions",
        href: "/services/enterprise-it/security",
        description: "Comprehensive cybersecurity solutions to protect your enterprise from evolving threats.",
        icon: "security",
        productCount: 3,
        products: [
          {
            name: "Endpoint Security",
            description: "Advanced endpoint protection for workstations, servers, and mobile devices. AI-powered threat detection and response.",
            features: ["EDR Solution", "Anti-Malware", "Device Control"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Network Application and Cloud Security",
            description: "Next-generation firewalls, WAF, and cloud security solutions. Protect your applications and data across all environments.",
            features: ["Next-Gen Firewall", "Web App Firewall", "Cloud Security"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Security Assessment and Auditing",
            description: "Comprehensive security assessments, penetration testing, and compliance auditing. Identify and remediate vulnerabilities.",
            features: ["Vulnerability Scanning", "Penetration Testing", "Compliance Audit"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "computer-peripherals",
    title: "Computer & Peripherals",
    href: "/services/computer-peripherals",
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Complete business computing solutions including desktops, laptops, office machines, meeting room technology, networking, and accessories.",
    items: [
      {
        label: "Desktop Computers",
        href: "/services/computer-peripherals/desktop",
        description: "High-performance desktop computers and workstations for business and enterprise needs.",
        icon: "desktop",
        productCount: 3,
        products: [
          {
            name: "Business Desktops",
            description: "Reliable desktop computers designed for business productivity. Powerful processors, ample storage, and enterprise-grade security features.",
            features: ["Intel/AMD Processors", "16GB+ RAM", "SSD Storage"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Workstations",
            description: "High-performance workstations for demanding applications like CAD, video editing, and data analysis. Certified for professional software.",
            features: ["Xeon/i9 Processors", "64GB+ RAM", "NVIDIA Quadro"],
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Mini PCs",
            description: "Compact mini computers for digital signage, kiosks, and space-constrained environments. Full desktop power in a small form factor.",
            features: ["Ultra Compact", "Low Power", "VESA Mount"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Laptops & Tablets",
        href: "/services/computer-peripherals/laptops",
        description: "Portable computing solutions including laptops, tablets, and 2-in-1 devices for mobile workforce.",
        icon: "laptop",
        productCount: 4,
        products: [
          {
            name: "Business Laptops",
            description: "Professional laptops with enterprise security features. Lightweight, durable, and optimized for productivity on the go.",
            features: ['14-15.6" Display', "Intel Core i5/i7", "16GB RAM"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Executive Laptops",
            description: "Premium ultrabooks for executives with stunning displays, exceptional build quality, and all-day battery life.",
            features: ["Ultra Thin", "4K Display", "Premium Build"],
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Tablets",
            description: "Versatile tablets for mobile productivity, field work, and digital forms. Rugged options available for industrial environments.",
            features: ['10-12" Display', "LTE Connectivity", "Stylus Support"],
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "2-in-1 Devices",
            description: "Convertible laptops that transform into tablets. Perfect for presentations, note-taking, and versatile work styles.",
            features: ["360° Hinge", "Touch Screen", "Stylus Included"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Office Machines",
        href: "/services/computer-peripherals/office",
        description: "Essential office equipment including printers, scanners, photocopiers, and power backup systems.",
        icon: "printing",
        productCount: 5,
        products: [
          {
            name: "Laser Printers",
            description: "High-speed laser printers for professional document printing. Network-ready with duplex printing and mobile connectivity.",
            features: ["Fast Printing", "Duplex", "Network Ready"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Multifunction Printers",
            description: "All-in-one printers with print, scan, copy, and fax capabilities. Ideal for busy offices with diverse document needs.",
            features: ["Print/Scan/Copy", "Auto Document Feeder", "Color & B/W"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Document Scanners",
            description: "High-speed document scanners for digital archiving. OCR software included for searchable PDF creation.",
            features: ["High Speed", "Duplex Scanning", "OCR Software"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Photocopiers",
            description: "Enterprise photocopiers for high-volume document reproduction. Sort, staple, and finish documents automatically.",
            features: ["High Volume", "Auto Sorting", "Stapling"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "UPS Systems",
            description: "Uninterruptible power supply systems to protect equipment from power outages and surges. Various capacities available.",
            features: ["Battery Backup", "Surge Protection", "Auto Shutdown"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Meeting Room Solutions",
        href: "/services/computer-peripherals/meeting",
        description: "Complete meeting room technology including projectors, displays, and video conferencing systems.",
        icon: "meeting",
        productCount: 4,
        products: [
          {
            name: "Projectors",
            description: "Professional projectors for presentations and meetings. High brightness, HD resolution, and long lamp life.",
            features: ["Full HD/4K", "High Brightness", "Long Lamp Life"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Interactive Displays",
            description: "Touch-enabled displays for collaborative meetings and presentations. Write, annotate, and share content seamlessly.",
            features: ["4K Display", "Multi-Touch", "Whiteboard App"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Video Conferencing",
            description: "Complete video conferencing solutions with cameras, microphones, and speakers for hybrid meetings.",
            features: ["4K Camera", "Speaker Tracking", "Noise Cancellation"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Conference Phones",
            description: "Professional conference speakerphones for clear audio in meeting rooms. Wireless and wired options available.",
            features: ["360° Audio", "Noise Reduction", "Bluetooth"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Networking Devices",
        href: "/services/computer-peripherals/networking",
        description: "Essential networking equipment for office connectivity including routers, switches, and access points.",
        icon: "network",
        productCount: 4,
        products: [
          {
            name: "Routers",
            description: "Enterprise routers for reliable network connectivity. VPN support, load balancing, and advanced security features.",
            features: ["Dual WAN", "VPN Support", "Load Balancing"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Network Switches",
            description: "Managed and unmanaged network switches for office connectivity. PoE options for IP phones and cameras.",
            features: ["Managed/Unmanaged", "PoE Options", "Gigabit Speed"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Wireless Access Points",
            description: "WiFi 6/6E access points for high-density wireless coverage. Seamless roaming and guest network support.",
            features: ["WiFi 6/6E", "Mesh Support", "Guest Network"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Network Cables & Accessories",
            description: "Quality network cables, patch panels, and accessories for professional network installations.",
            features: ["Cat6/Cat6a", "Patch Panels", "Cable Management"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Accessories & Peripherals",
        href: "/services/computer-peripherals/accessories",
        description: "Essential computer accessories and peripherals to enhance productivity and user experience.",
        icon: "accessories",
        productCount: 6,
        products: [
          {
            name: "Monitors",
            description: "Professional monitors for productivity and multimedia. Various sizes from 21\" to 34\" ultra-wide displays.",
            features: ["Full HD/4K", "IPS Panel", "Adjustable Stand"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Keyboards & Mice",
            description: "Ergonomic keyboards and mice for comfortable all-day use. Wireless and wired options available.",
            features: ["Ergonomic Design", "Wireless/Wired", "Quiet Keys"],
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Webcams",
            description: "HD webcams for video conferencing and streaming. Built-in microphones and auto-focus for professional quality.",
            features: ["Full HD/4K", "Auto Focus", "Noise Cancelling"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Headsets",
            description: "Professional headsets for calls and online meetings. Noise-cancelling microphones and comfortable designs.",
            features: ["Noise Cancelling", "USB/3.5mm", "Comfortable Fit"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "External Storage",
            description: "External hard drives, SSDs, and flash drives for backup and data transfer. Various capacities available.",
            features: ["HDD/SSD", "USB 3.0/3.1", "Large Capacity"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Docking Stations",
            description: "USB-C and Thunderbolt docking stations for laptop connectivity. Connect multiple displays and peripherals.",
            features: ["Multi-Display", "USB-C/Thunderbolt", "Power Delivery"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software Solutions",
    href: "/services/enterprise-software",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Enterprise software platforms for banking, insurance, CRM, ERP, risk management, contact centers, and digital commerce.",
    items: [
      {
        label: "Digital Banking Solutions",
        href: "/services/enterprise-software/digital-banking",
        description: "Comprehensive digital banking platforms for modern financial institutions. Enable omnichannel banking experiences.",
        icon: "digital-banking",
        productCount: 4,
        products: [
          {
            name: "Internet Banking Platform",
            description: "Secure web-based banking platform with account management, fund transfers, bill payments, and comprehensive reporting.",
            features: ["Account Management", "Fund Transfers", "Bill Payments"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Mobile Banking App",
            description: "Feature-rich mobile banking application with biometric authentication, QR payments, and push notifications.",
            features: ["Biometric Login", "QR Payments", "Push Notifications"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Agency Banking",
            description: "Agent banking solution for financial inclusion. Enable banking services through authorized agents in remote areas.",
            features: ["Agent Management", "Cash In/Out", "Bill Collection"],
            image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Open Banking API",
            description: "API platform for open banking compliance and third-party integrations. Secure, scalable, and developer-friendly.",
            features: ["REST APIs", "OAuth 2.0", "Sandbox Environment"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "CRM Solutions",
        href: "/services/enterprise-software/crm",
        description: "Customer Relationship Management solutions to manage customer interactions, sales, and service delivery.",
        icon: "crm",
        productCount: 3,
        products: [
          {
            name: "Enterprise CRM",
            description: "Full-featured CRM platform with sales automation, marketing automation, and customer service modules.",
            features: ["Sales Pipeline", "Marketing Automation", "Customer Service"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Sales Force Automation",
            description: "Streamline sales processes with lead management, opportunity tracking, and sales forecasting tools.",
            features: ["Lead Management", "Opportunity Tracking", "Sales Forecasting"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Marketing Automation",
            description: "Automate marketing campaigns, email marketing, and lead nurturing with intelligent workflows.",
            features: ["Campaign Management", "Email Marketing", "Lead Scoring"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Digital Insurance Solutions",
        href: "/services/enterprise-software/insurance",
        description: "End-to-end insurance management solutions for life, general, and health insurance operations.",
        icon: "insurance",
        productCount: 3,
        products: [
          {
            name: "Core Insurance Platform",
            description: "Comprehensive insurance management system covering policy administration, claims, and reinsurance.",
            features: ["Policy Administration", "Claims Management", "Reinsurance"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Claims Management System",
            description: "Digital claims processing with workflow automation, fraud detection, and mobile claims submission.",
            features: ["Claim Registration", "Workflow Automation", "Fraud Detection"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Insurance Portal",
            description: "Self-service portal for policyholders to view policies, submit claims, and make payments online.",
            features: ["Policy View", "Claim Status", "Online Payment"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "ERP Solutions",
        href: "/services/enterprise-software/erp",
        description: "Enterprise Resource Planning solutions to integrate and automate core business processes.",
        icon: "erp",
        productCount: 4,
        products: [
          {
            name: "Finance & Accounting",
            description: "Complete financial management with general ledger, accounts payable/receivable, and financial reporting.",
            features: ["General Ledger", "AP/AR Management", "Budgeting"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Human Resources",
            description: "HR management solution with payroll, recruitment, performance management, and employee self-service.",
            features: ["Payroll", "Recruitment", "Performance"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Supply Chain Management",
            description: "End-to-end supply chain solution covering procurement, inventory, warehousing, and logistics.",
            features: ["Procurement", "Inventory", "Warehousing"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Manufacturing",
            description: "Manufacturing execution system with production planning, quality control, and maintenance management.",
            features: ["Production Planning", "Quality Control", "Maintenance"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Enterprise Risk Management",
        href: "/services/enterprise-software/risk",
        description: "Enterprise risk management and compliance solutions for financial institutions.",
        icon: "risk",
        productCount: 3,
        products: [
          {
            name: "Enterprise Risk Management",
            description: "Integrated risk management platform for identifying, assessing, and mitigating enterprise risks.",
            features: ["Risk Assessment", "Risk Register", "Control Management"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Credit Risk Management",
            description: "Credit risk assessment and monitoring solution with scoring models and portfolio analysis.",
            features: ["Credit Scoring", "Portfolio Analysis", "Watch List"],
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Regulatory Compliance",
            description: "Compliance management solution for regulatory reporting, AML, and KYC requirements.",
            features: ["Regulatory Reporting", "AML Screening", "KYC Management"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Credit/Loan Management",
        href: "/services/enterprise-software/credit",
        description: "Complete loan lifecycle management from origination to collection and recovery.",
        icon: "credit",
        productCount: 3,
        products: [
          {
            name: "Loan Origination System",
            description: "Digital loan application and origination platform with automated underwriting and decisioning.",
            features: ["Application Portal", "Document Collection", "Credit Assessment"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Loan Management System",
            description: "Core loan management with scheduling, collections, and accounting integration.",
            features: ["Loan Scheduling", "Payment Processing", "Interest Calculation"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Collection & Recovery",
            description: "Collections management with automated reminders, workout plans, and recovery tracking.",
            features: ["Collection Strategies", "Automated Reminders", "Workout Plans"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Contact Center Solution",
        href: "/services/enterprise-software/contact-center",
        description: "Omnichannel contact center solutions for seamless customer communication.",
        icon: "contact-center",
        productCount: 3,
        products: [
          {
            name: "Call Center Platform",
            description: "Full-featured call center solution with IVR, ACD, call recording, and workforce management.",
            features: ["IVR System", "ACD Routing", "Call Recording"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Omnichannel Platform",
            description: "Unified communication platform integrating voice, email, chat, and social media channels.",
            features: ["Voice", "Email", "Chat"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Help Desk System",
            description: "IT service management solution with ticketing, knowledge base, and SLA management.",
            features: ["Ticket Management", "Knowledge Base", "SLA Tracking"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Customer Experience Solution",
        href: "/services/enterprise-software/cx",
        description: "Customer experience platforms to measure, analyze, and improve customer satisfaction.",
        icon: "cx",
        productCount: 3,
        products: [
          {
            name: "Customer Feedback System",
            description: "Multi-channel feedback collection and analysis with NPS, CSAT, and sentiment analysis.",
            features: ["Multi-Channel Survey", "NPS Tracking", "CSAT Measurement"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Journey Analytics",
            description: "Customer journey mapping and analytics to understand and optimize touchpoints.",
            features: ["Journey Mapping", "Touchpoint Analysis", "Behavior Analytics"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Voice of Customer",
            description: "Unified VoC platform aggregating feedback from all channels for actionable insights.",
            features: ["Feedback Aggregation", "Text Analytics", "Trend Analysis"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "E-Commerce Solutions",
        href: "/services/enterprise-software/ecommerce",
        description: "Complete e-commerce platforms for online retail, B2B commerce, and marketplace solutions.",
        icon: "ecommerce",
        productCount: 4,
        products: [
          {
            name: "E-Commerce Platform",
            description: "Full-featured online store with product catalog, shopping cart, checkout, and order management.",
            features: ["Product Catalog", "Shopping Cart", "Secure Checkout"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Marketplace Solution",
            description: "Multi-vendor marketplace platform with seller management, commission tracking, and escrow payments.",
            features: ["Vendor Onboarding", "Product Listing", "Commission Mgmt"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "B2B Commerce",
            description: "Business-to-business commerce platform with custom pricing, bulk ordering, and account management.",
            features: ["Custom Pricing", "Bulk Orders", "Account Management"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Payment Integration",
            description: "Payment gateway integration for local and international payment methods including mobile money.",
            features: ["Multiple Gateways", "Mobile Money", "Card Payments"],
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "bpo-service",
    title: "BPO Service",
    href: "/services/bpo-service",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Professional business process outsourcing services including customer support, IT help desk, back office, telemarketing, and data management.",
    items: [
      {
        label: "Customer Support Service",
        href: "/services/bpo-service/customer-support",
        description: "Professional customer support services to enhance customer satisfaction and loyalty. Multi-channel support available.",
        icon: "customer",
        productCount: 4,
        products: [
          {
            name: "Inbound Call Center",
            description: "24/7 inbound call handling for customer inquiries, complaints, and service requests. Trained agents with product knowledge.",
            features: ["24/7 Coverage", "Multi-language", "Quality Assurance"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Email Support",
            description: "Professional email support with timely responses and ticket management. Ideal for non-urgent inquiries and documentation.",
            features: ["Timely Responses", "Ticket System", "Template Library"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Live Chat Support",
            description: "Real-time chat support for websites and apps. Quick responses and personalized assistance for better conversion.",
            features: ["Real-time Chat", "Proactive Engagement", "Chatbots"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Social Media Support",
            description: "Monitor and respond to customer inquiries on social media platforms. Manage reputation and engage with customers.",
            features: ["Platform Monitoring", "Response Management", "Sentiment Analysis"],
            image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "IT Help Desk Support",
        href: "/services/bpo-service/it-help",
        description: "Technical support services for IT infrastructure, applications, and end-user issues. Multi-tier support available.",
        icon: "help-desk",
        productCount: 4,
        products: [
          {
            name: "Level 1 Support",
            description: "First-line technical support for basic IT issues. Password resets, software installation, and common troubleshooting.",
            features: ["Password Resets", "Basic Troubleshooting", "Software Installation"],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Level 2 Support",
            description: "Advanced technical support for complex issues. System administration, network troubleshooting, and escalations.",
            features: ["Advanced Troubleshooting", "System Administration", "Network Issues"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Level 3 Support",
            description: "Expert-level support involving vendors and specialized teams. Infrastructure issues and critical incidents.",
            features: ["Expert Resolution", "Vendor Coordination", "Critical Incidents"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "IT Service Management",
            description: "Complete IT service management following ITIL best practices. Incident, problem, and change management.",
            features: ["Incident Management", "Problem Management", "Change Management"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Back Office Support",
        href: "/services/bpo-service/back-office",
        description: "Administrative and operational support services to streamline business processes and improve efficiency.",
        icon: "back-office",
        productCount: 4,
        products: [
          {
            name: "Document Processing",
            description: "Digital document processing including scanning, indexing, and archiving. Reduce paper and improve accessibility.",
            features: ["Document Scanning", "OCR Processing", "Indexing"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Account & Finance Support",
            description: "Accounts payable/receivable processing, reconciliation, and financial reporting support. Compliance with regulations.",
            features: ["AP/AR Processing", "Reconciliation", "Invoice Processing"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "HR Administration",
            description: "HR support services including payroll processing, employee onboarding, and records management.",
            features: ["Payroll Processing", "Onboarding Support", "Records Management"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Claims Processing",
            description: "Insurance and warranty claims processing with verification, assessment, and settlement support.",
            features: ["Claim Verification", "Document Review", "Assessment Support"],
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Telemarketing Service",
        href: "/services/bpo-service/telemarketing",
        description: "Outbound calling services for sales, lead generation, and customer engagement. Trained agents with sales expertise.",
        icon: "telemarketing",
        productCount: 4,
        products: [
          {
            name: "Lead Generation",
            description: "B2B and B2C lead generation campaigns. Qualify prospects and schedule appointments for your sales team.",
            features: ["Prospect Research", "Cold Calling", "Lead Qualification"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Sales Campaigns",
            description: "Outbound sales campaigns with trained agents. Product promotion, upselling, and cross-selling.",
            features: ["Product Promotion", "Upselling", "Cross-selling"],
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Customer Retention",
            description: "Win-back campaigns and retention calls. Address concerns, offer incentives, and reduce churn.",
            features: ["Win-back Campaigns", "Retention Offers", "Survey Calls"],
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Market Research",
            description: "Telephone surveys and market research. Gather insights and feedback from target audiences.",
            features: ["Survey Design", "Data Collection", "Respondent Screening"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      {
        label: "Data Entry & Management",
        href: "/services/bpo-service/data-entry",
        description: "Accurate and efficient data entry services for various business needs. Quality assurance and data validation.",
        icon: "data-entry",
        productCount: 4,
        products: [
          {
            name: "Data Entry Services",
            description: "Accurate data entry from various sources including paper documents, images, and audio files.",
            features: ["High Accuracy", "Fast Turnaround", "Multiple Formats"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Data Cleansing",
            description: "Clean and standardize existing data. Remove duplicates, correct errors, and update outdated information.",
            features: ["Duplicate Removal", "Error Correction", "Standardization"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Data Conversion",
            description: "Convert data between different formats. PDF to Excel, image to text, and database migrations.",
            features: ["Format Conversion", "Database Migration", "OCR Services"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "Database Management",
            description: "Ongoing database maintenance and updates. Regular data validation and database health checks.",
            features: ["Regular Updates", "Validation Checks", "Backup Management"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "export",
    title: "Export",
    href: "/export",
    heroImage: "/cofee_hero.webp.webp",
    items: [
      { label: "Coffee", href: "/coffee" },
      { label: "Coffee Export", href: "/export/coffee-export" },
    ],
  },
];
