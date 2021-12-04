import Biker from "../models/biker";

export const createBiker = (req, res) => {
    let { nombre, apellido, DNI, fechaNacimiento, telefono, ciudad, departamento, placa, direccion, correo, contrasena } = req.body;
    Biker.find({correo: correo}).then(async result =>{
        if(result.length > 0){
            res.status(400).json({mensaje: 'El correo '+correo+' ya se encuentra registrado.'});
            res.end();
        }else{
            const newBiker = new Biker({ nombre, apellido, DNI, fechaNacimiento, telefono, ciudad, departamento, placa, direccion, correo, contrasena, estado: 0, detallesEstado: "Pendiente aprovación" });
          
            //Guardando el motorista en la base de datos
            const bikerSaved = await newBiker.save();
        
            //Retorna el estatus de la solicitud y el motorista
            res.status(201).json(bikerSaved);
        }
    }).catch(error =>{
        res.status(204).json();
        res.end();
    });
  };

// Obtener todos los motoristas
export const getBikers = async (req, res) =>{
    const bikers = await Biker.find();
    res.json(bikers);
};

//Obtener motorista por ID
export const getBikerById = async (req, res) => {
    const biker = await Biker.findById(req.params.bikerId).then(result =>{
        res.status(200).json(result);
        res.end();
    }).catch(error =>{
        res.status(400).json({mensaje: 'Usuario no encontrado'});
    });
};

  //Eliminar un motorista
export const deleteBikerById = async (req, res) => {
    const { bikerId } = req.params;
    await Biker.findByIdAndDelete(bikerId).then(result=>{
        //respuesta por parte del servidor con el codigo 204
        res.status(204).json({mensaje: 'Usuario Eliminado con exito.'});
        res.end();
    }).catch(error=>{
        res.status(404).json();
    });
};

//Actualizar informacion de un motorista
export const updateBikerById = async (req, res) => {
    //Actualizar el objeto enviado con el ID como parametro y el contenido dentro del req.body
    const updatedBiker = await Biker.findByIdAndUpdate(
      req.params.bikerId,
      req.body,
      { new: true }
    );
    res.status(204).json(updatedBiker);
  };