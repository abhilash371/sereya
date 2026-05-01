import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import quizRoutes from './routes/quiz.js';
import recommendationRoutes from './routes/recommendations.js';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`📡 ${req.method} ${req.path}`, {
    authorization: req.headers.authorization ? 'Present' : 'Missing',
    contentType: req.headers['content-type']
  });
  next();
});

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', protect, quizRoutes);
app.use('/api/recommendations', protect, recommendationRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Sereya is running! 🧴' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌟 Sereya backend running on port ${PORT}`);
});
