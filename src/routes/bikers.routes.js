import { Router } from "express";
import * as bikersCtrl from "../controllers/biker.controllers";

const router = Router();

router.get("/", bikersCtrl.getBikers);
router.get("/:bikerId", bikersCtrl.getBikerById);
router.put("/:bikerId", bikersCtrl.updateBikerById);
router.post("/", bikersCtrl.createBiker);
router.delete("/:bikerId", bikersCtrl.deleteBikerById);

export default router;