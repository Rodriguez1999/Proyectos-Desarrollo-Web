import User from "../models/usuario";

//Crear nuevo usuario
export const createUser = async (req, res) =>{
    let { nombre, apellido, fechaNacimiento, telefono, direccion, correo, contrasena, estado, detallesEstado } = req.body;
    const newUser = new User({ nombre, apellido, fechaNacimiento, telefono, direccion, correo, contrasena, estado, detallesEstado });
          
    //Guardando el motorista en la base de datos
    const userSaved = await newUser.save();
        
    //Retorna el estatus de la solicitud y el motorista
    res.status(201).json(userSaved);
}

//obtener todos los usuarios
export const getUsers = async (req, res) =>{
    const user = await User.find();
    res.json(user);
}

//Obtener usuario por ID
export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId).then(result =>{
        res.status(200).json(result);
        res.end();
    }).catch(error =>{
        res.status(400).json({mensaje: 'Usuario no encontrado'});
    });
};

//actualizar informacion de un usuario
export const updateUserById = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res.status(204).json(updatedUser);
  };