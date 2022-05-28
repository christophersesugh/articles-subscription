import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth";

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("connected to database");
    app.listen(8080, () => {
      console.log(`Server running on port 8080`);
    });
  })
  .catch((error) => {
    console.log(error);
    throw new Error(error);
  });
