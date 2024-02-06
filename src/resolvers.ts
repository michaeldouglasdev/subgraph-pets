import { Pet, Resolvers } from "./types";

const PETS: Pet[] = [
  {
    id: '1',
    name: 'Dogie'
  }
]
export const resolvers: Resolvers = {
  Query: {
    pets: (parent, args, context, info) => {
      return PETS;
    }
  },
}