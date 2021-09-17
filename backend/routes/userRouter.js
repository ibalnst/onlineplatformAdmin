import express from 'express';
import { adminLogin } from '../controllers/userController.js';

const router = express.Router();
router.post('/login', adminLogin);
export default router;
