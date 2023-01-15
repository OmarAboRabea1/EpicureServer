import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://Omar_Abo_Rabea:Om21279ar2626@cluster0.rvjttks.mongodb.net/EpicureDB?retryWrites=true&w=majority");
};

export { connectDb };
