require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./src/server.js");




var server = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_1__server__["default"]);
var PORT = 7000;
var currentApp = __WEBPACK_IMPORTED_MODULE_1__server__["default"];

server.listen(PORT, function () {
  console.log('Server listening on port ' + PORT);
});

if (true) {
  module.hot.accept(["./src/server.js"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./src/server.js"); (function () {
    server.removeListener('request', currentApp);
    server.on('request', __WEBPACK_IMPORTED_MODULE_1__server__["default"]);
    currentApp = __WEBPACK_IMPORTED_MODULE_1__server__["default"];
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ })

};
//# sourceMappingURL=0.3b53d05112b6ccd1b718.hot-update.js.map