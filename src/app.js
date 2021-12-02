import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import productsRoutes from "./routes/products.routes";
import authRoutes from './routes/auth.routes';
import {createRoles} from './libs/initialSetup';

const app = express();

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
app.use("/api/auth", authRoutes);

export default app;
