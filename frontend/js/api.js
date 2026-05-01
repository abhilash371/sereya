// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Get auth token from localStorage
function getAuthToken() {
  return localStorage.getItem('authToken');
}

// Get headers with auth token
function getHeaders() {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
}

// Check if user is logged in
function isLoggedIn() {
  return !!localStorage.getItem('authToken');
}

// Get current user
function getCurrentUser() {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

// Logout user
function logoutUser() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  localStorage.removeItem('quizData');
  localStorage.removeItem('recommendations');
  window.location.href = 'auth.html';
}

// API Helper Functions
async function submitQuizToAPI(quizData) {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz/submit`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(quizData)
    });

    if (!response.ok) {
      if (response.status === 401) {
        logoutUser();
        throw new Error('Session expired. Please login again.');
      }
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

async function getRecommendationsFromAPI(quizData) {
  try {
    const response = await fetch(`${API_BASE_URL}/recommendations/generate`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(quizData)
    });

    if (!response.ok) {
      if (response.status === 401) {
        logoutUser();
        throw new Error('Session expired. Please login again.');
      }
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

async function getIngredientInfo(ingredientName) {
  try {
    const response = await fetch(`${API_BASE_URL}/recommendations/ingredient?ingredient=${ingredientName}`, {
      method: 'GET',
      headers: getHeaders()
    });

    if (!response.ok) {
      if (response.status === 401) {
        logoutUser();
        throw new Error('Session expired. Please login again.');
      }
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching ingredient info:', error);
    throw error;
  }
}

// Local Storage Functions
function saveQuizResults(data) {
  localStorage.setItem('quizResults', JSON.stringify(data));
}

function getQuizResults() {
  const data = localStorage.getItem('quizResults');
  return data ? JSON.parse(data) : null;
}

function clearQuizResults() {
  localStorage.removeItem('quizResults');
}

// UI Helper Functions
function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = 'block';
  }
}

function hideLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = 'none';
  }
}

export { 
  API_BASE_URL, 
  submitQuizToAPI, 
  getRecommendationsFromAPI, 
  getIngredientInfo,
  saveQuizResults,
  getQuizResults,
  clearQuizResults,
  showLoading,
  hideLoading,
  isLoggedIn,
  getCurrentUser,
  logoutUser,
  getAuthToken
};
