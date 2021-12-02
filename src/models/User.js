import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
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
  { timestamps: true, versionKey: false 
}
);

//cifrado y comparacion de contrasenia
userSchema.statics.encryptPassword = async (password) => {
    //aplica el algoritmo y su recorrido
    const salt = await bcrypt.genSalt(10);
    // se retorna la contrasenia ya cifrada
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model('User', userSchema);