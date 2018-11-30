import { User } from './user.model'
import merge from 'lodash.merge'

/***  Resolvers are passed 4 arguments:
 * 1. rootValue :: (optional, usually empty on top-level resolver)
 * 2. args      :: any arguments that are passed to query (an object of arguments)
                   -- good practice to destructure & always name it the same thing, e.g. "input"
 * 3. context   :: anything that needs to be shared btwn resolvers.
                :: in our case, the context is the request (and req.user, provided by JWT)
 * 4. info      :: native AST for graphQL query; advanced use */

const getMe = (_, __, { user }) => {
  return {
    id: 3424123151234,
    username: 'andrew',
    createdAt: 'create datetime',
    updatedAt: 'updated datetime',
  }
}

export const userResolvers = {
  Query: {
    getMe
  }
}
