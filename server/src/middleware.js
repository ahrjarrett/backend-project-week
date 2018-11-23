import bodyParser from 'body-parser'
import { signin, protect } from './api/modules/auth'

const setGlobalMiddleware = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}

export default setGlobalMiddleware
