import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    images: {
      type: [String]
    },

    price: {
      type: Number,
      required: true
    },

    location: {
      type: String
    },

    country: {
      type: String
    },

    category: {
      type: String,
      required: true,
      enum: ["Luxury", "Budget", "Resort", "Business", "Hostel"]
    }

  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
