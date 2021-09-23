(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/intro.js":
/*!**************************!*\
  !*** ./context/intro.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroContext": function() { return /* binding */ IntroContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IntroContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/intro */ "./context/intro.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\wamp64\\www\\brow-beauty.next\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: introContext,
    1: setIntroContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // useEffect(() => {
  //     const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //     }
  //     router.events.on('routeChangeComplete', handleRouteChange)
  //     return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //     }
  // }, [router.events])

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_intro__WEBPACK_IMPORTED_MODULE_4__.IntroContext.Provider, {
      value: [introContext, setIntroContext],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        exitBeforeEnter: true,
        children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
          key: router.asPath,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }
        }))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vLi9jb250ZXh0L2ludHJvLmpzIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL2Jyb3dfYmVhdXR5X3N0dWRpby9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYnJvd19iZWF1dHlfc3R1ZGlvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9icm93X2JlYXV0eV9zdHVkaW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJbnRyb0NvbnRleHQiLCJSZWFjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImludHJvQ29udGV4dCIsInNldEludHJvQ29udGV4dCIsInVzZVN0YXRlIiwiYXNQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxZQUFZLGdCQUFHQywwREFBQSxFQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNDLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUVsRCxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQywrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQsQ0FIa0QsQ0FLbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsaUVBQUQ7QUFBdUIsV0FBSyxFQUFFLENBQUNGLFlBQUQsRUFBZUMsZUFBZixDQUE5QjtBQUFBLDZCQUVJLDhEQUFDLDBEQUFEO0FBQWlCLHVCQUFlLE1BQWhDO0FBQUEsK0JBQ0kscURBQUMsU0FBRCxrQ0FBZUosU0FBZjtBQUEwQixhQUFHLEVBQUVDLE1BQU0sQ0FBQ0ssTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFXSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0QsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGNvbnN0IEludHJvQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBJbnRyb0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHQvaW50cm8nXHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbaW50cm9Db250ZXh0LCBzZXRJbnRyb0NvbnRleHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAvLyAgICAgZ3RhZy5wYWdldmlldyh1cmwpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgLy8gICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW3JvdXRlci5ldmVudHNdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEludHJvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2ludHJvQ29udGV4dCwgc2V0SW50cm9Db250ZXh0XX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5hc1BhdGh9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuXHJcbiAgICAgICAgICAgIDwvSW50cm9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=