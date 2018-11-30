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
app.use('/api', protect, restRouter)
app.use('/graphql', graphQLRouter)
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }))

// catch all
app.all('*', (req, res) => {
  res.json({ ok: true })
})

export default app
