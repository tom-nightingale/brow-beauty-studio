export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1], delay: 2.75 }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const quickFade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const logoBackground = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 2 }
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
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },  
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  }
}

export const backToTop = {
  initial: {
    opacity: 0,
  },
  enter: { 
    opacity: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 5 }
  },
	exit: {
    opacity: 0,
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}