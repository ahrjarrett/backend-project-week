require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/modules/query.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export controllers */
/* unused harmony export createOne */
/* unused harmony export updateOne */
/* unused harmony export deleteOne */
/* unused harmony export getOne */
/* unused harmony export getAll */
/* unused harmony export findByParam */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateControllers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





var _this = this;



var testData = { message: 'hello' };

var controllers = {
  createOne: function createOne(Model, body) {
    return Model.create(body);
  },
  updateOne: function updateOne(docToUpdate, update) {
    // merge mutates its first argument!

    __WEBPACK_IMPORTED_MODULE_4_lodash___default()(docToUpdate, update);
    return docToUpdate.save();
  },
  deleteOne: function deleteOne(docToDelete) {
    return docToDelete.remove();
  },
  getOne: function getOne(docToGet) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(docToGet);
  },
  getAll: function getAll(Model) {
    return Model.find({}).exec();
  },
  findByParam: function findByParam(Model, id) {
    return Model.findById(id).exec();
  }
};

var createOne = function createOne(Model) {
  return function (req, res, next) {
    return controllers.createOne(Model, req.body).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var updateOne = function updateOne(Model) {
  return function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
      var docToUpdate, update;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              docToUpdate = req.docFromId;
              update = req.body;
              return _context.abrupt('return', controllers.updateOne(docToUpdate, update).then(function (doc) {
                return res.status(201).json(doc);
              }).catch(function (err) {
                return next(err);
              }));

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var deleteOne = function deleteOne(Model) {
  return function (req, res, next) {
    return controllers.deleteOne(req.docFromId).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var getOne = function getOne(Model) {
  return function (req, res, next) {
    return controllers.getOne(req.docFromId).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var getAll = function getAll(Model) {
  return function (req, res, next) {
    return controllers.getAll(Model).then(function (docs) {
      return res.status(201).json(docs);
    }).catch(function (err) {
      return next(err);
    });
  };
};

var findByParam = function findByParam(Model) {
  return function (req, res, next, id) {
    return controllers.findByParam(Model, id).then(function (doc) {
      if (!doc) next(new Error('Not found error'));else {
        // this is where we actually attach the doc to the req object
        req.docFromId = doc;
        next();
      }
    }).catch(function (err) {
      return next(err);
    });
  };
};

var generateControllers = function generateControllers(Model) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    findByParam: findByParam(Model),
    getAll: getAll(Model),
    getOne: getOne(Model),
    deleteOne: deleteOne(Model),
    updateOne: updateOne(Model),
    createOne: createOne(Model)
  };
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defaults, overrides);
};

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
false

};
//# sourceMappingURL=0.3c3056936afb53762cb0.hot-update.js.map