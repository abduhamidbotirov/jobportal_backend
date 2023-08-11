import express from "express";
import jobRouter from "./job.routes.js"
import infoRouter from "./info.routes.js"
import skillRouter from "./skill.routes.js";
import moneyRouter from "./money.routes.js"
import UserRoutes from './User/user.routes.js'
import langRouter from "./language.routes.js"
// import resumeRoutes from './resume.routes.js'
import recruiterRouter from "./reqruiter.routes.js"
import educationRouter from "./education.routes.js";
import jobCategoryRouter from "./jobCategory.routes.js"
import { router as skillRouterOld } from "./jobSkill.routes.js";
import { router as employeeRouter } from "./eployee.routes.js";
import { router as experienceRouter } from "./experience.routes.js";
import { router as roleAndSalaryRouter } from "./role&salary.routes.js";
const router = express.Router();

router.use('/test', () => { });
router.use('/job', jobRouter);
router.use('/skill', skillRouter);
router.use('/info', infoRouter);
router.use('/user', UserRoutes);
router.use('/skills', skillRouterOld);
router.use('/language', langRouter);
router.use('/money', moneyRouter);
// router.use('/resume', resumeRoutes);
router.use('/recruiter', recruiterRouter);
router.use('/education', educationRouter);
router.use('/employees', employeeRouter);
router.use('/category', jobCategoryRouter);
router.use('/experience', experienceRouter);
router.use('/roleAndSalary', roleAndSalaryRouter);

export default router
