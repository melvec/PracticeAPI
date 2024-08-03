import myDataSchema from "../schema/dataSchema.js";

export const createName = (nameObj) => {
  return myDataSchema(nameObj).save();
};

export const readNames = () => {
  return myDataSchema.find();
};
