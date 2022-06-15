import * as mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imgUrl: {
    type: String,
    required: true
  }
});

export const Posts = mongoose.model("posts", postsSchema);