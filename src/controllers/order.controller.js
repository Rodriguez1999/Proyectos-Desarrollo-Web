import Order from "../models/Order";
import Product from "../models/Products";
import Company from "../models/company";
import User from "../models/User";
import Bill from "../models/bills";

//crear orden
export const createOrder = async (req, res) => {
  let {
    productsId,
    userId,
    driverId,
    deliveryAddress,
    lat,
    long,
    status,
    statusDetail,
    observation,
    payment,
  } = req.body;
  const newOrder = new Order({
    productsId,
    userId,
    driverId,
    deliveryAddress,
    lat,
    long,
    status,
    statusDetail,
    observation,
    payment,
  });

  //Guardando el motorista en la base de datos
  const orderSaved = await newOrder.save();

  //Retorna el estatus de la solicitud y el motorista
  res.status(201).json(orderSaved);
};

//Crear Factura
export const createBill = async (req, res) => {
  let {
    products,
    orderId,
    user,
    driverId,
    deliveryAddress,
    purchasePrice,
    ISV,
    adminCommission,
    driverCommission,
    total,
    sales
  } = req.body;
  const newBill = new Bill({
    products,
    orderId,
    user,
    driverId,
    deliveryAddress,
    purchasePrice,
    ISV,
    adminCommission,
    driverCommission,
    date: new Date(),
    total,
    sales
  });

  //Guardando el motorista en la base de datos
  const billSaved = await newBill.save();

  //Retorna el estatus de la solicitud y el motorista
  res.status(201).json(billSaved);
};

// Obtener todas las ordenes
export const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

//Retorna las ordenes disponibles
export const getOrdersAvailables = async (req, res) => {
  let ordersFinal = [];
  
  const orders = await Order.find({status: 0});

  for(let i = 0; i < orders.length; i++){
    let productsFinal = [];
    for(let j = 0; j < orders[i].productsId.length; j++){
      const productsList = await Product.findById(orders[i].productsId[j].productId);
      const companyAct = await Company.findById(productsList.companyID);
      let newProduct = {
        product: productsList.name,
        quantity: orders[i].productsId[j].quantity,
        price: productsList.price,
        imgURL: productsList.imgURL,
        description: productsList.description,
        companyName: companyAct.name,
        address: companyAct.address
      }
      productsFinal.push(newProduct);
      
    } 
    let newOrder={
      _id: orders[i]._id,
      products: productsFinal,
      deliveryAddress: orders[i].deliveryAddress,
      lat: orders[i].lat,
      long: orders[i].long
    }

    ordersFinal.push(newOrder);
  }

  res.json(ordersFinal);
};

//Retorna las ordenes en progreso de un motorista
export const getOrdersDriver = async (req, res) => {
  let ordersFinal = [];
  let priceTotal= 0;
  
  const orders = await Order.find({driverId: req.params.id});

  for(let i = 0; i < orders.length; i++){
    if(orders[i].status == 5){

    }else{
      let productsFinal = [];
      const user = await User.findById(orders[i].userId);
      for(let j = 0; j < orders[i].productsId.length; j++){
        const productsList = await Product.findById(orders[i].productsId[j].productId);
        const companyAct = await Company.findById(productsList.companyID);
        let newProduct = {
          product: productsList.name,
          quantity: orders[i].productsId[j].quantity,
          price: productsList.price,
          description: productsList.description,
          companyName: companyAct.name,
          address: companyAct.address
        }
        priceTotal +=productsList.price*orders[i].productsId[j].quantity;
        productsFinal.push(newProduct);
      } 
      let newOrder={
        _id: orders[i]._id,
        item: i,
        name: user.firstName+' '+user.lastName,
        phone: user.phone,
        status: orders[i].status*25,
        statusDetail: orders[i].statusDetail,
        payment: orders[i].payment,
        products: productsFinal,
        price: priceTotal,
        deliveryAddress: orders[i].deliveryAddress,
        lat: orders[i].lat,
        long: orders[i].long
      }

      ordersFinal.push(newOrder);
    }
  }
  res.json(ordersFinal);
};

//Retorna las ordenes finalizadas de un motorista
export const getOrdersFinished = async (req, res) => {
  let ordersFinal = [];
  let priceTotal= 0;
  
  const orders = await Order.find({driverId: req.params.id, status: 5});

  for(let i = 0; i < orders.length; i++){
    let productsFinal = [];
    const user = await User.findById(orders[i].userId);
    for(let j = 0; j < orders[i].productsId.length; j++){
      const productsList = await Product.findById(orders[i].productsId[j].productId);
      const companyAct = await Company.findById(productsList.companyID);
      let newProduct = {
        product: productsList.name,
        quantity: orders[i].productsId[j].quantity,
        price: productsList.price,
        description: productsList.description,
        companyName: companyAct.name,
        address: companyAct.address
      }
      priceTotal +=productsList.price*orders[i].productsId[j].quantity;
      productsFinal.push(newProduct);
    }
    
    let newOrder={
      _id: orders[i]._id,
      name: user.firstName+' '+user.lastName,
      phone: user.phone,
      status: orders[i].status*25,
      statusDetail: orders[i].statusDetail,
      payment: orders[i].payment,
      products: productsFinal,
      price: priceTotal,
      deliveryAddress: orders[i].deliveryAddress,
      date: orders[i].updatedAt
    }

    ordersFinal.push(newOrder);
  }
  res.json(ordersFinal);
};

//Obtener una orden por id
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.orderId)
    .then((result) => {
      res.status(200).json(result);
      res.end();
    })
    .catch((error) => {
      res.status(400).json({ mensaje: "Pedido no encontrado" });
    });
};

//Obtener una factura por ID
export const getBillById = async (req, res) => {
  const bill = await Bill.find({orderId: req.params.id})
    .then((result) => {
      res.status(200).json(result);
      res.end();
    })
    .catch((error) => {
      res.status(400).json({ mensaje: "Factura no encontrado" });
    });
};

//Actualiza campos de una orden
export const updateOrderById = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.orderId,
    req.body,
    { new: true }
  );
  res.status(204).json(updatedOrder);
};

//eliminar una orden
export const deleteOrderById = async (req, res) => {
    await Order.findByIdAndDelete(
      req.params.orderId
    );
    res.status(204).json();
  };
  