export type Testimonial = {
  quote: string;
  attribution: string;
  role: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "R&B's guards know our property and our residents. The reports come in every morning and we haven't had a serious incident in over a year.",
    attribution: "Property Manager",
    role: "Long Beach residential community",
    placeholder: true,
  },
  {
    quote:
      "We brought R&B in for a one-night corporate event and ended up keeping them on retainer. Their officers represent our brand the way we'd represent it ourselves.",
    attribution: "Director of Facilities",
    role: "Corporate office, Los Angeles",
    placeholder: true,
  },
  {
    quote:
      "I took the Guard Card and firearm course back-to-back. The instruction was clear, the range time was real, and I had my permit in hand within weeks.",
    attribution: "Recent graduate",
    role: "Guard Card + Firearm Training",
    placeholder: true,
  },
];
