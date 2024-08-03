import userSchema from "../schema/userSchema.js";

// Create a user
export const createUser = (userObj) => {
  return userSchema(userObj).save();
};

export const findUserByEmail = (email) => {
  return userSchema.findOne({ email });
};
