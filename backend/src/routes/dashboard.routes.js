import express from "express"
import { getTotalImage } from "../controllers/dashboard.controllers.js"

const router = express.Router();

router.get('/totalimage', getTotalImage);

export default router;