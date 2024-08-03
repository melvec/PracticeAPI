import express from "express";
import { createUser, findUserByEmail } from "../model/userModel.js";

const userRouter = express.Router();
// Create User | Signup Endpoint
userRouter.post("/", async (req, res) => {
  try {
    //Query the Db
    const result = await createUser({ ...req.body });
    result?._id ? res.send("user created") : "error";
  } catch (error) {
    if (error.code === 11000) {
      error.message = "User with this email already exists!!";
    }
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (user.password === password) {
      res.json({
        status: 200,
        message: "User logged in",
      });
    } else {
      res.json({
        status: "error",
        message: "Invalid user",
      });
    }
    //res.send("error");
    // if (user?._id) {
    //   const passwordMatchCheck = bcrypt.compareSync(password, user.password);
    //   res.send("logged in ");
    // }
  } catch (error) {
    res.json({
      status: "error",
      message: "Invalid user",
    });
  }
});

export default userRouter;
