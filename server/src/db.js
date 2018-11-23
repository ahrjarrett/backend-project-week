import mongoose from 'mongoose'
import config from './config'

mongoose.Promise = global.Promise

export const connect = () => {
  console.log('MONGO DB CONNECTED')
  return mongoose.connect(config.db.url, {
    useNewUrlParser: true,
  })
}