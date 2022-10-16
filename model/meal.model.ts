import mongoose from "mongoose";
enum MealStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
const MealTranslation = new mongoose.Schema({
  description: String,
});
const MealSchema = new mongoose.Schema(
  {
    pics: [String],
    price: {
      amount: Number,
      currency: String,
    },
    restaurantName: String,
    sortingNumber: Number,
    status: MealStatus,
    description: String,
    expireDate: Date,
    MealType: String,
    translations: {
      ar: MealTranslation,
      heb: MealTranslation,
    },
  },
  {
    timestamps: true,
  }
);
