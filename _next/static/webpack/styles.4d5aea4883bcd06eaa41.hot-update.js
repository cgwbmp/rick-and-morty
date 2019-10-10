webpackHotUpdate("styles",{

/***/ "./src/components/menu/index.module.css":
/*!**********************************************!*\
  !*** ./src/components/menu/index.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"list":"list___3G4d","link":"link___9b5E","pagination":"pagination___24Ag","button":"button___3y67","status":"status___1Z3G"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1570710803657");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.4d5aea4883bcd06eaa41.hot-update.js.map