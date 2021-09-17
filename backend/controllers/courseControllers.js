import asyncHandler from 'express-async-handler';
import Course from '../models/courseModels.js';

const createCourse = asyncHandler(async (req, res) => {
  const { name, image, category, detail, price } = req.body;
  const course = new Course({
    name,
    image,
    category,
    detail,
    price,
  });
  const createCourse = await course.save();
  res.status(201).json(createCourse);
});

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    await course.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const updatedCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    course.name || course.category || course.detail || course.price;
    const updatedCourse = await course.save();
    res.json({
      _id: updatedCourse._id,
      name: updatedCourse.name,
      category: updatedCourse.category,
      detail: updatedCourse.detail,
      price: updatedCourse.price,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
    throw new Error('User not found');
  }
});

const getAllCourse = asyncHandler(async (req, res) => {
  const course = await Course.find({});
  res.json(course);
});

const getAllFreeCourse = asyncHandler(async (req, res) => {
  const { price } = req.body;
  const course = await Course.count(0);
  res.json(course);
});

const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
    throw new Error('User not found');
  }
});

export {
  createCourse,
  deleteCourse,
  updatedCourse,
  getAllCourse,
  getCourseById,
  getAllFreeCourse,
};
