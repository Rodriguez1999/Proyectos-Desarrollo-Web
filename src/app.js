import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import productsRoutes from "./routes/products.routes";
import bikersRoutes from "./routes/bikers.routes";
import ordersRoutes from "./routes/orders.routes";
import usersRoutes from "./routes/usuarios.routes";
import companiesRoutes from "./routes/companies.routes";
import authRoutes from './routes/auth.routes';
import {createRoles} from './libs/initialSetup';

var bodyParser = require('body-parser');
var cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

createRoles();

app.use(morgan("dev"));

app.use(express.json());

app.set("pkg", pkg);

app.get("/", (req, res) => {
  res.json({
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    project: app.get("pkg").name,
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/bikers", bikersRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/companies", companiesRoutes);
app.use("/api/auth", authRoutes);

export default app;
