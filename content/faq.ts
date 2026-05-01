export type FaqItem = { question: string; answer: string; group: "hire" | "train" | "general" };

export const faq: FaqItem[] = [
  {
    group: "hire",
    question: "What's the minimum contract length?",
    answer:
      "We don't have one. We staff one-night events as readily as multi-year posts. Most ongoing clients run on a month-to-month service agreement that either side can adjust with 30 days' notice.",
  },
  {
    group: "hire",
    question: "How quickly can you start coverage?",
    answer:
      "For standard posts in Southern California we can typically deploy within 24–72 hours of a signed agreement. Same-day coverage is possible for emergencies — call us directly and we'll tell you honestly whether we can staff it.",
  },
  {
    group: "hire",
    question: "Are your guards armed or unarmed?",
    answer:
      "Both. We provide unarmed officers by default. Armed officers carry a current BSIS exposed firearm permit, qualify on the range regularly, and are deployed only when the post and client request requires it.",
  },
  {
    group: "hire",
    question: "Are you licensed and insured?",
    answer:
      "Yes. We hold a California Private Patrol Operator (PPO) license through the Bureau of Security and Investigative Services and carry general liability and workers' compensation insurance. Certificates of insurance are available on request.",
  },
  {
    group: "hire",
    question: "Do you write incident and daily activity reports?",
    answer:
      "Every shift produces a daily activity report (DAR) delivered to a contact of your choice. Incidents are reported in real time by phone and followed by a written incident report the same shift.",
  },
  {
    group: "train",
    question: "How do I get a California Guard Card?",
    answer:
      "Three steps: (1) complete the 8-hour Power to Arrest course, (2) Live Scan fingerprinting, (3) submit your application to BSIS. We teach the course, walk you through Live Scan referrals, and offer a Guard Card processing session to submit the application correctly.",
  },
  {
    group: "train",
    question: "Do I have to take the firearm course at R&B if I trained elsewhere?",
    answer:
      "No. Any BSIS-aligned firearm course is accepted toward your exposed firearm permit. If you're starting from scratch we'd love to be your school — we run our class small and the range time is real.",
  },
  {
    group: "train",
    question: "How often do you run classes?",
    answer:
      "Guard Card and firearm courses run regularly throughout the month. Submit an inquiry and we'll send the next available dates.",
  },
  {
    group: "train",
    question: "Can my employer pay for my training?",
    answer:
      "Yes — we invoice employers directly when an organization enrolls multiple officers. Get in touch with the company name and number of seats and we'll send a quote.",
  },
  {
    group: "general",
    question: "What's your service area?",
    answer:
      "We're based in Paramount and primarily serve Los Angeles and Orange counties. We'll travel further for larger contracts and events — call us with your details.",
  },
  {
    group: "general",
    question: "Do you do background checks on every guard?",
    answer:
      "Yes. Every officer is BSIS-licensed (which requires a state and federal background check) and goes through our internal hiring process before stepping on a post.",
  },
];
