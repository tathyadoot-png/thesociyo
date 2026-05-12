export const navbarReveal = {
  initial: {
    y: -80,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};