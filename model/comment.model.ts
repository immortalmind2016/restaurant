import mongoose, { Mongoose } from "mongoose";
const RestaurantTranslation = new mongoose.Schema({
  description: String,
});
enum CommentStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
}
const CommentSchema = new mongoose.Schema(
  {
    text: String,
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurant",
    },
    userIp: String,
    status: CommentStatus,
  },
  {
    timestamps: true,
  }
);
