import { Router } from "express";
import * as companyCtrl from "../controllers/company.controller";
import { authJwt } from "../middlewares";

const router = Router();

<<<<<<< HEAD
router.get('/category',authJwt.verifyToken, companyCtrl.getCategories);
=======
>>>>>>> dw-proyecto/backend-Isaacv2
router.get('/', authJwt.verifyToken, companyCtrl.getCompanies);
router.get('/:companyId',authJwt.verifyToken, companyCtrl.getCompanyById);
router.put('/:companyId', [authJwt.verifyToken, authJwt.isAdmin], companyCtrl.updateCompanyById);
router.post('/',  [authJwt.verifyToken, authJwt.isAdmin],companyCtrl.createCompany);
router.delete('/:companyId', [authJwt.verifyToken, authJwt.isAdmin], companyCtrl.deleteCompanyById);
<<<<<<< HEAD

=======
router.get('/category',authJwt.verifyToken, companyCtrl.getCategories);
>>>>>>> dw-proyecto/backend-Isaacv2

export default router;
