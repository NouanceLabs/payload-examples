import { buildConfig } from 'payload/config'
import path from 'path'
import Categories from './collections/Categories'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Media from './collections/Media'
import { customGraphQLMutations } from './graphql/mutations'
import { customGraphQLQueries } from './graphql/queries'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    mutations: customGraphQLMutations,
    queries: customGraphQLQueries,
  },
  collections: [Categories, Posts, Tags, Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
