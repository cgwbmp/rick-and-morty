webpackHotUpdate("static/development/pages/characters.js",{

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-lazy-load-image-component/build/index.js":
false,

/***/ "./src/components/character-card/index.tsx":
false,

/***/ "./src/components/episode-card/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/episode-card/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ "./src/components/episode-card/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/mq/Documents/rick-and-morty/src/components/episode-card/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var EpisodeCard = function EpisodeCard(props) {
  var name = props.name,
      episode = props.episode;
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, episode), __jsx("h4", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, name));
};

/* harmony default export */ __webpack_exports__["default"] = (EpisodeCard);

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
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu */ "./src/components/menu/index.tsx");
/* harmony import */ var _components_episode_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/episode-card */ "./src/components/episode-card/index.tsx");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pagination */ "./src/components/pagination/index.tsx");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/grid */ "./src/components/grid/index.tsx");
var _jsxFileName = "/home/mq/Documents/rick-and-morty/src/containers/characters/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Characters = function Characters(props) {
  var _props$characters = props.characters,
      characters = _props$characters === void 0 ? [] : _props$characters,
      _props$page = props.page,
      page = _props$page === void 0 ? 1 : _props$page,
      _props$pages = props.pages,
      pages = _props$pages === void 0 ? 0 : _props$pages,
      currentPath = props.currentPath;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentPath: currentPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, characters.map(function (character) {
    return __jsx(_components_grid__WEBPACK_IMPORTED_MODULE_5__["GridItem"], {
      key: character.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_components_episode_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: character.name,
      episode: character.episode,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }));
  })), __jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: page,
    pages: pages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ })

})
//# sourceMappingURL=characters.js.ea5ad32c0037ef707f53.hot-update.js.map