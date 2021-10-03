import mongoose from "mongoose";
import { resolvers } from "../src/resolvers";
import { typeDefs } from "../src/typeDefs";
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

const startServer = async () => {
  const app = express();
  require("dotenv").config();
  const urlMongo = process.env.DB_HOST;
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  await server.applyMiddleware({ app });

  await mongoose.connect(urlMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Server ready at http://localhost:4000${server.graphqlPath} 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀`
    )
  );
};

startServer();
