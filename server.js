import express from "express";
import { connectMongo } from "./config/dbConfig.js";

import userRouter from "./routers/userRouter.js";
import dataRouter from "./routers/dataRouter.js";
import cors from "cors";

const app = express();
const PORT = 8000;
//const dataRouter =  express.Router()

app.use(express.json());

app.use(cors());

connectMongo();

// Routers
app.use("/api/user", userRouter);
app.use("/api/data", dataRouter);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("server running");
});
