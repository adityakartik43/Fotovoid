import express from 'express';
import { getAllApiKeys, generateApiKey, deleteApiKey } from '../controllers/apikeys.controllers.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('.getallapi', auth, generateApiKey);
router.get('/generate', auth, generateApiKey);
router.get('/deleteapi', auth, deleteApiKey);

export default router;