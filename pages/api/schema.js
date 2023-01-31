import { createSchema } from 'graphql-yoga'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient() 


let counter = 0;

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type ToDo {
      name: String
      id: String
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
    Mutation:{
      setCounter: (parent, {val}) => {
        //console.log(val);
        counter = val;
        return counter;
      },
      addTodo: async (parent, {name}) => {
        return prisma.toDos.create({data: {name}});
      },
      deleteTodo: async(parent, {id}) => {
        await prisma.toDos.delete({
          where: {
            id
          }
        });
        return true;
      }
    }
  }

})