import express from 'express'
import setupMiddware from './middleware'
import { restRouter, graphQLRouter } from './api'
import { graphiqlExpress } from 'apollo-server-express'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'

const app = express()

setupMiddware(app)
connect()

app.use('/signin', signin)
// add `protect` middleware before router to the routes you want to protect
app.use('/api', restRouter)
app.use('/graphql', graphQLRouter)
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }))

app.all('*', (req, res) => {
  res.json({ ok: true })
})

export default app
