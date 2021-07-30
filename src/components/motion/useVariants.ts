const variantProps = {
  initial: "hidden",
  animate: "visible",
  hover: "hover",
  exit: "exit",
};

const modalVariant = (duration: number = 2, delay: number = 0) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      background: "rgba(0, 0, 0, 0.7)",
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },

    exit: {
      opacity: 0,
      // scale:0,
      background: "rgba(0, 0, 0, 0)",
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },
  };
};
const searchBoxVariant = (duration: number = 2, delay: number = 0) => {
  return {
    hidden: {
      width: "0px",
      opacity: 0,
    },

    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
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
    modalVariant,
    searchBoxVariant,
  };
};
