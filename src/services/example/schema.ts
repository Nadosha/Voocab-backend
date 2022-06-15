import { gql } from "apollo-server-express";

export const startupProgress = gql`
  type Post {
    id: ID
    title: String
    description: String
    imgUrl: String
  }
  type Query {
    getPosts: [Post]
  }
  input PostInput {
    id: ID
    title: String
    completed: String
  }
  type createProgressPayload {
    steps: [Post]
  }
  input PostsInput {
    id: ID
    title: String
    description: String
    imgUrl: String
  }
  input UpdatePostsInput {
    title: String
    description: String
    imgUrl: String
  }
  type Mutation {
    createProgress(posts: [PostsInput!]!): [Post]
    updateProgress(post: UpdatePostsInput): Post
  }
`;