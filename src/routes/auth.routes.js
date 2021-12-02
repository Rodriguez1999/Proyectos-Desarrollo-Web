import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";

const router = Router();

router.post("/signin", authCtrl.singIn);

router.post("/signup", authCtrl.singUp);

export default router;
