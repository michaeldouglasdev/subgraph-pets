import { gql } from 'graphql-tag';

export const schema = gql`
  type Query {
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    name: String!
  }
`