const API_BASE_URL = 'http://localhost:5000/api';

// Toggle between login and signup forms
function toggleForms() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
    clearErrors();
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
    clearErrors();
  }
}

// Clear error messages
function clearErrors() {
  document.getElementById('loginError').textContent = '';
  document.getElementById('loginError').classList.remove('show');
  document.getElementById('signupError').textContent = '';
  document.getElementById('signupError').classList.remove('show');
}

// Handle Login
document.getElementById('loginFormElement').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('loginError');
  const loadingDiv = document.getElementById('loginLoading');

  // Clear previous errors
  errorDiv.textContent = '';
  errorDiv.classList.remove('show');
  loadingDiv.style.display = 'none';

  // Validation
  if (!email || !password) {
    errorDiv.textContent = '❌ Please fill in all fields';
    errorDiv.classList.add('show');
    return;
  }

  try {
    loadingDiv.style.display = 'block';

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    // Save token and user info
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // Success message
    loadingDiv.style.display = 'none';
    loadingDiv.textContent = '✅ Login successful! Redirecting...';
    loadingDiv.classList.add('show');

    // Redirect to home page after 1.5 seconds
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);

  } catch (error) {
    console.error('Login error:', error);
    loadingDiv.style.display = 'none';
    errorDiv.textContent = error.message;
    errorDiv.classList.add('show');
  }
});

// Handle Signup
document.getElementById('signupFormElement').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const passwordConfirm = document.getElementById('signupConfirm').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;
  const errorDiv = document.getElementById('signupError');
  const loadingDiv = document.getElementById('signupLoading');

  // Clear previous errors
  errorDiv.textContent = '';
  errorDiv.classList.remove('show');
  loadingDiv.style.display = 'none';

  // Validation
  if (!name || !email || !password || !passwordConfirm) {
    errorDiv.textContent = '❌ Please fill in all fields';
    errorDiv.classList.add('show');
    return;
  }

  if (password.length < 6) {
    errorDiv.textContent = '❌ Password must be at least 6 characters';
    errorDiv.classList.add('show');
    return;
  }

  if (password !== passwordConfirm) {
    errorDiv.textContent = '❌ Passwords do not match';
    errorDiv.classList.add('show');
    return;
  }

  if (!agreeTerms) {
    errorDiv.textContent = '❌ Please agree to the Terms and Privacy Policy';
    errorDiv.classList.add('show');
    return;
  }

  try {
    loadingDiv.style.display = 'block';

    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, passwordConfirm })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }

    // Save token and user info
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // Success message
    loadingDiv.style.display = 'none';
    loadingDiv.textContent = '✅ Account created! Redirecting...';
    loadingDiv.classList.add('show');

    // Redirect to home page after 1.5 seconds
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);

  } catch (error) {
    console.error('Signup error:', error);
    loadingDiv.style.display = 'none';
    errorDiv.textContent = error.message;
    errorDiv.classList.add('show');
  }
});

// Check if user is already logged in
window.addEventListener('load', function() {
  const token = localStorage.getItem('authToken');
  if (token) {
    // User already logged in, redirect to home
    window.location.href = 'index.html';
  }
});
