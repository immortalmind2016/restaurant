import mongoose, { Mongoose } from "mongoose";
enum DirectionType {
  WEST = "west",
  SOUTH = "south",
  NORTH = "north",
  EAST = "east",
}
enum RestaurantStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
}

const SocialMediaSchema = new mongoose.Schema(
  {
    facebook: String,
    whatsApp: String,
    instagram: String,
  },
  { _id: false }
);
const RestaurantTranslation = new mongoose.Schema({
  name: String,
  description: String,
  paymentMethods: [String],
});
const RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    city: String,
    direction: {
      type: String,
      enum: DirectionType,
    },
    rating: Number,
    numberOfReviews: Number,
    hasDelivery: Boolean,
    discount: Number,
    typeOfFood: [String],
    //Connected to type collection
    subTypes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "SubType",
      },
    ],
    subServices: [
      {
        type: mongoose.Types.ObjectId,
        ref: "SubService",
      },
    ],
    logo: String,
    pictures: [String],
    workHours: Number,
    phone: String,
    bestMeals: [String],
    sortingNumber: Number,
    status: {
      type: String,
      enum: RestaurantStatus,
    },
    paymentMethods: [String],
    SocialMediaLinks: SocialMediaSchema,
    description: String,
    websiteLink: String,
    signature: String,
    isNeedReservations: Boolean,
    translations: {
      ar: RestaurantTranslation,
      heb: RestaurantTranslation,
    },
  },
  {
    timestamps: true,
  }
);
/*
name
Payments methods
description 
*/
