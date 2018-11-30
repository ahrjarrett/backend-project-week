import { makeExecutableSchema } from 'graphql-tools'
import { userType, userResolvers } from './resources/user'
// import { noteType } from './resources/note'
import merge from 'lodash.merge'
import { graphqlExpress } from 'apollo-server-express'

const baseSchema = `
  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    userType,
    // noteType,
  ],
  resolvers: merge(
    {},
    userResolvers,
  ),
})

// pass request as `req` down to every single resolver using context
export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
    user: req.user,
  },
}))
