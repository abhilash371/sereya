import express from 'express';
import { getRecommendations, getIngredientInfo } from '../controllers/recommendationController.js';

const router = express.Router();

router.post('/generate', getRecommendations);
router.get('/ingredient', getIngredientInfo);

export default router;
