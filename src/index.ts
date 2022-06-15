import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import schema from "./schema";
 import mock from "../FAKE_DATA.json";
 import { Posts } from "./services/example/model";

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
  });
  app.use((req, res) => {
    res.send("Express server running...");
  });

  await mongoose.connect("mongodb://localhost:27017/startup");
  console.log("Mongoose connected ...");

  Posts.find().count((err, count) => {
    if(!count) {
      Posts.insertMany(mock);
      console.log("Data successfully mocked!");
    }
  });


  app.listen(3030, () => console.log("Server is running on port 3030"));
};

startServer();