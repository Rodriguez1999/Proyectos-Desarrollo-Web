import User from "../models/User";

export const createUser = (req, res) => {
  res.json("creatin User");
};


//Obtener Usuarios
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//Eliminar usuario
export const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  await User.deleteUserById(userId)
    .then((result) => {
      res.status(204).json({ mensaje: "Usuario Eliminado con exito." });
      res.end();
    })
    .catch((error) => {
      res.status(404).json(error);
      res.end();
    });
};

//Actualizar usuario
export const updateUserById = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    { new: true }
  );
  res.status(204).json(updatedUser);
};


