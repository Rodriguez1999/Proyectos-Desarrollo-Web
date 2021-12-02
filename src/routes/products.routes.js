import { Router } from "express";
import * as productsCtrl from "../controllers/products.controllers";

const router = Router();

router.get("/", productsCtrl.getProducts);
router.get("/:productId", productsCtrl.getProductById);
router.put("/:productId", productsCtrl.updateProductById);
router.post("/", productsCtrl.createProduct);
router.delete("/:productId", productsCtrl.deleteProductById);

export default router;
