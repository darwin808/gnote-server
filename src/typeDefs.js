import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    getNotes: [Note!]!
    getNote(message: String): [Note!]!
  }
  type Note {
    id: ID!
    title: String
    author: String
    message: String
    createdAt: String
  }
  type Mutation {
    createNote(
      title: String
      author: String
      message: String
      createdAt: String
    ): Note!

    updateNote(
      id: String
      title: String
      author: String
      message: String
      createdAt: String
    ): Note!

    deleteNote(id: String!): String

    deleteALLNote(id: String): String
  }
`;
