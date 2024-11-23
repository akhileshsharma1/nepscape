import express from 'express';
import { createTour } from '../controllers/tourController.js';  // Add .js extension

const router = express.Router();

// Create new tour
router.post('/', createTour);

export default router;