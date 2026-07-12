// Stock photography references — Unsplash editorial photos.
// Centralized so each slot is easy to swap for real client photography later.
// Replace any ID below with a custom photo (drop a file into /public/photos/
// and switch the URL string to `/photos/your-file.jpg`).

const unsplash = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  // HOME
  heroOfficer: {
    src: "/photos/hero-officer.jpg",
    alt: "R&B Global Security officer on post at a Southern California property at dusk.",
  },
  contractSecurity: {
    src: "/photos/contract-security.jpg",
    alt: "Uniformed R&B officer providing site security at a commercial building entrance.",
  },
  training: {
    src: "/photos/training-classroom.jpg",
    alt: "Guard card training class in session with an instructor and students.",
  },
  founder: {
    src: unsplash("1560250097-0b93528c311a", 1200),
    alt: "Portrait placeholder for company founder.",
  },

  // INDUSTRIES
  industries: {
    retail: {
      src: "/photos/industry-retail.jpg",
      alt: "Uniformed officer providing a loss-prevention presence at a retail storefront.",
    },
    events: {
      src: "/photos/industry-events.jpg",
      alt: "Event security staff checking credentials at a venue entrance at dusk.",
    },
    "corporate-office": {
      src: "/photos/industry-corporate-office.jpg",
      alt: "Front-desk security officer in a modern corporate office lobby.",
    },
    "residential-hoa": {
      src: "/photos/industry-residential-hoa.jpg",
      alt: "Security guard at the gatehouse of a gated residential community.",
    },
    construction: {
      src: "/photos/industry-construction.jpg",
      alt: "Security guard patrolling a fenced construction site at night.",
    },
  } as Record<string, { src: string; alt: string }>,

  // SERVICES
  services: {
    "uniformed-guards": {
      src: "/photos/contract-security.jpg",
      alt: "Uniformed security officer on post at a building entrance.",
    },
    patrol: {
      src: unsplash("1494522855154-9297ac14b55f", 1600),
      alt: "Marked patrol vehicle in a parking structure at night.",
    },
    "event-security": {
      src: "/photos/industry-events.jpg",
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
      src: "/photos/training-classroom.jpg",
      alt: "Instructor leading a guard card training class.",
    },
    firearm: {
      src: "/photos/training-range.jpg",
      alt: "Certified firearm safety instruction at an indoor range.",
    },
  } as Record<string, { src: string; alt: string }>,
};

export type PhotoRef = { src: string; alt: string };
