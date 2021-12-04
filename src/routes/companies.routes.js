import { Router } from "express";
import * as companyCtrl from "../controllers/company.controllers";

const router = Router();

router.get("/", companyCtrl.getCompanies);
router.get("/:companyId", companyCtrl.getCompanyById);
//router.put("/:companyId", companyCtrl.updateCompanyById);
router.post("/", companyCtrl.createCompany);
//router.delete("/:companyId", companyCtrl.deleteCompanyById);

export default router;