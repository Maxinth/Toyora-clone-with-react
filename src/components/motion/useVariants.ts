const variantProps = {
  initial: "hidden",
  animate: "visible",
  hover: "hover",
  exit: "exit",
};

const pageVariant = (duration: number = 2, delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },

    exit: {
      opacity: 0,
    },
  };
};

const itemHover = {
  hover: {
    scale: 1.03,
    transition: {
      type: "tween",
      yoyo: Infinity,
    },
  },
};

// custom Hook to export the variants as needed
export const useVariants = () => {
  return {
    variantProps,
    itemHover,
    pageVariant,
  };
};
