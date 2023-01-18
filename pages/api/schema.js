import { createSchema } from 'graphql-yoga'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient() 

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type ToDo {
      name: String
    }
    type Query {
      hello: String
      todos: [ToDo]
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
      todos: async () => {
        return prisma.toDos.findMany();
      }
    }
  }
})