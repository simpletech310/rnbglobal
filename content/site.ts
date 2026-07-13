export const site = {
  name: "R and B Global Security",
  shortName: "R&B Global Security",
  tagline: "Trained, licensed, and ready to protect what matters.",
  description:
    "California-licensed security firm providing uniformed guards, patrol, event security, and BSIS-aligned guard card and firearm training across Southern California.",
  url: "https://www.randbglobalsecurity.com",
  email: "info@randbglobalsecurity.com",
  phone: "310-438-3044",
  phoneHref: "tel:+13104383044",
  address: {
    street: "7300 Alondra Blvd, Suite 201",
    city: "Paramount",
    region: "CA",
    postalCode: "90723",
    country: "US",
  },
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed (24/7 dispatch for active clients)" },
  ],
  founded: 1998,
  yearsExperience: 27,
  ppoLicense: "PPO# 119984",
  socials: {
    instagram: "https://instagram.com/randbglobalsecurity",
    facebook: "https://facebook.com/randbglobalsecurity",
  },
  serviceArea: [
    "Los Angeles County",
    "Orange County",
    "Long Beach",
    "Compton",
    "Paramount",
    "Norwalk",
    "Cerritos",
    "Lakewood",
    "Bellflower",
    "Downey",
  ],
} as const;

export const formattedAddress = (() => {
  const a = site.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
})();
