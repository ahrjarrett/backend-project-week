import express from 'express'
import noteController from './note.controller'

export const noteRouter = express.Router()

noteRouter.param('id', noteController.findByParam)

noteRouter.route('/')
  .get(noteController.getAll)
  .post(noteController.createOne)

noteRouter.route('/:id')
  // before any method is run, req.docFromId will already be set
  // bc of the function associated with `noteRouter.param('id')` above
  .get(noteController.getOne)
  .put(noteController.updateOne)
  .delete(noteController.deleteOne)

