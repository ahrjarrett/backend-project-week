require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/note/note.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export schema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var schema = {
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  isComplete: {
    type: Boolean,
    default: false
  }

  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'user',
  // }
};

var noteSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema(schema);

var Note = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('note', noteSchema);

/***/ })

};
//# sourceMappingURL=0.a8253659713e12d790b5.hot-update.js.map