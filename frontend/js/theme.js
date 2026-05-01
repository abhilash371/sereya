// Dark Mode Theme Toggle
function initTheme() {
  // Get saved theme or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton();
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Save preference
  localStorage.setItem('theme', newTheme);
  
  // Apply theme
  document.documentElement.setAttribute('data-theme', newTheme);
  updateThemeButton();
  
  console.log(`Theme switched to ${newTheme} mode`);
}

function updateThemeButton() {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeBtn.textContent = currentTheme === 'light' ? '🌙 Dark' : '☀️ Light';
    themeBtn.title = currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme);
