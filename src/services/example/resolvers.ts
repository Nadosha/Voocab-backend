import { Posts } from "./model";

export const Query = {
  getPosts: async () => {
    return Posts.find();
  },
};

export const Mutation = {
  createProgress: async (parent, args, context, info) => {
    // For future realization - currently is released but not used
    const { steps } = args;
    Posts.insertMany(steps).catch((err) => console.log(err));
    return Posts.find();
  },

  updateProgress: async (parent, args, context, info) => {
    const { stepId, todoId, value } = args.step;
    let updatedDoc = await Posts.findOneAndUpdate(
      { _id:  stepId, "toDo._id": todoId },
      {
        $set: {
          "toDo.$.completed": value,
        },
      },
      { returnOriginal: false }
    ).then((res) => {
      // Tasks cannot be marked as completed unless all tasks in the previous phase were completed.
      const isCompleted = res.toDo.every((val) => val.completed === true);
      return Posts.findOneAndUpdate(
          { _id: stepId },
          {
            $set: {
              isCompleted: isCompleted,
            },
          },
          { returnOriginal: false }
      );
    }).catch((err) => console.log(err));


    return updatedDoc;
  },
};