(function() {
var exports = {};
exports.id = "pages/treatment-menu";
exports.ids = ["pages/treatment-menu"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\components\\Button.js";
function Button({
  external,
  destination,
  modifier,
  label,
  secondary
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [external && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      rel: "noreferrer",
      target: "_blank",
      href: destination,
      className: `btn ${secondary ? 'btn--secondary' : ''} ${modifier} `,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }, this), !external && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      "data-scroll-to": true,
      "data-offset": "-100",
      href: destination,
      className: `btn ${secondary ? 'btn--secondary' : ''} ${modifier}`,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/constants */ "./helpers/constants.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ "./components/Container.js");

var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\components\\Contact.js";


function Contact({}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "px-6 py-16 bg-gray-100 sm:p-8 md:p-12 lg:p-20",
    id: "Contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "mb-[-6px] font-serif text-4xl leading-none text-center text-gray-300 lg:text-5xl lg:mb-[-9px]",
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "relative max-w-screen-lg p-8 mx-auto bg-white shadow-lg sm:p-8 md:p-12 lg:p-20",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "logo-circle-light.png",
            alt: "The Brow & Beauty Studio",
            className: "absolute z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative z-20",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "max-w-screen-sm mx-auto leading-relaxed text-center",
              children: ["If you'd like to get in touch to make a booking or ask a question please use the form below. If you'd prefer to talk, fel free to give me a call directly on ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "inline-block font-bold",
                href: `tel:${_helpers_constants__WEBPACK_IMPORTED_MODULE_1__.phoneNumber}`,
                children: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__.phoneNumber
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 249
              }, this), "."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              id: "form",
              action: "https://formspree.io/f/xgerdqaq",
              method: "POST",
              className: "relative z-10 flex flex-wrap mt-4 -m-1 overflow-x-hidden",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  required: true,
                  type: "text",
                  className: "w-full",
                  name: "name",
                  placeholder: "Your Name *"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  required: true,
                  type: "email",
                  className: "w-full",
                  name: "phonenumber",
                  placeholder: "Your Email *"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                  className: "w-full",
                  name: "Treatment Type",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: "Eyebrow Care",
                    children: "Eyebrow Care"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: "Eyelash Extensions",
                    children: "Eyelash Extensions"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: "Facial",
                    children: "Facial"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: "Massage",
                    children: "Massage"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: "Massage",
                    children: "Massage"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: "Microblading",
                    children: "Microblading"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 33
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                    value: "Other",
                    children: "Other"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "w-full md:w-1/2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  required: true,
                  type: "tel",
                  className: "w-full",
                  name: "telephone",
                  placeholder: "Telephone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "w-full",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                  required: true,
                  placeholder: "Your message",
                  name: "message",
                  className: "w-full min-h-48"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                name: "_gotcha",
                className: "hidden"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-full mt-8 text-center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "submit",
                  className: "inline-block p-4 mx-auto text-sm text-white uppercase bg-black border border-black md:p-6 lg:px-8 lg:py-4",
                  value: "Send Form"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\components\\Container.js";
function Container({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mx-auto max-w-screen-3xl ",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ig_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ig-feed */ "react-ig-feed");
/* harmony import */ var react_ig_feed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ig_feed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_navItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/navItems */ "./lib/navItems.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/constants */ "./helpers/constants.js");
/* harmony import */ var _helpers_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/transitions */ "./helpers/transitions.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Container */ "./components/Container.js");
/* harmony import */ var _components_SocialIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/SocialIcon */ "./components/SocialIcon.js");

var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\components\\Footer.js";








function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
    variants: _helpers_transitions__WEBPACK_IMPORTED_MODULE_6__.fade,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-black",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "Social",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "p-8 md:p-12 lg:p-20",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mb-0 mr-4 text-3xl text-center text-gray-100 xl:text-5xl",
                children: "Social"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_8__.default, {
                classes: "mb-0 w-6 h-6 mx-2 hover:scale-110 transition duration-200 focus:scale-90",
                svgFill: "#FFF",
                platform: "instagram",
                url: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__.instagramURL
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_8__.default, {
                classes: "mb-0 w-6 h-6 mx-2 hover:scale-110 transition duration-200 focus:scale-90",
                svgFill: "#FFF",
                platform: "facebook",
                url: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__.facebookURL
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "socialFeed",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_ig_feed__WEBPACK_IMPORTED_MODULE_2___default()), {
            token: "IGQVJXVXJWa0l2UGpWNTllREFMZAE02cmhxX0w3cG5SdGY4NmVocWJoYm9Ic1BtUUU2b0tTRlo4cXZA5YUMzc3dIZAW1jZAW1zZAGRXcFFiTW1aUXFIcHRWNS1QRFdZAMXNZALU5KOVZANRHVfb211a0xkclF6SwZDZD",
            counter: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "relative z-50 py-16 bg-black",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "w-[270px] mx-auto",
            src: "/logo-circle-dark.png",
            alt: "The Brow & Beauty Studio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "relative z-10 justify-around hidden max-w-lg p-4 mx-auto mt-8 text-white uppercase bg-black md:flex",
            children: _lib_navItems__WEBPACK_IMPORTED_MODULE_4__.navItems.map(({
              title,
              url,
              type
            }, i) => {
              return type == "route" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: `/${url}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full",
                    children: title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 31
                }, this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 29
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: `/#${url}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    "data-scroll-to": true,
                    "data-offset": "-100",
                    className: "relative block p-2 tracking-widest after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-white hover:after:w-full",
                    children: title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 31
                }, this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 29
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "w-1/6 mx-auto mt-16 opacity-20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "px-8 mt-16 font-serif text-center text-white",
            children: "\xA9 Copyright The Brow & Beauty Studio 2021 - All rights reserved"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Container */ "./components/Container.js");
/* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MobileMenu */ "./components/MobileMenu.js");
/* harmony import */ var _components_SocialIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SocialIcon */ "./components/SocialIcon.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/constants */ "./helpers/constants.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\components\\Header.js";





function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "relative",
    id: "Home",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute top-1/2 -translate-y-1/2 left-[2%] flex-col justify-center hidden w-1/5 md:flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_3__.default, {
        classes: "w-8 h-8 mb-5 hover:scale-110 transition duration-200 focus:scale-90",
        svgFill: "#1D1D1B",
        platform: "instagram",
        url: _helpers_constants__WEBPACK_IMPORTED_MODULE_4__.instagramURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_3__.default, {
        classes: "w-8 h-8 mb-5 hover:scale-110 transition duration-200 focus:scale-90",
        svgFill: "#1D1D1B",
        platform: "facebook",
        url: _helpers_constants__WEBPACK_IMPORTED_MODULE_4__.facebookURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap items-center justify-start p-4 md:justify-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-9/12 2xl:w-full",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "block cursor-pointer w-full max-w-[750px] mx-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "",
                src: "logo.png",
                alt: "The Brow & Beauty Studio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MobileMenu__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  }, void 0, false);
}

/***/ }),

/***/ "./components/MobileMenu.js":
/*!**********************************!*\
  !*** ./components/MobileMenu.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mobileMenu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/constants */ "./helpers/constants.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_navItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/navItems */ "./lib/navItems.js");


var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\components\\MobileMenu.js";






function mobileMenu() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  let currentPath = router.pathname; //State management for mobile menu

  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      "aria-label": "Open Menu",
      open: open,
      onClick: () => setOpen(!open),
      className: `btn-mobile-menu ${open ? 'open fixed' : 'absolute top-1/2 -translate-y-1/2'}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      open: open,
      className: `fixed top-0 left-0 -z-10 w-full h-full fill-available p-4 transition-all duration-200 bg-white ${open ? 'opacity-100 z-40' : 'opacity-0'}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col items-center justify-center h-screen",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
          variants: container,
          initial: "hidden",
          animate: open ? 'show' : '',
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            variants: listItem,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/logo-circle-dark.png",
              alt: "The Brow & Beauty Studio Logo",
              className: "w-2/3 mx-auto mb-8 max-w-72"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, this), _lib_navItems__WEBPACK_IMPORTED_MODULE_6__.navItems.map(({
            title,
            url,
            type
          }, i) => {
            return type === "route" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
              className: "mb-5 text-center",
              variants: listItem,
              children: currentPath == "/treatment-menu" || currentPath == "/book" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: `/${url}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                  onClick: () => setOpen(!open),
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 41
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: `/${url}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 41
              }, this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 33
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
              className: "mb-5 text-center",
              variants: listItem,
              children: currentPath == "/treatment-menu" || currentPath == "/book" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: `/#${url}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 41
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                "data-scroll-to": true,
                "data-offset": "-100",
                className: "relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full",
                href: `#${url}`,
                onClick: () => setOpen(!open),
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 41
              }, this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: "text-center",
            variants: listItem,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "transition-all duration-200",
              variants: listItem,
              href: `tel:${_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.phoneNumber}`,
              children: ["Tel: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "font-bold",
                children: _helpers_constants__WEBPACK_IMPORTED_MODULE_4__.phoneNumber
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 121
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/SocialIcon.js":
/*!**********************************!*\
  !*** ./components/SocialIcon.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ socialIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\components\\SocialIcon.js";
function socialIcon({
  platform,
  url,
  classes,
  svgFill
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: `block ${classes}`,
      href: url,
      "aria-label": `Follow The Brow &amp; Beauty Studio on ${platform}`,
      rel: "noreferrer",
      target: "_blank",
      children: [platform == "facebook" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 26 41",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          clipPath: "url(#clip0)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M22.6804 22.8516L23.8358 15.4994H16.6119V10.7283C16.6119 8.71692 17.621 6.75629 20.8564 6.75629H24.1405V0.496704C24.1405 0.496704 21.1602 0 18.3108 0C12.3617 0 8.47304 3.52136 8.47304 9.896V15.4994H1.86011V22.8516H8.47304V40.625H16.6119V22.8516H22.6804Z",
            fill: svgFill
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
            id: "clip0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              width: "26",
              height: "40.625",
              fill: "white"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), platform == "instagram" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 38 47",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
          clipPath: "url(#clip0)",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M19.0068 12.7076C13.6121 12.7076 9.26081 17.3309 9.26081 23.0627C9.26081 28.7945 13.6121 33.4178 19.0068 33.4178C24.4014 33.4178 28.7528 28.7945 28.7528 23.0627C28.7528 17.3309 24.4014 12.7076 19.0068 12.7076ZM19.0068 29.7948C15.5206 29.7948 12.6706 26.7757 12.6706 23.0627C12.6706 19.3496 15.5121 16.3305 19.0068 16.3305C22.5014 16.3305 25.343 19.3496 25.343 23.0627C25.343 26.7757 22.493 29.7948 19.0068 29.7948ZM31.4247 12.284C31.4247 13.6268 30.4068 14.6993 29.1514 14.6993C27.8876 14.6993 26.8782 13.6178 26.8782 12.284C26.8782 10.9502 27.8961 9.86869 29.1514 9.86869C30.4068 9.86869 31.4247 10.9502 31.4247 12.284ZM37.8796 14.7353C37.7354 11.4999 37.0398 8.63401 34.809 6.2728C32.5867 3.91158 29.8894 3.17257 26.8443 3.01035C23.7059 2.82109 14.2992 2.82109 11.1608 3.01035C8.1242 3.16356 5.42688 3.90257 3.19607 6.26378C0.96527 8.625 0.278216 11.4909 0.125537 14.7263C-0.0525879 18.0609 -0.0525879 28.0555 0.125537 31.39C0.269734 34.6254 0.96527 37.4913 3.19607 39.8525C5.42688 42.2138 8.11572 42.9528 11.1608 43.115C14.2992 43.3042 23.7059 43.3042 26.8443 43.115C29.8894 42.9618 32.5867 42.2228 34.809 39.8525C37.0314 37.4913 37.7269 34.6254 37.8796 31.39C38.0577 28.0555 38.0577 18.0699 37.8796 14.7353ZM33.8251 34.9679C33.1635 36.7343 31.8827 38.0951 30.2117 38.8071C27.7095 39.8616 21.772 39.6182 19.0068 39.6182C16.2416 39.6182 10.2956 39.8525 7.80188 38.8071C6.13938 38.1042 4.85857 36.7433 4.18849 34.9679C3.19607 32.3093 3.42509 26.0007 3.42509 23.0627C3.42509 20.1247 3.20456 13.8071 4.18849 11.1575C4.85009 9.39104 6.1309 8.03019 7.80188 7.31822C10.3041 6.26378 16.2416 6.50711 19.0068 6.50711C21.772 6.50711 27.718 6.2728 30.2117 7.31822C31.8742 8.02118 33.155 9.38203 33.8251 11.1575C34.8175 13.8161 34.5885 20.1247 34.5885 23.0627C34.5885 26.0007 34.8175 32.3183 33.8251 34.9679Z",
            fill: svgFill
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
            id: "clip0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
              width: "38",
              height: "46.1429",
              fill: "white"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./helpers/constants.js":
/*!******************************!*\
  !*** ./helpers/constants.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instagramURL": function() { return /* binding */ instagramURL; },
/* harmony export */   "facebookURL": function() { return /* binding */ facebookURL; },
/* harmony export */   "phoneNumber": function() { return /* binding */ phoneNumber; }
/* harmony export */ });
const instagramURL = "https://www.instagram.com/the.browandbeautystudio/";
const facebookURL = "https://www.facebook.com";
const phoneNumber = "0115 666 3333";

/***/ }),

/***/ "./helpers/transitions.js":
/*!********************************!*\
  !*** ./helpers/transitions.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fade": function() { return /* binding */ fade; },
/* harmony export */   "quickFade": function() { return /* binding */ quickFade; },
/* harmony export */   "logoBackground": function() { return /* binding */ logoBackground; },
/* harmony export */   "logoFade": function() { return /* binding */ logoFade; },
/* harmony export */   "backToTop": function() { return /* binding */ backToTop; }
/* harmony export */ });
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

/***/ "./lib/datocms.js":
/*!************************!*\
  !*** ./lib/datocms.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "request": function() { return /* binding */ request; }
/* harmony export */ });
/* harmony import */ var tiny_json_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-json-http */ "tiny-json-http");
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

/***/ "./lib/fragments.js":
/*!**************************!*\
  !*** ./lib/fragments.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsiveImageFragment": function() { return /* binding */ responsiveImageFragment; },
/* harmony export */   "metaTagsFragment": function() { return /* binding */ metaTagsFragment; }
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

/***/ "./lib/navItems.js":
/*!*************************!*\
  !*** ./lib/navItems.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItems": function() { return /* binding */ navItems; }
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/treatment-menu.js":
/*!*********************************!*\
  !*** ./pages/treatment-menu.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_datocms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/datocms */ "./lib/datocms.js");
/* harmony import */ var _lib_fragments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/fragments */ "./lib/fragments.js");
/* harmony import */ var _helpers_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/transitions */ "./helpers/transitions.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/constants */ "./helpers/constants.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Button */ "./components/Button.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Container */ "./components/Container.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-locomotive-scroll */ "react-locomotive-scroll");
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datocms */ "react-datocms");
/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datocms__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\pages\\treatment-menu.js";

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: (0,react_datocms__WEBPACK_IMPORTED_MODULE_12__.renderMetaTags)(home.seo.concat(site.faviconMetaTags))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_11__.LocomotiveScrollProvider, {
      options: {
        smooth: true,
        lerp: 0.07
      },
      containerRef: containerRef,
      watch: [],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "data-scroll-container": true,
        ref: containerRef,
        id: "scroll-container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-scroll-section": true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.LazyMotion, {
            features: framer_motion__WEBPACK_IMPORTED_MODULE_10__.domAnimation,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.m.div, {
              initial: "initial",
              animate: "enter",
              exit: "exit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.m.div, {
                variants: _helpers_transitions__WEBPACK_IMPORTED_MODULE_5__.quickFade,
                className: "relative z-20",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "relative max-w-screen-xl py-12 mx-auto md:py-20",
                    id: "Treatments",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "relative z-10 text-center",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                        children: "Treatments"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      "data-scroll": true,
                      "data-scroll-sticky": true,
                      "data-scroll-target": "#Treatments",
                      src: "/logo-light-trimmed.png",
                      alt: "",
                      className: "absolute top-0 w-full"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "relative z-10 flex-wrap p-8 pt-0 md:flex",
                      children: treatmentCategory.map((category, i) => {
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          className: "relative p-8 text-center md:w-1/2 lg:p-16",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "py-4 border-b border-b-black/50",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                              className: "inline-block px-4 mx-auto mb-0",
                              children: category.heading
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 68,
                              columnNumber: 35
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                              className: "tracking-widest uppercase",
                              children: category.subheading
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 69,
                              columnNumber: 35
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 67,
                            columnNumber: 33
                          }, this), category.treatments.map((treatment, i) => {
                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                              className: "relative",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "py-10 lg:py-12",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                  className: "mb-2",
                                  children: [treatment.treatmentHeading, " - \xA3", treatment.treatmentPrice]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 75,
                                  columnNumber: 41
                                }, this), treatment.treatmentSubheading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                  className: "font-serif text-lg",
                                  children: treatment.treatmentSubheading
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 77,
                                  columnNumber: 43
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                  className: "text-sm",
                                  children: treatment.treatmentDescription
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 79,
                                  columnNumber: 41
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                  src: "/logo-circle-dark.png",
                                  alt: "",
                                  className: "absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 80,
                                  columnNumber: 41
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 74,
                                columnNumber: 39
                              }, this)
                            }, i, false, {
                              fileName: _jsxFileName,
                              lineNumber: 73,
                              columnNumber: 37
                            }, this);
                          })]
                        }, i, true, {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 31
                        }, this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "relative p-8 my-20 overflow-hidden bg-gray-200 sm:p-12 lg:p-20",
                    id: "Where",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "sm:max-w-screen-xs",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "mb-[-6px] font-serif text-4xl leading-none text-center text-white lg:text-5xl lg:mb-[-9px] relative z-50",
                        "data-scroll-direction": "horizontal",
                        "data-scroll-speed": "-0.1",
                        "data-scroll": true,
                        children: "Where"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "relative z-10 p-6 pb-16 mb-8 bg-white shadow-lg md:p-12 md:pb-20",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          children: "A: The Brow and Beauty Studio"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          className: "pl-5 leading-relaxed",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Old Mill Cottage"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 102,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Rolleston"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 103,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Southwell Golf Club"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 104,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Nottinghamshire"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 105,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "NG23 5SF"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 106,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          children: ["T: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "inline-block pl-1 mt-8 font-bold",
                            href: `tel:${_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.phoneNumber}`,
                            children: _helpers_constants__WEBPACK_IMPORTED_MODULE_6__.phoneNumber
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 109,
                            columnNumber: 35
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 109,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                          destination: "https://www.google.com/maps/dir//Southwell+Golf+Club,+Occupation+Ln,+Southwell+NG25+0TS/@53.0661906,-0.9024038,17z/data=!4m16!1m6!3m5!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2sSouthwell+Golf+Club!8m2!3d53.0661394!4d-0.9003083!4m8!1m0!1m5!1m1!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2m2!1d-0.9003083!2d53.0661394!3e2",
                          modifier: "mt-8 absolute -bottom-7 left-1/2 -translate-x-1/2 w-4/5 sm:w-auto text-center",
                          label: "Get directions",
                          secondary: true,
                          external: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "absolute top-0 left-0 z-0 w-full h-full overflow-hidden",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_datocms__WEBPACK_IMPORTED_MODULE_12__.Image, {
                          data: _objectSpread(_objectSpread({}, home.locationImage.responsiveImage), {}, {
                            alt: "The Brow &amp; Beauty Studioooo"
                          }),
                          className: "absolute w-[220%] md:w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 122,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        className: "inline-block p-4 px-12 text-sm uppercase -rotate-90 bg-white",
                        href: "#",
                        children: "View map"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
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
  ${_lib_fragments__WEBPACK_IMPORTED_MODULE_4__.metaTagsFragment}
  ${_lib_fragments__WEBPACK_IMPORTED_MODULE_4__.responsiveImageFragment}
`;
async function getStaticProps() {
  const data = await (0,_lib_datocms__WEBPACK_IMPORTED_MODULE_3__.request)({
    query: HOMEPAGE_QUERY
  });
  return {
    props: {
      data
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-datocms":
/*!********************************!*\
  !*** external "react-datocms" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-datocms");;

/***/ }),

/***/ "react-ig-feed":
/*!********************************!*\
  !*** external "react-ig-feed" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-ig-feed");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-locomotive-scroll":
/*!******************************************!*\
  !*** external "react-locomotive-scroll" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-locomotive-scroll");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "tiny-json-http":
/*!*********************************!*\
  !*** external "tiny-json-http" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("tiny-json-http");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/treatment-menu.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9jb21wb25lbnRzL1NvY2lhbEljb24uanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vaGVscGVycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vaGVscGVycy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9saWIvZGF0b2Ntcy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9saWIvZnJhZ21lbnRzLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2xpYi9uYXZJdGVtcy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vcGFnZXMvdHJlYXRtZW50LW1lbnUuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcInJlYWN0LWRhdG9jbXNcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJyZWFjdC1pZy1mZWVkXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJyZWFjdC1sb2NvbW90aXZlLXNjcm9sbFwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcInRpbnktanNvbi1odHRwXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2lnbm9yZWR8QzpcXHdhbXA2NFxcd3d3XFxicm93LWJlYXV0eS5uZXh0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQnV0dG9uIiwiZXh0ZXJuYWwiLCJkZXN0aW5hdGlvbiIsIm1vZGlmaWVyIiwibGFiZWwiLCJzZWNvbmRhcnkiLCJDb250YWN0IiwicGhvbmVOdW1iZXIiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsIkZvb3RlciIsImZhZGUiLCJpbnN0YWdyYW1VUkwiLCJmYWNlYm9va1VSTCIsIm5hdkl0ZW1zIiwidGl0bGUiLCJ1cmwiLCJ0eXBlIiwiaSIsIkhlYWRlciIsIkxheW91dCIsIm1vYmlsZU1lbnUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50UGF0aCIsInBhdGhuYW1lIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJzaG93IiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImxpc3RJdGVtIiwic29jaWFsSWNvbiIsInBsYXRmb3JtIiwiY2xhc3NlcyIsInN2Z0ZpbGwiLCJpbml0aWFsIiwiZW50ZXIiLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsImV4aXQiLCJxdWlja0ZhZGUiLCJsb2dvQmFja2dyb3VuZCIsInpJbmRleCIsImxvZ29GYWRlIiwiYmFja1RvVG9wIiwicmVxdWVzdCIsInF1ZXJ5IiwidmFyaWFibGVzIiwicHJldmlldyIsImVuZHBvaW50IiwiYm9keSIsInRpbnkiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0RBVE9DTVNfQVBJX1RPS0VOIiwiZGF0YSIsImVycm9ycyIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IiwibWV0YVRhZ3NGcmFnbWVudCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibGVuZ3RoIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiSG9tZSIsImhvbWUiLCJzaXRlIiwidHJlYXRtZW50Q2F0ZWdvcnkiLCJjb250YWluZXJSZWYiLCJyZW5kZXJNZXRhVGFncyIsInNlbyIsImNvbmNhdCIsImZhdmljb25NZXRhVGFncyIsInNtb290aCIsImxlcnAiLCJkb21BbmltYXRpb24iLCJjYXRlZ29yeSIsImhlYWRpbmciLCJzdWJoZWFkaW5nIiwidHJlYXRtZW50cyIsInRyZWF0bWVudCIsInRyZWF0bWVudEhlYWRpbmciLCJ0cmVhdG1lbnRQcmljZSIsInRyZWF0bWVudFN1YmhlYWRpbmciLCJ0cmVhdG1lbnREZXNjcmlwdGlvbiIsImxvY2F0aW9uSW1hZ2UiLCJyZXNwb25zaXZlSW1hZ2UiLCJhbHQiLCJIT01FUEFHRV9RVUVSWSIsImdldFN0YXRpY1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZSxTQUFTQSxNQUFULENBQWdCO0FBQUVDLFVBQUY7QUFBWUMsYUFBWjtBQUF5QkMsVUFBekI7QUFBbUNDLE9BQW5DO0FBQTBDQztBQUExQyxDQUFoQixFQUF1RTtBQUNsRixzQkFDSTtBQUFBLGVBQ0tKLFFBQVEsaUJBQ0w7QUFBRyxTQUFHLEVBQUMsWUFBUDtBQUFvQixZQUFNLEVBQUMsUUFBM0I7QUFBb0MsVUFBSSxFQUFFQyxXQUExQztBQUF1RCxlQUFTLEVBQUcsT0FBTUcsU0FBUyxHQUFHLGdCQUFILEdBQXNCLEVBQUcsSUFBR0YsUUFBUyxHQUF2SDtBQUFBLGdCQUNLQztBQURMO0FBQUE7QUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSS9rQiw0REFBaUI7QUFDckIsSUFBSUQsbUVBQXdCO0FBQzVCLENBOUJBO0FBZ0NPLGVBQWVpbEIsY0FBZixHQUFnQztBQUNyQyxRQUFNcmxCLElBQUksR0FBRyxNQUFNWixxREFBTyxDQUFDO0FBQ3pCQyxTQUFLLEVBQUUrbEI7QUFEa0IsR0FBRCxDQUExQjtBQUlBLFNBQU87QUFDTDFpQixTQUFLLEVBQUU7QUFBRTFDO0FBQUY7QUFERixHQUFQO0FBR0QsQzs7Ozs7Ozs7Ozs7QUN0TVksa0JBQWtCLE1BQU0sd0JBQXdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7O0FDREEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUMsMkM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3RyZWF0bWVudC1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHsgZXh0ZXJuYWwsIGRlc3RpbmF0aW9uLCBtb2RpZmllciwgbGFiZWwsIHNlY29uZGFyeSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtleHRlcm5hbCAmJiBcclxuICAgICAgICAgICAgICAgIDxhIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtkZXN0aW5hdGlvbn0gY2xhc3NOYW1lPXtgYnRuICR7c2Vjb25kYXJ5ID8gJ2J0bi0tc2Vjb25kYXJ5JyA6ICcnfSAke21vZGlmaWVyfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHshZXh0ZXJuYWwgJiYgXHJcbiAgICAgICAgICAgICAgICA8YSBkYXRhLXNjcm9sbC10byBkYXRhLW9mZnNldD1cIi0xMDBcIiBocmVmPXtkZXN0aW5hdGlvbn0gY2xhc3NOYW1lPXtgYnRuICR7c2Vjb25kYXJ5ID8gJ2J0bi0tc2Vjb25kYXJ5JyA6ICcnfSAke21vZGlmaWVyfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgcGhvbmVOdW1iZXIgfSBmcm9tICdAL2hlbHBlcnMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0AvY29tcG9uZW50cy9Db250YWluZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KHsgIH0pIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktMTYgYmctZ3JheS0xMDAgc206cC04IG1kOnAtMTIgbGc6cC0yMFwiIGlkPVwiQ29udGFjdFwiPlxyXG5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1bLTZweF0gZm9udC1zZXJpZiB0ZXh0LTR4bCBsZWFkaW5nLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBsZzp0ZXh0LTV4bCBsZzptYi1bLTlweF1cIj5Db250YWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LXNjcmVlbi1sZyBwLTggbXgtYXV0byBiZy13aGl0ZSBzaGFkb3ctbGcgc206cC04IG1kOnAtMTIgbGc6cC0yMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImxvZ28tY2lyY2xlLWxpZ2h0LnBuZ1wiIGFsdD1cIlRoZSBCcm93ICZhbXA7IEJlYXV0eSBTdHVkaW9cIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTAgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgbGVmdC0xLzJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTIwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tc20gbXgtYXV0byBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1jZW50ZXJcIj5JZiB5b3UnZCBsaWtlIHRvIGdldCBpbiB0b3VjaCB0byBtYWtlIGEgYm9va2luZyBvciBhc2sgYSBxdWVzdGlvbiBwbGVhc2UgdXNlIHRoZSBmb3JtIGJlbG93LiBJZiB5b3UnZCBwcmVmZXIgdG8gdGFsaywgZmVsIGZyZWUgdG8gZ2l2ZSBtZSBhIGNhbGwgZGlyZWN0bHkgb24gPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGZvbnQtYm9sZFwiIGhyZWY9e2B0ZWw6JHtwaG9uZU51bWJlcn1gfT57cGhvbmVOdW1iZXJ9PC9hPi48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIiBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hnZXJkcWFxXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LXdyYXAgbXQtNCAtbS0xIG92ZXJmbG93LXgtaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lICpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwidy1mdWxsXCIgbmFtZT1cInBob25lbnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsICpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsXCIgbmFtZT1cIlRyZWF0bWVudCBUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkV5ZWJyb3cgQ2FyZVwiPkV5ZWJyb3cgQ2FyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFeWVsYXNoIEV4dGVuc2lvbnNcIj5FeWVsYXNoIEV4dGVuc2lvbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmFjaWFsXCI+RmFjaWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hc3NhZ2VcIj5NYXNzYWdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hc3NhZ2VcIj5NYXNzYWdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pY3JvYmxhZGluZ1wiPk1pY3JvYmxhZGluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBuYW1lPVwidGVsZXBob25lXCIgcGxhY2Vob2xkZXI9XCJUZWxlcGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC00OFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIl9nb3RjaGFcIiBjbGFzc05hbWU9XCJoaWRkZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHAtNCBteC1hdXRvIHRleHQtc20gdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayBtZDpwLTYgbGc6cHgtOCBsZzpweS00XCIgdmFsdWU9XCJTZW5kIEZvcm1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4tM3hsIFwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW5zdGFncmFtRmVlZCBmcm9tICdyZWFjdC1pZy1mZWVkJ1xyXG5pbXBvcnQgeyBtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgbmF2SXRlbXMgfSBmcm9tICdAL2xpYi9uYXZJdGVtcydcclxuaW1wb3J0IHsgaW5zdGFncmFtVVJMLCBmYWNlYm9va1VSTCB9IGZyb20gJ0AvaGVscGVycy9jb25zdGFudHMnXHJcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdAL2hlbHBlcnMvdHJhbnNpdGlvbnMnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcidcclxuaW1wb3J0IFNvY2lhbEljb24gZnJvbSAnQC9jb21wb25lbnRzL1NvY2lhbEljb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG0uZGl2IHZhcmlhbnRzPXtmYWRlfT5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja1wiPlxyXG5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJTb2NpYWxcIj5cclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IG1kOnAtMTIgbGc6cC0yMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wIG1yLTQgdGV4dC0zeGwgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTEwMCB4bDp0ZXh0LTV4bFwiPlNvY2lhbDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbiBjbGFzc2VzPVwibWItMCB3LTYgaC02IG14LTIgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOnNjYWxlLTkwXCIgc3ZnRmlsbD1cIiNGRkZcIiBwbGF0Zm9ybT1cImluc3RhZ3JhbVwiIHVybD17aW5zdGFncmFtVVJMfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbiBjbGFzc2VzPVwibWItMCB3LTYgaC02IG14LTIgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOnNjYWxlLTkwXCIgc3ZnRmlsbD1cIiNGRkZcIiBwbGF0Zm9ybT1cImZhY2Vib29rXCIgdXJsPXtmYWNlYm9va1VSTH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsRmVlZFwiPlxyXG4gICAgICAgICAgICAgIDxJbnN0YWdyYW1GZWVkIHRva2VuPVwiSUdRVkpYVlhKV2EwbDJVR3BXTlRsbFJFRk1aQUUwMmNtaHhYMHczY0c1U2RHWTRObVZvY1dKb1ltOUljMUJ0VVVVMmIwdFRSbG80Y1haQTVZVU16YzNkSVpBVzFqWkFXMXpaQUdSWGNGRmlUVzFhVVhGSWNIUldOUzFRUkZkWkFNWE5aQUxVNUtPVlpBTlJIVmZiMjExYTB4a2NsRjZTd1pEWkRcIiBjb3VudGVyPVwiNlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTUwIHB5LTE2IGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctWzI3MHB4XSBteC1hdXRvXCIgc3JjPVwiL2xvZ28tY2lyY2xlLWRhcmsucG5nXCIgYWx0PVwiVGhlIEJyb3cgJmFtcDsgQmVhdXR5IFN0dWRpb1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAganVzdGlmeS1hcm91bmQgaGlkZGVuIG1heC13LWxnIHAtNCBteC1hdXRvIG10LTggdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctYmxhY2sgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKHsgdGl0bGUsIHVybCwgdHlwZSB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09IFwicm91dGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dXJsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHAtMiB0cmFja2luZy13aWRlc3QgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6bGVmdC0xLzIgYWZ0ZXI6cmlnaHQtMS8yIGFmdGVyOnctWzBweF0gYWZ0ZXI6aC1bMXB4XSBhZnRlcjp0cmFuc2Zvcm0gYWZ0ZXI6LXRyYW5zbGF0ZS14LTEvMiBhZnRlcjp0cmFuc2l0aW9uLWFsbCBhZnRlcjpkdXJhdGlvbi0zMDAgYWZ0ZXI6Ymctd2hpdGUgaG92ZXI6YWZ0ZXI6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHt1cmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1zY3JvbGwtdG8gZGF0YS1vZmZzZXQ9XCItMTAwXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgcC0yIHRyYWNraW5nLXdpZGVzdCBhZnRlcjphYnNvbHV0ZSBhZnRlcjpib3R0b20tMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjpyaWdodC0xLzIgYWZ0ZXI6dy1bMHB4XSBhZnRlcjpoLVsxcHhdIGFmdGVyOnRyYW5zZm9ybSBhZnRlcjotdHJhbnNsYXRlLXgtMS8yIGFmdGVyOnRyYW5zaXRpb24tYWxsIGFmdGVyOmR1cmF0aW9uLTMwMCBhZnRlcjpiZy13aGl0ZSBob3ZlcjphZnRlcjp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy0xLzYgbXgtYXV0byBtdC0xNiBvcGFjaXR5LTIwXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC04IG10LTE2IGZvbnQtc2VyaWYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPiZjb3B5OyBDb3B5cmlnaHQgVGhlIEJyb3cgJiBCZWF1dHkgU3R1ZGlvIDIwMjEgLSBBbGwgcmlnaHRzIHJlc2VydmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDwvbS5kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJ0AvY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICdAL2NvbXBvbmVudHMvTW9iaWxlTWVudSdcbmltcG9ydCBTb2NpYWxJY29uIGZyb20gJ0AvY29tcG9uZW50cy9Tb2NpYWxJY29uJ1xuaW1wb3J0IHsgaW5zdGFncmFtVVJMLCBmYWNlYm9va1VSTCB9IGZyb20gJ0AvaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBpZD1cIkhvbWVcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGxlZnQtWzIlXSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoaWRkZW4gdy0xLzUgbWQ6ZmxleFwiPlxuICAgICAgICAgICAgPFNvY2lhbEljb24gY2xhc3Nlcz1cInctOCBoLTggbWItNSBob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZm9jdXM6c2NhbGUtOTBcIiBzdmdGaWxsPVwiIzFEMUQxQlwiIHBsYXRmb3JtPVwiaW5zdGFncmFtXCIgdXJsPXtpbnN0YWdyYW1VUkx9IC8+XG4gICAgICAgICAgICA8U29jaWFsSWNvbiBjbGFzc2VzPVwidy04IGgtOCBtYi01IGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpzY2FsZS05MFwiIHN2Z0ZpbGw9XCIjMUQxRDFCXCIgcGxhdGZvcm09XCJmYWNlYm9va1wiIHVybD17ZmFjZWJvb2tVUkx9IC8+XG4gICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcC00IG1kOmp1c3RpZnktY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOS8xMiAyeGw6dy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgbWF4LXctWzc1MHB4XSBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCJsb2dvLnBuZ1wiIGFsdD1cIlRoZSBCcm93ICZhbXA7IEJlYXV0eSBTdHVkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgIDxNb2JpbGVNZW51IC8+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgcGhvbmVOdW1iZXIgfSBmcm9tICdAL2hlbHBlcnMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBuYXZJdGVtcyB9IGZyb20gJ0AvbGliL25hdkl0ZW1zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9iaWxlTWVudSgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxldCBjdXJyZW50UGF0aCA9IHJvdXRlci5wYXRobmFtZTtcclxuXHJcbiAgICAvL1N0YXRlIG1hbmFnZW1lbnQgZm9yIG1vYmlsZSBtZW51XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xyXG4gICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgc2hvdzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IHtcclxuICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiT3BlbiBNZW51XCIgb3Blbj17b3Blbn0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9IGNsYXNzTmFtZT17YGJ0bi1tb2JpbGUtbWVudSAke29wZW4gPyAnb3BlbiBmaXhlZCcgOiAnYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yJ31gfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7LyogTW9iaWxlIE1lbnUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgb3Blbj17b3Blbn0gY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIC16LTEwIHctZnVsbCBoLWZ1bGwgZmlsbC1hdmFpbGFibGUgcC00IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBiZy13aGl0ZSAke29wZW4gPyAnb3BhY2l0eS0xMDAgei00MCcgOiAnb3BhY2l0eS0wJ31gfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtjb250YWluZXJ9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPXtvcGVuID8gJ3Nob3cnIDogJyd9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17bGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLWNpcmNsZS1kYXJrLnBuZ1wiIGFsdD1cIlRoZSBCcm93ICZhbXA7IEJlYXV0eSBTdHVkaW8gTG9nb1wiIGNsYXNzTmFtZT1cInctMi8zIG14LWF1dG8gbWItOCBtYXgtdy03MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKCh7IHRpdGxlLCB1cmwsIHR5cGUgfSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcInJvdXRlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlclwiIHZhcmlhbnRzPXtsaXN0SXRlbX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjdXJyZW50UGF0aCA9PSBcIi90cmVhdG1lbnQtbWVudVwiIHx8IGN1cnJlbnRQYXRoID09IFwiL2Jvb2tcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1cmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6bGVmdC0xLzIgYWZ0ZXI6cmlnaHQtMS8yIGFmdGVyOnctWzBweF0gYWZ0ZXI6aC1bMXB4XSBhZnRlcjp0cmFuc2Zvcm0gYWZ0ZXI6LXRyYW5zbGF0ZS14LTEvMiBhZnRlcjp0cmFuc2l0aW9uLWFsbCBhZnRlcjpkdXJhdGlvbi0zMDAgYWZ0ZXI6YmctYmxhY2sgaG92ZXI6YWZ0ZXI6dy1mdWxsXCIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3VybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSBhZnRlcjphYnNvbHV0ZSBhZnRlcjpib3R0b20tMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjpyaWdodC0xLzIgYWZ0ZXI6dy1bMHB4XSBhZnRlcjpoLVsxcHhdIGFmdGVyOnRyYW5zZm9ybSBhZnRlcjotdHJhbnNsYXRlLXgtMS8yIGFmdGVyOnRyYW5zaXRpb24tYWxsIGFmdGVyOmR1cmF0aW9uLTMwMCBhZnRlcjpiZy1ibGFjayBob3ZlcjphZnRlcjp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCIgdmFyaWFudHM9e2xpc3RJdGVtfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGN1cnJlbnRQYXRoID09IFwiL3RyZWF0bWVudC1tZW51XCIgfHwgY3VycmVudFBhdGggPT0gXCIvYm9va1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHt1cmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6bGVmdC0xLzIgYWZ0ZXI6cmlnaHQtMS8yIGFmdGVyOnctWzBweF0gYWZ0ZXI6aC1bMXB4XSBhZnRlcjp0cmFuc2Zvcm0gYWZ0ZXI6LXRyYW5zbGF0ZS14LTEvMiBhZnRlcjp0cmFuc2l0aW9uLWFsbCBhZnRlcjpkdXJhdGlvbi0zMDAgYWZ0ZXI6YmctYmxhY2sgaG92ZXI6YWZ0ZXI6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXNjcm9sbC10byBkYXRhLW9mZnNldD1cIi0xMDBcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSBhZnRlcjphYnNvbHV0ZSBhZnRlcjpib3R0b20tMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjpyaWdodC0xLzIgYWZ0ZXI6dy1bMHB4XSBhZnRlcjpoLVsxcHhdIGFmdGVyOnRyYW5zZm9ybSBhZnRlcjotdHJhbnNsYXRlLXgtMS8yIGFmdGVyOnRyYW5zaXRpb24tYWxsIGFmdGVyOmR1cmF0aW9uLTMwMCBhZnRlcjpiZy1ibGFjayBob3ZlcjphZnRlcjp3LWZ1bGxcIiBocmVmPXtgIyR7dXJsfWB9IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHZhcmlhbnRzPXtsaXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiIHZhcmlhbnRzPXtsaXN0SXRlbX0gaHJlZj17YHRlbDoke3Bob25lTnVtYmVyfWB9PlRlbDogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3Bob25lTnVtYmVyfTwvc3Bhbj48L2E+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEVuZCBNb2JpbGUgTWVudSAqL31cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvY2lhbEljb24oeyBwbGF0Zm9ybSwgdXJsLCBjbGFzc2VzLCBzdmdGaWxsfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2BibG9jayAke2NsYXNzZXN9YH0gaHJlZj17dXJsfSBhcmlhLWxhYmVsPXtgRm9sbG93IFRoZSBCcm93ICZhbXA7IEJlYXV0eSBTdHVkaW8gb24gJHtwbGF0Zm9ybX1gfSByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblxyXG4gICAgICAgICAgICB7cGxhdGZvcm0gPT0gXCJmYWNlYm9va1wiICYmXHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDI2IDQxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIuNjgwNCAyMi44NTE2TDIzLjgzNTggMTUuNDk5NEgxNi42MTE5VjEwLjcyODNDMTYuNjExOSA4LjcxNjkyIDE3LjYyMSA2Ljc1NjI5IDIwLjg1NjQgNi43NTYyOUgyNC4xNDA1VjAuNDk2NzA0QzI0LjE0MDUgMC40OTY3MDQgMjEuMTYwMiAwIDE4LjMxMDggMEMxMi4zNjE3IDAgOC40NzMwNCAzLjUyMTM2IDguNDczMDQgOS44OTZWMTUuNDk5NEgxLjg2MDExVjIyLjg1MTZIOC40NzMwNFY0MC42MjVIMTYuNjExOVYyMi44NTE2SDIyLjY4MDRaXCIgZmlsbD17c3ZnRmlsbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCI0MC42MjVcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge3BsYXRmb3JtID09IFwiaW5zdGFncmFtXCIgJiZcclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzggNDdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOS4wMDY4IDEyLjcwNzZDMTMuNjEyMSAxMi43MDc2IDkuMjYwODEgMTcuMzMwOSA5LjI2MDgxIDIzLjA2MjdDOS4yNjA4MSAyOC43OTQ1IDEzLjYxMjEgMzMuNDE3OCAxOS4wMDY4IDMzLjQxNzhDMjQuNDAxNCAzMy40MTc4IDI4Ljc1MjggMjguNzk0NSAyOC43NTI4IDIzLjA2MjdDMjguNzUyOCAxNy4zMzA5IDI0LjQwMTQgMTIuNzA3NiAxOS4wMDY4IDEyLjcwNzZaTTE5LjAwNjggMjkuNzk0OEMxNS41MjA2IDI5Ljc5NDggMTIuNjcwNiAyNi43NzU3IDEyLjY3MDYgMjMuMDYyN0MxMi42NzA2IDE5LjM0OTYgMTUuNTEyMSAxNi4zMzA1IDE5LjAwNjggMTYuMzMwNUMyMi41MDE0IDE2LjMzMDUgMjUuMzQzIDE5LjM0OTYgMjUuMzQzIDIzLjA2MjdDMjUuMzQzIDI2Ljc3NTcgMjIuNDkzIDI5Ljc5NDggMTkuMDA2OCAyOS43OTQ4Wk0zMS40MjQ3IDEyLjI4NEMzMS40MjQ3IDEzLjYyNjggMzAuNDA2OCAxNC42OTkzIDI5LjE1MTQgMTQuNjk5M0MyNy44ODc2IDE0LjY5OTMgMjYuODc4MiAxMy42MTc4IDI2Ljg3ODIgMTIuMjg0QzI2Ljg3ODIgMTAuOTUwMiAyNy44OTYxIDkuODY4NjkgMjkuMTUxNCA5Ljg2ODY5QzMwLjQwNjggOS44Njg2OSAzMS40MjQ3IDEwLjk1MDIgMzEuNDI0NyAxMi4yODRaTTM3Ljg3OTYgMTQuNzM1M0MzNy43MzU0IDExLjQ5OTkgMzcuMDM5OCA4LjYzNDAxIDM0LjgwOSA2LjI3MjhDMzIuNTg2NyAzLjkxMTU4IDI5Ljg4OTQgMy4xNzI1NyAyNi44NDQzIDMuMDEwMzVDMjMuNzA1OSAyLjgyMTA5IDE0LjI5OTIgMi44MjEwOSAxMS4xNjA4IDMuMDEwMzVDOC4xMjQyIDMuMTYzNTYgNS40MjY4OCAzLjkwMjU3IDMuMTk2MDcgNi4yNjM3OEMwLjk2NTI3IDguNjI1IDAuMjc4MjE2IDExLjQ5MDkgMC4xMjU1MzcgMTQuNzI2M0MtMC4wNTI1ODc5IDE4LjA2MDkgLTAuMDUyNTg3OSAyOC4wNTU1IDAuMTI1NTM3IDMxLjM5QzAuMjY5NzM0IDM0LjYyNTQgMC45NjUyNyAzNy40OTEzIDMuMTk2MDcgMzkuODUyNUM1LjQyNjg4IDQyLjIxMzggOC4xMTU3MiA0Mi45NTI4IDExLjE2MDggNDMuMTE1QzE0LjI5OTIgNDMuMzA0MiAyMy43MDU5IDQzLjMwNDIgMjYuODQ0MyA0My4xMTVDMjkuODg5NCA0Mi45NjE4IDMyLjU4NjcgNDIuMjIyOCAzNC44MDkgMzkuODUyNUMzNy4wMzE0IDM3LjQ5MTMgMzcuNzI2OSAzNC42MjU0IDM3Ljg3OTYgMzEuMzlDMzguMDU3NyAyOC4wNTU1IDM4LjA1NzcgMTguMDY5OSAzNy44Nzk2IDE0LjczNTNaTTMzLjgyNTEgMzQuOTY3OUMzMy4xNjM1IDM2LjczNDMgMzEuODgyNyAzOC4wOTUxIDMwLjIxMTcgMzguODA3MUMyNy43MDk1IDM5Ljg2MTYgMjEuNzcyIDM5LjYxODIgMTkuMDA2OCAzOS42MTgyQzE2LjI0MTYgMzkuNjE4MiAxMC4yOTU2IDM5Ljg1MjUgNy44MDE4OCAzOC44MDcxQzYuMTM5MzggMzguMTA0MiA0Ljg1ODU3IDM2Ljc0MzMgNC4xODg0OSAzNC45Njc5QzMuMTk2MDcgMzIuMzA5MyAzLjQyNTA5IDI2LjAwMDcgMy40MjUwOSAyMy4wNjI3QzMuNDI1MDkgMjAuMTI0NyAzLjIwNDU2IDEzLjgwNzEgNC4xODg0OSAxMS4xNTc1QzQuODUwMDkgOS4zOTEwNCA2LjEzMDkgOC4wMzAxOSA3LjgwMTg4IDcuMzE4MjJDMTAuMzA0MSA2LjI2Mzc4IDE2LjI0MTYgNi41MDcxMSAxOS4wMDY4IDYuNTA3MTFDMjEuNzcyIDYuNTA3MTEgMjcuNzE4IDYuMjcyOCAzMC4yMTE3IDcuMzE4MjJDMzEuODc0MiA4LjAyMTE4IDMzLjE1NSA5LjM4MjAzIDMzLjgyNTEgMTEuMTU3NUMzNC44MTc1IDEzLjgxNjEgMzQuNTg4NSAyMC4xMjQ3IDM0LjU4ODUgMjMuMDYyN0MzNC41ODg1IDI2LjAwMDcgMzQuODE3NSAzMi4zMTgzIDMzLjgyNTEgMzQuOTY3OVpcIiBmaWxsPXtzdmdGaWxsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIzOFwiIGhlaWdodD1cIjQ2LjE0MjlcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImV4cG9ydCBjb25zdCBpbnN0YWdyYW1VUkwgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdGhlLmJyb3dhbmRiZWF1dHlzdHVkaW8vXCI7XHJcbmV4cG9ydCBjb25zdCBmYWNlYm9va1VSTCA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCI7XHJcbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlciA9IFwiMDExNSA2NjYgMzMzM1wiOyIsImV4cG9ydCBjb25zdCBmYWRlID0ge1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAgfSxcbiAgZW50ZXI6IHsgXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjQsIGVhc2U6IFswLjgzLCAwLCAwLjE3LCAxXSwgZGVsYXk6IDIuNzUgfVxuICB9LFxuXHRleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcblx0XHR0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjQsIGVhc2U6IFswLjgzLCAwLCAwLjE3LCAxXSB9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHF1aWNrRmFkZSA9IHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwIH0sXG4gIGVudGVyOiB7IFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdIH1cbiAgfSxcblx0ZXhpdDoge1xuICAgIG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdIH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgbG9nb0JhY2tncm91bmQgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAxLFxuICB9LFxuICBlbnRlcjoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdLCBkZWxheTogMiB9XG4gIH0sICBcbiAgZXhpdDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgekluZGV4OiAtMTAwLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvRmFkZSA9IHtcbiAgaW5pdGlhbDoge1xuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIGVudGVyOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLCBlYXNlOiBbMC44MywgMCwgMC4xNywgMV0gfVxuICB9LCAgXG4gIGV4aXQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIGVhc2U6IFswLjgzLCAwLCAwLjE3LCAxXSB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJhY2tUb1RvcCA9IHtcbiAgaW5pdGlhbDoge1xuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIGVudGVyOiB7IFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdLCBkZWxheTogNSB9XG4gIH0sXG5cdGV4aXQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIGVhc2U6IFswLjgzLCAwLCAwLjE3LCAxXSB9XG5cdH1cbn0iLCJpbXBvcnQgdGlueSBmcm9tICd0aW55LWpzb24taHR0cCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0KHsgcXVlcnksIHZhcmlhYmxlcywgcHJldmlldyB9KSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBwcmV2aWV3XG4gICAgPyBgaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tL3ByZXZpZXdgXG4gICAgOiBgaHR0cHM6Ly9ncmFwaHFsLmRhdG9jbXMuY29tL2A7XG5cbiAgICBjb25zdCB7IGJvZHkgfSA9IGF3YWl0IHRpbnkucG9zdCh7XG4gICAgICAgIHVybDogZW5kcG9pbnQsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5ORVhUX0RBVE9DTVNfQVBJX1RPS0VOfWAsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKGJvZHkuZXJyb3JzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJPdWNoISBUaGUgcXVlcnkgaGFzIHNvbWUgZXJyb3JzIVwiKTtcbiAgICAgICAgdGhyb3cgYm9keS5lcnJvcnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvZHkuZGF0YTtcbn0iLCIvLyBTZWU6IGh0dHBzOi8vd3d3LmRhdG9jbXMuY29tL2Jsb2cvb2ZmZXItcmVzcG9uc2l2ZS1wcm9ncmVzc2l2ZS1scWlwLWltYWdlcy1pbi0yMDIwXG5leHBvcnQgY29uc3QgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgPSBgXG4gIGZyYWdtZW50IHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IG9uIFJlc3BvbnNpdmVJbWFnZSB7XG4gICAgc3JjU2V0XG4gICAgd2VicFNyY1NldFxuICAgIHNpemVzXG4gICAgc3JjXG4gICAgd2lkdGhcbiAgICBoZWlnaHRcbiAgICBhc3BlY3RSYXRpb1xuICAgIGFsdFxuICAgIHRpdGxlXG4gICAgYmFzZTY0XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IG1ldGFUYWdzRnJhZ21lbnQgPSBgXG4gIGZyYWdtZW50IG1ldGFUYWdzRnJhZ21lbnQgb24gVGFnIHtcbiAgICBhdHRyaWJ1dGVzXG4gICAgY29udGVudFxuICAgIHRhZ1xuICB9XG5gIiwiZXhwb3J0IGNvbnN0IG5hdkl0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICAgIHVybDogIFwiSG9tZVwiLFxyXG4gICAgICB0eXBlOiBcImFuY2hvclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUcmVhdG1lbnRzXCIsXHJcbiAgICAgIHVybDogIFwiVHJlYXRtZW50c1wiLFxyXG4gICAgICB0eXBlOiBcImFuY2hvclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUcmVhdG1lbnQgTWVudVwiLFxyXG4gICAgICB1cmw6ICBcInRyZWF0bWVudC1tZW51XCIsXHJcbiAgICAgIHR5cGU6IFwicm91dGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQm9vayBPbmxpbmVcIixcclxuICAgICAgdXJsOiAgXCJib29rXCIsXHJcbiAgICAgIHR5cGU6IFwicm91dGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQWJvdXRcIixcclxuICAgICAgdXJsOiAgXCJBYm91dFwiLFxyXG4gICAgICB0eXBlOiBcImFuY2hvclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJXaGVyZVwiLFxyXG4gICAgICB1cmw6ICBcIldoZXJlXCIsXHJcbiAgICAgIHR5cGU6IFwiYW5jaG9yXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcclxuICAgICAgdXJsOiBcIkNvbnRhY3RcIixcclxuICAgICAgdHlwZTogXCJhbmNob3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiU29jaWFsXCIsXHJcbiAgICAgIHVybDogXCJTb2NpYWxcIixcclxuICAgICAgdHlwZTogXCJhbmNob3JcIlxyXG4gICAgfVxyXG4gIF07IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJAL2xpYi9kYXRvY21zXCI7XHJcbmltcG9ydCB7IG1ldGFUYWdzRnJhZ21lbnQsIHJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IH0gZnJvbSBcIkAvbGliL2ZyYWdtZW50c1wiXHJcbmltcG9ydCB7IHF1aWNrRmFkZSB9IGZyb20gJ0AvaGVscGVycy90cmFuc2l0aW9ucydcclxuaW1wb3J0IHsgcGhvbmVOdW1iZXIgfSBmcm9tICdAL2hlbHBlcnMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbidcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xyXG5pbXBvcnQgeyBMYXp5TW90aW9uLCBkb21BbmltYXRpb24sIG0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyBMb2NvbW90aXZlU2Nyb2xsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1sb2NvbW90aXZlLXNjcm9sbCdcclxuaW1wb3J0IHsgSW1hZ2UsIHJlbmRlck1ldGFUYWdzIH0gZnJvbSBcInJlYWN0LWRhdG9jbXNcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhOiB7aG9tZSwgc2l0ZSwgdHJlYXRtZW50Q2F0ZWdvcnl9IH0pIHtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPExheW91dD5cclxuXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICB7cmVuZGVyTWV0YVRhZ3MoaG9tZS5zZW8uY29uY2F0KHNpdGUuZmF2aWNvbk1ldGFUYWdzKSl9IFxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8TG9jb21vdGl2ZVNjcm9sbFByb3ZpZGVyXHJcbiAgICAgICAgb3B0aW9ucz17eyBzbW9vdGg6IHRydWUsIGxlcnA6IDAuMDcsICB9fVxyXG4gICAgICAgIGNvbnRhaW5lclJlZj17Y29udGFpbmVyUmVmfVxyXG4gICAgICAgIHdhdGNoPXtbXX1cclxuICAgICAgPlxyXG5cclxuICAgICAgICA8ZGl2IGRhdGEtc2Nyb2xsLWNvbnRhaW5lciByZWY9e2NvbnRhaW5lclJlZn0gaWQ9XCJzY3JvbGwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBkYXRhLXNjcm9sbC1zZWN0aW9uPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPExhenlNb3Rpb24gZmVhdHVyZXM9e2RvbUFuaW1hdGlvbn0+XHJcblxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgLz4gIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxtLmRpdlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImVudGVyXCJcclxuICAgICAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgPG0uZGl2IHZhcmlhbnRzPXtxdWlja0ZhZGV9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjBcIj4gXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LXNjcmVlbi14bCBweS0xMiBteC1hdXRvIG1kOnB5LTIwXCIgaWQ9XCJUcmVhdG1lbnRzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VHJlYXRtZW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNjcm9sbCBkYXRhLXNjcm9sbC1zdGlja3kgZGF0YS1zY3JvbGwtdGFyZ2V0PVwiI1RyZWF0bWVudHNcIiBzcmM9XCIvbG9nby1saWdodC10cmltbWVkLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleC13cmFwIHAtOCBwdC0wIG1kOmZsZXhcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWF0bWVudENhdGVnb3J5Lm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtOCB0ZXh0LWNlbnRlciBtZDp3LTEvMiBsZzpwLTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGJvcmRlci1iIGJvcmRlci1iLWJsYWNrLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTQgbXgtYXV0byBtYi0wXCI+e2NhdGVnb3J5LmhlYWRpbmd9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2VcIj57Y2F0ZWdvcnkuc3ViaGVhZGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnRyZWF0bWVudHMubWFwKCh0cmVhdG1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgbGc6cHktMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0yXCI+e3RyZWF0bWVudC50cmVhdG1lbnRIZWFkaW5nfSAtICZwb3VuZDt7dHJlYXRtZW50LnRyZWF0bWVudFByaWNlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50LnRyZWF0bWVudFN1YmhlYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LWxnXCI+e3RyZWF0bWVudC50cmVhdG1lbnRTdWJoZWFkaW5nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57dHJlYXRtZW50LnRyZWF0bWVudERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tY2lyY2xlLWRhcmsucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmxvY2sgdy0yMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtYm90dG9tLTggbGVmdC0xLzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtOCBteS0yMCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS0yMDAgc206cC0xMiBsZzpwLTIwXCIgaWQ9XCJXaGVyZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWF4LXctc2NyZWVuLXhzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1bLTZweF0gZm9udC1zZXJpZiB0ZXh0LTR4bCBsZWFkaW5nLW5vbmUgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBsZzp0ZXh0LTV4bCBsZzptYi1bLTlweF0gcmVsYXRpdmUgei01MFwiIGRhdGEtc2Nyb2xsLWRpcmVjdGlvbj1cImhvcml6b250YWxcIiBkYXRhLXNjcm9sbC1zcGVlZD1cIi0wLjFcIiBkYXRhLXNjcm9sbD5XaGVyZTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBwLTYgcGItMTYgbWItOCBiZy13aGl0ZSBzaGFkb3ctbGcgbWQ6cC0xMiBtZDpwYi0yMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkE6IFRoZSBCcm93IGFuZCBCZWF1dHkgU3R1ZGlvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC01IGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PbGQgTWlsbCBDb3R0YWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb2xsZXN0b248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvdXRod2VsbCBHb2xmIENsdWI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdHRpbmdoYW1zaGlyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TkcyMyA1U0Y8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UOiA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcGwtMSBtdC04IGZvbnQtYm9sZFwiIGhyZWY9e2B0ZWw6JHtwaG9uZU51bWJlcn1gfT57cGhvbmVOdW1iZXJ9PC9hPjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8vU291dGh3ZWxsK0dvbGYrQ2x1YiwrT2NjdXBhdGlvbitMbiwrU291dGh3ZWxsK05HMjUrMFRTL0A1My4wNjYxOTA2LC0wLjkwMjQwMzgsMTd6L2RhdGE9ITRtMTYhMW02ITNtNSExczB4NDg3OWI2MGM5ZjlkNGI3NToweDc1ZjViZjFkNjYwNWZmNzQhMnNTb3V0aHdlbGwrR29sZitDbHViIThtMiEzZDUzLjA2NjEzOTQhNGQtMC45MDAzMDgzITRtOCExbTAhMW01ITFtMSExczB4NDg3OWI2MGM5ZjlkNGI3NToweDc1ZjViZjFkNjYwNWZmNzQhMm0yITFkLTAuOTAwMzA4MyEyZDUzLjA2NjEzOTQhM2UyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXI9XCJtdC04IGFic29sdXRlIC1ib3R0b20tNyBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHctNC81IHNtOnctYXV0byB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR2V0IGRpcmVjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHotMCB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBkYXRhPXt7Li4uaG9tZS5sb2NhdGlvbkltYWdlLnJlc3BvbnNpdmVJbWFnZSwgYWx0OiBcIlRoZSBCcm93ICZhbXA7IEJlYXV0eSBTdHVkaW9vb29cIn19IGNsYXNzTmFtZT1cImFic29sdXRlIHctWzIyMCVdIG1kOnctZnVsbCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHRvcC0xLzIgbGVmdC0xLzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGhpZGRlbiAtdHJhbnNsYXRlLXktMS8yIGxlZnQtWzUwMHB4XSBzbTpibG9jayB0b3AtMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBwLTQgcHgtMTIgdGV4dC1zbSB1cHBlcmNhc2UgLXJvdGF0ZS05MCBiZy13aGl0ZVwiIGhyZWY9XCIjXCI+VmlldyBtYXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L20uZGl2PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L20uZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9MYXp5TW90aW9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj4gey8qIHNjcm9sbCBzZWN0aW9uICovfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+IHsvKiBzY3JvbGwgY29udGFpbmVyICovfVxyXG5cclxuICAgICAgPC9Mb2NvbW90aXZlU2Nyb2xsUHJvdmlkZXI+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcblxyXG4gIClcclxufVxyXG5cclxuY29uc3QgSE9NRVBBR0VfUVVFUlkgPSBgXHJcbiAgcXVlcnkgSG9tZVBhZ2Uge1xyXG4gICAgc2l0ZTogX3NpdGUge1xyXG4gICAgICBmYXZpY29uTWV0YVRhZ3Mge1xyXG4gICAgICAgIC4uLm1ldGFUYWdzRnJhZ21lbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaG9tZSB7XHJcbiAgICAgIHNlbzogX3Nlb01ldGFUYWdzIHtcclxuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb25JbWFnZSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7Zm06IGpwZywgZml0OiBjcm9wLCB3OiAyMDE3LCBoOiAxNDY0IH0pIHtcclxuICAgICAgICAgIC4uLnJlc3BvbnNpdmVJbWFnZUZyYWdtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cmVhdG1lbnRDYXRlZ29yeTogYWxsVHJlYXRtZW50Q2F0ZWdvcmllcyB7XHJcbiAgICAgIGhlYWRpbmdcclxuICAgICAgc3ViaGVhZGluZ1xyXG4gICAgICB0cmVhdG1lbnRzIHtcclxuICAgICAgICB0cmVhdG1lbnRIZWFkaW5nXHJcbiAgICAgICAgdHJlYXRtZW50U3ViaGVhZGluZ1xyXG4gICAgICAgIHRyZWF0bWVudERlc2NyaXB0aW9uXHJcbiAgICAgICAgdHJlYXRtZW50UHJpY2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gIFxyXG4gICR7bWV0YVRhZ3NGcmFnbWVudH1cclxuICAke3Jlc3BvbnNpdmVJbWFnZUZyYWdtZW50fVxyXG5gXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgcXVlcnk6IEhPTUVQQUdFX1FVRVJZXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfVxyXG4gIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0b2Ntc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWctZmVlZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvY29tb3RpdmUtc2Nyb2xsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRpbnktanNvbi1odHRwXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9