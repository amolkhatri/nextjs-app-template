import { createSchema } from 'graphql-yoga'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

let counter = 0;

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type ToDo {
      name: String
      id: String
      completed: Boolean
    }
    type Query {
      hello: String
      todos: [ToDo]
      counter: Int
    }
    type Mutation{
       setCounter(val: Int): Int
       addTodo(name: String): ToDo
       deleteTodo(id: String): Boolean
       updateStatus(id: String, completed: Boolean): Boolean
       
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
      todos: async () => {
        return prisma.toDos.findMany();
      },
      counter: () => counter
    },
    Mutation: {
      setCounter: (parent, { val }) => {
        counter = val;
        return counter;
      },
      addTodo: async (parent, { name }) => {
        return prisma.toDos.create({ data: { name , completed: false} });
      },
      deleteTodo: async (parent, { id }) => {
        await prisma.toDos.delete({
          where: {
            id
          }
        });
        return true;
      },
      updateStatus: async (parent, { id, completed}) => {
        await prisma.toDos.update({
          where: {
            id
          },
          data: {
            completed: completed
          }
        });
        return true;
      }
    }
  }

})