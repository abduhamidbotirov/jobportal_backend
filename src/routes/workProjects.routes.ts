import { Router } from "express";
import workExperienceController from "../controllers/workExperience.controller.js";
import workProjectsContr from "../controllers/workProjects.contr.js";
import authMiddleware from "../middleware/auth.js";
import workExperienceMd from "../middleware/workExperience.md.js";
const router = Router();

let { post,get,put,del}=workProjectsContr

let { idAndUserChecker: IUCH, idChecker: ICH } = workExperienceMd;
router.get("/:id",get);
router.post("/:id",ICH, IUCH, post);
router.put("/:id", ICH, put);
router.delete("/:id", ICH, del);

export default router;
