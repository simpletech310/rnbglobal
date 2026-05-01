export type Industry = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  painPoints: string[];
  howWeHelp: string[];
  guardProfile: string;
  postSpecs: string[];
};

export const industries: Industry[] = [
  {
    slug: "retail",
    name: "Retail & Storefront",
    short: "Loss prevention, customer-safety presence, opening and closing coverage.",
    intro:
      "Retail security is about presence and process — a uniformed officer at the door changes shrink numbers, and a closing-team escort changes how safe staff feel walking to their cars.",
    painPoints: [
      "Repeat shoplifters and organized retail crime",
      "Aggressive customer incidents and de-escalation",
      "Unsafe closing routines for staff",
      "Parking-lot loitering and panhandling",
    ],
    howWeHelp: [
      "Greeter / loss-prevention guards at high-traffic entrances",
      "Closing-team escort to vehicles with patrol vehicle backup",
      "After-hours mobile patrol of parking lots",
      "Coordinated incident reporting your insurer will accept",
    ],
    guardProfile:
      "Customer-facing officers trained in de-escalation and Power to Arrest, comfortable working alongside store associates without disrupting the customer experience.",
    postSpecs: [
      "Greeter post — open to close, single officer",
      "Closing-team escort — last hour of operations",
      "Overnight mobile patrol — three randomized visits",
    ],
  },
  {
    slug: "events",
    name: "Events & Hospitality",
    short: "Doormen, crowd flow, VIP, credentials, and a clean after-action report.",
    intro:
      "From a backyard wedding to a 5,000-person concert, the playbook is the same: plan the perimeter, brief the team, run the gate, and leave the venue cleaner than you found it.",
    painPoints: [
      "Unticketed gate-crashing and credential fraud",
      "Crowd surges at choke points",
      "VIP and talent privacy concerns",
      "Vendor and load-in/load-out theft",
    ],
    howWeHelp: [
      "Pre-event site walk and written security plan",
      "Credential checks, bag checks, and gate management",
      "VIP and talent escort with discreet posture",
      "After-action report you can hand to insurance or the venue",
    ],
    guardProfile:
      "Hospitality-aware officers who can hold a perimeter without holding up a guest list. Many have private-event and concert experience.",
    postSpecs: [
      "Single-doorman team for private 100–250 guest events",
      "Multi-officer credentialed gate for concerts and festivals",
      "Talent and dressing-room security for productions",
    ],
  },
  {
    slug: "corporate-office",
    name: "Corporate Office & Campus",
    short: "Lobby presence, badge checks, after-hours access, executive protection light.",
    intro:
      "Office security is hospitality with consequences. Your guards represent the brand to every visitor and they're the people who decide who gets past the elevators after hours.",
    painPoints: [
      "Tailgating into secured floors",
      "Visitor-log compliance for audits and SOC 2",
      "Disgruntled-employee and termination-day risk",
      "After-hours service-vendor access control",
    ],
    howWeHelp: [
      "Polished front-desk officers with hospitality training",
      "Visitor-log software and daily reporting",
      "Termination-day standby and walk-out coordination",
      "After-hours card-access enforcement and patrol",
    ],
    guardProfile:
      "Front-of-house ready, business-attire-or-uniform flexible, comfortable with executive guests, building management, and IT/Facilities teams.",
    postSpecs: [
      "Lobby concierge — 7am to 7pm weekdays",
      "Overnight access-control rover",
      "Termination-day on-call coverage",
    ],
  },
  {
    slug: "residential-hoa",
    name: "Residential & HOA",
    short: "Gate attendants, patrol coverage, neighborhood deterrence.",
    intro:
      "Residents notice when security is consistent. We staff communities with officers who know the residents by name and know which cars belong on which streets.",
    painPoints: [
      "Package theft and porch piracy",
      "Trespassers in pool, gym, and amenity areas",
      "Unauthorized parking and vendor access",
      "After-hours noise and party complaints",
    ],
    howWeHelp: [
      "Gatehouse staffing with visitor logs and tag systems",
      "Marked patrol with photo-verified tour reports",
      "Amenity-area lockup and unlock service",
      "Direct line to property manager for incidents",
    ],
    guardProfile:
      "Long-term posted officers who build relationships with residents and recognize who belongs on property.",
    postSpecs: [
      "Gatehouse — 24/7 or evening-only",
      "Mobile patrol — 3–6 visits per night",
      "Amenity coverage — pool and gym hours",
    ],
  },
  {
    slug: "construction",
    name: "Construction & Industrial",
    short: "Equipment theft, copper, vandalism, and overnight site security.",
    intro:
      "An empty job site is a target. Visible patrol presence and overnight on-site officers protect tools, copper, and finished work from theft and vandalism that can stall a project.",
    painPoints: [
      "Overnight tool and copper theft",
      "Trespassing and vandalism on the partially built structure",
      "Unauthorized after-hours material removal",
      "Liability around unsecured perimeters",
    ],
    howWeHelp: [
      "Overnight on-site guards with mobile reporting",
      "Marked patrol of multiple sites in a portfolio",
      "Trailer and gang-box check-ins",
      "Coordination with general contractor and superintendent",
    ],
    guardProfile:
      "Self-directed officers comfortable working remote sites alone, trained to log everything and call dispatch first.",
    postSpecs: [
      "Overnight on-site — 6pm to 6am",
      "Mobile patrol portfolio — randomized 3 visits per site",
      "Lock-up and gate coverage at shift change",
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
