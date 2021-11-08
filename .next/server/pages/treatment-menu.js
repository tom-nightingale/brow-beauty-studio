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
              children: ["If you'd like to get in touch to make a booking or ask a question please use the form below. If you'd prefer to talk, feel free to give me a call directly on ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "inline-block font-bold",
                href: `tel:${_helpers_constants__WEBPACK_IMPORTED_MODULE_1__.phoneNumber}`,
                children: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__.phoneNumber
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 250
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
                classes: "mb-0 w-8 h-8 mx-2 hover:scale-110 transition duration-200 focus:scale-90",
                svgFill: "#FFF",
                platform: "instagram",
                url: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__.instagramURL
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcon__WEBPACK_IMPORTED_MODULE_8__.default, {
                classes: "mb-0 w-8 h-8 mx-2 hover:scale-110 transition duration-200 focus:scale-90",
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
      className: `fixed top-0 left-0 -z-10 w-full min-h-screen p-4 transition-all duration-200 bg-white ${open ? 'opacity-100 z-40' : 'opacity-0'}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col items-center justify-center min-h-screen mt-[-50px] sm:mt-0",
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
                      className: "relative z-10 flex-wrap grid-flow-col p-8 pt-0 md:flex",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "w-full md:w-1/2",
                        children: treatmentCategory.map((category, i) => {
                          return category.id !== "50993166" && i < 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: `relative w-full p-8 text-center lg:p-16`,
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                              className: "py-4 border-b border-b-black/50",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                className: "inline-block px-4 mx-auto mb-0",
                                children: category.heading
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 75,
                                columnNumber: 41
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "tracking-widest uppercase",
                                children: category.subheading
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 76,
                                columnNumber: 41
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 74,
                              columnNumber: 39
                            }, this), category.treatments.map((treatment, i) => {
                              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "relative",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                  className: "py-10 lg:py-12",
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "mb-2",
                                    children: treatment.treatmentHeading
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 82,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "mb-4 font-serif",
                                    children: [treatment.treatmentSubheading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                      children: ["| ", treatment.treatmentSubheading, " |"]
                                    }, void 0, true), treatment.treatmentPrice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                      children: treatment.treatmentPrice ? ` £${treatment.treatmentPrice}` : ``
                                    }, void 0, false)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 83,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-sm",
                                    children: treatment.treatmentDescription
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 94,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                    src: "/logo-circle-dark.png",
                                    alt: "",
                                    className: "absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 95,
                                    columnNumber: 47
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 81,
                                  columnNumber: 45
                                }, this)
                              }, i, false, {
                                fileName: _jsxFileName,
                                lineNumber: 80,
                                columnNumber: 43
                              }, this);
                            })]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 73,
                            columnNumber: 37
                          }, this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "w-full md:w-1/2",
                        children: treatmentCategory.map((category, i) => {
                          return category.id !== "50993166" && i > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: `relative w-full p-8 text-center lg:p-16`,
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                              className: "py-4 border-b border-b-black/50",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                className: "inline-block px-4 mx-auto mb-0",
                                children: category.heading
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 114,
                                columnNumber: 41
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "tracking-widest uppercase",
                                children: category.subheading
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 115,
                                columnNumber: 41
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 113,
                              columnNumber: 39
                            }, this), category.treatments.map((treatment, i) => {
                              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "relative",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                  className: "py-10 lg:py-12",
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "mb-2",
                                    children: treatment.treatmentHeading
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 121,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "mb-4 font-serif",
                                    children: [treatment.treatmentSubheading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                      children: ["| ", treatment.treatmentSubheading, " |"]
                                    }, void 0, true), treatment.treatmentPrice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                      children: treatment.treatmentPrice ? ` £${treatment.treatmentPrice} |` : ``
                                    }, void 0, false)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 122,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-sm",
                                    children: treatment.treatmentDescription
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 134,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                    src: "/logo-circle-dark.png",
                                    alt: "",
                                    className: "absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 135,
                                    columnNumber: 47
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 120,
                                  columnNumber: 45
                                }, this)
                              }, i, false, {
                                fileName: _jsxFileName,
                                lineNumber: 119,
                                columnNumber: 43
                              }, this);
                            })]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 112,
                            columnNumber: 37
                          }, this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "w-full",
                        children: treatmentCategory.map((category, i) => {
                          return category.id === "50993166" && i > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: `relative w-full p-8 text-center lg:p-16`,
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                              className: "py-4 border-b border-b-black/50",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                className: "inline-block px-4 mx-auto mb-0",
                                children: category.heading
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 153,
                                columnNumber: 41
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "tracking-widest uppercase",
                                children: category.subheading
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 154,
                                columnNumber: 41
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 152,
                              columnNumber: 39
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                              className: "max-w-md mx-auto mt-8 text-sm content",
                              dangerouslySetInnerHTML: {
                                __html: category.description
                              }
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 156,
                              columnNumber: 39
                            }, this), category.treatments.map((treatment, i) => {
                              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "relative",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                  className: "py-10 lg:py-12",
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "mb-2",
                                    children: treatment.treatmentHeading
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 161,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "mb-4 font-serif",
                                    children: [treatment.treatmentSubheading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                      children: ["| ", treatment.treatmentSubheading, " |"]
                                    }, void 0, true), treatment.treatmentPrice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                      children: treatment.treatmentPrice ? ` £${treatment.treatmentPrice} |` : ``
                                    }, void 0, false)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 162,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-sm",
                                    children: treatment.treatmentDescription
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 174,
                                    columnNumber: 47
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                                    src: "/logo-circle-dark.png",
                                    alt: "",
                                    className: "absolute block w-20 transform -translate-x-1/2 -bottom-8 left-1/2"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 175,
                                    columnNumber: 47
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 160,
                                  columnNumber: 45
                                }, this)
                              }, i, false, {
                                fileName: _jsxFileName,
                                lineNumber: 159,
                                columnNumber: 43
                              }, this);
                            })]
                          }, i, true, {
                            fileName: _jsxFileName,
                            lineNumber: 151,
                            columnNumber: 37
                          }, this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 29
                      }, this)]
                    }, void 0, true, {
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
                        lineNumber: 193,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "relative z-10 p-6 pb-16 mb-8 bg-white shadow-lg md:p-12 md:pb-20",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          children: "A: The Brow and Beauty Studio"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          className: "pl-5 leading-relaxed",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Old Mill Cottage"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 199,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Rolleston"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 200,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Southwell Golf Club"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 201,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "Nottinghamshire"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 202,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            children: "NG23 5SF"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 203,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 198,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                          children: ["T: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "inline-block pl-1 mt-8 font-bold",
                            href: `tel:${_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.phoneNumber}`,
                            children: _helpers_constants__WEBPACK_IMPORTED_MODULE_6__.phoneNumber
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 206,
                            columnNumber: 35
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 206,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                          destination: "https://www.google.com/maps/dir//Southwell+Golf+Club,+Occupation+Ln,+Southwell+NG25+0TS/@53.0661906,-0.9024038,17z/data=!4m16!1m6!3m5!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2sSouthwell+Golf+Club!8m2!3d53.0661394!4d-0.9003083!4m8!1m0!1m5!1m1!1s0x4879b60c9f9d4b75:0x75f5bf1d6605ff74!2m2!1d-0.9003083!2d53.0661394!3e2",
                          modifier: "mt-8 absolute -bottom-7 left-1/2 -translate-x-1/2 w-4/5 sm:w-auto text-center",
                          label: "Get directions",
                          secondary: true,
                          external: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 208,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
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
                          lineNumber: 219,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 218,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "absolute hidden -translate-y-1/2 left-[500px] sm:block top-1/2",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        className: "inline-block p-4 px-12 text-sm uppercase -rotate-90 bg-white",
                        href: "#",
                        children: "View map"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 226,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
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
      id
      heading
      subheading
      description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2NvbXBvbmVudHMvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9jb21wb25lbnRzL1NvY2lhbEljb24uanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vaGVscGVycy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vaGVscGVycy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9saWIvZGF0b2Ntcy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9saWIvZnJhZ21lbnRzLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL2xpYi9uYXZJdGVtcy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vcGFnZXMvdHJlYXRtZW50LW1lbnUuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcInJlYWN0LWRhdG9jbXNcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJyZWFjdC1pZy1mZWVkXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJyZWFjdC1sb2NvbW90aXZlLXNjcm9sbFwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcInRpbnktanNvbi1odHRwXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2lnbm9yZWR8QzpcXHdhbXA2NFxcd3d3XFxicm93LWJlYXV0eS5uZXh0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQnV0dG9uIiwiZXh0ZXJuYWwiLCJkZXN0aW5hdGlvbiIsIm1vZGlmaWVyIiwibGFiZWwiLCJzZWNvbmRhcnkiLCJDb250YWN0IiwicGhvbmVOdW1iZXIiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsIkZvb3RlciIsImZhZGUiLCJpbnN0YWdyYW1VUkwiLCJmYWNlYm9va1VSTCIsIm5hdkl0ZW1zIiwidGl0bGUiLCJ1cmwiLCJ0eXBlIiwiaSIsIkhlYWRlciIsIkxheW91dCIsIm1vYmlsZU1lbnUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjdXJyZW50UGF0aCIsInBhdGhuYW1lIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImNvbnRhaW5lciIsImhpZGRlbiIsIm9wYWNpdHkiLCJzaG93IiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImxpc3RJdGVtIiwic29jaWFsSWNvbiIsInBsYXRmb3JtIiwiY2xhc3NlcyIsInN2Z0ZpbGwiLCJpbml0aWFsIiwiZW50ZXIiLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsImV4aXQiLCJxdWlja0ZhZGUiLCJsb2dvQmFja2dyb3VuZCIsInpJbmRleCIsImxvZ29GYWRlIiwiYmFja1RvVG9wIiwicmVxdWVzdCIsInF1ZXJ5IiwidmFyaWFibGVzIiwicHJldmlldyIsImVuZHBvaW50IiwiYm9keSIsInRpbnkiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0RBVE9DTVNfQVBJX1RPS0VOIiwiZGF0YSIsImVycm9ycyIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNpdmVJbWFnZUZyYWdtZW50IiwibWV0YVRhZ3NGcmFnbWVudCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibGVuZ3RoIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiSG9tZSIsImhvbWUiLCJzaXRlIiwidHJlYXRtZW50Q2F0ZWdvcnkiLCJjb250YWluZXJSZWYiLCJyZW5kZXJNZXRhVGFncyIsInNlbyIsImNvbmNhdCIsImZhdmljb25NZXRhVGFncyIsInNtb290aCIsImxlcnAiLCJkb21BbmltYXRpb24iLCJjYXRlZ29yeSIsImhlYWRpbmciLCJzdWJoZWFkaW5nIiwidHJlYXRtZW50cyIsInRyZWF0bWVudCIsInRyZWF0bWVudEhlYWRpbmciLCJ0cmVhdG1lbnRTdWJoZWFkaW5nIiwidHJlYXRtZW50UHJpY2UiLCJ0cmVhdG1lbnREZXNjcmlwdGlvbiIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwibG9jYXRpb25JbWFnZSIsInJlc3BvbnNpdmVJbWFnZSIsImFsdCIsIkhPTUVQQUdFX1FVRVJZIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsVUFBRjtBQUFZQyxhQUFaO0FBQXlCQyxVQUF6QjtBQUFtQ0MsT0FBbkM7QUFBMENDO0FBQTFDLENBQWhCLEVBQXVFO0FBQ2xGLHNCQUNJO0FBQUEsZUFDS0osUUFBUSxpQkFDTDtBQUFHLFNBQUcsRUFBQyxZQUFQO0FBQW9CLFlBQU0sRUFBQyxRQUEzQjtBQUFvQyxVQUFJLEVBQUVDLFdBQTFDO0FBQXVELGVBQVMsRUFBRyxPQUFNRyxTQUFTLEdBQUcsZ0JBQUgsR0FBc0IsRUFBRyxJQUFHRixRQUFTLEdBQXZIO0FB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cGFnZXMvdHJlYXRtZW50LW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyBleHRlcm5hbCwgZGVzdGluYXRpb24sIG1vZGlmaWVyLCBsYWJlbCwgc2Vjb25kYXJ5IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2V4dGVybmFsICYmIFxyXG4gICAgICAgICAgICAgICAgPGEgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Rlc3RpbmF0aW9ufSBjbGFzc05hbWU9e2BidG4gJHtzZWNvbmRhcnkgPyAnYnRuLS1zZWNvbmRhcnknIDogJyd9ICR7bW9kaWZpZXJ9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeyFleHRlcm5hbCAmJiBcclxuICAgICAgICAgICAgICAgIDxhIGRhdGEtc2Nyb2xsLXRvIGRhdGEtb2Zmc2V0PVwiLTEwMFwiIGhyZWY9e2Rlc3RpbmF0aW9ufSBjbGFzc05hbWU9e2BidG4gJHtzZWNvbmRhcnkgPyAnYnRuLS1zZWNvbmRhcnknIDogJyd9ICR7bW9kaWZpZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBwaG9uZU51bWJlciB9IGZyb20gJ0AvaGVscGVycy9jb25zdGFudHMnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoeyAgfSkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS0xNiBiZy1ncmF5LTEwMCBzbTpwLTggbWQ6cC0xMiBsZzpwLTIwXCIgaWQ9XCJDb250YWN0XCI+XHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLVstNnB4XSBmb250LXNlcmlmIHRleHQtNHhsIGxlYWRpbmctbm9uZSB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGxnOnRleHQtNXhsIGxnOm1iLVstOXB4XVwiPkNvbnRhY3Q8L3A+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctc2NyZWVuLWxnIHAtOCBteC1hdXRvIGJnLXdoaXRlIHNoYWRvdy1sZyBzbTpwLTggbWQ6cC0xMiBsZzpwLTIwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwibG9nby1jaXJjbGUtbGlnaHQucG5nXCIgYWx0PVwiVGhlIEJyb3cgJmFtcDsgQmVhdXR5IFN0dWRpb1wiIGNsYXNzTmFtZT1cImFic29sdXRlIHotMCAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdG9wLTEvMiBsZWZ0LTEvMlwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1zbSBteC1hdXRvIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWNlbnRlclwiPklmIHlvdSdkIGxpa2UgdG8gZ2V0IGluIHRvdWNoIHRvIG1ha2UgYSBib29raW5nIG9yIGFzayBhIHF1ZXN0aW9uIHBsZWFzZSB1c2UgdGhlIGZvcm0gYmVsb3cuIElmIHlvdSdkIHByZWZlciB0byB0YWxrLCBmZWVsIGZyZWUgdG8gZ2l2ZSBtZSBhIGNhbGwgZGlyZWN0bHkgb24gPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGZvbnQtYm9sZFwiIGhyZWY9e2B0ZWw6JHtwaG9uZU51bWJlcn1gfT57cGhvbmVOdW1iZXJ9PC9hPi48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIiBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hnZXJkcWFxXCIgbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LXdyYXAgbXQtNCAtbS0xIG92ZXJmbG93LXgtaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lICpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwidy1mdWxsXCIgbmFtZT1cInBob25lbnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsICpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsXCIgbmFtZT1cIlRyZWF0bWVudCBUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkV5ZWJyb3cgQ2FyZVwiPkV5ZWJyb3cgQ2FyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFeWVsYXNoIEV4dGVuc2lvbnNcIj5FeWVsYXNoIEV4dGVuc2lvbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmFjaWFsXCI+RmFjaWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hc3NhZ2VcIj5NYXNzYWdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hc3NhZ2VcIj5NYXNzYWdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pY3JvYmxhZGluZ1wiPk1pY3JvYmxhZGluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBuYW1lPVwidGVsZXBob25lXCIgcGxhY2Vob2xkZXI9XCJUZWxlcGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC00OFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIl9nb3RjaGFcIiBjbGFzc05hbWU9XCJoaWRkZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHAtNCBteC1hdXRvIHRleHQtc20gdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctYmxhY2sgYm9yZGVyIGJvcmRlci1ibGFjayBtZDpwLTYgbGc6cHgtOCBsZzpweS00XCIgdmFsdWU9XCJTZW5kIEZvcm1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4tM3hsIFwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW5zdGFncmFtRmVlZCBmcm9tICdyZWFjdC1pZy1mZWVkJ1xyXG5pbXBvcnQgeyBtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgbmF2SXRlbXMgfSBmcm9tICdAL2xpYi9uYXZJdGVtcydcclxuaW1wb3J0IHsgaW5zdGFncmFtVVJMLCBmYWNlYm9va1VSTCB9IGZyb20gJ0AvaGVscGVycy9jb25zdGFudHMnXHJcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdAL2hlbHBlcnMvdHJhbnNpdGlvbnMnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcidcclxuaW1wb3J0IFNvY2lhbEljb24gZnJvbSAnQC9jb21wb25lbnRzL1NvY2lhbEljb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG0uZGl2IHZhcmlhbnRzPXtmYWRlfT5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFja1wiPlxyXG5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJTb2NpYWxcIj5cclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IG1kOnAtMTIgbGc6cC0yMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wIG1yLTQgdGV4dC0zeGwgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTEwMCB4bDp0ZXh0LTV4bFwiPlNvY2lhbDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbiBjbGFzc2VzPVwibWItMCB3LTggaC04IG14LTIgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOnNjYWxlLTkwXCIgc3ZnRmlsbD1cIiNGRkZcIiBwbGF0Zm9ybT1cImluc3RhZ3JhbVwiIHVybD17aW5zdGFncmFtVVJMfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbiBjbGFzc2VzPVwibWItMCB3LTggaC04IG14LTIgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGZvY3VzOnNjYWxlLTkwXCIgc3ZnRmlsbD1cIiNGRkZcIiBwbGF0Zm9ybT1cImZhY2Vib29rXCIgdXJsPXtmYWNlYm9va1VSTH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsRmVlZFwiPlxyXG4gICAgICAgICAgICAgIDxJbnN0YWdyYW1GZWVkIHRva2VuPVwiSUdRVkpYVlhKV2EwbDJVR3BXTlRsbFJFRk1aQUUwMmNtaHhYMHczY0c1U2RHWTRObVZvY1dKb1ltOUljMUJ0VVVVMmIwdFRSbG80Y1haQTVZVU16YzNkSVpBVzFqWkFXMXpaQUdSWGNGRmlUVzFhVVhGSWNIUldOUzFRUkZkWkFNWE5aQUxVNUtPVlpBTlJIVmZiMjExYTB4a2NsRjZTd1pEWkRcIiBjb3VudGVyPVwiNlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTUwIHB5LTE2IGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctWzI3MHB4XSBteC1hdXRvXCIgc3JjPVwiL2xvZ28tY2lyY2xlLWRhcmsucG5nXCIgYWx0PVwiVGhlIEJyb3cgJmFtcDsgQmVhdXR5IFN0dWRpb1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAganVzdGlmeS1hcm91bmQgaGlkZGVuIG1heC13LWxnIHAtNCBteC1hdXRvIG10LTggdGV4dC13aGl0ZSB1cHBlcmNhc2UgYmctYmxhY2sgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKHsgdGl0bGUsIHVybCwgdHlwZSB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09IFwicm91dGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dXJsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHAtMiB0cmFja2luZy13aWRlc3QgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6Ym90dG9tLTAgYWZ0ZXI6bGVmdC0xLzIgYWZ0ZXI6cmlnaHQtMS8yIGFmdGVyOnctWzBweF0gYWZ0ZXI6aC1bMXB4XSBhZnRlcjp0cmFuc2Zvcm0gYWZ0ZXI6LXRyYW5zbGF0ZS14LTEvMiBhZnRlcjp0cmFuc2l0aW9uLWFsbCBhZnRlcjpkdXJhdGlvbi0zMDAgYWZ0ZXI6Ymctd2hpdGUgaG92ZXI6YWZ0ZXI6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHt1cmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1zY3JvbGwtdG8gZGF0YS1vZmZzZXQ9XCItMTAwXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgcC0yIHRyYWNraW5nLXdpZGVzdCBhZnRlcjphYnNvbHV0ZSBhZnRlcjpib3R0b20tMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjpyaWdodC0xLzIgYWZ0ZXI6dy1bMHB4XSBhZnRlcjpoLVsxcHhdIGFmdGVyOnRyYW5zZm9ybSBhZnRlcjotdHJhbnNsYXRlLXgtMS8yIGFmdGVyOnRyYW5zaXRpb24tYWxsIGFmdGVyOmR1cmF0aW9uLTMwMCBhZnRlcjpiZy13aGl0ZSBob3ZlcjphZnRlcjp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy0xLzYgbXgtYXV0byBtdC0xNiBvcGFjaXR5LTIwXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC04IG10LTE2IGZvbnQtc2VyaWYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPiZjb3B5OyBDb3B5cmlnaHQgVGhlIEJyb3cgJiBCZWF1dHkgU3R1ZGlvIDIwMjEgLSBBbGwgcmlnaHRzIHJlc2VydmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDwvbS5kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJ0AvY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICdAL2NvbXBvbmVudHMvTW9iaWxlTWVudSdcbmltcG9ydCBTb2NpYWxJY29uIGZyb20gJ0AvY29tcG9uZW50cy9Tb2NpYWxJY29uJ1xuaW1wb3J0IHsgaW5zdGFncmFtVVJMLCBmYWNlYm9va1VSTCB9IGZyb20gJ0AvaGVscGVycy9jb25zdGFudHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBpZD1cIkhvbWVcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGxlZnQtWzIlXSBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoaWRkZW4gdy0xLzUgbWQ6ZmxleFwiPlxuICAgICAgICAgICAgPFNvY2lhbEljb24gY2xhc3Nlcz1cInctOCBoLTggbWItNSBob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZm9jdXM6c2NhbGUtOTBcIiBzdmdGaWxsPVwiIzFEMUQxQlwiIHBsYXRmb3JtPVwiaW5zdGFncmFtXCIgdXJsPXtpbnN0YWdyYW1VUkx9IC8+XG4gICAgICAgICAgICA8U29jaWFsSWNvbiBjbGFzc2VzPVwidy04IGgtOCBtYi01IGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBmb2N1czpzY2FsZS05MFwiIHN2Z0ZpbGw9XCIjMUQxRDFCXCIgcGxhdGZvcm09XCJmYWNlYm9va1wiIHVybD17ZmFjZWJvb2tVUkx9IC8+XG4gICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcC00IG1kOmp1c3RpZnktY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOS8xMiAyeGw6dy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgbWF4LXctWzc1MHB4XSBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9XCJsb2dvLnBuZ1wiIGFsdD1cIlRoZSBCcm93ICZhbXA7IEJlYXV0eSBTdHVkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgIDxNb2JpbGVNZW51IC8+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgcGhvbmVOdW1iZXIgfSBmcm9tICdAL2hlbHBlcnMvY29uc3RhbnRzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBuYXZJdGVtcyB9IGZyb20gJ0AvbGliL25hdkl0ZW1zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9iaWxlTWVudSgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxldCBjdXJyZW50UGF0aCA9IHJvdXRlci5wYXRobmFtZTtcclxuXHJcbiAgICAvL1N0YXRlIG1hbmFnZW1lbnQgZm9yIG1vYmlsZSBtZW51XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xyXG4gICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICAgICAgc2hvdzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IHtcclxuICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxyXG4gICAgICAgIHNob3c6IHsgb3BhY2l0eTogMSB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiT3BlbiBNZW51XCIgb3Blbj17b3Blbn0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9IGNsYXNzTmFtZT17YGJ0bi1tb2JpbGUtbWVudSAke29wZW4gPyAnb3BlbiBmaXhlZCcgOiAnYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yJ31gfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7LyogTW9iaWxlIE1lbnUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgb3Blbj17b3Blbn0gY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIC16LTEwIHctZnVsbCBtaW4taC1zY3JlZW4gcC00IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBiZy13aGl0ZSAke29wZW4gPyAnb3BhY2l0eS0xMDAgei00MCcgOiAnb3BhY2l0eS0wJ31gfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gbXQtWy01MHB4XSBzbTptdC0wXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2NvbnRhaW5lcn0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9e29wZW4gPyAnc2hvdycgOiAnJ30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtsaXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tY2lyY2xlLWRhcmsucG5nXCIgYWx0PVwiVGhlIEJyb3cgJmFtcDsgQmVhdXR5IFN0dWRpbyBMb2dvXCIgY2xhc3NOYW1lPVwidy0yLzMgbXgtYXV0byBtYi04IG1heC13LTcyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKHsgdGl0bGUsIHVybCwgdHlwZSB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwicm91dGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyXCIgdmFyaWFudHM9e2xpc3RJdGVtfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGN1cnJlbnRQYXRoID09IFwiL3RyZWF0bWVudC1tZW51XCIgfHwgY3VycmVudFBhdGggPT0gXCIvYm9va1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3VybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSBhZnRlcjphYnNvbHV0ZSBhZnRlcjpib3R0b20tMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjpyaWdodC0xLzIgYWZ0ZXI6dy1bMHB4XSBhZnRlcjpoLVsxcHhdIGFmdGVyOnRyYW5zZm9ybSBhZnRlcjotdHJhbnNsYXRlLXgtMS8yIGFmdGVyOnRyYW5zaXRpb24tYWxsIGFmdGVyOmR1cmF0aW9uLTMwMCBhZnRlcjpiZy1ibGFjayBob3ZlcjphZnRlcjp3LWZ1bGxcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dXJsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIGFmdGVyOmFic29sdXRlIGFmdGVyOmJvdHRvbS0wIGFmdGVyOmxlZnQtMS8yIGFmdGVyOnJpZ2h0LTEvMiBhZnRlcjp3LVswcHhdIGFmdGVyOmgtWzFweF0gYWZ0ZXI6dHJhbnNmb3JtIGFmdGVyOi10cmFuc2xhdGUteC0xLzIgYWZ0ZXI6dHJhbnNpdGlvbi1hbGwgYWZ0ZXI6ZHVyYXRpb24tMzAwIGFmdGVyOmJnLWJsYWNrIGhvdmVyOmFmdGVyOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXJcIiB2YXJpYW50cz17bGlzdEl0ZW19IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY3VycmVudFBhdGggPT0gXCIvdHJlYXRtZW50LW1lbnVcIiB8fCBjdXJyZW50UGF0aCA9PSBcIi9ib29rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyMke3VybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSBhZnRlcjphYnNvbHV0ZSBhZnRlcjpib3R0b20tMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjpyaWdodC0xLzIgYWZ0ZXI6dy1bMHB4XSBhZnRlcjpoLVsxcHhdIGFmdGVyOnRyYW5zZm9ybSBhZnRlcjotdHJhbnNsYXRlLXgtMS8yIGFmdGVyOnRyYW5zaXRpb24tYWxsIGFmdGVyOmR1cmF0aW9uLTMwMCBhZnRlcjpiZy1ibGFjayBob3ZlcjphZnRlcjp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtc2Nyb2xsLXRvIGRhdGEtb2Zmc2V0PVwiLTEwMFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlIGFmdGVyOmFic29sdXRlIGFmdGVyOmJvdHRvbS0wIGFmdGVyOmxlZnQtMS8yIGFmdGVyOnJpZ2h0LTEvMiBhZnRlcjp3LVswcHhdIGFmdGVyOmgtWzFweF0gYWZ0ZXI6dHJhbnNmb3JtIGFmdGVyOi10cmFuc2xhdGUteC0xLzIgYWZ0ZXI6dHJhbnNpdGlvbi1hbGwgYWZ0ZXI6ZHVyYXRpb24tMzAwIGFmdGVyOmJnLWJsYWNrIGhvdmVyOmFmdGVyOnctZnVsbFwiIGhyZWY9e2AjJHt1cmx9YH0gb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgdmFyaWFudHM9e2xpc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCIgdmFyaWFudHM9e2xpc3RJdGVtfSBocmVmPXtgdGVsOiR7cGhvbmVOdW1iZXJ9YH0+VGVsOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cGhvbmVOdW1iZXJ9PC9zcGFuPjwvYT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogRW5kIE1vYmlsZSBNZW51ICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29jaWFsSWNvbih7IHBsYXRmb3JtLCB1cmwsIGNsYXNzZXMsIHN2Z0ZpbGx9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17YGJsb2NrICR7Y2xhc3Nlc31gfSBocmVmPXt1cmx9IGFyaWEtbGFiZWw9e2BGb2xsb3cgVGhlIEJyb3cgJmFtcDsgQmVhdXR5IFN0dWRpbyBvbiAke3BsYXRmb3JtfWB9IHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHJcbiAgICAgICAgICAgIHtwbGF0Zm9ybSA9PSBcImZhY2Vib29rXCIgJiZcclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMjYgNDFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMi42ODA0IDIyLjg1MTZMMjMuODM1OCAxNS40OTk0SDE2LjYxMTlWMTAuNzI4M0MxNi42MTE5IDguNzE2OTIgMTcuNjIxIDYuNzU2MjkgMjAuODU2NCA2Ljc1NjI5SDI0LjE0MDVWMC40OTY3MDRDMjQuMTQwNSAwLjQ5NjcwNCAyMS4xNjAyIDAgMTguMzEwOCAwQzEyLjM2MTcgMCA4LjQ3MzA0IDMuNTIxMzYgOC40NzMwNCA5Ljg5NlYxNS40OTk0SDEuODYwMTFWMjIuODUxNkg4LjQ3MzA0VjQwLjYyNUgxNi42MTE5VjIyLjg1MTZIMjIuNjgwNFpcIiBmaWxsPXtzdmdGaWxsfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjQwLjYyNVwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7cGxhdGZvcm0gPT0gXCJpbnN0YWdyYW1cIiAmJlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAzOCA0N1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5LjAwNjggMTIuNzA3NkMxMy42MTIxIDEyLjcwNzYgOS4yNjA4MSAxNy4zMzA5IDkuMjYwODEgMjMuMDYyN0M5LjI2MDgxIDI4Ljc5NDUgMTMuNjEyMSAzMy40MTc4IDE5LjAwNjggMzMuNDE3OEMyNC40MDE0IDMzLjQxNzggMjguNzUyOCAyOC43OTQ1IDI4Ljc1MjggMjMuMDYyN0MyOC43NTI4IDE3LjMzMDkgMjQuNDAxNCAxMi43MDc2IDE5LjAwNjggMTIuNzA3NlpNMTkuMDA2OCAyOS43OTQ4QzE1LjUyMDYgMjkuNzk0OCAxMi42NzA2IDI2Ljc3NTcgMTIuNjcwNiAyMy4wNjI3QzEyLjY3MDYgMTkuMzQ5NiAxNS41MTIxIDE2LjMzMDUgMTkuMDA2OCAxNi4zMzA1QzIyLjUwMTQgMTYuMzMwNSAyNS4zNDMgMTkuMzQ5NiAyNS4zNDMgMjMuMDYyN0MyNS4zNDMgMjYuNzc1NyAyMi40OTMgMjkuNzk0OCAxOS4wMDY4IDI5Ljc5NDhaTTMxLjQyNDcgMTIuMjg0QzMxLjQyNDcgMTMuNjI2OCAzMC40MDY4IDE0LjY5OTMgMjkuMTUxNCAxNC42OTkzQzI3Ljg4NzYgMTQuNjk5MyAyNi44NzgyIDEzLjYxNzggMjYuODc4MiAxMi4yODRDMjYuODc4MiAxMC45NTAyIDI3Ljg5NjEgOS44Njg2OSAyOS4xNTE0IDkuODY4NjlDMzAuNDA2OCA5Ljg2ODY5IDMxLjQyNDcgMTAuOTUwMiAzMS40MjQ3IDEyLjI4NFpNMzcuODc5NiAxNC43MzUzQzM3LjczNTQgMTEuNDk5OSAzNy4wMzk4IDguNjM0MDEgMzQuODA5IDYuMjcyOEMzMi41ODY3IDMuOTExNTggMjkuODg5NCAzLjE3MjU3IDI2Ljg0NDMgMy4wMTAzNUMyMy43MDU5IDIuODIxMDkgMTQuMjk5MiAyLjgyMTA5IDExLjE2MDggMy4wMTAzNUM4LjEyNDIgMy4xNjM1NiA1LjQyNjg4IDMuOTAyNTcgMy4xOTYwNyA2LjI2Mzc4QzAuOTY1MjcgOC42MjUgMC4yNzgyMTYgMTEuNDkwOSAwLjEyNTUzNyAxNC43MjYzQy0wLjA1MjU4NzkgMTguMDYwOSAtMC4wNTI1ODc5IDI4LjA1NTUgMC4xMjU1MzcgMzEuMzlDMC4yNjk3MzQgMzQuNjI1NCAwLjk2NTI3IDM3LjQ5MTMgMy4xOTYwNyAzOS44NTI1QzUuNDI2ODggNDIuMjEzOCA4LjExNTcyIDQyLjk1MjggMTEuMTYwOCA0My4xMTVDMTQuMjk5MiA0My4zMDQyIDIzLjcwNTkgNDMuMzA0MiAyNi44NDQzIDQzLjExNUMyOS44ODk0IDQyLjk2MTggMzIuNTg2NyA0Mi4yMjI4IDM0LjgwOSAzOS44NTI1QzM3LjAzMTQgMzcuNDkxMyAzNy43MjY5IDM0LjYyNTQgMzcuODc5NiAzMS4zOUMzOC4wNTc3IDI4LjA1NTUgMzguMDU3NyAxOC4wNjk5IDM3Ljg3OTYgMTQuNzM1M1pNMzMuODI1MSAzNC45Njc5QzMzLjE2MzUgMzYuNzM0MyAzMS44ODI3IDM4LjA5NTEgMzAuMjExNyAzOC44MDcxQzI3LjcwOTUgMzkuODYxNiAyMS43NzIgMzkuNjE4MiAxOS4wMDY4IDM5LjYxODJDMTYuMjQxNiAzOS42MTgyIDEwLjI5NTYgMzkuODUyNSA3LjgwMTg4IDM4LjgwNzFDNi4xMzkzOCAzOC4xMDQyIDQuODU4NTcgMzYuNzQzMyA0LjE4ODQ5IDM0Ljk2NzlDMy4xOTYwNyAzMi4zMDkzIDMuNDI1MDkgMjYuMDAwNyAzLjQyNTA5IDIzLjA2MjdDMy40MjUwOSAyMC4xMjQ3IDMuMjA0NTYgMTMuODA3MSA0LjE4ODQ5IDExLjE1NzVDNC44NTAwOSA5LjM5MTA0IDYuMTMwOSA4LjAzMDE5IDcuODAxODggNy4zMTgyMkMxMC4zMDQxIDYuMjYzNzggMTYuMjQxNiA2LjUwNzExIDE5LjAwNjggNi41MDcxMUMyMS43NzIgNi41MDcxMSAyNy43MTggNi4yNzI4IDMwLjIxMTcgNy4zMTgyMkMzMS44NzQyIDguMDIxMTggMzMuMTU1IDkuMzgyMDMgMzMuODI1MSAxMS4xNTc1QzM0LjgxNzUgMTMuODE2MSAzNC41ODg1IDIwLjEyNDcgMzQuNTg4NSAyMy4wNjI3QzM0LjU4ODUgMjYuMDAwNyAzNC44MTc1IDMyLjMxODMgMzMuODI1MSAzNC45Njc5WlwiIGZpbGw9e3N2Z0ZpbGx9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiNDYuMTQyOVwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGNvbnN0IGluc3RhZ3JhbVVSTCA9IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90aGUuYnJvd2FuZGJlYXV0eXN0dWRpby9cIjtcclxuZXhwb3J0IGNvbnN0IGZhY2Vib29rVVJMID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIjtcclxuZXhwb3J0IGNvbnN0IHBob25lTnVtYmVyID0gXCIwMTE1IDY2NiAzMzMzXCI7IiwiZXhwb3J0IGNvbnN0IGZhZGUgPSB7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCB9LFxuICBlbnRlcjogeyBcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNCwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdLCBkZWxheTogMi43NSB9XG4gIH0sXG5cdGV4aXQ6IHtcbiAgICBvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNCwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdIH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgcXVpY2tGYWRlID0ge1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAgfSxcbiAgZW50ZXI6IHsgXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLCBlYXNlOiBbMC44MywgMCwgMC4xNywgMV0gfVxuICB9LFxuXHRleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcblx0XHR0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLCBlYXNlOiBbMC44MywgMCwgMC4xNywgMV0gfVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvQmFja2dyb3VuZCA9IHtcbiAgaW5pdGlhbDoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG4gIGVudGVyOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLCBlYXNlOiBbMC44MywgMCwgMC4xNywgMV0sIGRlbGF5OiAyIH1cbiAgfSwgIFxuICBleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB6SW5kZXg6IC0xMDAsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ29GYWRlID0ge1xuICBpbml0aWFsOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgfSxcbiAgZW50ZXI6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIGVhc2U6IFswLjgzLCAwLCAwLjE3LCAxXSB9XG4gIH0sICBcbiAgZXhpdDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYmFja1RvVG9wID0ge1xuICBpbml0aWFsOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgfSxcbiAgZW50ZXI6IHsgXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLCBlYXNlOiBbMC44MywgMCwgMC4xNywgMV0sIGRlbGF5OiA1IH1cbiAgfSxcblx0ZXhpdDoge1xuICAgIG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgZWFzZTogWzAuODMsIDAsIDAuMTcsIDFdIH1cblx0fVxufSIsImltcG9ydCB0aW55IGZyb20gJ3RpbnktanNvbi1odHRwJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QoeyBxdWVyeSwgdmFyaWFibGVzLCBwcmV2aWV3IH0pIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IHByZXZpZXdcbiAgICA/IGBodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vcHJldmlld2BcbiAgICA6IGBodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vYDtcblxuICAgIGNvbnN0IHsgYm9keSB9ID0gYXdhaXQgdGlueS5wb3N0KHtcbiAgICAgICAgdXJsOiBlbmRwb2ludCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk5FWFRfREFUT0NNU19BUElfVE9LRU59YCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoYm9keS5lcnJvcnMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk91Y2ghIFRoZSBxdWVyeSBoYXMgc29tZSBlcnJvcnMhXCIpO1xuICAgICAgICB0aHJvdyBib2R5LmVycm9ycztcbiAgICB9XG5cbiAgICByZXR1cm4gYm9keS5kYXRhO1xufSIsIi8vIFNlZTogaHR0cHM6Ly93d3cuZGF0b2Ntcy5jb20vYmxvZy9vZmZlci1yZXNwb25zaXZlLXByb2dyZXNzaXZlLWxxaXAtaW1hZ2VzLWluLTIwMjBcbmV4cG9ydCBjb25zdCByZXNwb25zaXZlSW1hZ2VGcmFnbWVudCA9IGBcbiAgZnJhZ21lbnQgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgb24gUmVzcG9uc2l2ZUltYWdlIHtcbiAgICBzcmNTZXRcbiAgICB3ZWJwU3JjU2V0XG4gICAgc2l6ZXNcbiAgICBzcmNcbiAgICB3aWR0aFxuICAgIGhlaWdodFxuICAgIGFzcGVjdFJhdGlvXG4gICAgYWx0XG4gICAgdGl0bGVcbiAgICBiYXNlNjRcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgbWV0YVRhZ3NGcmFnbWVudCA9IGBcbiAgZnJhZ21lbnQgbWV0YVRhZ3NGcmFnbWVudCBvbiBUYWcge1xuICAgIGF0dHJpYnV0ZXNcbiAgICBjb250ZW50XG4gICAgdGFnXG4gIH1cbmAiLCJleHBvcnQgY29uc3QgbmF2SXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgICAgdXJsOiAgXCJIb21lXCIsXHJcbiAgICAgIHR5cGU6IFwiYW5jaG9yXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRyZWF0bWVudHNcIixcclxuICAgICAgdXJsOiAgXCJUcmVhdG1lbnRzXCIsXHJcbiAgICAgIHR5cGU6IFwiYW5jaG9yXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRyZWF0bWVudCBNZW51XCIsXHJcbiAgICAgIHVybDogIFwidHJlYXRtZW50LW1lbnVcIixcclxuICAgICAgdHlwZTogXCJyb3V0ZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCb29rIE9ubGluZVwiLFxyXG4gICAgICB1cmw6ICBcImJvb2tcIixcclxuICAgICAgdHlwZTogXCJyb3V0ZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBYm91dFwiLFxyXG4gICAgICB1cmw6ICBcIkFib3V0XCIsXHJcbiAgICAgIHR5cGU6IFwiYW5jaG9yXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldoZXJlXCIsXHJcbiAgICAgIHVybDogIFwiV2hlcmVcIixcclxuICAgICAgdHlwZTogXCJhbmNob3JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ29udGFjdFwiLFxyXG4gICAgICB1cmw6IFwiQ29udGFjdFwiLFxyXG4gICAgICB0eXBlOiBcImFuY2hvclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJTb2NpYWxcIixcclxuICAgICAgdXJsOiBcIlNvY2lhbFwiLFxyXG4gICAgICB0eXBlOiBcImFuY2hvclwiXHJcbiAgICB9XHJcbiAgXTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIkAvbGliL2RhdG9jbXNcIjtcclxuaW1wb3J0IHsgbWV0YVRhZ3NGcmFnbWVudCwgcmVzcG9uc2l2ZUltYWdlRnJhZ21lbnQgfSBmcm9tIFwiQC9saWIvZnJhZ21lbnRzXCJcclxuaW1wb3J0IHsgcXVpY2tGYWRlIH0gZnJvbSAnQC9oZWxwZXJzL3RyYW5zaXRpb25zJ1xyXG5pbXBvcnQgeyBwaG9uZU51bWJlciB9IGZyb20gJ0AvaGVscGVycy9jb25zdGFudHMnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0AvY29tcG9uZW50cy9Db250YWluZXInXHJcbmltcG9ydCB7IExhenlNb3Rpb24sIGRvbUFuaW1hdGlvbiwgbSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IExvY29tb3RpdmVTY3JvbGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWxvY29tb3RpdmUtc2Nyb2xsJ1xyXG5pbXBvcnQgeyBJbWFnZSwgcmVuZGVyTWV0YVRhZ3MgfSBmcm9tIFwicmVhY3QtZGF0b2Ntc1wiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGE6IHtob21lLCBzaXRlLCB0cmVhdG1lbnRDYXRlZ29yeX0gfSkge1xyXG5cclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIHtyZW5kZXJNZXRhVGFncyhob21lLnNlby5jb25jYXQoc2l0ZS5mYXZpY29uTWV0YVRhZ3MpKX0gXHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxMb2NvbW90aXZlU2Nyb2xsUHJvdmlkZXJcclxuICAgICAgICBvcHRpb25zPXt7IHNtb290aDogdHJ1ZSwgbGVycDogMC4wNywgIH19XHJcbiAgICAgICAgY29udGFpbmVyUmVmPXtjb250YWluZXJSZWZ9XHJcbiAgICAgICAgd2F0Y2g9e1tdfVxyXG4gICAgICA+XHJcblxyXG4gICAgICAgIDxkaXYgZGF0YS1zY3JvbGwtY29udGFpbmVyIHJlZj17Y29udGFpbmVyUmVmfSBpZD1cInNjcm9sbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGRhdGEtc2Nyb2xsLXNlY3Rpb24+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGF6eU1vdGlvbiBmZWF0dXJlcz17ZG9tQW5pbWF0aW9ufT5cclxuXHJcbiAgICAgICAgICAgICAgPEhlYWRlciAvPiAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPG0uZGl2XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPVwiZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICA8bS5kaXYgdmFyaWFudHM9e3F1aWNrRmFkZX0gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0yMFwiPiBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctc2NyZWVuLXhsIHB5LTEyIG14LWF1dG8gbWQ6cHktMjBcIiBpZD1cIlRyZWF0bWVudHNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5UcmVhdG1lbnRzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtc2Nyb2xsIGRhdGEtc2Nyb2xsLXN0aWNreSBkYXRhLXNjcm9sbC10YXJnZXQ9XCIjVHJlYXRtZW50c1wiIHNyYz1cIi9sb2dvLWxpZ2h0LXRyaW1tZWQucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgdy1mdWxsXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBmbGV4LXdyYXAgZ3JpZC1mbG93LWNvbCBwLTggcHQtMCBtZDpmbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNwbGl0dGluZyBpdGVtcyBpbnRvIHR3byBjb2x1bW5zIGZvciBhIGJldHRlciBsYXlvdXQgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnRDYXRlZ29yeS5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuaWQgIT09IFwiNTA5OTMxNjZcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDwgMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgcmVsYXRpdmUgdy1mdWxsIHAtOCB0ZXh0LWNlbnRlciBsZzpwLTE2YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGJvcmRlci1iIGJvcmRlci1iLWJsYWNrLzUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTQgbXgtYXV0byBtYi0wXCI+e2NhdGVnb3J5LmhlYWRpbmd9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2VcIj57Y2F0ZWdvcnkuc3ViaGVhZGluZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnRyZWF0bWVudHMubWFwKCh0cmVhdG1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgbGc6cHktMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0yXCI+e3RyZWF0bWVudC50cmVhdG1lbnRIZWFkaW5nfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IGZvbnQtc2VyaWZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnQudHJlYXRtZW50U3ViaGVhZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHt0cmVhdG1lbnQudHJlYXRtZW50U3ViaGVhZGluZ30gfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnQudHJlYXRtZW50UHJpY2UgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+e3RyZWF0bWVudC50cmVhdG1lbnRQcmljZSA/IGAgwqMke3RyZWF0bWVudC50cmVhdG1lbnRQcmljZX1gIDogYGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e3RyZWF0bWVudC50cmVhdG1lbnREZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLWNpcmNsZS1kYXJrLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImFic29sdXRlIGJsb2NrIHctMjAgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLWJvdHRvbS04IGxlZnQtMS8yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0gIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50Q2F0ZWdvcnkubWFwKChjYXRlZ29yeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmlkICE9PSBcIjUwOTkzMTY2XCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA+IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YHJlbGF0aXZlIHctZnVsbCBwLTggdGV4dC1jZW50ZXIgbGc6cC0xNmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBib3JkZXItYiBib3JkZXItYi1ibGFjay81MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC00IG14LWF1dG8gbWItMFwiPntjYXRlZ29yeS5oZWFkaW5nfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlXCI+e2NhdGVnb3J5LnN1YmhlYWRpbmd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS50cmVhdG1lbnRzLm1hcCgodHJlYXRtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIGxnOnB5LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMlwiPnt0cmVhdG1lbnQudHJlYXRtZW50SGVhZGluZ308L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCBmb250LXNlcmlmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50LnRyZWF0bWVudFN1YmhlYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB7dHJlYXRtZW50LnRyZWF0bWVudFN1YmhlYWRpbmd9IHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50LnRyZWF0bWVudFByaWNlICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50LnRyZWF0bWVudFByaWNlID8gYCDCoyR7dHJlYXRtZW50LnRyZWF0bWVudFByaWNlfSB8YCA6IGBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57dHJlYXRtZW50LnRyZWF0bWVudERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tY2lyY2xlLWRhcmsucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmxvY2sgdy0yMCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtYm90dG9tLTggbGVmdC0xLzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWF0bWVudENhdGVnb3J5Lm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5pZCA9PT0gXCI1MDk5MzE2NlwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPiAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2ByZWxhdGl2ZSB3LWZ1bGwgcC04IHRleHQtY2VudGVyIGxnOnAtMTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgYm9yZGVyLWIgYm9yZGVyLWItYmxhY2svNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNCBteC1hdXRvIG1iLTBcIj57Y2F0ZWdvcnkuaGVhZGluZ308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZVwiPntjYXRlZ29yeS5zdWJoZWFkaW5nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gbXQtOCB0ZXh0LXNtIGNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNhdGVnb3J5LmRlc2NyaXB0aW9uIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnRyZWF0bWVudHMubWFwKCh0cmVhdG1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgbGc6cHktMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0yXCI+e3RyZWF0bWVudC50cmVhdG1lbnRIZWFkaW5nfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IGZvbnQtc2VyaWZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnQudHJlYXRtZW50U3ViaGVhZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHt0cmVhdG1lbnQudHJlYXRtZW50U3ViaGVhZGluZ30gfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnQudHJlYXRtZW50UHJpY2UgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnQudHJlYXRtZW50UHJpY2UgPyBgIMKjJHt0cmVhdG1lbnQudHJlYXRtZW50UHJpY2V9IHxgIDogYGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPnt0cmVhdG1lbnQudHJlYXRtZW50RGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby1jaXJjbGUtZGFyay5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBibG9jayB3LTIwIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC1ib3R0b20tOCBsZWZ0LTEvMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTggbXktMjAgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYXktMjAwIHNtOnAtMTIgbGc6cC0yMFwiIGlkPVwiV2hlcmVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOm1heC13LXNjcmVlbi14c1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItWy02cHhdIGZvbnQtc2VyaWYgdGV4dC00eGwgbGVhZGluZy1ub25lIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbGc6dGV4dC01eGwgbGc6bWItWy05cHhdIHJlbGF0aXZlIHotNTBcIiBkYXRhLXNjcm9sbC1kaXJlY3Rpb249XCJob3Jpem9udGFsXCIgZGF0YS1zY3JvbGwtc3BlZWQ9XCItMC4xXCIgZGF0YS1zY3JvbGw+V2hlcmU8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgcC02IHBiLTE2IG1iLTggYmctd2hpdGUgc2hhZG93LWxnIG1kOnAtMTIgbWQ6cGItMjBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BOiBUaGUgQnJvdyBhbmQgQmVhdXR5IFN0dWRpbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNSBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T2xkIE1pbGwgQ290dGFnZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9sbGVzdG9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb3V0aHdlbGwgR29sZiBDbHViPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3R0aW5naGFtc2hpcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5HMjMgNVNGPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VDogPGEgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHBsLTEgbXQtOCBmb250LWJvbGRcIiBocmVmPXtgdGVsOiR7cGhvbmVOdW1iZXJ9YH0+e3Bob25lTnVtYmVyfTwvYT48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvL1NvdXRod2VsbCtHb2xmK0NsdWIsK09jY3VwYXRpb24rTG4sK1NvdXRod2VsbCtORzI1KzBUUy9ANTMuMDY2MTkwNiwtMC45MDI0MDM4LDE3ei9kYXRhPSE0bTE2ITFtNiEzbTUhMXMweDQ4NzliNjBjOWY5ZDRiNzU6MHg3NWY1YmYxZDY2MDVmZjc0ITJzU291dGh3ZWxsK0dvbGYrQ2x1YiE4bTIhM2Q1My4wNjYxMzk0ITRkLTAuOTAwMzA4MyE0bTghMW0wITFtNSExbTEhMXMweDQ4NzliNjBjOWY5ZDRiNzU6MHg3NWY1YmYxZDY2MDVmZjc0ITJtMiExZC0wLjkwMDMwODMhMmQ1My4wNjYxMzk0ITNlMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyPVwibXQtOCBhYnNvbHV0ZSAtYm90dG9tLTcgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LTQvNSBzbTp3LWF1dG8gdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdldCBkaXJlY3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB6LTAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgZGF0YT17ey4uLmhvbWUubG9jYXRpb25JbWFnZS5yZXNwb25zaXZlSW1hZ2UsIGFsdDogXCJUaGUgQnJvdyAmYW1wOyBCZWF1dHkgU3R1ZGlvb29vXCJ9fSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LVsyMjAlXSBtZDp3LWZ1bGwgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0b3AtMS8yIGxlZnQtMS8yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoaWRkZW4gLXRyYW5zbGF0ZS15LTEvMiBsZWZ0LVs1MDBweF0gc206YmxvY2sgdG9wLTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcC00IHB4LTEyIHRleHQtc20gdXBwZXJjYXNlIC1yb3RhdGUtOTAgYmctd2hpdGVcIiBocmVmPVwiI1wiPlZpZXcgbWFwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9tLmRpdj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9tLmRpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTGF6eU1vdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+IHsvKiBzY3JvbGwgc2VjdGlvbiAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiB7Lyogc2Nyb2xsIGNvbnRhaW5lciAqL31cclxuXHJcbiAgICAgIDwvTG9jb21vdGl2ZVNjcm9sbFByb3ZpZGVyPlxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEhPTUVQQUdFX1FVRVJZID0gYFxyXG4gIHF1ZXJ5IEhvbWVQYWdlIHtcclxuICAgIHNpdGU6IF9zaXRlIHtcclxuICAgICAgZmF2aWNvbk1ldGFUYWdzIHtcclxuICAgICAgICAuLi5tZXRhVGFnc0ZyYWdtZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhvbWUge1xyXG4gICAgICBzZW86IF9zZW9NZXRhVGFncyB7XHJcbiAgICAgICAgLi4ubWV0YVRhZ3NGcmFnbWVudFxyXG4gICAgICB9XHJcbiAgICAgIGxvY2F0aW9uSW1hZ2Uge1xyXG4gICAgICAgIHJlc3BvbnNpdmVJbWFnZShpbWdpeFBhcmFtczoge2ZtOiBqcGcsIGZpdDogY3JvcCwgdzogMjAxNywgaDogMTQ2NCB9KSB7XHJcbiAgICAgICAgICAuLi5yZXNwb25zaXZlSW1hZ2VGcmFnbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJlYXRtZW50Q2F0ZWdvcnk6IGFsbFRyZWF0bWVudENhdGVnb3JpZXMge1xyXG4gICAgICBpZFxyXG4gICAgICBoZWFkaW5nXHJcbiAgICAgIHN1YmhlYWRpbmdcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgdHJlYXRtZW50cyB7XHJcbiAgICAgICAgdHJlYXRtZW50SGVhZGluZ1xyXG4gICAgICAgIHRyZWF0bWVudFN1YmhlYWRpbmdcclxuICAgICAgICB0cmVhdG1lbnREZXNjcmlwdGlvblxyXG4gICAgICAgIHRyZWF0bWVudFByaWNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ICBcclxuICAke21ldGFUYWdzRnJhZ21lbnR9XHJcbiAgJHtyZXNwb25zaXZlSW1hZ2VGcmFnbWVudH1cclxuYFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgIHF1ZXJ5OiBIT01FUEFHRV9RVUVSWVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH1cclxuICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdG9jbXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlnLWZlZWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2NvbW90aXZlLXNjcm9sbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aW55LWpzb24taHR0cFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==