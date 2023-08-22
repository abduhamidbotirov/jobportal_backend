import { Router } from "express";
import userContr from "../../controllers/user.contr.js";
import userMiddleware from "../../middleware/user.middleware.js";
let { checkBody,idChecker,putChecker,isUsersData}=userMiddleware
let { post, getAll, getOne, login, put, delete: del ,apply} = userContr


const router = Router();
router.get("/", getAll); 
router.get("/token", getOne); 
router.post("/",checkBody ,post); 
router.post("/login",login); 
router.post("/apply",apply); 
router.put("/", idChecker, putChecker, put); 
router.delete("/",del); 
 
export default router;
