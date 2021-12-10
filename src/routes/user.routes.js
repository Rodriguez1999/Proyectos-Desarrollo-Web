import { Router } from "express";
import * as userCtrl from "../controllers/users.controller";
import { authJwt, verifySignUp } from "../middlewares";

const router = Router();

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRoles],
  userCtrl.createUser
);

router.get("/", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.getUsers);
<<<<<<< HEAD
router.get("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.getUserById);
=======
router.get("/:userId", [authJwt.verifyToken], userCtrl.getUserById);
>>>>>>> dw-proyecto/backend-Isaacv2
router.delete("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteUserById);
router.put("/:userId", [authJwt.verifyToken, authJwt.isAdmin], userCtrl.updateUserById);
export default router;
