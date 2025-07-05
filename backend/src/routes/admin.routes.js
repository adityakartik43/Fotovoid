import express from "express"
import { totalUsers, totalApis } from "../controllers/admin.controllers.js"

const router = express.Router();

router.get('/totaluser', totalUsers);
router.get('/totalapis', totalApis);

export default router