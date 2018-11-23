import http from 'http'
import { createServer } from 'http'
import app from './server'

const server = http.createServer(app)
const PORT = 7000
let currentApp = app

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}