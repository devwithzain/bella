export const navVariants = {
   hidden: { y: "-100%" },
   vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 1.2 }, }
};

export const animation = {
   initial: { y: "100%" },
   enter: (i: number) => ({
      y: "0",
      transition: {
         duration: 0.75,
         ease: [0.33, 1, 0.68, 1],
         delay: 0.5,
      },
   }),
};