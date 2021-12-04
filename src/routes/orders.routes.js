import { Router } from "express";
import * as ordersCtrl from "../controllers/order.controllers";

const router = Router();

router.get("/", ordersCtrl.getOrders);
router.get("/:orderId", ordersCtrl.getOrderById);
router.put("/:orderId", ordersCtrl.updateOrderById);
router.post("/", ordersCtrl.createOrder);
//router.delete("/:orderId", ordersCtrl.deleteOrderById);

export default router;