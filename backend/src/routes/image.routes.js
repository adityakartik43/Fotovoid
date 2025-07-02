import express from "express";
import multer from "multer";
import { storage } from "../utils/cloudinary.utils.js";
import auth from "../middlewares/auth.middleware.js";
import validateApiKey from "../middlewares/api.middleware.js";
import {
  uploadImage,
  getUserImage,
  getRandomImages,
} from "../controllers/image.controllers.js";

const upload = multer({ storage });
const router = express.Router();

router.post("/upload", auth, upload.single("image"), uploadImage);
router.get("/", validateApiKey, getUserImage);
router.get("/random-image", validateApiKey, getRandomImages);

export default router;
