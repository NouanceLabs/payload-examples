import { AddLikeToPostResolver } from './resolver'
import type { default as ImportedGraphQL } from 'graphql'
import type { Payload } from 'payload'

export const addLikeToPost = (GraphQL: typeof ImportedGraphQL, payload: Payload) => {
  return {
    args: {
      // List of args for this
      postId: {
        type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLString), // Important! We construct our graphQL type using the GraphQL passed down via the function
      },
    },
    resolve: AddLikeToPostResolver,
    type: payload.collections['posts'].graphQL?.type,
  }
}
