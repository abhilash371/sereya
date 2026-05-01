// Comprehensive ingredient database with science-backed information
const ingredientDatabase = {
  acne: {
    primary: ['Salicylic Acid', 'Benzoyl Peroxide', 'Niacinamide', 'Tea Tree Oil'],
    secondary: ['Sulfur', 'Azelaic Acid', 'Adapalene'],
    explanation: 'Salicylic Acid penetrates pores to remove excess sebum and dead skin cells. Benzoyl Peroxide kills acne-causing bacteria. Niacinamide reduces sebum production and inflammation.'
  },
  dryness: {
    primary: ['Hyaluronic Acid', 'Glycerin', 'Ceramides', 'Peptides'],
    secondary: ['Squalane', 'Plant Oils', 'Aloe Vera'],
    explanation: 'Hyaluronic Acid holds 1000x its weight in water. Ceramides repair skin barrier. Glycerin draws moisture into skin.'
  },
  sensitivity: {
    primary: ['Centella Asiatica', 'Panthenol', 'Allantoin', 'Zinc PCA'],
    secondary: ['Oat Extract', 'Chamomile', 'Aloe'],
    explanation: 'Centella Asiatica strengthens skin barrier and reduces inflammation. Panthenol soothes and heals irritation.'
  },
  pigmentation: {
    primary: ['Vitamin C', 'Kojic Acid', 'Niacinamide', 'Alpha Arbutin'],
    secondary: ['Licorice Extract', 'Glycolic Acid', 'Mandelic Acid'],
    explanation: 'Vitamin C brightens and prevents melanin production. Kojic Acid inhibits tyrosinase enzyme (key to dark spot formation).'
  },
  antiAging: {
    primary: ['Retinol', 'Peptides', 'Vitamin C', 'Hyaluronic Acid'],
    secondary: ['Niacinamide', 'CoQ10', 'Resveratrol'],
    explanation: 'Retinol stimulates collagen production and increases cell turnover. Peptides support skin structure and elasticity.'
  },
  sunProtection: {
    primary: ['Zinc Oxide', 'Titanium Dioxide', 'Avobenzone'],
    secondary: ['Resorcinol', 'Octinoxate'],
    explanation: 'Mineral sunscreens (Zinc Oxide) sit on skin surface and reflect UV rays. Perfect for sensitive skin. SPF 30+ blocks 97% of UVB rays.'
  },
  oilControl: {
    primary: ['Niacinamide', 'Salicylic Acid', 'Clay', 'Mattifying Powders'],
    secondary: ['Zinc PCA', 'Charcoal', 'Green Tea'],
    explanation: 'Niacinamide regulates sebum production. Clay absorbs excess oil. Green Tea has astringent properties.'
  }
};

// Product category recommendations
const productCategories = {
  cleanser: {
    oily: 'Gel-based or foam cleanser',
    dry: 'Creamy or milk cleanser',
    combination: 'Gentle gel cleanser',
    sensitive: 'Fragrance-free, pH-balanced cleanser'
  },
  moisturizer: {
    oily: 'Oil-free, lightweight gel moisturizer',
    dry: 'Rich cream or heavy moisturizer',
    combination: 'Lightweight lotion',
    sensitive: 'Hypoallergenic, fragrance-free moisturizer'
  },
  sunscreen: {
    all: 'SPF 30+ broad-spectrum sunscreen',
    sensitive: 'Mineral sunscreen (Zinc Oxide)',
    oily: 'Oil-free, non-comedogenic sunscreen'
  },
  treatment: {
    acne: 'Salicylic Acid serum or essence',
    pigmentation: 'Vitamin C serum or kojic acid treatment',
    antiAging: 'Retinol serum or peptide treatment'
  }
};

// Morning routine template
const morningRoutine = [
  {
    step: 1,
    product: 'Cleanser',
    type: 'Gel-based cleanser',
    timing: '⏰ 30 seconds - 1 minute',
    tip: 'Use lukewarm water, avoid hot water which depletes natural oils'
  },
  {
    step: 2,
    product: 'Toner/Essence (Optional)',
    type: 'Hydrating or astringent based on skin type',
    timing: '⏰ Immediately after cleansing',
    tip: 'Helps balance pH and prepare skin for serums'
  },
  {
    step: 3,
    product: 'Serum',
    type: 'Vitamin C serum',
    timing: '⏰ While skin is still damp',
    tip: 'Apply to face and neck for brightening and antioxidant protection'
  },
  {
    step: 4,
    product: 'Moisturizer',
    type: 'Lightweight day moisturizer',
    timing: '⏰ 1 minute after serum',
    tip: 'Lock in serum benefits; use less product for oily skin'
  },
  {
    step: 5,
    product: 'Sunscreen',
    type: 'SPF 30+ broad-spectrum',
    timing: '⏰ Last step, 15 min before sun exposure',
    tip: '🌞 NON-NEGOTIABLE! Use 1/4 teaspoon for face. Reapply every 2 hours'
  }
];

// Night routine template
const nightRoutine = [
  {
    step: 1,
    product: 'Cleanser',
    type: 'Gel or cream cleanser',
    timing: '⏰ 1-2 minutes',
    tip: 'First cleanse removes makeup, second cleanses skin deeply (double cleanse)'
  },
  {
    step: 2,
    product: 'Toner/Essence',
    type: 'Hydrating toner',
    timing: '⏰ Immediately after cleansing',
    tip: 'Prepares skin for active ingredients'
  },
  {
    step: 3,
    product: 'Active Treatment',
    type: 'Retinol, Niacinamide, or BHA serum',
    timing: '⏰ On completely dry skin (wait 20 min)',
    tip: '⚠️ Use retinol 2-3x per week max when starting. Increase gradually. Never use with Vitamin C or vitamin A derivatives together'
  },
  {
    step: 4,
    product: 'Night Cream',
    type: 'Rich moisturizer or sleeping mask',
    timing: '⏰ 5 minutes after treatment',
    tip: 'Nighttime is when skin repairs itself. Use heavier formula than morning.'
  }
];

// Safety warnings
const safetyWarnings = [
  {
    warning: '🧪 Patch Test',
    description: 'Always do a patch test on inner arm or behind ear before applying new products to face',
    duration: '24-48 hours to observe any reactions'
  },
  {
    warning: '⚠️ Never Mix Strong Actives',
    description: 'Avoid combining: Retinol + Vitamin C, Retinol + AHA/BHA, Vitamin C + Niacinamide (though some studies show it\'s fine)',
    safe: 'Space them in different routines (AM vs PM) or different days'
  },
  {
    warning: '☀️ Sunscreen is Essential',
    description: 'Many active ingredients (retinol, vitamin C, AHA/BHA) increase sun sensitivity',
    tip: 'Use SPF 30+ daily, reapply every 2 hours if outdoors'
  },
  {
    warning: '🏥 When to See a Dermatologist',
    description: 'Severe acne, persistent rashes, extreme sensitivity, unusual pigmentation changes',
    action: 'Book appointment instead of self-treating'
  },
  {
    warning: '⏱️ Adjustment Period',
    description: 'New products may cause initial "purging" - increased breakouts for 1-4 weeks',
    patience: 'Give products 4-6 weeks before deciding if they work'
  }
];

// Weather-based adjustments
const weatherAdjustments = {
  hot: {
    cleanser: 'Gel or foam cleanser (more frequent)',
    moisturizer: 'Lightweight gel moisturizer or hydrating serum',
    sunscreen: 'Water-resistant, oil-free SPF 50+',
    lips: 'Light lip balm with SPF',
    frequency: 'Cleanse 2x daily, light moisturizing',
    tip: '💧 Use hydrating serums instead of heavy creams'
  },
  cold: {
    cleanser: 'Gentle cream cleanser',
    moisturizer: 'Rich cream or oil-based moisturizer',
    sunscreen: 'SPF 30+ (winter sun reflects off snow)',
    lips: 'Thick lip balm, avoid matte lipsticks',
    frequency: 'Use more intensive moisturizing',
    tip: '🧴 Apply moisturizer to damp skin for better absorption'
  },
  humid: {
    cleanser: 'Gel cleanser with niacinamide',
    moisturizer: 'Lightweight, hydrating solution',
    treatment: 'BHA toner to control oil',
    issue: 'Excess oil production, potential breakouts',
    tip: '🌡️ Mattifying primer can help makeup last longer'
  },
  dry: {
    cleanser: 'No-lather, hydrating cleanser',
    moisturizer: 'Intensive cream + facial oil combo',
    treatment: 'Hyaluronic acid + glycerin serums',
    issue: 'Dehydration, irritation',
    tip: '💦 Use humidifier at night, drink more water'
  }
};

// Generate recommendations based on quiz answers
export function generateRecommendations(quizAnswers) {
  const recommendations = {
    profile: {
      skinType: quizAnswers.skinType,
      ageGroup: quizAnswers.ageGroup,
      concerns: []
    },
    ingredients: [],
    products: [],
    morningRoutine: morningRoutine,
    nightRoutine: nightRoutine,
    warnings: safetyWarnings,
    weatherTips: {},
    tips: []
  };

  // Acne treatment
  if (quizAnswers.hasAcne) {
    recommendations.profile.concerns.push('Acne');
    recommendations.ingredients.push({
      concern: 'Acne',
      items: ingredientDatabase.acne.primary,
      secondary: ingredientDatabase.acne.secondary,
      explanation: ingredientDatabase.acne.explanation
    });
    recommendations.tips.push({
      category: 'Acne Management',
      tips: [
        '✓ Start with Salicylic Acid (gentle) before Benzoyl Peroxide',
        '✓ Use acne products 2-3x per week initially, increase gradually',
        '✓ Never squeeze or pick - can cause scarring and spread bacteria',
        '✓ Change pillowcase every 2-3 days',
        '✓ Avoid touching face during the day'
      ]
    });
  }

  // Sensitivity
  if (quizAnswers.sensitivityLevel === 'high') {
    recommendations.profile.concerns.push('Sensitive Skin');
    recommendations.ingredients.push({
      concern: 'Sensitivity',
      items: ingredientDatabase.sensitivity.primary,
      secondary: ingredientDatabase.sensitivity.secondary,
      explanation: ingredientDatabase.sensitivity.explanation
    });
  }

  // Dryness
  if (quizAnswers.skinType === 'dry') {
    recommendations.profile.concerns.push('Dryness');
    recommendations.ingredients.push({
      concern: 'Dryness',
      items: ingredientDatabase.dryness.primary,
      secondary: ingredientDatabase.dryness.secondary,
      explanation: ingredientDatabase.dryness.explanation
    });
  }

  // Pigmentation
  if (quizAnswers.pigmentation !== 'none') {
    recommendations.profile.concerns.push('Dark Spots/Pigmentation');
    recommendations.ingredients.push({
      concern: 'Pigmentation',
      items: ingredientDatabase.pigmentation.primary,
      secondary: ingredientDatabase.pigmentation.secondary,
      explanation: ingredientDatabase.pigmentation.explanation
    });
  }

  // Oil control
  if (quizAnswers.skinType === 'oily') {
    recommendations.profile.concerns.push('Excess Oil');
    recommendations.ingredients.push({
      concern: 'Oil Control',
      items: ingredientDatabase.oilControl.primary,
      secondary: ingredientDatabase.oilControl.secondary,
      explanation: ingredientDatabase.oilControl.explanation
    });
  }

  // Anti-aging based on age group
  if (['35-45', '45-55', '55+'].includes(quizAnswers.ageGroup)) {
    recommendations.profile.concerns.push('Anti-Aging');
    recommendations.ingredients.push({
      concern: 'Anti-Aging',
      items: ingredientDatabase.antiAging.primary,
      secondary: ingredientDatabase.antiAging.secondary,
      explanation: ingredientDatabase.antiAging.explanation
    });
  }

  // Always add sun protection
  recommendations.ingredients.push({
    concern: 'Sun Protection',
    items: ingredientDatabase.sunProtection.primary,
    secondary: ingredientDatabase.sunProtection.secondary,
    explanation: ingredientDatabase.sunProtection.explanation
  });

  // Product recommendations
  recommendations.products = {
    cleanser: productCategories.cleanser[quizAnswers.skinType] || productCategories.cleanser.combination,
    moisturizer: productCategories.moisturizer[quizAnswers.skinType] || productCategories.moisturizer.combination,
    sunscreen: productCategories.sunscreen.all + (quizAnswers.skinType === 'sensitive' ? ' (Mineral formula)' : ''),
    treatment: quizAnswers.hasAcne ? productCategories.treatment.acne : productCategories.treatment.antiAging
  };

  // Weather tips
  if (quizAnswers.sunExposure === 'high') {
    recommendations.weatherTips = weatherAdjustments.hot;
    recommendations.tips.push({
      category: 'Sun Exposure',
      tips: [
        '✓ Reapply sunscreen every 2 hours',
        '✓ Seek shade during peak sun (11 AM - 3 PM)',
        '✓ Wear protective clothing and sunglasses',
        '✓ Use antioxidant serum (Vitamin C) before sunscreen'
      ]
    });
  }

  return recommendations;
}

export { ingredientDatabase, productCategories, morningRoutine, nightRoutine, safetyWarnings, weatherAdjustments };
