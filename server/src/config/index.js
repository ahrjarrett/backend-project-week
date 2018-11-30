import merge from 'lodash/merge'

// process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const env = process.env.NODE_ENV

const {
  MONGO_ADMIN,
  MONGO_ADMIN_PASSWORD,
} = process.env

const baseConfig = {
  port: 7007,
  secrets: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  db: {
    url: 'mongodb://localhost/27017',
  },
  disableAuth: false,
}

let envConfig = {}

console.log('base config:', baseConfig)
console.log('config:', baseConfig)

switch (env) {
  case 'development':
  case 'dev':
    // REMOVE
    console.log("ENVIRONMENT: DEVELOPMENT")
    envConfig = require('./dev').config
    break
  case 'test':
  case 'testing':
    envConfig = require('./testing').config
    break
  case 'prod':
  case 'production':
    // REMOVE
    console.log("ENVIRONMENT: PRODUCTION")
    envConfig = require('./prod').config
    break
  default:
    console.log("ENVIRONMENT: DEVELOPMENT (by default)")
    envConfig = require('./dev').config
}

console.log('BASE CONFIG:', baseConfig)
console.log('ENV CONFIG:', envConfig)
console.log('MERGED:', merge(baseConfig, envConfig))



export default merge(baseConfig, envConfig)
