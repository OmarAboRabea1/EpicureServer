import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    establishedAt:{
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    openedAt:{
      type: Array,
      required: true,
    },
    dishes:{
      type: Array,
      required: false
    },
    img:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;
