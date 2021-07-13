export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1], delay: 3.75 }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const logoBackground = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 3 }
  },  
  exit: {
    opacity: 0,
    zIndex: -100,
  }
}

export const logoFade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] }
  },  
  exit: {
    opacity: 0,
    transition: { duration: 2, ease: [0.83, 0, 0.17, 1] }
  }
}