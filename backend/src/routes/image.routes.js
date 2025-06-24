import express from 'express'
import multer from 'multer'
import { storage } from '../utils/cloudinary.utils.js'
import auth from '../middlewares/auth.middleware.js'
import { uploadImage, getUserImage, getRandomImages } from '../controllers/image.controllers.js'

const upload = multer( {storage});
const router = express.Router();

router.post('/upload', auth, upload.single('image'), uploadImage);
router.get('/', auth, getUserImage);
router.get('/random-image', auth, getRandomImages);

export default router