import express from "express";
import { createName, readNames } from "../model/dataModel.js";

const dataRouter = express.Router();

dataRouter.post("/", (req, res) => {
  const data = req.body;
  createName(data)
    .then((mydata) => {
      res.json({ status: 200, data: mydata });
    })
    .catch((error) => {
      res.json({ status: error, data: error.message });
    });
});

dataRouter.get("/", (req, res) => {
  readNames()
    .then((mydata) => {
      res.json({ status: 200, data: mydata });
    })
    .catch((error) => {
      res.json({ status: error, data: error.message });
    });
});

export default dataRouter;
