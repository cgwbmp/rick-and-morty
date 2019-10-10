webpackHotUpdate("static/development/pages/index.js",{

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
    href: "/episodes",
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
    href: "/characters",
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
/* harmony import */ var _components_character_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/character-card */ "./src/components/character-card/index.tsx");
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
      pages = _props$pages === void 0 ? 0 : _props$pages;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, characters.map(function (character) {
    return __jsx(_components_grid__WEBPACK_IMPORTED_MODULE_5__["GridItem"], {
      key: character.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(_components_character_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: character.name,
      image: character.image,
      status: character.status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }));
  })), __jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: page,
    pages: pages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ })

})
//# sourceMappingURL=index.js.7ae1ed11e53a65e6059f.hot-update.js.map