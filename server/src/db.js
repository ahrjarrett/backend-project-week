import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export const connect = () => {
  console.log('MONGO DB CONNECTED')
  return mongoose.connect('mongodb://localhost/27017', { useNewUrlParser: true })
}