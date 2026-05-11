// Stock photography references — Unsplash editorial photos.
// Centralized so each slot is easy to swap for real client photography later.
// Replace any ID below with a custom photo (drop a file into /public/photos/
// and switch the URL string to `/photos/your-file.jpg`).

const unsplash = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  // HOME
  heroOfficer: {
    src: unsplash("1531497865144-0464ef8fb9a9", 2400), // urban building / nightline
    alt: "Security officer on patrol at an urban property in the evening.",
  },
  contractSecurity: {
    src: unsplash("1486406146926-c627a92ad1ab", 1600),
    alt: "Officer providing site security at a corporate building entrance.",
  },
  training: {
    src: unsplash("1554080353-a576cf803bda", 1600),
    alt: "Training session for security personnel in a classroom setting.",
  },
  founder: {
    src: unsplash("1560250097-0b93528c311a", 1200),
    alt: "Portrait placeholder for company founder.",
  },

  // INDUSTRIES
  industries: {
    retail: {
      src: unsplash("1441986300917-64674bd600d8", 1400),
      alt: "Storefront entrance to a modern retail center.",
    },
    events: {
      src: unsplash("1429962714451-bb934ecdc4ec", 1400),
      alt: "Event venue with crowd at dusk.",
    },
    "corporate-office": {
      src: unsplash("1497366216548-37526070297c", 1400),
      alt: "Corporate office building exterior at dusk.",
    },
    "residential-hoa": {
      src: unsplash("1582407947304-fd86f028f716", 1400),
      alt: "Aerial view of a residential community.",
    },
    construction: {
      src: unsplash("1503387762-592deb58ef4e", 1400),
      alt: "Construction site with cranes at dusk.",
    },
  } as Record<string, { src: string; alt: string }>,

  // SERVICES
  services: {
    "uniformed-guards": {
      src: unsplash("1486406146926-c627a92ad1ab", 1600),
      alt: "Uniformed security officer at a building entrance.",
    },
    patrol: {
      src: unsplash("1494522855154-9297ac14b55f", 1600),
      alt: "Marked patrol vehicle in a parking structure at night.",
    },
    "event-security": {
      src: unsplash("1492684223066-81342ee5ff30", 1600),
      alt: "Crowd at a live event being managed by event security.",
    },
    "camera-installation": {
      src: unsplash("1557804506-669a67965ba0", 1600),
      alt: "Professional CCTV camera mounted on a building exterior.",
    },
  } as Record<string, { src: string; alt: string }>,

  // TRAINING
  trainingPrograms: {
    "guard-card": {
      src: unsplash("1524178232363-1fb2b075b655", 1600),
      alt: "Instructor leading a security training class.",
    },
    firearm: {
      src: unsplash("1595590425299-d77fa67d9ec3", 1600),
      alt: "Firearm safety training at the range.",
    },
  } as Record<string, { src: string; alt: string }>,
};

export type PhotoRef = { src: string; alt: string };
