export const tokens = {
  color: {
    bg: "#0A0A0A",
    surface: "#141414",
    ink: "#F5F1EA",
    inkDim: "#A8A39B",
    accent: "#FF3D00",
    accent2: "#CAF291",
    line: "rgba(245, 241, 234, 0.12)",
  },
  ease: {
    outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
    material: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  motion: {
    micro: 0.3,
    layout: 0.4,
    nav: 0.6,
  },
} as const;

export const brand = {
  name: "KOTTON FRUIT",
  tagline: "Streetwear, cut at home — for the ones already in it.",
  currentDrop: { number: "003", handle: "drop-003", title: "Heatwave" },
  freeShippingAt: 6000,
  memberFreeShippingAt: 4500,
} as const;
