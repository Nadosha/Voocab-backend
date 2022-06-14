import {
    Query as startupProgressQuery,
    Mutation as startupProgressMutation,
  } from "../services/example/resolvers";
  
  export default {
    Query: Object.assign({}, startupProgressQuery),
    Mutation: Object.assign({}, startupProgressMutation),
  };