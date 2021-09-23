exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 8419:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Button({
  external,
  destination,
  modifier,
  label,
  secondary
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [external && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      rel: "noreferrer",
      target: "_blank",
      href: destination,
      className: `btn ${secondary ? 'btn--secondary' : ''} ${modifier} `,
      children: label
    }), !external && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      "data-scroll-to": true,
      "data-offset": "-100",
      href: destination,
      className: `btn ${secondary ? 'btn--secondary' : ''} ${modifier}`,
      children: label
    })]
  });
}

/***/ }),

/***/ 7871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5158);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1532);




function Contact({}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "px-6 py-16 bg-gray-100 sm:p-8 md:p-12 lg:p-20",
    id: "Contact",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mb-[-6px] font-serif text-4xl leading-none text-center text-gray-300 lg:text-5xl lg:mb-[-9px]",
        children: "Contact"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative max-w-screen-lg p-8 mx-auto bg-white shadow-lg sm:p-8 md:p-12 lg:p-20",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "logo-circle-light.png",
            alt: "The Brow & Beauty Studio",
            className: "absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative z-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
              className: "max-w-screen-sm mx-auto leading-relaxed text-center",
              children: ["If you'd like to get in touch to make a booking or ask a question please use the form below. If you'd prefer to talk, fel free to give me a call directly on ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "inline-block font-bold",
                href: `tel:${_helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .phoneNumber */ .jM}`,
                children: _helpers_constants__WEBPACK_IMPORTED_MODULE_2__/* .phoneNumber */ .jM
              }), "."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
              id: "form",
              action: "https://formspree.io/f/YOURAPI",
              method: "POST",
              className: "relative z-10 flex flex-wrap mt-4 -m-1 overflow-x-hidden",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  required: true,
                  type: "text",
                  className: "w-full",
                  name: "name",
                  placeholder: "Your Name *"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  required: true,
                  type: "text",
                  className: "w-full",
                  name: "phonenumber",
                  placeholder: "Your Number *"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                  className: "w-full",
                  name: "Treatment Type",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: "Eyebrow Care",
                    children: "Eyebrow Care"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: "Eyelash Extensions",
                    children: "Eyelash Extensions"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: "Facial",
                    children: "Facial"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: "Massage",
                    children: "Massage"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: "Massage",
                    children: "Massage"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: "Microblading",
                    children: "Microblading"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: "Other",
                    children: "Other"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  required: true,
                  type: "tel",
                  className: "w-full",
                  name: "telephone",
                  placeholder: "Telephone"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "w-full",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                  required: true,
                  placeholder: "Your message",
                  name: "message",
                  className: "w-full min-h-48"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                name: "_gotcha",
                className: "hidden"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mt-8 text-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "submit",
                  className: "inline-block p-4 mx-auto text-sm text-white uppercase bg-black border border-black md:p-6 lg:px-8 lg:py-4",
                  value: "Send Form"
                })
              })]
            })]
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ 1532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "mx-auto max-w-screen-3xl ",
    children: children
  });
}

/***/ }),

/***/ 2651:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_ig_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4623);
/* harmony import */ var react_ig_feed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ig_feed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_navItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4976);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5158);
/* harmony import */ var _helpers_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8175);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1532);
/* harmony import */ var _components_SocialIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7782);










function Footer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
    variants: _helpers_transitions__WEBPACK_IMPORTED_MODULE_5__/* .fade */ .U1,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "bg-black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "Social",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "p-8 md:p-12 lg:p-20",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex items-center justify-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-0 mr-4 text-3xl text-center text-gray-100 xl:text-5xl",
                children: "Social"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                classes: "mb-0 w-6 h-6 mx-2 hover:scale-110 transition duration-200 focus:scale-90",
                svgFill: "#FFF",
                platform: "instagram",
                url: _helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .instagramURL */ ._9
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                classes: "mb-0 w-6 h-6 mx-2 hover:scale-110 transition duration-200 focus:scale-90",
                svgFill: "#FFF",
                platform: "facebook",
                url: _helpers_constants__WEBPACK_IMPORTED_MODULE_8__/* .facebookURL */ .zw
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "socialFeed",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_ig_feed__WEBPACK_IMPORTED_MODULE_2___default()), {
            token: "IGQVJXVXJWa0l2UGpWNTllREFMZAE02cmhxX0w3cG5SdGY4NmVocWJoYm9Ic1BtUUU2b0tTRlo4cXZA5YUMzc3dIZAW1jZAW1zZAGRXcFFiTW1aUXFIcHRWNS1QRFdZAMXNZALU5KOVZANRHVfb211a0xkclF6SwZDZD",
            counter: "6"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "relative z-50 py-16 bg-black",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: "w-[270px] mx-auto",
            src: "/logo-circle-dark.png",
            alt: "The Brow & Beauty Studio"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 text-white uppercase bg-black md:flex",
            children: _lib_navItems__WEBPACK_IMPORTED_MODULE_4__/* .navItems.map */ .t.map(({
              title,
              url,
              type
            }, i) => {
              return type == "route" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: `/${url}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full",
                    children: title
                  })
                })
              }, i) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: `/#${url}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "data-scroll-to": true,
                    "data-offset": "-100",
                    className: "relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full",
                    children: title
                  })
                })
              }, i);
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
            className: "w-1/6 mx-auto mt-16 opacity-20"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "px-8 mt-16 font-serif text-center text-white",
            children: "\xA9 Copyright The Brow & Beauty Studio 2021 - All rights reserved"
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ 6287:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Container.js
var Container = __webpack_require__(1532);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./helpers/constants.js
var constants = __webpack_require__(5158);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/navItems.js
var navItems = __webpack_require__(4976);
;// CONCATENATED MODULE: ./components/MobileMenu.js









function mobileMenu() {
  const router = (0,router_.useRouter)();
  let currentPath = router.pathname; //State management for mobile menu

  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const listItem = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      "aria-label": "Open Menu",
      open: open,
      onClick: () => setOpen(!open),
      className: `btn-mobile-menu ${open ? 'open' : ''}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      open: open,
      className: `fixed top-0 left-0 -z-10 w-full h-full p-4 transition-all duration-200 bg-white ${open ? 'opacity-100 z-40' : 'opacity-0'}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col items-center justify-center h-screen",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
          variants: container,
          initial: "hidden",
          animate: open ? 'show' : '',
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
            variants: listItem,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/logo-circle-dark.png",
              alt: "The Brow & Beauty Studio Logo",
              className: "w-2/3 mx-auto mb-8 max-w-72"
            })
          }), navItems/* navItems.map */.t.map(({
            title,
            url,
            type
          }, i) => {
            return type === "route" ? /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
              className: "mb-5 text-center",
              variants: listItem,
              children: currentPath == "/treatment-menu" || currentPath == "/book" ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/${url}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                  onClick: () => setOpen(!open),
                  children: title
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/${url}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                  children: title
                })
              })
            }, i) : /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
              className: "mb-5 text-center",
              variants: listItem,
              children: currentPath == "/treatment-menu" || currentPath == "/book" ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `/#${url}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                  children: title
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
                "data-scroll-to": true,
                "data-offset": "-100",
                className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                href: `#${url}`,
                onClick: () => setOpen(!open),
                children: title
              })
            }, i);
          }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
            className: "text-center",
            variants: listItem,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "transition-all duration-200",
              variants: listItem,
              href: `tel:${constants/* phoneNumber */.jM}`,
              children: ["Tel: ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-bold",
                children: constants/* phoneNumber */.jM
              })]
            })
          })]
        })
      })
    })]
  });
}
// EXTERNAL MODULE: ./components/SocialIcon.js
var SocialIcon = __webpack_require__(7782);
;// CONCATENATED MODULE: ./components/Header.js







function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "relative",
    id: "Home",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "absolute top-1/2 -translate-y-1/2 left-[2%] flex-col justify-center hidden w-1/5 md:flex",
      children: [/*#__PURE__*/jsx_runtime_.jsx(SocialIcon/* default */.Z, {
        classes: "w-8 h-8 mb-5 hover:scale-110 transition duration-200 focus:scale-90",
        svgFill: "#1D1D1B",
        platform: "instagram",
        url: constants/* instagramURL */._9
      }), /*#__PURE__*/jsx_runtime_.jsx(SocialIcon/* default */.Z, {
        classes: "w-8 h-8 mb-5 hover:scale-110 transition duration-200 focus:scale-90",
        svgFill: "#1D1D1B",
        platform: "facebook",
        url: constants/* facebookURL */.zw
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap items-center justify-start p-4 md:justify-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-9/12 2xl:w-full",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "block cursor-pointer",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "w-full max-w-[750px] mx-auto",
                src: "logo.png",
                alt: "The Brow & Beauty Studio"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(mobileMenu, {})]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Layout.js




function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), children]
  });
}

/***/ }),

/***/ 7782:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ socialIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function socialIcon({
  platform,
  url,
  classes,
  svgFill
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
      className: `block ${classes}`,
      href: url,
      "aria-label": `Follow The Brow &amp; Beauty Studio on ${platform}`,
      rel: "noreferrer",
      target: "_blank",
      children: [platform == "facebook" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 26 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
          clipPath: "url(#clip0)",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M22.6804 22.8516L23.8358 15.4994H16.6119V10.7283C16.6119 8.71692 17.621 6.75629 20.8564 6.75629H24.1405V0.496704C24.1405 0.496704 21.1602 0 18.3108 0C12.3617 0 8.47304 3.52136 8.47304 9.896V15.4994H1.86011V22.8516H8.47304V40.625H16.6119V22.8516H22.6804Z",
            fill: svgFill
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
            id: "clip0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
              width: "26",
              height: "40.625",
              fill: "white"
            })
          })
        })]
      }), platform == "instagram" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 38 47",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
          clipPath: "url(#clip0)",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.0068 12.7076C13.6121 12.7076 9.26081 17.3309 9.26081 23.0627C9.26081 28.7945 13.6121 33.4178 19.0068 33.4178C24.4014 33.4178 28.7528 28.7945 28.7528 23.0627C28.7528 17.3309 24.4014 12.7076 19.0068 12.7076ZM19.0068 29.7948C15.5206 29.7948 12.6706 26.7757 12.6706 23.0627C12.6706 19.3496 15.5121 16.3305 19.0068 16.3305C22.5014 16.3305 25.343 19.3496 25.343 23.0627C25.343 26.7757 22.493 29.7948 19.0068 29.7948ZM31.4247 12.284C31.4247 13.6268 30.4068 14.6993 29.1514 14.6993C27.8876 14.6993 26.8782 13.6178 26.8782 12.284C26.8782 10.9502 27.8961 9.86869 29.1514 9.86869C30.4068 9.86869 31.4247 10.9502 31.4247 12.284ZM37.8796 14.7353C37.7354 11.4999 37.0398 8.63401 34.809 6.2728C32.5867 3.91158 29.8894 3.17257 26.8443 3.01035C23.7059 2.82109 14.2992 2.82109 11.1608 3.01035C8.1242 3.16356 5.42688 3.90257 3.19607 6.26378C0.96527 8.625 0.278216 11.4909 0.125537 14.7263C-0.0525879 18.0609 -0.0525879 28.0555 0.125537 31.39C0.269734 34.6254 0.96527 37.4913 3.19607 39.8525C5.42688 42.2138 8.11572 42.9528 11.1608 43.115C14.2992 43.3042 23.7059 43.3042 26.8443 43.115C29.8894 42.9618 32.5867 42.2228 34.809 39.8525C37.0314 37.4913 37.7269 34.6254 37.8796 31.39C38.0577 28.0555 38.0577 18.0699 37.8796 14.7353ZM33.8251 34.9679C33.1635 36.7343 31.8827 38.0951 30.2117 38.8071C27.7095 39.8616 21.772 39.6182 19.0068 39.6182C16.2416 39.6182 10.2956 39.8525 7.80188 38.8071C6.13938 38.1042 4.85857 36.7433 4.18849 34.9679C3.19607 32.3093 3.42509 26.0007 3.42509 23.0627C3.42509 20.1247 3.20456 13.8071 4.18849 11.1575C4.85009 9.39104 6.1309 8.03019 7.80188 7.31822C10.3041 6.26378 16.2416 6.50711 19.0068 6.50711C21.772 6.50711 27.718 6.2728 30.2117 7.31822C31.8742 8.02118 33.155 9.38203 33.8251 11.1575C34.8175 13.8161 34.5885 20.1247 34.5885 23.0627C34.5885 26.0007 34.8175 32.3183 33.8251 34.9679Z",
            fill: svgFill
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
            id: "clip0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
              width: "38",
              height: "46.1429",
              fill: "white"
            })
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ 5158:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_9": function() { return /* binding */ instagramURL; },
/* harmony export */   "zw": function() { return /* binding */ facebookURL; },
/* harmony export */   "jM": function() { return /* binding */ phoneNumber; }
/* harmony export */ });
const instagramURL = "https://www.instagram.com/the.browandbeautystudio/";
const facebookURL = "https://www.facebook.com";
const phoneNumber = "0115 666 3333";

/***/ }),

/***/ 8175:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U1": function() { return /* binding */ fade; },
/* harmony export */   "lK": function() { return /* binding */ quickFade; }
/* harmony export */ });
/* unused harmony exports logoBackground, logoFade, backToTop */
const fade = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.83, 0, 0.17, 1],
      delay: 2.75
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.83, 0, 0.17, 1]
    }
  }
};
const quickFade = {
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

/***/ }),

/***/ 5662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ request; }
/* harmony export */ });
/* harmony import */ var tiny_json_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9397);
/* harmony import */ var tiny_json_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_json_http__WEBPACK_IMPORTED_MODULE_0__);

async function request({
  query,
  variables,
  preview
}) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;
  const {
    body
  } = await tiny_json_http__WEBPACK_IMPORTED_MODULE_0___default().post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    },
    data: {
      query,
      variables
    }
  });

  if (body.errors) {
    console.error("Ouch! The query has some errors!");
    throw body.errors;
  }

  return body.data;
}

/***/ }),

/***/ 8368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": function() { return /* binding */ responsiveImageFragment; },
/* harmony export */   "E": function() { return /* binding */ metaTagsFragment; }
/* harmony export */ });
// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;
const metaTagsFragment = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`;

/***/ }),

/***/ 4976:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ navItems; }
/* harmony export */ });
const navItems = [{
  title: "Home",
  url: "Home",
  type: "anchor"
}, {
  title: "Treatments",
  url: "Treatments",
  type: "anchor"
}, {
  title: "Treatment Menu",
  url: "treatment-menu",
  type: "route"
}, {
  title: "Book Online",
  url: "book",
  type: "route"
}, {
  title: "About",
  url: "About",
  type: "anchor"
}, {
  title: "Where",
  url: "Where",
  type: "anchor"
}, {
  title: "Contact",
  url: "Contact",
  type: "anchor"
}, {
  title: "Social",
  url: "Social",
  type: "anchor"
}];

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;