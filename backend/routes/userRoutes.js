import express from 'express';
const router = express.Router();
import {
  login,
  register,
  logout,
  profile,
  updateProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
router.post('/', register);
router.post('/login', login);
router.post('/logout', logout);
router.route('/profile').get(protect, profile).put(protect, updateProfile);
export default router;
