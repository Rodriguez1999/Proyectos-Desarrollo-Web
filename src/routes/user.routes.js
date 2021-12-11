import { Router } from "express";
import * as userCtrl from "../controllers/users.controller";
import { authJwt, verifySignUp } from "../middlewares";

const router = Router();

//router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRoles], userCtrl.createUser);
router.get("/", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.getUsers);
router.put("/:userId", [authJwt.verifyToken], userCtrl.updateUserById);
router.get("/:userId", [authJwt.verifyToken], userCtrl.getUserById);
router.delete("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteUserById);
export default router;
