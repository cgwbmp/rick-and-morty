webpackHotUpdate("static/development/pages/episodes.js",{

/***/ "./src/components/menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/menu/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ "./src/components/menu/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/mq/Documents/rick-and-morty/src/components/menu/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function isActive(path, currentPath) {
  return currentPath === path ? _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.active : '';
}

var Menu = function Menu(props) {
  var currentPath = props.currentPath;
  return __jsx("nav", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("ul", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("li", {
    className: [_index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item, isActive('/episodes', currentPath)].join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "episodes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Episodes"))), __jsx("li", {
    className: [_index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item, isActive('/characters', currentPath)].join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "characters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Characters")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=episodes.js.4d496a8fd047f30ff99e.hot-update.js.map