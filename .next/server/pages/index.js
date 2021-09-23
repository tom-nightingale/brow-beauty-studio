(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5266:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ IntroContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IntroContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

/***/ }),

/***/ 6866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "react-locomotive-scroll"
var external_react_locomotive_scroll_ = __webpack_require__(2363);
// EXTERNAL MODULE: external "react-datocms"
var external_react_datocms_ = __webpack_require__(121);
// EXTERNAL MODULE: ./lib/datocms.js
var datocms = __webpack_require__(5662);
// EXTERNAL MODULE: ./lib/fragments.js
var fragments = __webpack_require__(8368);
// EXTERNAL MODULE: ./lib/navItems.js
var navItems = __webpack_require__(4976);
// EXTERNAL MODULE: ./helpers/constants.js
var constants = __webpack_require__(5158);
// EXTERNAL MODULE: ./context/intro.js
var intro = __webpack_require__(5266);
// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(6287);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(8419);
;// CONCATENATED MODULE: ./components/Treatment.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Treatment({
  overlay,
  heading,
  subHeading,
  description,
  image,
  alt
}) {
  (0,external_react_.useEffect)(() => {
    // Detect non-mobile screen size and add scrolling effect to Treatments
    let breakpoint = 1280;
    let element = document.querySelectorAll('.data-scroll');
    window.addEventListener('resize', () => {
      let width = window.innerWidth;

      if (width >= breakpoint) {
        element.forEach(elem => {
          elem.setAttribute('data-scroll', '');
        });
      } else {
        element.forEach(elem => {
          elem.removeAttribute('data-scroll', '');
        });
      }
    });
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `relative flex-wrap items-center w-full justify-between p-4 xs:flex treatment lg:mt-[-100px] ${alt ? 'sm:after:right-4' : 'sm:after:left-4'} `,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      "data-scroll": true,
      "data-scroll-direction": "horizontal",
      "data-scroll-speed": `${alt ? '-0.3' : '0.3'}`,
      "data-scroll-position": "left",
      className: `flex justify-start relative z-10 ${alt ? 'flex justify-end xs:order-2' : ''} xs:w-1/2 overflow-hidden data-scroll`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: `absolute top-1/2 -translate-y-1/2 font-serif text-6xl tracking-wider text-white w-full text-center ${alt ? ' -rotate-90 right-[-46%] sm:right-[-44%] md:right-[-45%] lg:right-[-46%] xl:right-[-47%]' : 'rotate-90 origin-center left-[-46%] sm:left-[-44%] md:left-[-45%] lg:left-[-46%] xl:left-[-47%]'}  z-50 `,
        children: overlay
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_datocms_.Image, {
        data: _objectSpread(_objectSpread({}, image.responsiveImage), {}, {
          alt: overlay
        }),
        className: ""
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `relative z-10 flex flex-col ${alt ? 'lg:items-start' : 'lg:items-end'}  xs:w-1/2`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: `p-4 font-serif text-xl md:text-3xl sm:p-12 md:p-12 ${alt ? 'text-left' : 'text-right'}`,
        children: [heading, /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "block font-sans text-base tracking-wider uppercase",
          children: subHeading
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: ./components/Container.js
var Container = __webpack_require__(1532);
// EXTERNAL MODULE: ./components/Contact.js
var Contact = __webpack_require__(7871);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(2651);
;// CONCATENATED MODULE: ./pages/index.js




function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // import { logoBackground, logoFade, fade, backToTop } from '@/helpers/transitions'









function Home({
  data: {
    home,
    site,
    treatments
  }
}) {
  const containerRef = (0,external_react_.useRef)(null);
  const {
    0: introContext,
    1: setIntroContext
  } = (0,external_react_.useContext)(intro/* IntroContext */.I);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      setIntroContext(true);
    }, 2750);
  }, []);
  const fade = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.83, 0, 0.17, 1],
        delay: introContext ? 0 : 2.75
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };
  const logoBackground = {
    initial: {
      opacity: 1
    },
    enter: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
        delay: 2
      }
    },
    exit: {
      opacity: 0,
      zIndex: -100
    }
  };
  const logoFade = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };
  const backToTop = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1],
        delay: 5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: (0,external_react_datocms_.renderMetaTags)(home.seo.concat(site.faviconMetaTags))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_locomotive_scroll_.LocomotiveScrollProvider, {
      options: {
        smooth: true,
        lerp: 0.07
      },
      containerRef: containerRef,
      watch: [],
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        "data-scroll-container": true,
        ref: containerRef,
        id: "scroll-container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          "data-scroll-section": true,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.LazyMotion, {
            features: external_framer_motion_.domAnimation,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.m.div, {
              initial: "initial",
              animate: "enter",
              exit: "exit",
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.m.div, {
                variants: logoBackground,
                className: "fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full min-h-screen bg-white",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.m.div, {
                  variants: logoFade,
                  className: "w-2/3 mx-auto md:w-1/3",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/logo-circle-dark.png",
                    alt: "The Brow & Beauty Studio",
                    className: "block"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.m.div, {
                variants: fade,
                className: "relative z-50",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
                    className: "relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 font-medium text-white uppercase bg-black md:flex",
                    children: navItems/* navItems.map */.t.map(({
                      title,
                      url,
                      type
                    }, i) => {
                      return type == "route" ? /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: `/${url}`,
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full",
                            children: title
                          })
                        })
                      }, i) : url == "Home" ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          "data-scroll-to": true,
                          "data-offset": "-100",
                          className: "relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white/25 hover:after:w-full",
                          href: `#${url}`,
                          children: title
                        })
                      }, i);
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "relative z-0 overflow-hidden bg-gray-200 md:-mt-8",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-end w-full md:min-h-[610px]",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "absolute top-[50%] left-0 translate-y-[-50%] z-10 opacity-20 lg:opacity-100",
                        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_datocms_.Image, {
                          data: pages_objectSpread(pages_objectSpread({}, home.heroImage.responsiveImage), {}, {
                            alt: "The Brow &amp; Beauty Studio"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: "/logo.png",
                        alt: "",
                        className: "absolute w-full top-[50%] right-0 translate-y-[-50%] z-0 opacity-5 hidden lg:block"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "relative z-20 h-full max-w-screen-sm p-8 py-12 lg:p-4 lg:w-2/5",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                          className: "mb-12 font-sans text-3xl tracking-widest uppercase lg:mb-16 md:text-5xl",
                          children: home.heroHeading
                        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                          destination: "#Treatments",
                          label: "Treatments",
                          modifier: "mr-4"
                        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                          destination: "#Contact",
                          label: "Contact",
                          secondary: true,
                          modifier: ""
                        })]
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "relative max-w-screen-xl py-12 mx-auto md:py-20",
                    id: "Treatments",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "relative z-10 text-center",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                        className: "lg:mt-[80px]",
                        children: "Treatments"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: "/treatment-menu",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "inline-block mx-auto mb-5 text-center btn",
                            children: "View full treatment menu"
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: "/book",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "btn btn--secondary text-center mb-8 lg:mb-[175px] inline-block mx-auto",
                            children: "Book online"
                          })
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                      "data-scroll": true,
                      "data-scroll-sticky": true,
                      "data-scroll-target": "#Treatments",
                      src: "/logo-light-trimmed.png",
                      alt: "",
                      className: "absolute top-0 w-full"
                    }), treatments.map((treatment, i) => {
                      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        children: [i % 2 == 0 && /*#__PURE__*/jsx_runtime_.jsx(Treatment, {
                          image: treatment.image,
                          overlay: treatment.imageOverlayText,
                          heading: treatment.heading,
                          subHeading: treatment.subheading
                        }, i), i % 2 != 0 && /*#__PURE__*/jsx_runtime_.jsx(Treatment, {
                          image: treatment.image,
                          overlay: treatment.imageOverlayText,
                          heading: treatment.heading,
                          subHeading: treatment.subheading,
                          alt: true
                        }, i)]
                      }, i);
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "mt-8 text-center lg:mt-16",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/treatment-menu",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "inline-block mx-auto text-center btn",
                          children: "View full treatment menu"
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
                    className: "flex-wrap items-center md:my-20 md:flex",
                    id: "About",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("article", {
                      className: "md:w-1/2",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "p-4 content xs:p-12 lg:p-20",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                          children: home.h1
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "content",
                          dangerouslySetInnerHTML: {
                            __html: home.content
                          }
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                          className: "mt-8 text-lg tracking-wider uppercase",
                          children: ["Call for your appointment On ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "inline-block font-bold",
                            href: `tel:${constants/* phoneNumber */.jM}`,
                            children: constants/* phoneNumber */.jM
                          })]
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "md:w-1/2",
                      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "mx-auto max-w-[500px]",
                        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_datocms_.Image, {
                          data: pages_objectSpread(pages_objectSpread({}, home.contentImage.responsiveImage), {}, {
                            alt: "The Brow &amp; Beauty Studio"
                          })
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "relative p-8 my-20 overflow-hidden bg-gray-200 sm:p-12 lg:p-20",
                    id: "Where",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "sm:max-w-screen-xs",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                        className: "mb-[-6px] font-serif text-4xl leading-none text-center text-white lg:text-5xl lg:mb-[-9px] relative z-50",
                        "data-scroll-direction": "horizontal",
                        "data-scroll-speed": "-0.1",
                        "data-scroll": true,
                        children: "Where"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "relative z-10 p-6 pb-16 mb-8 bg-white shadow-lg md:p-12 md:pb-20",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: "A: The Brow and Beauty Studio"
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "pl-5 leading-relaxed",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Old Mill Cottage"
                          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Rolleston"
                          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Southwell Golf Club"
                          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "Nottinghamshire"
                          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                            children: "NG23 5SF"
                          })]
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                          children: ["T: ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "inline-block pl-1 mt-8 font-bold",
                            href: `tel:${constants/* phoneNumber */.jM}`,
                            children: constants/* phoneNumber */.jM
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                          destination: "https://www.google.com/maps/dir//Southwell+Golf+Club,+Occupation+Ln,+Southwell+NG25+0TS/@53.0661906,-0.9024038,17z/data=!4m16!1m6!3m5!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2sSouthwell+Golf+Club!8m2!3d53.0661394!4d-0.9003083!4m8!1m0!1m5!1m1!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2m2!1d-0.9003083!2d53.0661394!3e2",
                          modifier: "mt-8 absolute -bottom-7 left-1/2 -translate-x-1/2 w-4/5 sm:w-auto text-center",
                          label: "Get directions",
                          secondary: true,
                          external: true
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "absolute top-0 left-0 z-0 w-full h-full overflow-hidden",
                        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_datocms_.Image, {
                          data: pages_objectSpread(pages_objectSpread({}, home.locationImage.responsiveImage), {}, {
                            alt: "The Brow &amp; Beauty Studioooo"
                          }),
                          className: "absolute w-[220%] md:w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        })
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: "inline-block p-4 px-12 text-sm uppercase transition-all duration-200 -rotate-90 bg-white hover:pt-8",
                        href: "https://www.google.com/maps/search/Old+Mill+Cottage++Rolleston++Southwell+Golf+Club++Nottinghamshire++NG23+5SF/@53.0661906,-0.9024038,17z/data=!3m1!4b1",
                        target: "_blank",
                        children: "View map"
                      })
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(Contact/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
              })]
            })
          })
        }), " ", /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.LazyMotion, {
          features: external_framer_motion_.domAnimation,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.m.div, {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.m.div, {
              variants: backToTop,
              className: "fixed z-50 bottom-4 right-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "block",
                "data-scroll-to": true,
                href: "#Home",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/back-to-top.svg",
                  alt: "Back to top",
                  className: "w-6 h-6 transition-all duration-500 opacity-50 hover:opacity-100"
                })
              })
            })
          })
        })]
      }), " "]
    })]
  });
}
const HOMEPAGE_QUERY = `
  query HomePage {
    site: _site {
      faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      heroHeading
      heroImage {
        responsiveImage(imgixParams: {fm: png, fit: crop, w: 829, h: 850 }) {
          ...responsiveImageFragment
        }
      }
      h1
      content
      contentImage {
        responsiveImage(imgixParams: {fm: png, fit: crop, w: 961, h: 1817 }) {
          ...responsiveImageFragment
        }
      }
      locationImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2017, h: 1464 }) {
          ...responsiveImageFragment
        }
      }
    }
    treatments: allTreatmentCategories {
      heading
      subheading
      imageOverlayText
      image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 500, h: 500 }) {
          ...responsiveImageFragment
        }
      }
    }
  }  
  ${fragments/* metaTagsFragment */.E}
  ${fragments/* responsiveImageFragment */.N}
`;
async function getStaticProps() {
  const data = await (0,datocms/* request */.W)({
    query: HOMEPAGE_QUERY
  });
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 121:
/***/ (function(module) {

"use strict";
module.exports = require("react-datocms");;

/***/ }),

/***/ 4623:
/***/ (function(module) {

"use strict";
module.exports = require("react-ig-feed");;

/***/ }),

/***/ 2363:
/***/ (function(module) {

"use strict";
module.exports = require("react-locomotive-scroll");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9397:
/***/ (function(module) {

"use strict";
module.exports = require("tiny-json-http");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,100], function() { return __webpack_exec__(6866); });
module.exports = __webpack_exports__;

})();