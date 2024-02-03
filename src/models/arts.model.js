import mongoose, { Schema } from "mongoose";

const artSchema = new Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  posts: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Arts = new mongoose.model("Arts", artSchema);
