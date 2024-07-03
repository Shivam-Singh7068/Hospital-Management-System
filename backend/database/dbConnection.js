import mongoose from "mongoose";

const MONGO_URI="mongodb+srv://admin:admin@cluster0.jifovtn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database:${err}`);
    });
};
