import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/companydb")
  .then((db) => console.log("Connected to Mongo"))
  .catch((err) => console.log("Error connecting to Mongo: ", err));
