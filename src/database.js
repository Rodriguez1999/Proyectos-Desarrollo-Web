import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://usuario-admin:asd.456@agromaster.lpm75.mongodb.net/fastilery?retryWrites=true&w=majority")
  .then((db) => console.log("Connected to Mongo"))
  .catch((err) => console.log("Error connecting to Mongo: ", err));
