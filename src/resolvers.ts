import { Pet, Resolvers } from "./types";

const PETS: Pet[] = [
  {
    id: 'pet-1',
    name: 'Dogie',
    userId: 'user-1'
  },
  {
    id: 'pet-2',
    name: 'Thor',
    userId: 'user-2'
  },
  {
    id: 'pet-3',
    name: 'Bolacha',
    userId: 'user-1'
  },
  {
    id: 'pet-4',
    name: 'Severino',
    userId: 'user-1'
  }
]

export const resolvers: Resolvers = {
  Query: {
    pets: (parent, args, context, info) => {
      return PETS;
    }
  },
  Pet: {
    __resolveReference: ({ id }, context) => {
      return PETS.find(pet => pet.id === id)!;
    }
  }
}