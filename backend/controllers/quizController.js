import Quiz from '../models/Quiz.js';
import { generateRecommendations } from '../recommendations/engine.js';

export async function submitQuiz(req, res) {
  try {
    const {
      skinType,
      hasAcne,
      acneSeverity,
      sensitivityLevel,
      pigmentation,
      sunExposure,
      ageGroup,
      currentConcerns,
      allergies
    } = req.body;

    // Validate required fields
    if (!skinType || !ageGroup) {
      return res.status(400).json({ error: 'Skin type and age group are required' });
    }

    // Create quiz record
    const quiz = new Quiz({
      skinType,
      hasAcne,
      acneSeverity,
      sensitivityLevel,
      pigmentation,
      sunExposure,
      ageGroup,
      currentConcerns,
      allergies
    });

    await quiz.save();

    // Generate recommendations
    const recommendations = generateRecommendations(req.body);

    res.status(201).json({
      message: '✅ Quiz submitted successfully!',
      quizId: quiz._id,
      recommendations
    });
  } catch (error) {
    console.error('Quiz submission error:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
}

export async function getQuizHistory(req, res) {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 }).limit(10);
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quiz history:', error);
    res.status(500).json({ error: 'Failed to fetch quiz history' });
  }
}
