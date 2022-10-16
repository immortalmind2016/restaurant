import mongoose from "mongoose";
const RestaurantTranslation = new mongoose.Schema({
  description: String,
});
enum AdType {
  MEAL = "meal",
  RESTAURANT = "restaurant",
}
const AdSchema = new mongoose.Schema(
  {
    type: AdType,
    link: String,
    expireDate: Date,
    sortingNumber: String,
  },
  {
    timestamps: true,
  }
);
