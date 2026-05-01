export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  whoFor: string[];
  whatsIncluded: string[];
  scenarios: string[];
  icon: "shield" | "users" | "camera" | "patrol" | "siren";
};

export const services: Service[] = [
  {
    slug: "uniformed-guards",
    name: "Uniformed Security Guards",
    short: "Visible, vetted, on-post.",
    summary:
      "Professionally uniformed officers deployed to your site for access control, deterrence, and rapid response. Every guard carries a current California Guard Card and completes our internal post orientation before stepping on property.",
    whoFor: [
      "Office buildings and corporate campuses",
      "Retail centers and standalone storefronts",
      "Residential communities and HOAs",
      "Construction sites and industrial yards",
    ],
    whatsIncluded: [
      "BSIS-licensed, background-checked officers",
      "Daily activity reports delivered to your inbox",
      "Custom post orders tailored to your site",
      "Supervisor patrol checks during every shift",
      "Direct line to dispatch 24/7",
    ],
    scenarios: [
      "Front-desk lobby coverage from open to close",
      "Overnight site security with hourly tour rounds",
      "Multi-tenant building access control and visitor logs",
    ],
    icon: "shield",
  },
  {
    slug: "patrol",
    name: "Mobile Patrol",
    short: "Marked vehicle patrols on a schedule that deters.",
    summary:
      "Randomized and scheduled vehicle patrols that monitor your property between fixed-post hours. Each visit produces a timestamped, geotagged report so you always know we showed up.",
    whoFor: [
      "Properties without 24/7 on-post coverage",
      "Multi-location portfolios",
      "Apartment complexes and storage facilities",
      "Vacant or under-construction sites",
    ],
    whatsIncluded: [
      "Marked patrol vehicles with visible signage",
      "GPS-tracked tour logs with photo verification",
      "Alarm and gate response on request",
      "Open / close coverage for businesses",
      "Detailed incident reporting",
    ],
    scenarios: [
      "Three randomized overnight visits per property",
      "Lock-up rounds for retail strip centers",
      "Vacancy checks during long holiday weekends",
    ],
    icon: "patrol",
  },
  {
    slug: "event-security",
    name: "Event Security",
    short: "Crowds, VIPs, gates, and the calm in between.",
    summary:
      "Plan-driven event coverage from a single doorman to multi-officer deployments with command structure. We coordinate with venue staff, local PD, and your production team so the event runs smoothly start to finish.",
    whoFor: [
      "Private events and weddings",
      "Concerts, festivals, and public gatherings",
      "Conferences and corporate functions",
      "Film productions and on-set security",
    ],
    whatsIncluded: [
      "Pre-event walkthrough and risk plan",
      "Credentialed access and bag checks",
      "Crowd flow and perimeter management",
      "VIP and talent escort options",
      "Post-event after-action report",
    ],
    scenarios: [
      "Two-officer doorman team for a private 200-guest reception",
      "Six-officer crowd team for an outdoor concert",
      "On-set overnight security for a multi-day shoot",
    ],
    icon: "users",
  },
  {
    slug: "camera-installation",
    name: "Camera & CCTV Installation",
    short: "Coverage you can review on your phone.",
    summary:
      "Professionally installed surveillance systems with remote viewing, motion alerts, and storage that fits your retention policy. We design the layout, run the cabling, and train your team on the system.",
    whoFor: [
      "Small businesses upgrading from consumer cameras",
      "Property managers consolidating multi-site footage",
      "Homeowners wanting reliable, professional coverage",
    ],
    whatsIncluded: [
      "Site survey and camera placement plan",
      "4K and HD options with night vision",
      "Cloud or on-premises NVR storage",
      "Mobile app setup and staff training",
      "Optional monthly monitoring add-on",
    ],
    scenarios: [
      "8-camera retail storefront with cash-register coverage",
      "16-camera apartment building exterior + lobby",
      "4-camera residential perimeter with motion alerts",
    ],
    icon: "camera",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
