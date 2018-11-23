require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;

var connect = function connect() {
  console.log('MONGO DB CONNECTED');
  return __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect('mongodb://localhost/27017', {});
};

/***/ })

};
//# sourceMappingURL=0.55039b28ecdb88ebc1e2.hot-update.js.map