webpackHotUpdate("static/development/pages/characters.js",{

/***/ "./src/api/episodes.ts":
/*!*****************************!*\
  !*** ./src/api/episodes.ts ***!
  \*****************************/
/*! exports provided: default, getCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacters", function() { return getCharacters; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);



var entrypoint = 'https://rickandmortyapi.com';

function getCharacters() {
  return _getCharacters.apply(this, arguments);
}

function _getCharacters() {
  _getCharacters = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var page,
        source,
        response,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(entrypoint, "/api/episodes?page=").concat(page));

          case 3:
            source = _context.sent;
            _context.next = 6;
            return source.json();

          case 6:
            response = _context.sent;

            if (!('error' in response)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", {
              error: {
                code: source.status,
                message: response.error
              }
            });

          case 9:
            return _context.abrupt("return", response);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCharacters.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (getCharacters);


/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: getCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters */ "./src/api/characters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCharacters", function() { return _characters__WEBPACK_IMPORTED_MODULE_0__["getCharacters"]; });

/* harmony import */ var _episodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./episodes */ "./src/api/episodes.ts");
/* empty/unused harmony star reexport */


/***/ })

})
//# sourceMappingURL=characters.js.6a84a5779749c90883aa.hot-update.js.map