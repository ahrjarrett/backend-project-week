require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/note/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__note_restRouter__ = __webpack_require__("./src/api/resources/note/note.restRouter.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__note_restRouter__["a"]; });


/*
import express from 'express'
import { v4 } from 'uuid'

const findById = id => item => item.id === id

const sendError = (msg, res) => {
  res.status(422)
  res.json({ Error: msg })
  return
}

let notes = [
  { id: v4(), content: { title: "example note title", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." } },
  { id: v4(), content: { title: "another example note", body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" } },
  { id: v4(), content: { title: "here's a 3rd example", body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." } },
]

export const notesRouter = express.Router()

notesRouter.route('/')
  .get((req, res) => res.status(200).json(notes))

  .post((req, res) => {
    const { content } = req.body
    const note = { id: v4(), content }
    if (!content.title || !content.body)
      return sendError('Notes require both a title and body', res)
    notes.push(note)
    return res.status(201).json(note)
  })

notesRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params
    const note = notes.find(findById(id))
    return note ? res.status(200).json(note) : sendError("Note not found", res)
  })

  .put((req, res) => {
    const { id } = req.params
    const { content } = req.body
    let note = notes.find(findById(id))
    if (!note)
      return sendError('Note not found')
    else if (!content.title || !content.body)
      return sendError('Notes require both a title and body', res)
    note.content = content
    return res.status(204).json(note)
  })

  .delete((req, res) => {
    const { id } = req.params
    const note = notes.find(findById(id))
    if (!note)
      return sendError('Note not found!', res)
    notes = notes.filter(n => n.id !== id)
    return res.status(202).json(note)
  })

*/

/***/ }),

/***/ "./src/api/resources/note/note.controller.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/api/resources/note/note.restRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noteRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__note_controller__ = __webpack_require__("./src/api/resources/note/note.controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__note_controller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__note_controller__);



var noteRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

noteRouter.param('id', __WEBPACK_IMPORTED_MODULE_1__note_controller___default.a.findByParam);

noteRouter.route('/').get(__WEBPACK_IMPORTED_MODULE_1__note_controller___default.a.getAll).post(__WEBPACK_IMPORTED_MODULE_1__note_controller___default.a.createOne);

noteRouter.route('/:id')
// before any method is run, req.docFromId will already be set
// bc of the function associated with `noteRouter.param('id')` above
.get(__WEBPACK_IMPORTED_MODULE_1__note_controller___default.a.getOne).put(__WEBPACK_IMPORTED_MODULE_1__note_controller___default.a.updateOne).delete(__WEBPACK_IMPORTED_MODULE_1__note_controller___default.a.deleteOne);

/***/ }),

/***/ "./src/api/restRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export restRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_note__ = __webpack_require__("./src/api/resources/note/index.js");



var restRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

restRouter.use('/note', __WEBPACK_IMPORTED_MODULE_1__resources_note__["a" /* noteRouter */]);

/***/ }),

/***/ "uuid":
false

};
//# sourceMappingURL=0.ee7adecd9083a9ec3bc3.hot-update.js.map