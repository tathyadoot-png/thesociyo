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
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
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
      "/ecosystem/3.jpg",
  },

  {
    number: "04",

    title: "Technology & Digital Solution",

    description:
      "Building adaptable digital experiences that support functionality, accessibility and evolving organizational needs.",

    image:
      "/ecosystem/4.jpg",
  },
];