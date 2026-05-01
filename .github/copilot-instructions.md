# Sereya Project Instructions

This document contains development guidelines and setup instructions for the Sereya skincare recommendation system.

## Project Overview

**Sereya** is an intelligent, science-backed skincare recommendation application built with:
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js + Express
- **Database:** MongoDB

## Key Features Implemented

✅ **Comprehensive Skin Quiz** - 8+ detailed questions covering skin type, concerns, sensitivity, age, sun exposure
✅ **Ingredient-Based Recommendations** - Science-backed ingredients with explanations  
✅ **Morning & Night Routines** - Separate routines with timing and tips
✅ **Product Categories** - Generic product types instead of specific brands
✅ **Safety Warnings** - Patch testing, active mixing, dermatologist guidelines
✅ **Educational Content** - Why each ingredient matters for your skin
✅ **Weather-Based Adjustments** - Recommendations adapt to climate
✅ **Responsive Design** - Works on mobile, tablet, desktop

## Project Structure

```
Sereya/
├── frontend/
│   ├── index.html          # Home page
│   ├── quiz.html           # Skin quiz form
│   ├── recommendations.html # Results display
│   ├── css/style.css       # Styling
│   └── js/
│       ├── api.js          # API helpers
│       ├── quiz.js         # Quiz logic
│       └── recommendations.js
├── backend/
│   ├── server.js           # Express entry point
│   ├── models/User.js     # MongoDB User schema
│   ├── models/Quiz.js     # Quiz history schema
│   ├── controllers/quizController.js
│   ├── controllers/recommendationController.js
│   ├── routes/quiz.js      # Quiz endpoints
│   ├── routes/recommendations.js
│   └── recommendations/engine.js # Recommendation algorithm
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

This installs:
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables
- `cors` - Cross-origin requests
- `nodemon` - Auto-reload (dev)

### 2. MongoDB Setup

**Option A: Local MongoDB**
```bash
# Start MongoDB server
mongod
```
Your `.env` already has: `MONGODB_URI=mongodb://localhost:27017/sereya`

**Option B: MongoDB Atlas (Cloud)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster and get connection string
3. Update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sereya
```

### 3. Start Backend
```bash
npm start      # Production mode
npm run dev    # Development with auto-reload (requires nodemon)
```

Backend runs on `http://localhost:5000`

### 4. Open Frontend
Open `frontend/index.html` in your browser
- Click "Start Your Skin Quiz"
- Answer all questions
- View personalized recommendations

## API Endpoints

### Quiz Endpoints
- `POST /api/quiz/submit` - Submit completed quiz
- `GET /api/quiz/history` - Get quiz history

### Recommendation Endpoints
- `POST /api/recommendations/generate` - Get recommendations
- `GET /api/recommendations/ingredient` - Query ingredient info

### Health Check
- `GET /api/health` - Server status

## How the Quiz System Works

1. **User submits form** from `quiz.html`
2. **JavaScript collects answers** and does basic validation
3. **API call** sends to `/api/recommendations/generate`
4. **Backend engine** analyzes profile and generates recommendations
5. **Results saved** to LocalStorage
6. **Redirect** to recommendations.html for display

## Recommendation Algorithm

The `recommendations/engine.js` file contains the core logic:

1. **Ingredient Database** - Maps concerns to ingredients with explanations
2. **Profile Analysis** - Identifies user's main concerns
3. **Routine Generation** - Creates morning/night routines
4. **Safety Warnings** - Includes relevant precautions
5. **Tips** - Provides personalized advice

### Example Recommendation Flow
```
User has: Oily skin + Acne
  ↓
Engine matches to: Acne concern
  ↓
Recommends: Salicylic Acid (BHA)
  ↓
Adds routine: 2-3x per week in night routine
  ↓
Adds warning: "Avoid mixing with Vitamin C"
  ↓
Returns: Complete personalized routine
```

## Development Workflow

### Adding a New Ingredient

1. **Open** `backend/recommendations/engine.js`
2. **Find** `ingredientDatabase` object
3. **Add** new entry:
```javascript
yourConcern: {
  primary: ['Ingredient1', 'Ingredient2'],
  secondary: ['Ingredient3'],
  explanation: 'How it works...'
}
```

### Customizing Routines

1. **Open** `backend/recommendations/engine.js`
2. **Edit** `morningRoutine` or `nightRoutine` arrays
3. **Update** step order, products, or timing

### Styling Changes

1. **Open** `frontend/css/style.css`
2. **Find** relevant class (see comments for sections)
3. **Modify** colors, spacing, fonts, etc.

### Adding Quiz Question

1. **Open** `frontend/quiz.html`
2. **Add** new form group before submit button:
```html
<div class="form-group">
  <label for="yourField"><strong>Your Question?</strong></label>
  <select id="yourField" name="yourField" required>
    <option value="">-- Select --</option>
    <option value="val1">Option 1</option>
  </select>
</div>
```
3. **Update** `frontend/js/quiz.js` to handle new field on submit
4. **Update** backend recommendation logic

## Troubleshooting

### "Cannot GET /api/quiz/submit"
- Backend not running (check port 5000)
- Route not defined
- Fix: Run `npm start` and verify routes/quiz.js exists

### Frontend can't reach backend
- CORS error? Check server.js has `cors()` enabled
- Wrong URL? Ensure `API_BASE_URL` in api.js matches backend port
- Solution: Both need to run, check `http://localhost:5000/api/health`

### MongoDB connection error
- Check MongoDB is running
- Verify connection string in .env
- Check credentials if using Atlas

### No recommendations displaying
- Check browser's DevTools Console for errors
- Verify `localStorage.getItem('recommendations')` has data
- Check API response in Network tab

## Performance Tips

1. **Lazy load** ingredients info (fetch on click, not on page load)
2. **Cache recommendations** in LocalStorage to reduce API calls
3. **Minify CSS/JS** for production
4. **Index MongoDB** fields frequently searched
5. **Use CDN** for static assets if scale grows

## Future Enhancements

- [ ] User authentication and profiles
- [ ] Photo progress tracker
- [ ] AI chatbot for Q&A
- [ ] Real product database with brand links
- [ ] Weather API integration
- [ ] Push notifications for routine reminders
- [ ] Community ingredient reviews
- [ ] Mobile app (React Native)

## Code Standards

- Use const/let (never var)
- Use async/await for promises
- Comment complex logic
- Keep functions focused and small
- Use meaningful variable names
- Follow existing code style

## Deployment

### Frontend (Static)
- Upload `frontend/` folder to Netlify, Vercel, or GitHub Pages

### Backend
- Deploy to Heroku, AWS, or DigitalOcean
- Update `API_BASE_URL` in frontend for production endpoint
- Use environment variables for sensitive data

## Support Resources

- **Express Docs:** https://expressjs.com/
- **MongoDB Docs:** https://docs.mongodb.com/
- **MDN Web Docs:** https://developer.mozilla.org/
- **Dermatology Reference:** https://www.aad.org/ (American Academy of Dermatology)

## Notes

- Project uses ES6 modules (`.js` files have `import/export`)
- No build tools required (vanilla frontend, can add bundler later)
- Currently uses simple LocalStorage (add database for user profiles later)
- API responses include status messages for debugging

---

**Last Updated:** April 2026  
**Status:** Core features complete, ready for testing and enhancement
