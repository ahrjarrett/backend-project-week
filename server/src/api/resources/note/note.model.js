import mongoose from 'mongoose'

export const schema = {
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  isComplete: {
    type: Boolean,
    default: false,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
}

const noteSchema = new mongoose.Schema(schema)

export const Note = mongoose.model('note', noteSchema)
