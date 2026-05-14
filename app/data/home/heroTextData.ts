// data/heroTextData.ts

export interface HeroLine {
  text: string;
  subtitle: string;
  accent: boolean;
}

export const heroLines: HeroLine[] = [
  {
    text: "DISCOVER",
    subtitle: "Understand People",
    accent: false,
  },
  {
    text: "DECODE",
    subtitle: "Build Influence",
    accent: true,
  },
  {
    text: "DELIVER",
    subtitle: "Move Culture",
    accent: false,
  },
];

export const heroMeta = {
  sideLabel: "Narrative •  Intelligence •  Framework",

  topTags: [
    "Media Intelligence",
    "Influence Systems",
    "Narrative Architecture",
    "Public Perception",
  ],

  ctaText: "Enter The System",
};