import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
<<<<<<< HEAD
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    DNI: String,
    birthDate: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
=======
    firstName: String,
    lastName: String,
    DNI: String,
    birthDate: Date,
    phone: String,
>>>>>>> dw-proyecto/backend-Isaacv2
    city: String,
    department: String,
    licensePlate: String,
    address: String,
    status: Number,
    statusDetail: String,
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
<<<<<<< HEAD
      required: true,
=======
>>>>>>> dw-proyecto/backend-Isaacv2
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

//cifrado y comparacion de contrasenia
userSchema.statics.encryptPassword = async (password) => {
  //aplica el algoritmo y su recorrido
  const salt = await bcrypt.genSalt(10);
  // se retorna la contrasenia ya cifrada
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);
