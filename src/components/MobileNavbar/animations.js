export const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const menuVars = {
  initial: {
    height: 0,
  },
  animate: {
    height: "100%",
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    height: 0,
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
};
export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

export const mobileLinkVars = {
  initial: {
    y: "10vh",
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      ease: [0, 0.55, 0.45, 1],
      duration: 1,
    },
  },
  exit: {
    y: "-10vh",
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};
