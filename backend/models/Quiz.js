import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  skinType: {
    type: String,
    enum: ['oily', 'dry', 'combination', 'sensitive'],
    required: true
  },
  hasAcne: {
    type: Boolean,
    default: false
  },
  acneSeverity: {
    type: String,
    enum: ['none', 'mild', 'moderate', 'severe'],
    default: 'none'
  },
  sensitivityLevel: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low'
  },
  pigmentation: {
    type: String,
    enum: ['none', 'mild', 'moderate', 'significant'],
    default: 'none'
  },
  sunExposure: {
    type: String,
    enum: ['low', 'moderate', 'high'],
    default: 'moderate'
  },
  ageGroup: {
    type: String,
    enum: ['18-25', '25-35', '35-45', '45-55', '55+'],
    required: true
  },
  currentConcerns: [String],
  allergies: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Quiz', quizSchema);
