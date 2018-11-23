require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_note__ = __webpack_require__("./src/api/resources/note/index.js");



var rootRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
rootRouter.use('/notes', __WEBPACK_IMPORTED_MODULE_1__resources_note__["a" /* notesRouter */]);

/***/ }),

/***/ "./src/api/resources/note/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notesRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__("uuid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);



var findById = function findById(id) {
  return function (item) {
    return item.id === id;
  };
};

var sendError = function sendError(msg, res) {
  res.status(422);
  res.json({ Error: msg });
  return;
};

var notes = [{ id: Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])(), content: { title: "example note title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." } }, { id: Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])(), content: { title: "another example note", body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" } }, { id: Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])(), content: { title: "here's a 3rd example", body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." } }];

var notesRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

notesRouter.route('/').get(function (req, res) {
  return res.status(200).json(notes);
}).post(function (req, res) {
  var content = req.body.content;

  var note = { id: Object(__WEBPACK_IMPORTED_MODULE_1_uuid__["v4"])(), content: content };
  if (!content.title || !content.body) return sendError('Notes require both a title and body', res);
  notes.push(note);
  return res.status(201).json(note);
});

notesRouter.route('/:id').get(function (req, res) {
  var id = req.params.id;

  var note = notes.find(findById(id));
  return note ? res.status(200).json(note) : sendError("Note not found", res);
}).put(function (req, res) {
  var id = req.params.id;
  var content = req.body.content;

  var note = notes.find(findById(id));
  if (!note) return sendError('Note not found');else if (!content.title || !content.body) return sendError('Notes require both a title and body', res);
  note.content = content;
  return res.status(204).json(note);
}).delete(function (req, res) {
  var id = req.params.id;

  var note = notes.find(findById(id));
  if (!note) return sendError('Note not found!', res);
  notes = notes.filter(function (n) {
    return n.id !== id;
  });
  return res.status(202).json(note);
});

/***/ }),

/***/ "./src/api/resources/notes/index.js":
false

};
//# sourceMappingURL=0.83bb1860e21be5e29b39.hot-update.js.map