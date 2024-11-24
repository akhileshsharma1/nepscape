import express from 'express';
import { createTour,updateTour,deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js';  

const router = express.Router();

// Create new tour
router.post('/', createTour);

// Update tour
router.put('/:id', updateTour);

// Delete tour
router.delete('/:id', deleteTour);

// Get single tour
router.get('/:id', getSingleTour);

// Get all tour
router.get('/', getAllTour);

//get tour by search
router.get("/search/getTourBySearch",getTourBySearch)
router.get("/search/getFeaturedTours",getFeaturedTour)
router.get("/search/getTourCount",getTourCount)

export default router;