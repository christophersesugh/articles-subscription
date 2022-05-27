import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
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
