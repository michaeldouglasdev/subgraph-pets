import { CodegenConfig } from '@graphql-codegen/cli';

const codegen: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        federation: true,
        useIndexSignature: true,
        contextType: './context#Context'
      }
    }
  },
}

export default codegen;