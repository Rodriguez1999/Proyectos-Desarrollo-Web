import Company from "../models/company";

//crear empresa
export const createCompany = async (req, res) =>{
    let { nombre, telefono, direccion, lat, long, correo, descripcion, categoria } = req.body;
    const newCompany = new Company({ nombre, telefono, direccion, lat, long, correo, descripcion, categoria });
          
    //Guardando el motorista en la base de datos
    const companySaved = await newCompany.save();
        
    //Retorna el estatus de la solicitud y el motorista
    res.status(201).json(companySaved);
}

//Obtener empresas
export const getCompanies = async (req, res) =>{
    const companies = await Company.find();
    res.json(companies);
}

//Obtener empresa por ID
export const getCompanyById = async (req, res) => {
    const company = await Company.findById(req.params.companyId).then(result =>{
        res.status(200).json(result);
        res.end();
    }).catch(error =>{
        res.status(400).json({mensaje: 'Usuario no encontrado'});
    });
};