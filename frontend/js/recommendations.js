// Load and display recommendations
document.addEventListener('DOMContentLoaded', function() {
  const recommendations = localStorage.getItem('recommendations');
  const quizData = localStorage.getItem('quizData');

  if (!recommendations || !quizData) {
    // No recommendations yet
    document.getElementById('noRecommendations').style.display = 'block';
    document.getElementById('recommendationsContent').style.display = 'none';
    return;
  }

  // Parse data
  const recData = JSON.parse(recommendations);
  const quiz = JSON.parse(quizData);

  // Display recommendations
  displayRecommendations(recData, quiz);
});

function displayRecommendations(recommendations, quizData) {
  document.getElementById('noRecommendations').style.display = 'none';
  document.getElementById('recommendationsContent').style.display = 'block';

  // Profile Summary
  document.getElementById('profileSkinType').textContent = quizData.skinType.charAt(0).toUpperCase() + quizData.skinType.slice(1);
  document.getElementById('profileAgeGroup').textContent = quizData.ageGroup;
  document.getElementById('profileConcerns').textContent = 
    recommendations.profile.concerns.length > 0 ? recommendations.profile.concerns.join(', ') : 'General skincare';

  // Ingredients
  displayIngredients(recommendations.ingredients);

  // Products
  displayProducts(recommendations.products);

  // Routines
  displayRoutine('morningRoutineContainer', recommendations.morningRoutine);
  displayRoutine('nightRoutineContainer', recommendations.nightRoutine);

  // Warnings
  displayWarnings(recommendations.warnings);

  // Tips
  displayTips(recommendations.tips);
}

function displayIngredients(ingredients) {
  const container = document.getElementById('ingredientsContainer');
  container.innerHTML = '';

  ingredients.forEach(ing => {
    const html = `
      <div class="ingredient-item">
        <h3>✨ ${ing.concern}</h3>
        <p><strong>Why?</strong> ${ing.explanation}</p>
        
        <div style="margin-top: 1rem;">
          <strong>Primary Ingredients:</strong>
          <div class="ingredients-list">
            ${ing.items.map(item => `<span class="ingredient-tag">${item}</span>`).join('')}
          </div>
        </div>

        ${ing.secondary ? `
          <div style="margin-top: 0.5rem;">
            <strong>Secondary Options:</strong>
            <div class="ingredients-list">
              ${ing.secondary.map(item => `<span class="ingredient-tag" style="background-color: #ddd; color: #333;">${item}</span>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
    container.innerHTML += html;
  });
}

function displayProducts(products) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';

  const productCats = [
    { key: 'cleanser', title: '🧼 Cleanser' },
    { key: 'moisturizer', title: '💧 Moisturizer' },
    { key: 'sunscreen', title: '☀️ Sunscreen' },
    { key: 'treatment', title: '🧬 Treatment/Serum' }
  ];

  productCats.forEach(cat => {
    if (products[cat.key]) {
      const html = `
        <div class="product-item">
          <h3>${cat.title}</h3>
          <p>${products[cat.key]}</p>
        </div>
      `;
      container.innerHTML += html;
    }
  });
}

function displayRoutine(containerId, routine) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  routine.forEach(step => {
    const html = `
      <div class="routine-item">
        <h4>Step ${step.step}: ${step.product}</h4>
        <p><strong>Type:</strong> ${step.type}</p>
        <p><strong>Timing:</strong> ${step.timing}</p>
        <p><strong>Tip:</strong> ${step.tip}</p>
      </div>
    `;
    container.innerHTML += html;
  });
}

function displayWarnings(warnings) {
  const container = document.getElementById('warningsContainer');
  container.innerHTML = '';

  warnings.forEach(warn => {
    const html = `
      <div class="warning-item">
        <h4>${warn.warning}</h4>
        <p><strong>Description:</strong> ${warn.description}</p>
        <p><strong>Action:</strong> ${warn.duration || warn.safe || warn.tip || warn.patience}</p>
      </div>
    `;
    container.innerHTML += html;
  });
}

function displayTips(tips) {
  const container = document.getElementById('tipsContainer');
  container.innerHTML = '';

  if (!tips || tips.length === 0) {
    container.innerHTML = '<p>No additional tips for your profile.</p>';
    return;
  }

  tips.forEach(tipGroup => {
    const html = `
      <div class="tip-category">
        <h4>${tipGroup.category}</h4>
        <ul class="tip-list">
          ${tipGroup.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    `;
    container.innerHTML += html;
  });
}

function resetRecommendations() {
  localStorage.removeItem('recommendations');
  localStorage.removeItem('quizData');
  window.location.href = 'quiz.html';
}
