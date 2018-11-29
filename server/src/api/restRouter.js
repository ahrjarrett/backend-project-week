import express from 'express'
import { noteRouter } from './resources/note'
import { userRouter } from './resources/user'

export const restRouter = express.Router()

restRouter.use('/note', noteRouter)
restRouter.use('/user', userRouter)
