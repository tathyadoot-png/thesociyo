// ecosystems.ts

export interface EcosystemItem {
  number: string;

  title: string;

  description: string;

  image: string;
}

export const ecosystemsHeading = {
  sectionLabel: "Our Ecosystems",

  heading: {
    first: "Different",
    highlight: "Sectors",
    last: "One Direction",
  },

  shortText:
    "Diverse communication ecosystems connected through one integrated viewpoint. Different sectors. Different audiences. One connected approach.",
};

export const ecosystemsData: EcosystemItem[] = [
  {
    number: "01",

    title: "Corporate & Business Communication",

    description:
      "Supporting brands through positioning, audience engagement and communication designed for long-term market relevance.",

    image:
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780314386/1111_fyuyi8.png",
  },

  {
    number: "02",

    title: "Political Campaign & Public Communication",

    description:
      "Managing communication narratives, voter engagement and outreach initiatives shaped around public connection.",

    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop",
  },

  {
    number: "03",

    title: "Social & Development Communication",

    description:
      "Strengthening awareness, participation and execution support for organizations working within communities and impact-driven programs.",

    image:
      "https://res.cloudinary.com/dii2m7ebc/image/upload/v1780294422/3_kmqvvn.jpg",
  },

  {
    number: "04",

    title: "Technology & Digital Solution",

    description:
      "Building adaptable digital experiences that support functionality, accessibility and evolving organizational needs.",

    image:
      "https://res.cloudinary.com/dii2m7ebc/image/upload/v1780294423/4_kfqctl.jpg",
  },
];