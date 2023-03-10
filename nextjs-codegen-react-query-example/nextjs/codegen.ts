require('dotenv').config()
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_PAYLOAD_API_URL,
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/client.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
        fetcher: {
          endpoint: process.env.NEXT_PUBLIC_PAYLOAD_API_URL,
          fetchParams: {
            headers: {
              'content-type': 'application/json',
            },
          },
        },
      },
    },
  },
}

export default config
