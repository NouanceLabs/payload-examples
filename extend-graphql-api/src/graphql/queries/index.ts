import { default as ImportedGraphQL } from 'graphql'
import { Payload } from 'payload'
import { getMyPosts } from './getMyPosts'

// Custom type inspired by Payload's internal type
export type customGraphQLQueryType = (GraphQL: typeof ImportedGraphQL, payload: Payload) => Record<string, unknown>

export const customGraphQLQueries: customGraphQLQueryType = (GraphQL, payload) => {
  return {
    GetMyPosts: getMyPosts(GraphQL, payload),
  }
}
