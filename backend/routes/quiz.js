import express from 'express';
import { submitQuiz, getQuizHistory } from '../controllers/quizController.js';

const router = express.Router();

router.post('/submit', submitQuiz);
router.get('/history', getQuizHistory);

export default router;
