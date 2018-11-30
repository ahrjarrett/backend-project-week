import merge from 'lodash/merge'
import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV
const {
  MONGO_ADMIN,
  MONGO_ADMIN_PASSWORD,
} = process.env

console.log('MONGO_ADMIN', MONGO_ADMIN)
console.log('MONGO_ADMIN PASSWORD', MONGO_ADMIN_PASSWORD)

const baseConfig = {
  port: 7000,
  secrets: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  db: {
    url: `mongodb://${MONGO_ADMIN}:${MONGO_ADMIN_PASSWORD}@ds121814.mlab.com:21814/backend-project-week`
  },
  disableAuth: false,
}

let envConfig = {}

switch (env) {
  case 'development':
  case 'dev':
    envConfig = require('./dev').config
    break
  case 'test':
  case 'testing':
    envConfig = require('./testing').config
    break
  case 'prod':
  case 'production':
    envConfig = require('./prod').config
  default:
    envConfig = require('./dev').config
}

export default merge(baseConfig, envConfig)
