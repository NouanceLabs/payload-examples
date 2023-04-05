import { default as ImportedGraphQL } from 'graphql'
import { Payload } from 'payload'
import { addLikeToPost } from './addLikeToPost'

// Custom type inspired by Payload's internal type
export type customGraphQLMutationType = (GraphQL: typeof ImportedGraphQL, payload: Payload) => Record<string, unknown>

export const customGraphQLMutations: customGraphQLMutationType = (GraphQL, payload) => {
  return {
    AddLikeToPost: addLikeToPost(GraphQL, payload),
  }
}
