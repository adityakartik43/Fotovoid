import express from 'express';
import { contact } from '../controllers/contact.controllers.js';

const router = express.Router();

router.post('/', contact);

export default router;