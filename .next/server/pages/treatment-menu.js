(function() {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_datocms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5662);
/* harmony import */ var _lib_fragments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8368);
/* harmony import */ var _helpers_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8175);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5158);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6287);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8419);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1532);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2363);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(121);
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datocms__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7871);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2651);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function Home({
  data: {
    home,
    site,
    treatmentCategory
  }
}) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: (0,react_datocms__WEBPACK_IMPORTED_MODULE_10__.renderMetaTags)(home.seo.concat(site.faviconMetaTags))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_9__.LocomotiveScrollProvider, {
      options: {
        smooth: true,
        lerp: 0.07
      },
      containerRef: containerRef,
      watch: [],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        "data-scroll-container": true,
        ref: containerRef,
        id: "scroll-container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          "data-scroll-section": true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__.LazyMotion, {
            features: framer_motion__WEBPACK_IMPORTED_MODULE_8__.domAnimation,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div, {
              initial: "initial",
              animate: "enter",
              exit: "exit",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div, {
                variants: _helpers_transitions__WEBPACK_IMPORTED_MODULE_4__/* .quickFade */ .lK,
                className: "relative z-50",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative max-w-screen-xl py-12 mx-auto md:py-20",
                    id: "Treatments",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "relative z-10 text-center",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Treatments"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                      "data-scroll": true,
                      "data-scroll-sticky": true,
                      "data-scroll-target": "#Treatments",
                      src: "/logo-light-trimmed.png",
                      alt: "",
                      className: "absolute top-0 w-full"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "relative z-10 flex-wrap p-8 pt-0 md:flex",
                      children: treatmentCategory.map((category, i) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "relative p-8 text-center md:w-1/2 lg:p-16",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "py-4 border-b border-b-black/50",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                              className: "inline-block px-4 mx-auto mb-0",
                              children: category.heading
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                              className: "tracking-widest uppercase",
                              children: category.subheading
                            })]
                          }), category.treatments.map((treatment, i) => {
                            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                              className: "relative",
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-4 md:py-6 lg:py-12",
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                  children: [treatment.treatmentHeading, " - \xA3", treatment.treatmentPrice]
                                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                  className: "font-serif text-lg",
                                  children: treatment.treatmentSubheading
                                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                  className: "text-sm",
                                  children: treatment.treatmentDescription
                                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                  src: "/logo-circle-dark.png",
                                  alt: "",
                                  className: "absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2"
                                })]
                              })
                            }, i);
                          })]
                        }, i);
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative p-8 my-20 overflow-hidden bg-gray-200 sm:p-12 lg:p-20",
                    id: "Where",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "sm:max-w-screen-xs",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-[-6px] font-serif text-4xl leading-none text-center text-white lg:text-5xl lg:mb-[-9px] relative z-50",
                        "data-scroll-direction": "horizontal",
                        "data-scroll-speed": "-0.1",
                        "data-scroll": true,
                        children: "Where"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative z-10 p-6 pb-16 mb-8 bg-white shadow-lg md:p-12 md:pb-20",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                          children: "A: The Brow and Beauty Studio"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                          className: "pl-5 leading-relaxed",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Old Mill Cottage"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Rolleston"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Southwell Golf Club"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Nottinghamshire"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "NG23 5SF"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                          children: ["T: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "inline-block pl-1 mt-8 font-bold",
                            href: `tel:${_helpers_constants__WEBPACK_IMPORTED_MODULE_13__/* .phoneNumber */ .jM}`,
                            children: _helpers_constants__WEBPACK_IMPORTED_MODULE_13__/* .phoneNumber */ .jM
                          })]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                          destination: "https://www.google.com/maps/dir//Southwell+Golf+Club,+Occupation+Ln,+Southwell+NG25+0TS/@53.0661906,-0.9024038,17z/data=!4m16!1m6!3m5!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2sSouthwell+Golf+Club!8m2!3d53.0661394!4d-0.9003083!4m8!1m0!1m5!1m1!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2m2!1d-0.9003083!2d53.0661394!3e2",
                          modifier: "mt-8 absolute -bottom-7 left-1/2 -translate-x-1/2 w-4/5 sm:w-auto text-center",
                          label: "Get directions",
                          secondary: true,
                          external: true
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-0 left-0 z-0 w-full h-full overflow-hidden",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_datocms__WEBPACK_IMPORTED_MODULE_10__.Image, {
                          data: _objectSpread(_objectSpread({}, home.locationImage.responsiveImage), {}, {
                            alt: "The Brow &amp; Beauty Studioooo"
                          }),
                          className: "absolute w-[220%] md:w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        })
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "inline-block p-4 px-12 text-sm uppercase -rotate-90 bg-white",
                        href: "#",
                        children: "View map"
                      })
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {})]
              })
            })
          })
        }), " "]
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
      locationImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2017, h: 1464 }) {
          ...responsiveImageFragment
        }
      }
    }
    treatmentCategory: allTreatmentCategories {
      heading
      subheading
      treatments {
        treatmentHeading
        treatmentSubheading
        treatmentDescription
        treatmentPrice
      }
    }
  }  
  ${_lib_fragments__WEBPACK_IMPORTED_MODULE_14__/* .metaTagsFragment */ .E}
  ${_lib_fragments__WEBPACK_IMPORTED_MODULE_14__/* .responsiveImageFragment */ .N}
`;
async function getStaticProps() {
  const data = await (0,_lib_datocms__WEBPACK_IMPORTED_MODULE_3__/* .request */ .W)({
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
var __webpack_exports__ = __webpack_require__.X(0, [664,100], function() { return __webpack_exec__(467); });
module.exports = __webpack_exports__;

})();