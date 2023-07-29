import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/todoapp";

mongoose.connect(db, {}).then(() => {
  console.log("Connected to DB");
});

app.use("/", taskRoutes);
app.get("/home", (req, res) => {
  res.send("Home Page!!!");
});

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (!err) console.log(`Server listening on port ${port}`);
  else console.log("Server stoped listening");
});
