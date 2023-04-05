import buildPaginatedListType from '../../utilities/buildPaginatedListType'
import type { default as ImportedGraphQL } from 'graphql'
import type { Payload } from 'payload'
import { Resolver } from './resolver'

export const getMyPosts = (GraphQL: typeof ImportedGraphQL, payload: Payload) => {
  return {
    args: {},
    resolve: Resolver,
    // The name of your new type has to be unique
    type: buildPaginatedListType('AuthorPosts', payload.collections['posts'].graphQL?.type),
  }
}
