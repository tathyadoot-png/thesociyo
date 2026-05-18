// data/home/insideSociyoData.ts

export interface InsideSociyoCard {
  title: string;
  description: string;
}

export interface InsideSociyoData {
  sectionLabel: string;
  heading: {
    first: string;
    highlight: string;
    last: string;
  };

  shortText: string;

  cards: InsideSociyoCard[];
}

export const insideSociyoData: InsideSociyoData = {
  sectionLabel: "Inside Sociyo",

  heading: {
    first: "Turning",
    highlight: "Attention",
    last: "Into Connection",
  },

  shortText:
    "Built around the belief that communication should move people - not just reach them.",

  cards: [
    {
      title: "Founded In 2018",

      description:
        "Sociyo Communications works across corporate communication, political outreach, development initiatives and digital transformation.",
    },

    {
      title: "Strategic Communication",

      description:
        "Our work combines effective communication, creative thinking, strategic direction and implementation support to help organizations communicate with greater clarity, consistency and purpose.",
    },

    {
      title: "Human-Centered Narrative",

      description:
        "Whether shaping narratives, strengthening engagement or building digital experiences, the focus remains the same — creating communication that feels aligned, intentional and human.",
    },
  ],
};