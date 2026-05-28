// app/data/creatives/creatives.ts

type Creative =
  | {
      id: string;

      type: "single";

      title: string;

      category: string;

      image: string;

      alt: string;
    }
  | {
      id: string;

      type: "carousel";

      title: string;

      category: string;

      images: string[];

      alt: string;
    };

export const creatives: Creative[] = [
  {
    id: "01",

    type: "single",

    title:
      "Campaign Identity Design",

    category:
      "Brand Campaign",

    image:
      "/creatives/1.jpeg",

    alt:
      "Creative campaign identity and branding design",
  },

  {
    id: "02",

    type: "carousel",

    title:
      "Social Media Campaign Carousel",

    category:
      "Social Campaign",

    images: [
      "/creatives/3.jpeg",
      "/creatives/4.jpeg",
      "/creatives/5.jpeg",
      "/creatives/6.jpeg",
      "/creatives/7.jpeg",
      "/creatives/9.jpeg",
      "/creatives/10.jpeg",
    ],

    alt:
      "Social media campaign creative carousel",
  },

  {
    id: "03",

    type: "single",

    title:
      "Luxury Brand Visual",

    category:
      "Luxury Branding",

    image:
      "/creatives/11.jpeg",

    alt:
      "Luxury brand inspired advertising visual",
  },

  {
    id: "04",

    type: "single",

    title:
      "Modern Editorial Design",

    category:
      "Editorial",

    image:
      "/creatives/12.jpeg",

    alt:
      "Modern editorial campaign creative design",
  },

  {
    id: "05",

    type: "single",

    title:
      "Visual Storytelling Artwork",

    category:
      "Storytelling",

    image:
      "/creatives/13.jpeg",

    alt:
      "Visual storytelling promotional artwork",
  },

  {
    id: "06",

    type: "single",

    title:
      "Creative Advertising Poster",

    category:
      "Advertising",

    image:
      "/creatives/14.jpeg",

    alt:
      "Creative advertising poster design",
  },

  {
    id: "07",

    type: "single",

    title:
      "Brand Communication Design",

    category:
      "Branding",

    image:
      "/creatives/15.jpeg",

    alt:
      "Strategic brand communication artwork",
  },

  {
    id: "08",

    type: "single",

    title:
      "Cinematic Campaign Artwork",

    category:
      "Campaign",

    image:
      "/creatives/16.jpeg",

    alt:
      "Cinematic campaign promotional design",
  },

  {
    id: "09",

    type: "single",

    title:
      "Digital Audience Creative",

    category:
      "Digital Campaign",

    image:
      "/creatives/17.jpeg",

    alt:
      "Digital audience engagement creative",
  },

  {
    id: "10",

    type: "single",

    title:
      "Strategic Visual Design",

    category:
      "Creative Strategy",

    image:
      "/creatives/18.jpeg",

    alt:
      "Strategic visual communication design",
  },
];