import mongoose from 'mongoose'

export const schema = {

}

const noteSchema = new mongoose.Schema(schema)

export const Note = mongoose.model('note', noteSchema)
