import { buildConfig } from 'payload/config'
import path from 'path'
import Categories from './collections/Categories'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Media from './collections/Media'
import NavigationAlert from './components/NavigationAlert'
import '../tailwind.css'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    components: {
      afterNavLinks: [NavigationAlert],
    },
    // uncomment this line if you prefer to use a separate watch command
    //css: path.resolve(__dirname, './css/compiledTailwind.css'),
    webpack: (config) => {
      return {
        ...config,
        module: {
          ...config.module,
          rules: [
            ...config.module.rules,
            {
              test: /\tailwind.css$/i,
              use: ['css-loader', 'postcss-loader'],
            },
          ],
        },
      }
    },
  },
  collections: [Categories, Posts, Tags, Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
