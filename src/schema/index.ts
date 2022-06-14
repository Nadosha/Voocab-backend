import { makeExecutableSchema } from "@graphql-tools/schema";
import { startupProgress } from "../services/example/schema";
import resolvers from "./resolvers";

export default makeExecutableSchema({
  typeDefs: [startupProgress],
  resolvers,
});