import { Note } from './note.model'
import merge from 'lodash.merge'

const getNote = async (_, { id }) => {
  const note = await Note.findById(id).exec()
  if (!note) throw new Error(`Cannot find note with ID: ${id}`)
  return note
}

const allNotes = (_, { user }) => {
  return Note.find({}).exec()
}

export const noteResolvers = {
  Query: {
    allNotes,
    Note: getNote,
  },
}
