import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
const app = express();
dotenv.config();
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(8080, () => {
  console.log(`App running on port 8080`);
});
