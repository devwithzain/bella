export const navVariants = {
   hidden: { y: "-100%" },
   vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 1.2 }, }
};

export const animation = {
   initial: { y: "100%" },
   enter: (i: number) => ({
      y: "0",
      transition: {
         duration: 0.5,
         ease: [0.33, 1, 0.68, 1],
         delay: 0.5,
      },
   }),
};

export const scaleAnimation = {
   initial: { scale: 0, x: "-50%", y: "-50%" },
   enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
   },
   closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
   },
};

export const opacity = {
   initial: {
      opacity: 0
   },
   enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0.2 }
   },
};

export const slideUp = {
   initial: {
      top: 0
   },
   exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
   }
};


// work page

export const workDangerAnimation1 = {
   initial: {
      scale: 0,
      opacity: 0
   },
   enter: {
      scale: 1,
      opacity: 1,
      transition: {
         duration: 1,
         ease: [0.76, 0, 0.24, 1],
         type: "spring"
      }
   },
};

export const workDangerAnimation2 = {
   initial: {
      y: 100,
      opacity: 0
   },
   enter: {
      y: 1,
      opacity: 1,
      transition: {
         duration: 1,
         ease: [0.76, 0, 0.24, 1],
         type: "spring"
      }
   },
};