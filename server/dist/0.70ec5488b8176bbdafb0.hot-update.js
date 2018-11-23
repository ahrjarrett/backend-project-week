require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/modules/auth.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middleware__ = __webpack_require__("./src/middleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db__ = __webpack_require__("./src/db.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_modules_auth__ = __webpack_require__("./src/api/modules/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_modules_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__api_modules_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cors__ = __webpack_require__("cors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_body_parser__);







var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_6_body_parser___default()({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_5_cors___default()());
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* restRouter */]);

app.all('*', function (req, res) {
  res.json({
    error: "Use /api/notes to get all notes or post a note, " + "otherwise use /api/notes/:id to update, get or delete a single note"
  });
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
//# sourceMappingURL=0.70ec5488b8176bbdafb0.hot-update.js.map