import mongoose from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    restaurants: {
      type: Array,
      required: false,
    },
    describtion:{
      type: String,
      required: false
    },
    img:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Chefs = mongoose.model("Chefs", chefsSchema);

export default Chefs;
