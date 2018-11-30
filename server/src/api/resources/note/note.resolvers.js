import { Note } from './note.model'
import merge from 'lodash.merge'

const getNote = async (_, { id }) => {
  const note = await Note.findById(id).exec()
  if (!note) throw new Error(`Cannot find note with ID: ${id}`)
  return note
}

const allNotes = (_, __, { user }) => {
  return Note.find({}).exec()
}

const newNote = (_, { input }) => {
  return Note.create(input)
}

const updateNote = (_, { input }) => {
  const { id, ...update } = input
  return Note.findByIdAndUpdate(id, update, { new: true }).exec()
}

const deleteNote = (_, { id }) => {
  return Note.findByIdAndRemove(id).exec()
}

export const noteResolvers = {
  Query: {
    allNotes,
    Note: getNote,
  },
  Mutation: {
    newNote,
    updateNote,
    deleteNote,
  }
}
