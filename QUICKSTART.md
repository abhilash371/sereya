# 🚀 Sereya - Quick Start Guide

## ⚡ Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start MongoDB
Choose one option:

**Option A: Local MongoDB (if installed)**
```bash
mongod
# Leave this terminal running
```

**Option B: Skip MongoDB Setup**
- For now, you can test the frontend without MongoDB
- The API still works for recommendation generation
- Quiz history won't save, but recommendations will generate

### Step 3: Start Backend Server
```bash
npm start
```

You'll see:
```
✅ MongoDB connected
🌟 Sereya backend running on port 5000
```

### Step 4: Open Frontend

**Option A: Direct File**
- Open `frontend/index.html` in your browser

**Option B: Local Server (better for testing)**
```bash
cd frontend
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎯 Test It Out

1. **Click** "Start Your Skin Quiz" or go to `quiz.html`
2. **Answer** all the questions
3. **Click** "Get My Recommendations →"
4. **View** your personalized routine!

## 📋 Example Quiz Answers

### Test Acne Profile:
- Skin Type: Oily
- Age: 25-35
- Acne: Yes → Moderate severity
- Sensitivity: Medium
- Pigmentation: Mild
- Sun Exposure: Moderate

### Test Sensitivity Profile:
- Skin Type: Sensitive
- Age: 35-45
- Acne: No
- Sensitivity: High
- Pigmentation: None
- Sun Exposure: Low

## 🔧 What's Included

✅ **8+ page quiz** with comprehensive questions  
✅ **Ingredient database** with 20+ skincare actives  
✅ **Science-backed recommendations** tailored to each profile  
✅ **Morning & night routines** with step-by-step guidance  
✅ **Safety warnings** and ingredient interaction guides  
✅ **Weather-based adjustments** hot/cold/humid/dry  
✅ **Educational content** explaining why each ingredient works  
✅ **Beautiful responsive UI** for mobile/tablet/desktop  

## 🌟 Key Features

### Frontend Features
- Clean, modern UI with gradient design
- Responsive layout (works on all devices)
- Real-time form validation
- LocalStorage persistence
- Easy navigation between pages

### Backend Features
- Express API server on port 5000
- MongoDB integration for quiz history
- RESTful endpoints
- CORS-enabled
- Comprehensive recommendation engine

### Recommendation Engine
- Analyzes 7+ skin factors
- Generates personalized ingredient recommendations
- Creates customized morning/night routines
- Includes safety warnings
- Provides weather-based tips

## 📁 Project Structure

```
Sereya/
├── frontend/
│   ├── index.html              ← Start here!
│   ├── quiz.html               ← Type answers
│   ├── recommendations.html    ← See results
│   ├── css/style.css
│   └── js/
│
├── backend/
│   ├── server.js              ← API server
│   ├── recommendations/engine.js    ← Smart recommendations
│   ├── controllers/           ← Logic
│   ├── models/                ← Schemas
│   └── routes/                ← Endpoints
│
├── package.json
├── README.md                  ← Full documentation
└── .env                       ← Config
```

## 🎨 Customization Ideas

### Add More Ingredients
Edit `backend/recommendations/engine.js` → `ingredientDatabase`

### Change Routines
Edit `backend/recommendations/engine.js` → `morningRoutine` / `nightRoutine`

### Modify Styling
Edit `frontend/css/style.css` (color scheme: pink/beige/teal)

### Add More Questions
Edit `frontend/quiz.html` + update `backend/recommendations/engine.js` logic

## 🐛 Troubleshooting

**"Cannot GET / api/recommendations/generate"**
- Make sure backend is running on port 5000
- Run: `npm start`

**"CORS error"**
- This means backend isn't running
- Make sure to run `npm start` in a separate terminal

**"MongoDB connection error"**
- Install MongoDB or use MongoDB Atlas
- Update .env with correct connection string

**Recommendations not showing**
- Check browser DevTools console (F12)
- Make sure you submitted the quiz form
- Try refreshing the page

## 📊 API Endpoints

```
Health Check:
GET http://localhost:5000/api/health

Generate Recommendations:
POST http://localhost:5000/api/recommendations/generate
Body: { skinType, ageGroup, hasAcne, ... }

Submit Quiz:
POST http://localhost:5000/api/quiz/submit
Body: { full quiz data }

Get Ingredient Info:
GET http://localhost:5000/api/recommendations/ingredient?ingredient=retinol
```

## 🎓 Learn by Example

The **Recommendation Engine** demonstrates:
- Large data structures (ingredient database)
- Conditional logic (if X concern, recommend Y)
- Multiple output formats (routines, warnings, tips)
- API request/response handling
- LocalStorage in browser

## 🚀 Next Steps (Optional)

**After getting it working, you can:**
- [ ] Add user authentication
- [ ] Create progress tracker (upload photos)
- [ ] Add AI chatbot
- [ ] Integrate real product database
- [ ] Deploy to web
- [ ] Build mobile app

## 💡 Pro Tips

1. **For interviews:** Explain how the recommendation engine works - it's very impressive!
2. **Add your own ingredients:** The database is easily extensible
3. **Customize colors:** All colors defined in CSS :root variables
4. **Test different profiles:** Try each skin type to see different recommendations
5. **Print recommendations:** Users love having routines printed

## 📞 Quick Reference

| Command | What it does |
|---------|------------|
| `npm install` | Install all dependencies |
| `npm start` | Start backend server |
| `npm run dev` | Start with auto-reload |
| `mongod` | Start MongoDB (if installed) |

---

## 🎉 You're All Set!

Your Sereya skincare recommendation system is ready to go! 

**Questions?** Check README.md for detailed documentation.

**Need help?** Check the backend and frontend comments - they're well-documented.

**Happy skincare journey!** 🧴✨

---

**Created:** April 2026  
**Status:** Ready for testing and customization
