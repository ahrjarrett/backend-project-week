import express from 'express'
import { noteRouter } from './resources/note'

export const restRouter = express.Router()

restRouter.use('/note', noteRouter)
