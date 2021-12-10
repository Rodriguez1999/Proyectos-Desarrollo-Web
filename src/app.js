import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import productsRoutes from "./routes/products.routes";
import authRoutes from './routes/auth.routes';
import userRoutes from "./routes/user.routes";
import {createRoles} from './libs/initialSetup';
import orderRoutes from "./routes/order.routes";
import companyRoutes from "./routes/company.routes";
<<<<<<< HEAD
import cors from 'cors';
=======
import cors from "cors";
import bodyParser from "body-parser";
>>>>>>> dw-proyecto/backend-Isaacv2

const app = express();

createRoles();

app.use(morgan("dev"));

app.use(express.json());
<<<<<<< HEAD

app.use(cors());
=======
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
>>>>>>> dw-proyecto/backend-Isaacv2

app.set("pkg", pkg);

app.get("/", (req, res) => {
  res.json({
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    project: app.get("pkg").name,
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/companies", companyRoutes);

export default app;
