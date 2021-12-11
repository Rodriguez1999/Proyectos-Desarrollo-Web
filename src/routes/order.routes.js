import { Router } from "express";
import * as ordersCtrl from "../controllers/order.controller";
import { authJwt } from "../middlewares";
const router = Router();

router.get("/", authJwt.verifyToken, ordersCtrl.getOrders);
router.get("/availables", authJwt.verifyToken, ordersCtrl.getOrdersAvailables);
router.get("/bill/:id", authJwt.verifyToken, ordersCtrl.getBillById);
router.get("/finished/:id", authJwt.verifyToken, ordersCtrl.getOrdersFinished);
router.get("/availables/:id", authJwt.verifyToken, ordersCtrl.getOrdersDriver);
router.get("/:orderId", authJwt.verifyToken, ordersCtrl.getOrderById);
router.put("/:orderId", [authJwt.verifyToken], ordersCtrl.updateOrderById);
router.post("/", authJwt.verifyToken, ordersCtrl.createOrder);
router.post("/createBill", authJwt.verifyToken, ordersCtrl.createBill);
router.delete("/:orderId",[ authJwt.verifyToken, authJwt.isAdmin], ordersCtrl.deleteOrderById);

export default router;
