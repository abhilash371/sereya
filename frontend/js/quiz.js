// Quiz Form Handler
function toggleAcneSeverity() {
  const HasAcne = document.querySelector('input[name="hasAcne"]:checked').value === 'true';
  const acneSeverityGroup = document.getElementById('acneSeverityGroup');
  if (HasAcne) {
    acneSeverityGroup.style.display = 'block';
  } else {
    acneSeverityGroup.style.display = 'none';
  }
}

// Handle quiz form submission
document.getElementById('quizForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  console.log('🔍 Quiz submission started');
  console.log('API_BASE_URL:', API_BASE_URL);

  // Show loading state
  document.getElementById('loadingMessage').style.display = 'block';
  document.querySelector('.submit-button').disabled = true;

  try {
    // Collect form data
    const formData = new FormData(this);
    
    // Convert form data to object
    const quizData = {
      skinType: formData.get('skinType'),
      hasAcne: formData.get('hasAcne') === 'true',
      acneSeverity: formData.get('acneSeverity') || 'none',
      sensitivityLevel: formData.get('sensitivityLevel'),
      pigmentation: formData.get('pigmentation'),
      sunExposure: formData.get('sunExposure'),
      ageGroup: formData.get('ageGroup'),
      currentConcerns: formData.getAll('currentConcerns'),
      allergies: formData.get('allergies') ? formData.get('allergies').split(',').map(a => a.trim()) : []
    };

    // Save to local storage
    localStorage.setItem('quizData', JSON.stringify(quizData));

    // Get auth token
    const token = localStorage.getItem('authToken');
    
    console.log('📊 Quiz Data:', quizData);
    console.log('🔐 Auth Token:', token ? 'Present' : 'Missing');
    
    // Get recommendations with auth token
    const response = await fetch(`${API_BASE_URL}/recommendations/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(quizData)
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Session expired
        console.error('🔐 Auth failed - token expired or invalid');
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        alert('Your session has expired. Please login again.');
        window.location.href = 'auth.html';
        return;
      }
      const errorText = await response.text();
      console.error('❌ API Response Error:', errorText);
      try {
        const errorData = JSON.parse(errorText);
        throw new Error(`API error (${response.status}): ${errorData.error || errorText}`);
      } catch {
        throw new Error(`API error (${response.status}): ${errorText}`);
      }
    }

    const data = await response.json();
    
    // Save recommendations to local storage
    localStorage.setItem('recommendations', JSON.stringify(data.recommendations));

    // Redirect to recommendations page
    window.location.href = 'recommendations.html';

  } catch (error) {
    console.error('Quiz submission error:', error);
    alert(`Error: ${error.message}`);
  } finally {
    document.getElementById('loadingMessage').style.display = 'none';
    document.querySelector('.submit-button').disabled = false;
  }
});
