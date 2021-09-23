(function() {
var exports = {};
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 9428:
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
// EXTERNAL MODULE: ./lib/datocms.js
var datocms = __webpack_require__(5662);
// EXTERNAL MODULE: ./lib/fragments.js
var fragments = __webpack_require__(8368);
// EXTERNAL MODULE: ./helpers/transitions.js
var transitions = __webpack_require__(8175);
// EXTERNAL MODULE: ./helpers/constants.js
var constants = __webpack_require__(5158);
// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(6287);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(8419);
// EXTERNAL MODULE: ./components/Contact.js
var Contact = __webpack_require__(7871);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(2651);
;// CONCATENATED MODULE: ./components/container.js

function Container({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mx-auto max-w-screen-3xl ",
    children: children
  });
}
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "react-locomotive-scroll"
var external_react_locomotive_scroll_ = __webpack_require__(2363);
// EXTERNAL MODULE: external "react-datocms"
var external_react_datocms_ = __webpack_require__(121);
;// CONCATENATED MODULE: external "next/script"
var script_namespaceObject = require("next/script");;
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./pages/book.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function Home({
  data: {
    home,
    site
  }
}) {
  const containerRef = (0,external_react_.useRef)(null);
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
            children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.m.div, {
              initial: "initial",
              animate: "enter",
              exit: "exit",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.m.div, {
                variants: transitions/* quickFade */.lK,
                className: "relative z-50",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "relative max-w-screen-xl py-12 mx-auto md:py-20",
                    id: "Treatments",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "relative z-10 text-center",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                        children: "Book Online"
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "p-10 my-10",
                        id: "bookapp-reservation-widget"
                      }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
                        id: "ovatu-js",
                        strategy: "afterInteractive",
                        children: `
                            !function(e,t,n){var u=n.queue||[];e.BookAppWidgetReady=n=function(e){n.queue.push(e)},n.queue=u;var o="script",a=t.createElement(o),i=t.getElementsByTagName(o)[0];a.src="https://cdn.book.app/embed/v1.js",a.type="text/javascript",a.async=!0,a.addEventListener("load",function(){for(;n.queue.length;)n.queue.shift()()},!1),i.parentNode.insertBefore(a,i)}(window,document,window.BookAppWidgetReady||function(){});
                            BookAppWidgetReady(function () {
                              BookApp.widget('#bookapp-reservation-widget', 'brow-beauty-studio');
                            });
                          `
                      })]
                    })
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
                          data: _objectSpread(_objectSpread({}, home.locationImage.responsiveImage), {}, {
                            alt: "The Brow &amp; Beauty Studioooo"
                          }),
                          className: "absolute w-[220%] md:w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        })
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: "inline-block p-4 px-12 text-sm uppercase -rotate-90 bg-white",
                        href: "#",
                        children: "View map"
                      })
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(Contact/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
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
var __webpack_exports__ = __webpack_require__.X(0, [664,100], function() { return __webpack_exec__(9428); });
module.exports = __webpack_exports__;

})();