require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/user/user.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export schema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__("bcrypt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);



var schema = {
  email: {
    type: String,
    required: [true, 'User email is required.']
  },

  password: {
    type: String,
    required: [true, 'User password is required.']
  },

  username: {
    type: String
    // default: this.email,


    // notes: {
    //   type: [mongoose.Schema.Types.ObjectId]
    // }

  } };

var userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema(schema, { timestamps: true });

userSchema.methods = {
  authenticate: function authenticate(plainTextPassword) {
    return __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compareSync(plainTextPassword, this.password);
  },
  hashPassword: function hashPassword(plainTextPassword) {
    if (!plainTextPassword) {
      throw new Error('Could not save user');
    }

    var salt = __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.genSaltSync(10);
    return __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hashSync(plainTextPassword, salt);
  }
};

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('user', userSchema);

/***/ })

};
//# sourceMappingURL=0.5cb4f2673faccf03f243.hot-update.js.map