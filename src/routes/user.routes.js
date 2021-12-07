import { Router } from "express";
import * as userCtrl from "../controllers/users.controller";
import { authJwt, verifySignUp } from "../middlewares";

const router = Router();

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRoles],
  userCtrl.createUser
);
export default router;
