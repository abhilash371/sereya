# 🔐 Authentication Setup Guide

## Overview

Sereya now includes a complete user authentication system with login and signup functionality. Users must create an account and log in to access the quiz and recommendations.

## Features Implemented

✅ **User Registration** - Create new account with email and password
✅ **User Login** - Secure login with JWT tokens
✅ **JWT Authentication** - Secure token-based authentication
✅ **Password Hashing** - Passwords hashed with bcryptjs
✅ **Protected Routes** - Quiz and recommendations require authentication
✅ **Session Management** - Tokens stored in localStorage
✅ **Automatic Redirects** - Redirects to login if not authenticated

## Technology Stack

- **Backend Security:** bcryptjs (password hashing), jsonwebtoken (JWT)
- **Database:** MongoDB (User schema with password)
- **Middleware:** Express + CORS
- **Frontend:** LocalStorage for token persistence

## File Structure

### New Backend Files
```
backend/
├── controllers/authController.js    # Register/Login logic
├── middleware/authMiddleware.js     # Protected route middleware
└── routes/auth.js                   # Auth endpoints
```

### Updated Files
```
backend/
├── models/User.js                   # Added password field
├── server.js                        # Added auth routes
└── package.json                     # Added bcryptjs, jsonwebtoken

frontend/
├── auth.html                        # New login/signup page
├── index.html                       # Added logout button
├── quiz.html                        # Added authentication check
├── recommendations.html             # Added authentication check
├── js/auth.js                       # New authentication logic
├── js/api.js                        # Updated with auth token
├── js/quiz.js                       # Updated with JWT header
└── css/auth.css                     # New auth page styling
.env                                 # Added JWT_SECRET
```

## Setup Instructions

### 1. Install New Dependencies
```bash
npm install
```

This installs:
- `bcryptjs` - For secure password hashing
- `jsonwebtoken` - For JWT token generation

### 2. Start Backend Server
```bash
npm start
# Server runs on http://localhost:5000
```

### 3. Open Application
```
Open frontend/auth.html in your browser
(Or if you have a server, navigate to the auth page)
```

## How It Works

### Registration Flow
```
1. User fills signup form (name, email, password)
2. Frontend validates form
3. POST to /api/auth/register
4. Backend creates user with hashed password
5. Backend generates JWT token
6. Frontend stores token in localStorage
7. Redirect to home page
```

### Login Flow
```
1. User enters email and password
2. POST to /api/auth/login
3. Backend verifies email exists
4. Backend compares password with hash
5. Backend generates JWT token
6. Frontend stores token in localStorage
7. Redirect to home page
```

### Protected Route Flow
```
1. User tries to access /api/quiz or /api/recommendations
2. Frontend includes JWT token in Authorization header
3. Backend middleware verifies token
4. If valid → Allow access
5. If invalid → Return 401 Unauthorized
6. Frontend redirects to login page
```

## API Endpoints

### Authentication Endpoints

**Register New User**
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "passwordConfirm": "password123"
}

Response:
{
  "success": true,
  "message": "✅ Account created successfully!",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "123abc",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Login User**
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "message": "✅ Login successful!",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "123abc",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Get Current User (Protected)**
```
GET /api/auth/me
Authorization: Bearer <token>

Response:
{
  "success": true,
  "user": {
    "id": "123abc",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Logout**
```
POST /api/auth/logout

Response:
{
  "success": true,
  "message": "✅ Logged out successfully"
}
```

### Protected Endpoints

**Get Recommendations (Requires Auth)**
```
POST /api/recommendations/generate
Authorization: Bearer <token>
Content-Type: application/json

{
  "skinType": "oily",
  "ageGroup": "25-35",
  "hasAcne": true,
  ...
}
```

**Submit Quiz (Requires Auth)**
```
POST /api/quiz/submit
Authorization: Bearer <token>
Content-Type: application/json

{
  "skinType": "oily",
  "ageGroup": "25-35",
  ...
}
```

## Frontend Usage

### Check if User is Logged In
```javascript
const token = localStorage.getItem('authToken');
const user = localStorage.getItem('user');

if (!token) {
  // User not logged in - redirect to auth page
  window.location.href = 'auth.html';
}
```

### Make Authenticated API Call
```javascript
const token = localStorage.getItem('authToken');

const response = await fetch('http://localhost:5000/api/recommendations/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(quizData)
});
```

### Logout User
```javascript
function logout() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
  window.location.href = 'auth.html';
}
```

## Security Features

✅ **Password Hashing** - Passwords hashed with bcryptjs (10 salt rounds)
✅ **JWT Tokens** - Secure token-based authentication
✅ **Token Expiration** - Tokens expire after 30 days
✅ **Protected Routes** - Middleware validates tokens
✅ **Session Storage** - Tokens stored in localStorage (XSS vulnerable, but acceptable for this app)
✅ **Password Validation** - Minimum 6 characters required

## Future Security Enhancements

⭕ **HTTPS** - Use HTTPS in production (not HTTP)
⭕ **Refresh Tokens** - Implement refresh token rotation
⭕ **Secure HttpOnly Cookies** - Store tokens in httpOnly cookies
⭕ **CSRF Protection** - Add CSRF tokens for state-changing operations
⭕ **Rate Limiting** - Limit login attempts
⭕ **Email Verification** - Verify email on registration
⭕ **Password Reset** - Implement forgot password flow
⭕ **Two-Factor Auth** - Add 2FA for enhanced security

## Testing the System

### Test Account
```
Email: test@example.com
Password: test123456
Name: Test User
```

### Test Scenarios

**1. Signup**
1. Open `frontend/auth.html`
2. Click "Sign Up Here"
3. Enter: Name, Email, Password
4. Submit
5. Should redirect to home page

**2. Login**
1. Open `frontend/auth.html`
2. Enter registered email and password
3. Submit
4. Should redirect to home page

**3. Access Quiz (No Login)**
1. Clear localStorage or use private window
2. Try to open `quiz.html`
3. Should redirect to `auth.html`

**4. Protected API Call**
```bash
# Without token - should fail
curl http://localhost:5000/api/quiz/submit

# With token - should work
curl -H "Authorization: Bearer <your_token>" \
  http://localhost:5000/api/quiz/submit
```

## Troubleshooting

### "Cannot POST /api/auth/register"
- Backend not running
- Fix: Run `npm start`

### "Token expired or invalid"
- Token deleted or corrupted
- Fix: Clear localStorage and login again
- Or token time exceeded (30 days)

### "Email already registered"
- Email already has account
- Fix: Use different email or login with existing account

### CORS Error
- Backend CORS not configured
- Fix: Check server.js has `app.use(cors())`

### Password requirements not met
- Password must be at least 6 characters
- Fix: Use longer password

## Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  email: String (unique, required),
  name: String (required),
  password: String (hashed, required),
  quizResponses: [{
    date: Date,
    answers: Object
  }],
  currentProfile: Object,
  createdAt: Date,
  updatedAt: Date
}
```

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/sereya
PORT=5000
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

### Change JWT_SECRET in Production!
```env
# ❌ DO NOT USE DEFAULT IN PRODUCTION
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345678

# ✅ USE SECURE VALUE
JWT_SECRET=aK9#mZ$xL@2pQ!wR%vN&bC*dF(uE)jH+sG-tY=oI<aS>dF{gH}jK|lM?nO~pQ
```

## Production Checklist

Before deploying to production:

- [ ] Change JWT_SECRET to secure random string
- [ ] Use HTTPSonly (not HTTP)
- [ ] Set NODE_ENV=production
- [ ] Use environment variables for sensitive data
- [ ] Enable rate limiting
- [ ] Add email verification
- [ ] Implement password reset
- [ ] Add security headers
- [ ] Enable CORS properly for your domain
- [ ] Use secure database connection string

## Common Issues

**Issue:** Users can bypass login by modifying localStorage
**Solution:** This is expected for frontend-only app. Backend validates token on every request.

**Issue:** Token visible in localStorage
**Solution:** Tokens should contain no sensitive data. Password is never stored in token.

**Issue:** Same user can login multiple times
**Solution:** This is acceptable. Tokens are independent per login session.

## Next Steps

1. ✅ Test registration and login
2. ✅ Verify quiz requires authentication
3. ✅ Test logout functionality
4. ⭕ Add email verification
5. ⭕ Implement password reset
6. ⭕ Add profile management
7. ⭕ Deploy to production

---

**Status:** ✅ Authentication system fully implemented and ready for testing

**Last Updated:** April 2026
