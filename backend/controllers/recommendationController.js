import { generateRecommendations } from '../recommendations/engine.js';

export async function getRecommendations(req, res) {
  try {
    const quizAnswers = req.body;
    
    console.log('📝 Quiz Submission Received');
    console.log('Body:', JSON.stringify(quizAnswers, null, 2));

    // Validate required fields
    if (!quizAnswers.skinType) {
      console.error('❌ Missing skinType');
      return res.status(400).json({ error: 'Skin type is required' });
    }
    if (!quizAnswers.ageGroup) {
      console.error('❌ Missing ageGroup');
      return res.status(400).json({ error: 'Age group is required' });
    }

    console.log('✅ Required fields validated');
    
    const recommendations = generateRecommendations(quizAnswers);
    
    console.log('✅ Recommendations generated successfully');
    console.log('Recommendations structure:', Object.keys(recommendations));

    res.json({
      success: true,
      recommendations
    });
  } catch (error) {
    console.error('❌ Recommendation generation error:', {
      message: error.message,
      stack: error.stack
    });
    res.status(500).json({ error: `Failed to generate recommendations: ${error.message}` });
  }
}

export async function getIngredientInfo(req, res) {
  try {
    const { ingredient } = req.query;

    if (!ingredient) {
      return res.status(400).json({ error: 'Ingredient name is required' });
    }

    // Simple ingredient information lookup
    const ingredientInfo = {
      'salicylic acid': {
        name: 'Salicylic Acid',
        type: 'Beta Hydroxy Acid (BHA)',
        bestFor: ['Acne', 'Oily Skin', 'Clogged Pores'],
        howItWorks: 'Oil-soluble acid that penetrates pores to remove sebum and dead skin cells',
        concentration: '0.5% - 2%',
        frequency: 'Daily to 2-3x per week (start low)',
        warnings: 'Can be irritating; start with low concentration. Avoid during pregnancy.',
        compatibility: 'Avoid mixing with Vitamin C, Niacinamide high doses'
      },
      'hyaluronic acid': {
        name: 'Hyaluronic Acid',
        type: 'Humectant',
        bestFor: ['Dry Skin', 'All Skin Types', 'Dehydration'],
        howItWorks: 'Holds up to 1000x its weight in water, drawing moisture into skin',
        concentration: '0.5% - 2%',
        frequency: 'Daily',
        warnings: 'Needs water to work; use on damp skin',
        compatibility: 'Works with almost everything'
      },
      'retinol': {
        name: 'Retinol',
        type: 'Vitamin A Derivative',
        bestFor: ['Anti-Aging', 'Acne', 'Texture'],
        howItWorks: 'Stimulates collagen production and increases cell turnover (1 cell cycle = 28 days)',
        concentration: '0.25% - 1%',
        frequency: '2-3x per week initially, up to daily',
        warnings: 'Causes initial purging (1-4 weeks). Increases sun sensitivity. Avoid during pregnancy.',
        compatibility: 'Never mix with Vitamin C same day. Avoid with acids on same day.'
      }
    };

    const info = ingredientInfo[ingredient.toLowerCase()];

    if (!info) {
      return res.status(404).json({ 
        message: 'Ingredient database limited in this version',
        tip: 'More ingredients coming soon! Check our database.' 
      });
    }

    res.json(info);
  } catch (error) {
    console.error('Error fetching ingredient info:', error);
    res.status(500).json({ error: 'Failed to fetch ingredient information' });
  }
}
