export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  certifications?: string[];
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Raymond Baker",
    role: "Owner & Founder",
    initials: "RB",
    bio: "Raymond founded R and B Global Security after more than two decades in the security industry, with a clear standard for how guards should be trained, supervised, and held accountable. He runs the company day-to-day, knows every active client by name, and is the person on the other end of the line when an issue needs an owner-level call.",
    certifications: [
      "California BSIS — 27+ years in the industry",
      "Firearm and baton instructor",
      "CPR / AED certified",
    ],
  },
];
