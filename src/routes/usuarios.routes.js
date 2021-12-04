import { Router } from "express";
import * as usersCtrl from "../controllers/user.controllers";

const router = Router();

router.get("/", usersCtrl.getUsers);
router.get("/:userId", usersCtrl.getUserById);
router.put("/:userId", usersCtrl.updateUserById);
router.post("/", usersCtrl.createUser);
//router.delete("/:userId", usersCtrl.deleteUserById);

export default router;