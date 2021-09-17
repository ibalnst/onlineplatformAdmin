import express from 'express';
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  updatedCourse,
  getCourseById,
  getAllFreeCourse,
} from '../controllers/courseControllers.js';
import { admin, protect } from '../middleware/auth.js';

const router = express.Router();

router
  .route('/')
  .get(protect, admin, getAllCourse)
  .post(protect, admin, createCourse);
router
  .route('/:id')
  .delete(protect, admin, deleteCourse)
  .put(protect, admin, updatedCourse)
  .get(protect, admin, getCourseById);

export default router;
