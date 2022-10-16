import mongoose, { Mongoose } from "mongoose";

const SubTypeTranslation = new mongoose.Schema({});
const SubTypeSchema = new mongoose.Schema(
  {
    text: String,
    translation: {
      ar: SubTypeTranslation,
      heb: SubTypeTranslation,
    },
  },
  {
    timestamps: true,
  }
);
