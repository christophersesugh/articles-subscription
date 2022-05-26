import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

const app = express();
dotenv.config();
app.use(express.json());
app.use("/auth", authRoutes);

mongoose
  .connect(
    "mongodb+srv://subapp:sesugh185@cluster0.yl0jwci.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
    app.listen(8080, () => {
      console.log(`App running on port 8080`);
    });
  })
  .catch((error) => {
    console.log(error);
    throw new Error(error);
  });
