import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.rvjttks.mongodb.net/EpicureDB?retryWrites=true&w=majority");
};
export { connectDb };
