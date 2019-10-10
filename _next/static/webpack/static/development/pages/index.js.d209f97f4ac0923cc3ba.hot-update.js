webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_containers_characters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/containers/characters */ "./src/containers/characters/index.tsx");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/api */ "./src/api/index.ts");


var _jsxFileName = "/home/mq/Documents/rick-and-morty/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Home = function Home(props) {
  var characters = props.characters,
      page = props.page,
      pages = props.pages,
      error = props.error;

  if (error) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_3___default.a, {
      statusCode: error.code,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Characters - The Rick and Morty Wiki")), __jsx(_src_containers_characters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    characters: characters,
    page: page,
    pages: pages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, page, response, characters, pages;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            page = Number(query.page) || 1;
            _context.next = 4;
            return Object(_src_api__WEBPACK_IMPORTED_MODULE_6__["getCharacters"])(page);

          case 4:
            response = _context.sent;

            if (!('error' in response)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              error: response.error
            });

          case 7:
            characters = response.results;
            pages = response.info.pages;
            return _context.abrupt("return", {
              characters: characters,
              page: page,
              pages: pages
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/containers/characters/index.tsx":
/*!*********************************************!*\
  !*** ./src/containers/characters/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./src/components/layout/index.tsx");
/* harmony import */ var _components_character_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/character-card */ "./src/components/character-card/index.tsx");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pagination */ "./src/components/pagination/index.tsx");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/grid */ "./src/components/grid/index.tsx");
var _jsxFileName = "/home/mq/Documents/rick-and-morty/src/containers/characters/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Characters = function Characters(props) {
  var _props$characters = props.characters,
      characters = _props$characters === void 0 ? [] : _props$characters,
      _props$page = props.page,
      page = _props$page === void 0 ? 1 : _props$page,
      _props$pages = props.pages,
      pages = _props$pages === void 0 ? 0 : _props$pages;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, characters.map(function (character) {
    return __jsx(_components_grid__WEBPACK_IMPORTED_MODULE_4__["GridItem"], {
      key: character.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(_components_character_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: character.name,
      image: character.image,
      status: character.status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  })), __jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: page,
    pages: pages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ }),

/***/ "./src/modules/characters/index.tsx":
false

})
//# sourceMappingURL=index.js.d209f97f4ac0923cc3ba.hot-update.js.map