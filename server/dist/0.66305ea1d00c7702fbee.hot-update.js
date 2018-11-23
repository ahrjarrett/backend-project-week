require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/middleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_modules_auth__ = __webpack_require__("./src/api/modules/auth.js");



var setGlobalMiddleware = function setGlobalMiddleware(app) {
  app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.urlencoded({ extended: true }));
  app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());
};

/* harmony default export */ __webpack_exports__["a"] = (setGlobalMiddleware);

/***/ }),

/***/ "body-parser":
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })

};
//# sourceMappingURL=0.66305ea1d00c7702fbee.hot-update.js.map