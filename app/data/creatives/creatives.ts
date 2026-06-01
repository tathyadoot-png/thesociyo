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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294383/1_wqrk8o.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294385/3_v5t94n.jpg",
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294386/4_wqpm3n.jpg",
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294387/5_ckkrls.jpg",
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294388/6_u9lqnt.jpg",
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294388/7_lrmbzr.jpg",
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294389/9_pwtqds.jpg",
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294390/10_h2r7dk.jpg",
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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294390/11_wiizfa.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294392/12_ukqmvr.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294393/13_v2y5is.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294393/14_wokwfm.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294394/15_t4mnot.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294395/16_ar7ynx.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294396/17_ak6zig.jpg",

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
      "https://res.cloudinary.com/dii2m7ebc/image/upload/q_auto/f_auto/v1780294396/18_xq42i3.jpg",

    alt:
      "Strategic visual communication design",
  },
];