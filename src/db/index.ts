import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://Omar_Abo_Rabea:OmarAboRabea7@epicuredb.vekk4eg.mongodb.net/?retryWrites=true&w=majority");
};


export { connectDb };
