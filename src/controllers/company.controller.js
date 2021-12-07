import Company from "../models/company";

//crear empresa
export const createCompany = async (req, res) => {
  let {
    name,
    phone,
    address,
    lat,
    long,
    email,
    description,
    category,
    imgProfile,
    imgBanner,
  } = req.body;
  const newCompany = new Company({
    name,
    phone,
    address,
    lat,
    long,
    email,
    description,
    category,
    imgProfile,
    imgBanner,
  });

  //Guardando el motorista en la base de datos
  const companySaved = await newCompany.save();

  //Retorna el estatus de la solicitud y el motorista
  res.status(201).json(companySaved);
};

//Obtener empresas
export const getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

//Obtener empresa por ID
export const getCompanyById = async (req, res) => {
  const company = await Company.findById(req.params.companyId)
    .then((result) => {
      res.status(200).json(result);
      res.end();
    })
    .catch((error) => {
      res.status(400).json({ mensaje: "company no encontrada: ", error });
    });
};

//Actualizar empresas
export const updateCompanyById = async (req, res) => {
  //Actualizar el objeto enviado con el ID como parametro y el contenido dentro del req.body
  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.companyId,
    req.body,
    { new: true }
  )
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((error) => {
      res.status(400).json({ mensaje: "company no actualizada: ", error });
    });
};

//Eliminar empresas
export const deleteCompanyById = async (req, res) => {
  
  await Company.findByIdAndDelete(req.params.companyId)
    .then((result) => {
      res.status(204).json();
      res.end();
    })
    .catch((error) => {
      res.status(400).json({ mensaje: "company no se pudo eliminar: ", error });
      res.end();
    });
};

//obtener categorias
export const getCategories = async (req, res) => {
  const companies = await Company.find()
    .then((result) => {
      res.status(200).json(companies);
      res.end();
    })
    .catch((error) => {
      res.status(400).json({ mensaje: "company no" });
      res.end();
    });
};
