export type TrainingProgram = {
  slug: string;
  name: string;
  short: string;
  hours: string;
  price: string;
  summary: string;
  learn: string[];
  requirements: string[];
  outcome: string;
  bsisAligned: boolean;
};

export const training: TrainingProgram[] = [
  {
    slug: "guard-card",
    name: "Guard Card Training (BSIS Power to Arrest)",
    short: "The 8-hour class California requires before you can work as a guard.",
    hours: "8 hours",
    price: "$150",
    summary:
      "California's mandatory pre-licensing course covering Power to Arrest, weapons of mass destruction awareness, and the legal foundations of the security profession. Pass the in-class exam and we walk you through the BSIS application the same day.",
    learn: [
      "Power to Arrest — when, how, and the limits",
      "Public relations and observation skills",
      "Communication and report-writing fundamentals",
      "Liability, ethics, and use-of-force law",
      "Weapons of mass destruction awareness (WMD)",
    ],
    requirements: [
      "Be 18 years or older",
      "Valid government-issued photo ID",
      "Live Scan fingerprinting (we can refer)",
      "Clean, professional attire",
    ],
    outcome:
      "Course completion certificate accepted by the California Bureau of Security and Investigative Services (BSIS) toward your Guard Card.",
    bsisAligned: true,
  },
  {
    slug: "firearm",
    name: "Firearm Training (Exposed Firearm Permit)",
    short: "BSIS-aligned firearm course for guards seeking the exposed firearm permit.",
    hours: "10 hours (classroom + range)",
    price: "$260",
    summary:
      "Classroom instruction followed by live-fire range qualification. Covers safety, legal authority, weapon handling, and shooting fundamentals. You'll leave with the certificate required to apply for your BSIS exposed firearm permit.",
    learn: [
      "Firearm safety and the four cardinal rules",
      "Legal and moral aspects of using deadly force",
      "Weapon handling, malfunctions, and maintenance",
      "Marksmanship fundamentals and qualification course of fire",
      "Holster draw, reload, and recovery",
    ],
    requirements: [
      "Valid California Guard Card or in process",
      "Valid government-issued photo ID",
      "Eye and ear protection (loaners available)",
      "Range fees and ammunition included",
    ],
    outcome: "BSIS-aligned firearm training certificate for the exposed firearm permit application.",
    bsisAligned: true,
  },
  {
    slug: "guard-card-processing",
    name: "Guard Card Processing Assistance",
    short: "We sit with you and submit the BSIS application correctly the first time.",
    hours: "1 hour",
    price: "$30",
    summary:
      "One-on-one help filling out and submitting the California Guard Card application through BSIS. Includes a fee and document checklist so nothing gets rejected.",
    learn: [
      "How to complete the BSIS online application",
      "Live Scan and fingerprinting requirements",
      "Fee schedule and payment options",
      "Common rejection reasons and how to avoid them",
    ],
    requirements: [
      "Completed Guard Card course certificate",
      "Government-issued photo ID",
      "Valid email address",
    ],
    outcome: "A submitted, complete Guard Card application — you walk out with a confirmation number.",
    bsisAligned: true,
  },
  {
    slug: "baton",
    name: "Baton Training",
    short: "Permit-aligned course for the use and carry of a baton.",
    hours: "8 hours",
    price: "$120",
    summary:
      "Classroom and hands-on training covering baton retention, target zones, and use-of-force law. Required for guards who carry an expandable or straight baton on post.",
    learn: [
      "Baton stances and retention",
      "Approved target zones and prohibited strikes",
      "Use-of-force continuum",
      "Carrying, drawing, and re-holstering",
    ],
    requirements: ["Valid California Guard Card", "Government-issued photo ID"],
    outcome: "BSIS-aligned baton training certificate.",
    bsisAligned: true,
  },
  {
    slug: "cpr",
    name: "CPR / AED Certification",
    short: "Two-year certification recognized industry-wide.",
    hours: "4 hours",
    price: "$75",
    summary:
      "American Heart Association–style adult CPR and AED training. Required by many security contracts and a serious life skill for officers in the field.",
    learn: [
      "Adult, child, and infant CPR",
      "AED operation and pad placement",
      "Choking response (Heimlich)",
      "Recovery position and scene safety",
    ],
    requirements: ["No prerequisites"],
    outcome: "Two-year CPR / AED certification card.",
    bsisAligned: false,
  },
  {
    slug: "handcuff",
    name: "Handcuff Training",
    short: "Safe, legal application and removal of restraints.",
    hours: "4 hours",
    price: "$75",
    summary:
      "Hands-on training in handcuff technique, restraint law, and post-arrest procedure for licensed guards.",
    learn: [
      "Standing and prone application",
      "Double-locking and re-checks",
      "Removal and key control",
      "Documentation and chain of custody",
    ],
    requirements: ["Valid California Guard Card"],
    outcome: "Handcuff training certificate of completion.",
    bsisAligned: false,
  },
  {
    slug: "pepper-spray",
    name: "Pepper Spray (OC) Training",
    short: "Carry and deploy pepper spray confidently and lawfully.",
    hours: "4 hours",
    price: "$75",
    summary:
      "Covers OC chemistry, legal use, decontamination, and live-spray practical exercise for guards who carry pepper spray on duty.",
    learn: [
      "OC effects and decontamination",
      "Legal authority and use-of-force",
      "Drawing and accurate deployment",
      "Post-deployment care and reporting",
    ],
    requirements: ["Valid California Guard Card"],
    outcome: "Pepper spray training certificate of completion.",
    bsisAligned: false,
  },
];

export const getTraining = (slug: string) => training.find((t) => t.slug === slug);
